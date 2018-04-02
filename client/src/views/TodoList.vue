<template>
  <div v-if="todoList">
    <section class="title">
      <h2>{{ todoList.name }}</h2>
    </section>
    <TodoInput :todoListId="todoList.id" />
    <section class="main" v-show="allTodos.length">
      <ul class="todo-list">
        <TodoItem
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todoListId="todoList.id"
          :todo="todo"
        />
      </ul>
    </section>
    <TodoFilter
      :todoListId="todoList.id"
      :filter="filter"
      :total="allTodos.length"
      :remaining="activeTodos.length"
    />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoFilter from '@/components/TodoFilter.vue';
import store from '@/store';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
    TodoInput,
    TodoFilter,
  },
  async beforeRouteEnter(to, from, next) {
    const listIdParam = parseInt(to.params.id, 10);
    await store.dispatch('loadTodoList', { id: listIdParam });
    next();
  },
  computed: {
    todoList() {
      const listIdParam = parseInt(this.$route.params.id, 10);
      return this.$store.state.todoLists[listIdParam];
    },
    allTodos() {
      return this.todoList.todos.map(todoId => this.$store.state.todos[todoId]);
    },
    activeTodos() {
      return this.allTodos.filter(todo => todo.completed === false);
    },
    completedTodos() {
      return this.allTodos.filter(todo => todo.completed === true);
    },
    filteredTodos() {
      return this[`${this.filter}Todos`];
    },
    filter() {
      return this.$route.name.split('.')[1];
    },
  },
};
</script>
