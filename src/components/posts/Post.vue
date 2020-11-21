<template>
  <v-card color="#FAFAFA" flat class="mx-auto card" width="600px">
    <h1 class="title">{{ activePost.title }}</h1>
    <p class="body">{{ activePost.body }}</p>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Post',
  computed: {
    ...mapGetters(['activePost']),
  },
  async created() {
    const id = this.$route.params.id;
    await this.$store.dispatch('getActivePost', id);
  },
};
</script>

<style scoped>
.card {
  background-color: #bdbdbd;
  margin-top: 50px;
}
.title {
  padding: 20px 20px;
  text-align: center;
}
.body {
  padding: 20px 20px;
}
</style>
