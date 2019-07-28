<template>
  <v-app-bar dark color="primary" fixed app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Vuetify</span>
      <span class="font-weight-light">MATERIAL DESIGN</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text v-for="link in links" :key="link.title" :to="link.url">
        {{ link.title }}
        <v-icon right>{{ link.icon }}</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Login", icon: "mdi-login-variant", url: "/login" },
      { title: "Sign up", icon: "mdi-account-plus", url: "/registration" }
    ]
  })
};
</script>

<style scoped></style>
