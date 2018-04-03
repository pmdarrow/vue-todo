<template>
  <div>
    <section class="todoapp">
      <h1>vue-todo</h1>
      <router-view/>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo, press enter to save it</p>
      <p>Written by <a href="https://github.com/pmdarrow">Peter Darrow</a></p>
      <p>Based on <a href="https://github.com/vuejs/vue/tree/dev/examples/todomvc">Vue.js TodoMVC</a></p>
    </footer>
  </div>
</template>

<style>
a {
  color: inherit;
  text-decoration: none;
}
.title {
  text-align: center;
}
.title h2 {
  display: inline-block;
  font-weight: 300;
  font-size: 28px;
}
.info {
  font-size: 14px;
}
.v-select .dropdown-menu {
  overflow-y: visible;
}
</style>
