//Imports:
import { createStore } from "vuex";

/**Bruker vuex for å lagre input fra brukeren og backend. Blant annet tokenen
 * som blir laget når brukeren logger på
*/
export default createStore({
  state: {
    isFormSent: false,
    isLoggedIn: false,
    username: "",
    token: "",
    rolename: "",
    building: [
      'Realfagsbygget ',
    ],
    classroom: [
      'A4-112 ',
    ],
    table: [
      '1',
      '2',
      '3',
      '4',
      '5',
    ],
    type: "",
    oving: "",
    studentQueue: [],
    subjects: [],

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
    SET_TYPE(state, type) {
      state.type = type;
    },
    SET_OVING(state, oving) {
      state.oving = oving;
    },
    SET_STUDENTQUEUE(state, studentQueue) {
      state.studentQueue = studentQueue;
    },
    ADD_STUDENT(state, student) {
      state.studentQueue.push(student);
    },
    ADD_STUDENT_QUEUE(state, students) {
      state.studentQueue.push(students);
    },
    ADD_SUBJECT(state, subject) {
      state.subjects.push(subject);
    },
    ADD_SUBJECTS(state, subjects) {
      state.studentQueue.push(subjects);
    },
    SET_SUBJECT(state, subject) {
      state.subjects = subject;
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
    GET_ROLENAME(state) {
      return state.rolename;
    },
    GET_TYPE(state) {
      return state.rolename;
    },
    GET_OVING(state) {
      return state.rolename;
    },
    GET_STUDENTQUEUE(state) {
      return state.studentQueue;
    },
    GET_SUBJECTS(state) {
      return state.subjects;
    },
  },
  actions: {},
  modules: {},
});
