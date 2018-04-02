<template>
  <div>
    <section class="todoapp">
      <h1>vue-todo</h1>
      <router-view/>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Written by <a href="https://github.com/pmdarrow">Peter Darrow</a></p>
      <p>Based on <a href="https://github.com/vuejs/vue/tree/dev/examples/todomvc">Vue.js TodoMVC</a></p>
    </footer>
  </div>
</template>

<style>
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
</style>
