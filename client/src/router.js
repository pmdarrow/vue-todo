import Vue from 'vue';
import Router from 'vue-router';

import TodoLists from './views/TodoLists.vue';
import TodoList from './views/TodoList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/todo-lists' },
    {
      path: '/todo-lists',
      name: 'todo-lists',
      component: TodoLists,
    },
    {
      path: '/todo-lists/:id',
      name: 'todo-list',
      component: TodoList,
    },
  ],
});
