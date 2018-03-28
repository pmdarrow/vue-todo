<template>
  <footer class="footer" v-show="todos.length" v-cloak>
    <span class="todo-count">
      <strong>{{ remaining }}</strong> items left
    </span>

    <ul class="filters">
      <li><a href="#" :class="{ selected: visibility === 'all' }">All</a></li>
      <li><a href="#" :class="{ selected: visibility === 'active' }">Active</a></li>
      <li><a href="#" :class="{ selected: visibility === 'completed' }">Completed</a></li>
    </ul>

    <button class="clear-completed" v-show="todos.length > remaining">
      <!--@click="removeCompleted"-->
      Clear completed
    </button>
  </footer>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: Array,
    visibility: String,
    remaining: Number,
  },
};
</script>
