<template>
  <nav>
    <v-app-bar flat app color="#EEEEEE">
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        class="grey--text text--darken-2 title"
        @click="$router.push('/').catch(err => {})"
      >
        <span class="font-weight-light">JSON</span>
        <span>Placeholder</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      width="12%"
      v-if="width > 1264"
      v-model="drawer"
      color="#EEEEEE"
      app
    >
      <v-list class="list">
        <div class="links">
          <v-list-item
            class="rounded-lg link"
            v-for="link in links"
            :key="link.icon"
            router
            @click="$router.push(link.route).catch(err => {})"
            v-bind:class="{ active: $route.path == link.route }"
          >
            <v-list-item-content>
              <v-list-item-title
                class="link-title"
                v-bind:class="{ active: $route.path === link.route }"
                >{{ link.text }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: window.screen.width > 1264 ? true : false,
      width: window.screen.width,
      links: [
        { text: 'Todos', route: '/todos' },
        { text: 'Posts', route: '/posts' },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  cursor: pointer;
}
.list {
  margin-top: 20%;
}
.logo {
  margin-top: 70px;
  cursor: pointer;
  height: 50px;
}
.links {
  margin-top: 20%;
}
.links {
  margin-right: 10%;
  margin-left: 10%;
}
.link-title {
  font-size: 1vw;
}
.active {
  color: white;
  background-color: #35a4dc;
}
.signout-btn {
  margin-left: 10%;
}
</style>
