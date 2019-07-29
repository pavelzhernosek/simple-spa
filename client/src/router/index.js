import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Registration from "@/components/Auth/Registration";
import Login from "@/components/Auth/Login";
import Events from "@/components/Events/Events";
import Orders from "@/components/User/Orders";
import CreateEvent from "@/components/Events/CreateEvent";
import ViewEvent from "@/components/Events/ViewEvent";

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
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
    },
    {
      path: "/events",
      name: "events",
      component: Events
    },
    {
      path: "/events/create",
      name: "events-create",
      component: CreateEvent
    },
    {
      path: "/events/:eventId",
      name: "event",
      component: ViewEvent
    }
  ],
  mode: "history"
});
