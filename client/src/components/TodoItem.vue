<template>
  <li
    class="todo"
    :class="{ completed: todo.completed, editing: todo.editing }">

      <div class="view">
        <input class="toggle" type="checkbox" v-model="todo.completed" />
        <label>
          <!--@dblclick="editTodo(todo)"-->
          {{ todo.title }}
        </label>
        <button class="destroy"></button>
        <!--@click="removeTodo(todo)"-->
      </div>

      <input
        class="edit"
        type="text"
        v-model="todo.title"
      />
      <!--@blur="doneEdit(todo)"-->
      <!--@keyup.enter="doneEdit(todo)"-->
      <!--@keyup.esc="cancelEdit(todo)"-->
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object,
  },
};
</script>

<style scoped>
</style>
