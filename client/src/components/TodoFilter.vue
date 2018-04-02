<template>
  <footer class="footer" v-show="total">
    <span class="todo-count">
      <strong>{{ remaining }}</strong> items left
    </span>

    <ul class="filters">
      <li>
        <router-link
          :to="{ name: 'todo-list.all', params: { id: todoListId }}"
          :class="{ selected: filter === 'all' }"
        >
          All
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'todo-list.active', params: { id: todoListId }}"
          :class="{ selected: filter === 'active' }"
        >
          Active
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'todo-list.completed', params: { id: todoListId }}"
          :class="{ selected: filter === 'completed' }"
        >
          Completed
        </router-link>
      </li>
    </ul>

    <button class="clear-completed" v-show="total > remaining" @click="clearClicked">
      Clear completed
    </button>
  </footer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoFilter',
  props: {
    todoListId: Number,
    filter: String,
    total: Number,
    remaining: Number,
  },
  methods: {
    ...mapActions(['clearCompletedTodos']),
    clearClicked() {
      this.clearCompletedTodos({ todoListId: this.$props.todoListId });
    },
  },
};
</script>
