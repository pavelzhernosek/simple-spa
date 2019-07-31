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
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { PageHeader },
  computed: {
    ...mapGetters(["logged", "token"])
  }
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
