<template>
  <div>
    <section class="title">
      <h2>Choose or create a todo list...</h2>
    </section>
    <TodoListInput />
    <section class="main">
      <ul class="todo-list">
        <li v-for="todoList in todoLists" :key="todoList.id">
          <router-link :to="{ name: 'todo-list.all', params: { id: todoList.id }}">
            <label>{{ todoList.name }}</label>
            <button class="destroy" @click.prevent="deleteTodoList({ id: todoList.id })"></button>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TodoListInput from '@/components/TodoListInput.vue';
import store from '@/store';

export default {
  name: 'TodoLists',
  components: { TodoListInput },
  async beforeRouteEnter(to, from, next) {
    await store.dispatch('loadTodoLists');
    next();
  },
  computed: mapState(['todoLists']),
  methods: {
    ...mapActions(['deleteTodoList']),
  },
};
</script>

<style scoped>
a {
  display: block;
}
a:hover {
  background-color: #d3d3d338;
}
li label {
  cursor: pointer;
  padding-left: 15px;
}
.destroy {
  cursor: pointer;
}
</style>
