import axios from "axios";
import { createStore } from "vuex";
const jwt = require("jsonwebtoken");
const store = createStore({
  state: {
    isLoggedIn: false,
    user: null,
    locations: [],
    token: null,
    barsByName: [],
    modify: false,
    bar: null,
    show: null,
  },
  mutations: {
    setLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    setLocations(state, payload) {
      state.locations = payload;
    },
    setUser(state, { userId }) {
      state.user = { userId };
    },
    setModify(state, payload) {
      state.modify = payload;
    },
    setBar(state, payload) {
      state.bar = payload;
    },
    setShow(state, payload) {
      state.show = payload;
    },
    setBarsByName(state, payload) {
      state.barsByName = payload;
    },
  },
  actions: {
    getBarByName(context, name) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `https://watchmeapi-test.azurewebsites.net/Bars/names?name=${name}`
          )
          .then((response) => {
            resolve(response);
            console.log(response.data);
            context.commit("setBarsByName", response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteBar(context, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`https://watchmeapi-test.azurewebsites.net/Bars/${id}`)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteShow(context, id) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`https://watchmeapi-test.azurewebsites.net/Shows/${id}`)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getBar(context, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`https://watchmeapi-test.azurewebsites.net/Bars/${id}`)
          .then((response) => {
            resolve(response);
            context.commit("setBar", response.data);
            localStorage.setItem("Bar", JSON.stringify(response.data));
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    ModifyBar(context, payload) {
      const { patchOperations, barId } = payload;
      console.log(patchOperations);
      try {
        return new Promise((resolve, reject) => {
          axios
            .patch(
              `https://watchmeapi-test.azurewebsites.net/BarPatch/${barId}`,
              patchOperations,
              {
                headers: {
                  "Content-Type": "application/json-patch+json",
                },
              }
            )
            .then((response) => {
              resolve(response);
              context.commit("setBar", response.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    UpdateShow(context, payload) {
      const { formData, id } = payload;
      try {
        return new Promise((resolve, reject) => {
          axios
            .put(
              `https://watchmeapi-test.azurewebsites.net/Shows/${id}`,
              formData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }
            )
            .then((response) => {
              resolve(response);
              context.commit("setShow", response.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    UpdateActualCap(context, payload) {
      const { patchOperation, showId } = payload;
      try {
        return new Promise((resolve, reject) => {
          axios
            .patch(
              `https://watchmeapi-test.azurewebsites.net/Shows/${showId}`,
              patchOperation,
              {
                headers: {
                  "Content-Type": "application/json-patch+json",
                },
                body: JSON.stringify(patchOperation),
              }
            )
            .then((response) => {
              resolve(response);
              context.commit("setShow", response.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    UpdateImage(context, payload) {
      const { formData, barId } = payload;
      try {
        return new Promise((resolve, reject) => {
          axios
            .put(
              `https://watchmeapi-test.azurewebsites.net/Image?id=${barId}`,
              formData
            )
            .then((response) => {
              resolve(response);
              context.commit("setBar", response.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    CreateShow(context, formData) {
      try {
        return new Promise((resolve, reject) => {
          axios
            .post(`https://watchmeapi-test.azurewebsites.net/Shows`, formData, {
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            })
            .then((response) => {
              resolve(response);
              context.commit("setShow", response.data);
            })
            .catch((error) => {
              reject(error);
            });
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    modifyBar(context, id) {
      return new Promise((resolve, reject) => {
        axios
          .put(`https://watchmeapi-test.azurewebsites.net/Bars/${id}`)
          .then((response) => {
            resolve(response);
            context.commit("setModify", true);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `https://watchmeapi-test.azurewebsites.net/Users/auth/login?name=${credentials.Username}&password=${credentials.Password}`
          )
          .then((response) => {
            const token = response.data;
            const decoded = jwt.decode(response.data.token);
            const authDecision =
              decoded[
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/authorizationdecision"
              ];
            const userId = decoded["nameid"];
            sessionStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("userId", userId);
            context.commit("setLoggedIn", true);
            context.commit("setToken", token);
            context.commit("setAuthDecision", authDecision);
            context.commit("setUser", { userId: userId });
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    getUserId: (state) => {
      return state.user != null ? state.user.userId : null;
    },
    isAdmin(state) {
      return state.authDecision;
    },
    getToken(state) {
      return state.token;
    },
    getLocations(state) {
      return state.locations;
    },
    getBar(state) {
      return state.bar;
    },
    getShow(state) {
      return state.show;
    },
    getBarsByName(state) {
      return state.barsByName;
    },
  },
});

export default store;
