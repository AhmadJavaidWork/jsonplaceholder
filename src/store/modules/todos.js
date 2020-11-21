import { GETALL, GET } from './functions';

const state = {
  todos: [],
  activeTodo: {},
};

const getters = {
  todos: state => state.todos,
  activeTodo: state => state.activeTodo,
};

const actions = {
  getTodos(context) {
    GETALL(context, 'todos', 'saveTodos');
  },
  getActiveTodo(context, id) {
    GET(context, 'todos', 'saveActiveTodo', id);
  },
};

const mutations = {
  saveTodos(state, todos) {
    state.todos = todos;
  },
  saveActiveTodo(state, todo) {
    state.activeTodo = todo;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
