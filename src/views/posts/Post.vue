<template>
  <div>
    <div class="back-btn">
      <v-btn text depressed @click="$router.go(-1)"
        ><v-icon left>mdi-keyboard-backspace</v-icon>Back</v-btn
      >
    </div>
    <Post />
  </div>
</template>

<script>
import Post from '../../components/posts/Post';

export default {
  name: 'PostPage',
  components: {
    Post,
  },
};
</script>

<style scoped></style>
