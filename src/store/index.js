import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    isLoggedIn: false,
    user: null,
    locations: [],
  },
  mutations: {
    setLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLocations(state, payload) {
      state.locations = payload;
    },
  },
  actions: {
    locations(){

    },
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://watchmeapi-test.azurewebsites.net/Users", credentials)
          .then((response) => {
            console.log(response.data);
            const user = response.data.username;
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            context.commit("setUser", user);
            context.commit("setLoggedIn", true);
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
      console.log(state.isLoggedIn);
      return state.isLoggedIn;
    },
    currentUser: (state) => {
      console.log(state.user);
      return state.user;
    },
    getLocations(state) {
      return state.locations;
    },
  },
});

export default store;
