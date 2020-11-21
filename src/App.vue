<template>
  <v-app>
    <v-main>
      <vue-page-transition>
        <router-view></router-view>
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style></style>
