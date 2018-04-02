<template>
  <header class="header">
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="Enter a name for your todo list"
      v-focus="true"
      @keyup.enter="doneAdd"
    />
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
import { focus } from 'vue-focus';

export default {
  name: 'TodoListInput',
  directives: { focus },
  methods: {
    ...mapMutations(['createTodoList']),
    doneAdd(e) {
      const name = e.target.value.trim();
      if (name) {
        this.createTodoList({ name });
        e.target.value = '';
      }
    },
  },
};
</script>

<style scoped>
  .header {
    border-top: 1px solid #ededed;
  }
  .new-todo {
    padding-left: 16px;
  }
</style>
