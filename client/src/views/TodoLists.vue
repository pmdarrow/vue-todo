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
import { mapState, mapMutations } from 'vuex';
import TodoListInput from '@/components/TodoListInput.vue';

export default {
  name: 'TodoLists',
  components: { TodoListInput },
  created() {
    this.$store.dispatch('loadTodoLists');
  },
  computed: mapState(['todoLists']),
  methods: {
    ...mapMutations(['deleteTodoList']),
  },
};
</script>

<style scoped>
a {
  display: block;
  color: inherit;
  text-decoration: none;
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
