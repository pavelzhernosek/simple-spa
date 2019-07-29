<template>
  <v-app>
    <page-header />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: "App",
  components: { PageHeader },
  data: () => ({}),
  mounted() {}
};
</script>

<style>
.login-field,
.register-field {
  margin-top: 120px;
}

@media screen and (max-width: 500px) {
  .login-field,
  .register-field {
    margin-top: 50px;
  }
}
</style>
