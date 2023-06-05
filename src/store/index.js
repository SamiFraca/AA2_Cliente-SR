import axios from "axios";
import { createStore } from "vuex";
const jwt = require("jsonwebtoken");
const store = createStore({
  state: {
    isLoggedIn: false,
    user: null,
    locations: [],
    token: null,
    modify: false,
    bar: null,
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
  },
  actions: {
    locations() {},
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
  },
});

export default store;
