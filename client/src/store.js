import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    todoLists: [
      {
        id: 1,
        name: 'example todo list',
        todos: [1, 2],
      },
      {
        id: 2,
        name: 'my second list',
        todos: [3, 4],
      },
    ],
    todos: {
      1: {
        id: 1,
        title: 'my first todo item',
        completed: false,
        editing: false,
      },
      2: {
        id: 2,
        title: 'my second todo item',
        completed: false,
        editing: false,
      },
      3: {
        id: 3,
        title: 'my third todo item',
        completed: false,
        editing: false,
      },
      4: {
        id: 4,
        title: 'my fourth todo item',
        completed: false,
        editing: false,
      },
    },
  },
  mutations: {},
  actions: {},
});
