import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  getters: {
    doneTodos: (state) => {
      return state.todos;
    },
  },
  actions: {
    add() {
      return 1 + 1;
    },
  },
});

export { store };
