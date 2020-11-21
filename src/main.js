import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VuePageTransition from 'vue-page-transition';

Vue.config.productionTip = false;
Vue.use(VuePageTransition);

new Vue({
  router,
  store,
  vuetify,
  VuePageTransition,
  render: h => h(App),
}).$mount('#app');
