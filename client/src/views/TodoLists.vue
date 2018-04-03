<template>
  <div>
    <section class="title">
      <h2>Find a todo list...</h2>
    </section>
    <Autocomplete />
    <section class="title secondary">
      <h2>Or create a new one.</h2>
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
import Autocomplete from '@/components/Autocomplete.vue';
import TodoListInput from '@/components/TodoListInput.vue';
import store from '@/store';

export default {
  name: 'TodoLists',
  components: { Autocomplete, TodoListInput },
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
.secondary {
  background: linear-gradient(white, #f5f5f5);
}
a {
  display: block;
}
a:hover {
  background-color: #f5f5f5c4;
}
li label {
  cursor: pointer;
  padding-left: 15px;
}
.destroy {
  cursor: pointer;
}
</style>
