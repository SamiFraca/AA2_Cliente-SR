import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    isLoggedIn: false,
    user: null,
    token: null,
  },
  mutations: {
    setLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://localhost:8080/Users", credentials)
          .then((response) => {
            console.log(response.data)
            const token = response.data.token;
            const user = response.data.username;
            console.log(response.data.token)
            console.log(user)
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            context.commit("setToken", token);
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
      console.log(state.isLoggedIn)
      return state.isLoggedIn;
    },
    currentUser: (state) => {
      console.log(state.user)
      return state.user;
    },
    currentToken: (state) => {
      console.log(state.token)
      return state.token;
    },
  },
});

export default store;
