import { createStore } from "vuex";

export default createStore({
  state: {
    isFormSent: false,
    isLoggedIn: false,
    username: "",
    token: "",
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username;
      localStorage.username = username;
    },
    SET_IsFormSent(state, bool) {
      state.isFormSent = bool;
    },
    SET_IsLoggedIn(state, bool) {
      state.isFormSent = bool;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      state.isLoggedIn = true;
    },
    LOG_OUT(state) {
      state.username = "";
      state.token = "";
      state.isLoggedIn = false;
      state.calculationLog = [];
    },
  },
  getters: {
    GET_TOKEN(state) {
      return state.token;
    },
    GET_USERNAME(state) {
      return state.username;
    },
    GET_IsFormSent(state) {
      return state.isFormSent;
    },
    GET_IsLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  actions: {},
  modules: {},
});
