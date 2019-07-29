<template>
  <v-app>
    <page-header />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
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
