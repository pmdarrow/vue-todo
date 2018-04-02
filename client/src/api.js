import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://localhost:5000/',
});

export default {
  async getTodoLists() {
    const response = await ax.get('todo_lists');
    return Object.assign({}, ...response.data.map(item => ({ [item.id]: item })));
  },
  async getTodoList(id) {
    const response = await ax.get(`todo_lists/${id}`);
    return response.data;
  },
  async createTodoList(name) {
    const response = await ax.post('todo_lists', { name });
    return response.data;
  },
  async deleteTodoList(id) {
    const response = await ax.delete(`todo_lists/${id}`);
    return response.data;
  },
  async getTodo(id) {
    const response = await ax.get(`todo/${id}`);
    return response.data;
  },
  async createTodo(todoListId, title) {
    const response = await ax.post('todo', { todo_list_id: todoListId, title });
    return response.data;
  },
  async updateTodo(id, title, completed) {
    const response = await ax.patch(`todo/${id}`, { title, completed });
    return response.data;
  },
  async deleteTodo(id) {
    const response = await ax.delete(`todo/${id}`);
    return response.data;
  },
};
