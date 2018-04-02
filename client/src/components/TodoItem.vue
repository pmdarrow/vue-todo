<template>
  <li
    class="todo"
    :class="{ completed: todo.completed, editing }">

      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          :checked="todo.completed"
          @change="doneToggle"
        />
        <label @dblclick="editTodo">{{ todo.title }}</label>
        <button class="destroy" @click="remove"></button>
      </div>

      <input
        class="edit"
        type="text"
        v-focus="editing"
        :value="todo.title"
        @blur="cancelEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
      />
  </li>
</template>

<script>
import { mapActions } from 'vuex';
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
      editing: false,
    };
  },
  methods: {
    ...mapActions(['updateTodo', 'deleteTodo']),
    editTodo() {
      this.$data.editing = true;
    },
    doneToggle(e) {
      this.updateTodo({
        id: this.$props.todo.id,
        completed: e.target.checked,
      });
    },
    doneEdit(e) {
      this.$data.editing = false;
      this.updateTodo({
        id: this.$props.todo.id,
        title: e.target.value.trim(),
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
