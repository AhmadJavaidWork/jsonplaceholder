import Vue from 'vue';
import Api from '@/api/api';
import axios from 'axios';

const state = {
  isAuthenticated: false,
  currentUser: {},
};

const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  currentUser: (state) => state.currentUser,
};

const actions = {
  async getCurrentUser(context) {
    const response = await Api().get('currentUser');
    if (response.error) console.log(response.error);
    else context.commit('saveUser', response.data);
  },
  async logout(context) {
    Vue.notify({
      group: 'auth',
      type: 'success',
      title: `Bye ${state.currentUser.displayName}`,
      text: 'See you later',
    });
    context.commit('removeUser');
  },
  async winsOrLoss() {
    const response = await axios.get(
      'https://api.opendota.com/api/playersByRank?api_key=88335a08-fded-4f79-a780-6d0e2396f6da'
    );
    return response;
  },
};

const mutations = {
  saveUser(state, data) {
    const currentUser = {
      displayName: data.displayName,
      steamid32: data.steamid32,
      avatar: data.profile.avatar,
      avatarmedium: data.profile.avatarmedium,
      avatarfull: data.profile.avatarfull,
      lastlogoff: data.profile.lastlogoff,
      loccityid: data.profile.loccityid,
      loccountrycode: data.profile.loccountrycode,
      locstatecode: data.profile.locstatecode,
      personaname: data.profile.personaname,
      profileurl: data.profile.profileurl,
      realname: data.profile.realname,
      timecreated: data.profile.timecreated,
    };
    state.currentUser = currentUser;
    state.isAuthenticated = true;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  },
  removeUser(state) {
    state.currentUser = {};
    state.isAuthenticated = false;
    localStorage.removeItem('currentUser');
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
