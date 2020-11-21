<template>
  <v-container>
    <v-card color="#FAFAFA" flat class="mx-auto card" width="600px">
      <v-card
        color="#039BE5"
        class="mx-auto album-card"
        v-for="album in albums"
        :key="album.id"
        @click="$router.push({ path: `/album/${album.id}` })"
      >
        <h1 class="title">
          {{ album.title }}
        </h1>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Albums',
  computed: {
    ...mapGetters(['albums']),
  },
  async created() {
    await this.$store.dispatch('getAlbums');
  },
};
</script>

<style scoped>
.card {
  background-color: #bdbdbd;
}
.album-card {
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
