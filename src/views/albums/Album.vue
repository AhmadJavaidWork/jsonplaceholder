<template>
  <div>
    <div class="back-btn">
      <v-btn text depressed @click="$router.go(-1)"
        ><v-icon left>mdi-keyboard-backspace</v-icon>Back</v-btn
      >
    </div>
    <Album />
  </div>
</template>

<script>
import Album from '../../components/albums/Album';

export default {
  name: 'AlbumPage',
  components: {
    Album,
  },
};
</script>

<style scoped></style>
