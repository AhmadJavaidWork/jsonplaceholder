<template>
  <v-app>
    <Navbar />
    <v-main>
      <vue-page-transition name="fade-in-right">
        <router-view></router-view>
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
.back-btn {
  margin-left: 10%;
  margin-top: 50px;
}
</style>
