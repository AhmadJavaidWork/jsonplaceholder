<template>
  <v-container>
    <v-card color="#FAFAFA" flat class="mx-auto card" width="400px">
      <v-card class="mx-auto post-card" v-for="post in posts" :key="post.id">
        <h1 class="title" @click="$router.push({ path: `/post/${post.id}` })">
          {{ post.title }}fd
        </h1>
        <p class="body">{{ post.body }}</p>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Posts',
  computed: {
    ...mapGetters(['posts']),
  },
  async created() {
    await this.$store.dispatch('getPosts');
  },
};
</script>

<style scoped>
.card {
  background-color: #bdbdbd;
}
.post-card {
  margin: 20px 0;
}
.title {
  padding: 20px 20px;
  padding-bottom: 20px;
  text-align: center;
  cursor: pointer;
}
.body {
  padding: 20px 20px;
}
</style>
