import Vue from 'vue';
import Vuex from 'vuex';

import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    todoLists: {},
    todos: {},
  },
  getters: {
    allTodos: state => todoListId =>
      state.todoLists[todoListId].todos.map(todoId => state.todos[todoId]),
    activeTodos: (state, getters) => todoListId =>
      getters.allTodos(todoListId).filter(todo => !todo.completed),
    completedTodos: (state, getters) => todoListId =>
      getters.allTodos(todoListId).filter(todo => todo.completed),
  },
  mutations: {
    setTodoLists(state, { todoLists }) {
      state.todoLists = todoLists;
    },
    setTodoList(state, { todoList }) {
      Vue.set(state.todoLists, todoList.id, todoList);
    },
    deleteTodoList(state, { id }) {
      Vue.delete(state.todoLists, id);
    },
    setTodo(state, { todo }) {
      Vue.set(state.todos, todo.id, todo);
    },
    setTodos(state, { todoList, todos }) {
      Vue.set(todoList, 'todos', todos);
    },
    appendTodo(state, { todoListId, id }) {
      state.todoLists[todoListId].todos.push(id);
    },
    deleteTodo(state, { todoListId, id }) {
      state.todoLists[todoListId].todos =
        state.todoLists[todoListId].todos.filter(todoId => todoId !== id);
    },
  },
  actions: {
    async loadTodoLists({ commit }) {
      const todoLists = await api.getTodoLists();
      commit('setTodoLists', { todoLists });
    },
    async loadTodoList({ commit }, { id }) {
      const todoList = await api.getTodoList(id);
      const todos = await Promise.all(todoList.todos.map(todoId => api.getTodo(todoId)));
      todos.forEach(todo => commit('setTodo', { todo }));
      commit('setTodoList', { todoList });
    },
    async createTodoList({ commit }, { name }) {
      const todoList = await api.createTodoList(name);
      commit('setTodoList', { todoList });
    },
    async deleteTodoList({ commit }, { id }) {
      await api.deleteTodoList(id);
      commit('deleteTodoList', { id });
    },
    async createTodo({ commit }, { todoListId, title }) {
      const todo = await api.createTodo(todoListId, title);
      commit('setTodo', { todo });
      commit('appendTodo', { todoListId, id: todo.id });
    },
    async updateTodo({ commit }, { id, title, completed }) {
      const updatedTodo = await api.updateTodo(id, title, completed);
      commit('setTodo', { todo: updatedTodo });
    },
    async deleteTodo({ commit }, { todoListId, id }) {
      await api.deleteTodo(id);
      commit('deleteTodo', { todoListId, id });
    },
    async clearCompletedTodos({ commit, getters }, { todoListId }) {
      await Promise.all(getters.completedTodos(todoListId).map(t => api.deleteTodo(t.id)));
      commit('setTodos', { todoListId, todoIds: getters.activeTodos(todoListId).map(t => t.id) });
    },
  },
});
