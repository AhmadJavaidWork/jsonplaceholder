<template>
  <div>
    <h1 class="title">Todos</h1>
    <Todos />
  </div>
</template>

<script>
import Todos from '../../components/todos/Todos';

export default {
  name: 'TodosPage',
  components: {
    Todos,
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
