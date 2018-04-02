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
    async deleteCompletedTodos({ commit, state }, { todoListId }) {
      const todoList = state.todoLists[todoListId];
      const todos = todoList.todos.map(todoId => state.todos[todoId]);
      const completedTodos = todos.filter(todo => todo.completed);
      await Promise.all(completedTodos.map(todo => api.deleteTodo(todo.id)));
      const activeTodos = todos.filter(todo => !todo.completed).map(todo => todo.id);
      commit('setTodos', { todoList, todos: activeTodos });
    },
  },
});
