<template>
  <div>
    <div class="back-btn">
      <v-btn text depressed @click="$router.go(-1)"
        ><v-icon left>mdi-keyboard-backspace</v-icon>Back</v-btn
      >
    </div>
    <Todo />
  </div>
</template>

<script>
import Todo from '../../components/todos/Todo';

export default {
  name: 'TodoPage',
  components: {
    Todo,
  },
};
</script>

<style scoped></style>
