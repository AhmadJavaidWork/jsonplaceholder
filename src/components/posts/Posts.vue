<template>
  <v-container>
    <v-card color="#FAFAFA" flat class="mx-auto card" width="600px">
      <v-card
        color="#039BE5"
        class="mx-auto post-card"
        v-for="post in posts"
        :key="post.id"
        @click="$router.push({ path: `/post/${post.id}` })"
      >
        <h1 class="title">
          {{ post.title }}
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
  color: white;
  cursor: pointer;
}
.title {
  padding: 20px 20px;
  padding-bottom: 20px;
  text-align: center;
}
.body {
  padding: 20px 20px;
}
</style>
