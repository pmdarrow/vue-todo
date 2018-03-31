<template>
  <header class="header">
    <label class="toggle-all-complete">
      <input type="checkbox" />
    </label>
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="title"
      @keyup.enter="doneAdd"
    />
  </header>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TodoItem',
  props: {
    todoListId: Number,
    todo: Object,
  },
  data() {
    return { title: '' };
  },
  methods: {
    ...mapMutations(['createTodo']),
    doneAdd() {
      this.createTodo({
        todoListId: this.$props.todoListId,
        title: this.$data.title,
      });
      this.$data.title = '';
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  border-top: 1px solid #ededed;
}
.toggle-all-complete {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 1px -2px 1px rgba(0, 0, 0, 0.03);
  padding: 0 15px;
}
.new-todo {
  padding-left: 11px;
  box-shadow: inset -1px -2px 1px rgba(0, 0, 0, 0.03);
}
</style>
