import { GETALL, GET } from './functions';

const state = {
  albums: [],
  activeAlbum: {},
};

const getters = {
  albums: state => state.albums,
  activeAlbum: state => state.activeAlbum,
};

const actions = {
  getAlbums(context) {
    GETALL(context, 'albums', 'savePosts');
  },
  getactiveAlbum(context, id) {
    GET(context, 'albums', 'saveactiveAlbum', id);
  },
};

const mutations = {
  savePosts(state, albums) {
    state.albums = albums;
  },
  saveactiveAlbum(state, album) {
    state.activeAlbum = album;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
