<template>
  <v-card color="#FAFAFA" flat class="mx-auto card" width="400px">
    <h1 class="title">{{ activeTodo.title }}</h1>
    <v-chip v-if="activeTodo.completed" class="chip completed-chip"
      >Completed</v-chip
    >
    <v-chip v-if="!activeTodo.completed" class="chip not-completed-chip"
      >Not Completed</v-chip
    >
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Todo',
  computed: {
    ...mapGetters(['activeTodo']),
  },
  async created() {
    const id = this.$route.params.id;
    await this.$store.dispatch('getActiveTodo', id);
  },
};
</script>

<style scoped>
.card {
  background-color: #bdbdbd;
  margin-top: 50px;
}
.title {
  padding-top: 20px;
  text-align: center;
}
.chip {
  margin: 20px 20px;
  font-weight: 600;
}
.not-completed-chip {
  color: white !important;
  background-color: red !important;
}
.completed-chip {
  color: white !important;
  background-color: green !important;
}
</style>
