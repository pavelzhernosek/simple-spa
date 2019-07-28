import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Registration from "@/components/Auth/Registration";
import Login from "@/components/Auth/Login";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ],
  mode: "history"
});
