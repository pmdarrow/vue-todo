<template>
  <div class="autocomplete-wrapper">
    <v-select
      v-model="selectedTodoList"
      label="name"
      :options="todoLists"
      @input="listSelected"
      placeholder="Find a todo list">
    </v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select';

export default {
  name: 'Autocomplete',
  components: { vSelect },
  data() {
    return { selectedTodoList: null };
  },
  computed: {
    todoLists() {
      return Object.values(this.$store.state.todoLists);
    },
  },
  methods: {
    listSelected(list) {
      this.$router.push({ name: 'todo-list.all', params: { id: list.id } });
    },
  },
};
</script>

<style scoped>
.autocomplete-wrapper {
  padding: 4px 100px 28px;
  border-bottom: 1px solid #ededed;
}
</style>
