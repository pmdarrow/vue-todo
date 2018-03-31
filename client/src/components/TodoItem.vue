<template>
  <li
    class="todo"
    :class="{ completed, editing }">

      <div class="view">
        <input class="toggle" type="checkbox" v-model="completed" @change="doneEdit" />
        <label @dblclick="editTodo">{{ title }}</label>
        <button class="destroy" @click="remove"></button>
      </div>

      <input
        class="edit"
        type="text"
        v-model="title"
        v-focus="editing"
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
      />
  </li>
</template>

<script>
import { mapMutations } from 'vuex';
import { focus } from 'vue-focus';

export default {
  name: 'TodoItem',
  directives: { focus },
  props: {
    todoListId: Number,
    todo: Object,
  },
  data() {
    return {
      title: this.$props.todo.title,
      completed: this.$props.todo.completed,
      editing: false,
    };
  },
  methods: {
    ...mapMutations(['updateTodo', 'deleteTodo']),
    editTodo() {
      this.$data.editing = true;
    },
    doneEdit() {
      this.$data.editing = false;
      this.updateTodo({
        id: this.$props.todo.id,
        title: this.$data.title,
        completed: this.$data.completed,
      });
    },
    cancelEdit() {
      this.$data.editing = false;
      this.$data.title = this.$props.todo.title;
    },
    remove() {
      this.deleteTodo({
        todoListId: this.$props.todoListId,
        id: this.$props.todo.id,
      });
    },
  },
};
</script>

<style scoped>
.destroy {
  cursor: pointer;
}
</style>
