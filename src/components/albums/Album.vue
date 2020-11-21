<template>
  <div>
    <v-card flat class="mx-auto" width="600px">
      <v-card color="#039BE5" flat class="mx-auto card">
        <h1 class="title">{{ activeAlbum.title }}</h1>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Album',
  computed: {
    ...mapGetters(['activeAlbum']),
  },
  async created() {
    const id = this.$route.params.id;
    await this.$store.dispatch('getactiveAlbum', id);
  },
};
</script>

<style scoped>
.card {
  background-color: #bdbdbd;
  margin-top: 50px;
}
.title {
  padding: 20px;
  text-align: center;
  color: white;
}
.body {
  padding: 20px;
  color: white;
}
</style>
