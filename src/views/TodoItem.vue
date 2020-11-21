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
import Todo from '../components/Todo';

export default {
  name: 'TodoItem',
  components: {
    Todo,
  },
};
</script>

<style scoped>
.back-btn {
  margin-left: 40%;
  margin-top: 50px;
}
</style>
