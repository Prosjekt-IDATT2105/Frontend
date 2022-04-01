import { createStore } from "vuex";

export default createStore({
  state: {
    isFormSent: false,
    isLoggedIn: false,
    username: "",
    token: "",
    rolename: "",
    building: [
      'Realfagsbygget',
    ],
    classroom: [
      'A4-112',
    ],
    table: [
      '1',
      '2',
      '3',
      '4',
      '5',
    ],

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
    SET_ROLENAME(state, rolename) {
      state.rolename = rolename;
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
    GET_USERID(state) {
      return state.user_id;
    },
    GET_ROLENAME(state) {
      return state.rolename;
    }
  },
  actions: {},
  modules: {},
});
