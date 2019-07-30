import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import { sync } from "vuex-router-sync";
import vuetify from "./plugins/vuetify";

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "http://localhost:3000/api";
Vue.config.productionTip = false;
sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
