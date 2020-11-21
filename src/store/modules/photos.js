import { GETALL } from './functions';

const state = {
  photos: [],
};

const getters = {
  photos: state => state.photos,
};

const actions = {
  getPhotos(context) {
    GETALL(context, 'photos', 'savePhotos');
  },
};

const mutations = {
  savePhotos(state, photos) {
    state.photos = photos;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
