import { GETALL, GET } from './functions';

const state = {
  posts: [],
  activePost: {},
};

const getters = {
  posts: state => state.posts,
  activePost: state => state.activePost,
};

const actions = {
  getPosts(context) {
    GETALL(context, 'posts', 'savePosts');
  },
  getActivePost(context, id) {
    GET(context, 'posts', 'saveActivePost', id);
  },
};

const mutations = {
  savePosts(state, posts) {
    state.posts = posts;
  },
  saveActivePost(state, post) {
    state.activePost = post;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
