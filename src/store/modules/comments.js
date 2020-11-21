import { GETALL } from './functions';

const state = {
  comments: [],
};

const getters = {
  comments: state => state.comments,
};

const actions = {
  getComments(context, id) {
    GETALL(context, `posts/${id}/comments`, 'saveComments');
  },
};

const mutations = {
  saveComments(state, comments) {
    state.comments = comments;
    console.log(comments);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
