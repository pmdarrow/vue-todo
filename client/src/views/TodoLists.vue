<template>
  <div>
    <section class="title">
      <h2>Select a todo list...</h2>
    </section>
    <section class="main">
      <ul class="todo-list">
        <li v-for="todoList in todoLists" :key="todoList.id">
          <router-link :to="{ name: 'todo-list', params: { id: todoList.id }}">
            <label>{{ todoList.name }}</label>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TodoLists',
  computed: mapState(['todoLists']),
};
</script>

<style scoped>
a {
  display: block;
  color: inherit;
  text-decoration: none;
}
a:hover {
  background-color: #d3d3d338;
}
li label {
  cursor: pointer;
  padding-left: 15px;
}
</style>
