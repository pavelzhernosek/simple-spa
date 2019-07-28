<template>
  <div>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.title" :to="link.url">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout" text v-if="isUserLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark color="primary" fixed app>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" class="pointer">
          <span>Events</span>
          <span class="font-weight-light">APP</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="link in links" :key="link.title" :to="link.url">
          {{ link.title }}
          <v-icon right>{{ link.icon }}</v-icon>
        </v-btn>
        <v-btn text @click="logout" v-if="isUserLoggedIn">
          <v-icon left>mdi-logout-variant</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login"
      });
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: "My events", icon: "mdi-calendar-clock", url: "/events" }
        ];
      }
      return [
        { title: "Login", icon: "mdi-login-variant", url: "/login" },
        { title: "Sign up", icon: "mdi-account-plus", url: "/registration" }
      ];
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
