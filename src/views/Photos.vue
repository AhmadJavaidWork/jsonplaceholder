<template>
  <div>
    <v-card class="mx-auto" flat width="800px">
      <v-layout row wrap>
        <v-flex xs4 md4 v-for="photo in photos" :key="photo.id" class="photo">
          <v-card class="mx-auto" width="350px">
            <v-img :src="photo.url"></v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Photos',
  computed: {
    ...mapGetters(['photos']),
  },
  async created() {
    await this.$store.dispatch('getPhotos');
  },
};
</script>

<style scoped>
.photo {
  padding: 20px;
}
</style>
