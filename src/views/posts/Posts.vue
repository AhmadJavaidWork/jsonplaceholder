<template>
  <div class="home">
    <h1 class="title">Posts</h1>
    <Posts />
  </div>
</template>

<script>
import Posts from '../../components/posts/Posts';

export default {
  name: 'PostsPage',
  components: {
    Posts,
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
