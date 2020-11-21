<template>
  <div class="d-flex justify-center">
    <div class="section">
      <h1 class="title">Check one of the following pages</h1>
      <v-card width="700px" flat class="mx-auto" style="margin-top: 10vh;">
        <v-layout row wrap class="options">
          <v-flex xs12 md6 lg6>
            <v-card
              rounded
              height="50px"
              width="300px"
              class="rounded-xl mx-auto option-card"
              @click="$router.push('/todos')"
            >
              <h2 class="card-title">Todos</h2>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <v-card
              rounded
              height="50px"
              width="300px"
              class="rounded-xl mx-auto option-card"
              @click="$router.push('/posts')"
              ><h2 class="card-title">Posts</h2>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <v-card
              rounded
              height="50px"
              width="300px"
              class="rounded-xl mx-auto option-card"
              @click="$router.push('/todos')"
            >
              <h2 class="card-title">Todos</h2>
            </v-card>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <v-card
              rounded
              height="50px"
              width="300px"
              class="rounded-xl mx-auto option-card"
              @click="$router.push('/todos')"
            >
              <h2 class="card-title">Todos</h2></v-card
            >
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.title {
  text-align: center;
}
.section {
  position: absolute;
  top: 8vmax;
  width: 90vw;
}
.options {
  margin-bottom: 5vh;
}
.option-card {
  margin-bottom: 5vh;
}
.answers {
  text-align: center;
  font-weight: 600;
  font-size: 1.1vw;
  color: #666666;
}
.inactive {
  margin-bottom: 10%;
}
.active {
  background: #35a4dc;
  margin-bottom: 10%;
}
.card-title {
  padding-top: 15px;
  text-align: center;
  font-weight: 600;
  font-size: 100%;
  color: #666666;
}
</style>
