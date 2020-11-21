<template>
  <div>
    <v-card flat class="mx-auto" width="600px">
      <v-card color="#FAFAFA" flat class="mx-auto card">
        <h1 class="title">{{ activePost.title }}</h1>
        <p class="body">{{ activePost.body }}</p>
      </v-card>
      <div>
        <h1 class="comments-title">Comments</h1>
        <v-card
          color="#B3E5FC"
          class="comment mx-auto"
          flat
          v-for="comment in comments"
          :key="comment.id"
        >
          <h1 class="name">
            <span class="comment-titles">Name: </span>{{ comment.name }}
          </h1>
          <p class="comment">
            <span class="comment-titles">Comment: </span>{{ comment.body }}
          </p>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Post',
  computed: {
    ...mapGetters(['activePost', 'comments']),
  },
  async created() {
    const id = this.$route.params.id;
    await this.$store.dispatch('getActivePost', id);
    await this.$store.dispatch('getComments', id);
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
}
.body {
  padding: 20px;
}
.comments-title {
  padding: 20px;
}
.name {
  font-size: 20px;
  padding: 20px;
}
.comment {
  font-size: 20px;
  padding: 20px;
  color: #616161;
}
.comment-titles {
  color: black;
  font-weight: 600;
  padding-right: 10px;
}
</style>
