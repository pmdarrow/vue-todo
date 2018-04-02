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

export default {
  name: 'TodoList',
  components: {
    TodoItem,
    TodoInput,
    TodoFilter,
  },
  created() {
    this.$store.dispatch('loadTodoList', { id: this.listIdParam });
  },
  computed: {
    listIdParam() {
      return parseInt(this.$route.params.id, 10);
    },
    todoList() {
      return this.$store.state.todoLists[this.listIdParam];
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
