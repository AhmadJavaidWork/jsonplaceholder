<template>
  <div class="home">
    <h1 class="title">Albums</h1>
    <Albums />
  </div>
</template>

<script>
import Albums from '../../components/albums/Albums';

export default {
  name: 'AlbumsPage',
  components: {
    Albums,
  },
};
</script>

<style scoped>
.title {
  margin-top: 40px;
  font-weight: 400;
  font-size: 64px !important;
  text-align: center;
}
</style>
