import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    todoLists: {
      1: {
        id: 1,
        name: 'example todo list',
        todos: [1, 2],
      },
      2: {
        id: 2,
        name: 'my second list',
        todos: [3, 4],
      },
    },
    todos: {
      1: {
        id: 1,
        title: 'my first todo item',
        completed: false,
      },
      2: {
        id: 2,
        title: 'my second todo item',
        completed: false,
      },
      3: {
        id: 3,
        title: 'my third todo item',
        completed: false,
      },
      4: {
        id: 4,
        title: 'my fourth todo item',
        completed: false,
      },
    },
  },
  mutations: {
    createTodoList(state, { name }) {
      // TODO: Use ID generated by server
      const nextId =
        Object.values(state.todoLists).reduce((prev, cur) => (prev.id > cur.id ? prev : cur)).id +
        1;
      Vue.set(state.todoLists, nextId, {
        id: nextId,
        name,
        todos: [],
      });
    },
    deleteTodoList(state, { id }) {
      Vue.delete(state.todoLists, id);
    },
    createTodo(state, { todoListId, title }) {
      const todoList = state.todoLists[todoListId];
      const nextId =
        Object.values(state.todos).reduce((prev, cur) => (prev.id > cur.id ? prev : cur)).id + 1;
      state.todos[nextId] = {
        id: nextId,
        title,
        completed: false,
      };
      todoList.todos.push(nextId);
    },
    updateTodo(state, { id, title, completed }) {
      state.todos[id] = {
        id,
        title,
        completed,
      };
    },
    deleteTodo(state, { todoListId, id }) {
      state.todoLists[todoListId].todos =
        state.todoLists[todoListId].todos.filter(todoId => todoId !== id);
    },
  },
  actions: {},
});
