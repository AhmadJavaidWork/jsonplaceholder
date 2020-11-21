import Vue from 'vue';
import Vuex from 'vuex';
import todos from './modules/todos';
import posts from './modules/posts';
import comments from './modules/comments';
import albums from './modules/albums';
import photos from './modules/photos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    posts,
    comments,
    albums,
    photos,
  },
});
