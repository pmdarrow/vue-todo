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
  async getTodo(id) {
    const response = await ax.get(`todo/${id}`);
    return response.data;
  },
};
