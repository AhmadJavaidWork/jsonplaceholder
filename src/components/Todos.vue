<template>
  <v-container>
    <v-card color="#FAFAFA" flat class="mx-auto card" width="400px">
      <v-card class="mx-auto todo-card" v-for="todo in todos" :key="todo.id">
        <v-card-title
          v-bind:class="{
            completed: todo.completed,
            notcompleted: !todo.completed,
          }"
        >
          {{ todo.title }}
        </v-card-title>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Todos',
  computed: {
    ...mapGetters(['todos']),
  },
  async created() {
    await this.$store.dispatch('getTodos');
  },
};
</script>

<style scoped>
.card {
  background-color: #bdbdbd;
}
.todo-card {
  margin: 20px 0;
}
.completed {
  background-color: #66bb6a;
  color: white;
}
.notcompleted {
  background-color: red;
  color: white;
}
</style>
