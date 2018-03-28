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
    />
    <!--v-model="newTodo"-->
    <!--@keyup.enter="addTodo"-->
  </header>
</template>

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
