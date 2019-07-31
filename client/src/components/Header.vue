<template>
  <div>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5 headline text-uppercase"
        >Events&nbsp;<span class="font-weight-light">App</span></span
      >
      <v-spacer></v-spacer>
      <v-text-field
        style="max-width: 400px"
        single-line
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </v-app-bar>
    <v-navigation-drawer temporary app v-model="drawer">
      <template v-slot:prepend>
        <v-list-item two-line class="pt-2 pb-2">
          <v-list-item-avatar>
            <img
              src="https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Pavel Zhernosek</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list-item
        class="pt-2 pb-2"
        v-for="link in links"
        :key="link.title"
        :to="link.url"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <template v-slot:append>
        <v-divider></v-divider>
        <v-list-item @click="logout" text v-if="isUserLoggedIn">
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true
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
      return this.$store.state.auth.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          {
            title: "My events",
            icon: "mdi-format-list-bulleted",
            url: "/events"
          },
          { title: "Orders", icon: "mdi-bookmark-check", url: "/orders" }
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
