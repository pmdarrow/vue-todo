<template>
  <div>
    <section class="title">
      <h2>{{ todoList.name }}</h2>
    </section>
    <TodoInput />
    <section class="main" v-show="todos.length" v-cloak>
      <ul class="todo-list">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
      </ul>
    </section>
    <TodoFilter :todos="todos" visibility="all" :remaining="1" />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoFilter from '@/components/TodoFilter.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
    TodoInput,
    TodoFilter,
  },
  computed: {
    todoList() {
      const listIdParam = parseInt(this.$route.params.id, 10);
      return this.$store.state.todoLists.find(todo => todo.id === listIdParam);
    },
    todos() {
      return this.todoList.todos.map(todoId => this.$store.state.todos[todoId]);
    },
  },
};
</script>
