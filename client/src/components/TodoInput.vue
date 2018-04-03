<template>
  <header class="header">
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-focus="true"
      @keyup.enter="doneAdd"
    />
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import { focus } from 'vue-focus';

export default {
  name: 'TodoInput',
  directives: { focus },
  props: {
    todoListId: Number,
    todo: Object,
  },
  methods: {
    ...mapActions(['createTodo']),
    doneAdd(e) {
      const title = e.target.value.trim();
      if (title) {
        this.createTodo({ todoListId: this.$props.todoListId, title });
        e.target.value = '';
      }
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  border-top: 1px solid #ededed;
}
</style>
