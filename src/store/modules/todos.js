import { GETALL } from './functions';

const state = {
  todos: {},
};

const getters = {
  todos: state => state.todos,
};

const actions = {
  getTodos(context) {
    console.log('here');
    GETALL(context, 'todos', 'saveTodos');
  },
};

const mutations = {
  saveTodos(state, todos) {
    state.todos = todos;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
