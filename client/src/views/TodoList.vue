<template>
  <div v-if="todoList">
    <section class="title">
      <router-link class="back" :to="{ name: 'todo-lists' }">← Back</router-link>
      <h2>{{ todoList.name }}</h2>
      <button class="undo" @click="undo">Undo</button>
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
import { undoHistory } from '@/undo';

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
    undoHistory.init(store);
    next();
  },
  computed: {
    listIdParam() {
      return parseInt(this.$route.params.id, 10);
    },
    todoList() {
      return this.$store.state.todoLists[this.listIdParam];
    },
    allTodos() {
      return this.$store.getters.allTodos(this.listIdParam);
    },
    activeTodos() {
      return this.$store.getters.activeTodos(this.listIdParam);
    },
    completedTodos() {
      return this.$store.getters.completedTodos(this.listIdParam);
    },
    filteredTodos() {
      return this[`${this.filter}Todos`];
    },
    filter() {
      return this.$route.name.split('.')[1];
    },
  },
  methods: {
    undo() {
      undoHistory.undo();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.title h2 {
  flex: 4;
}
.back, .undo {
  flex: 1;
  cursor: pointer;
}
</style>
