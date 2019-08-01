import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Registration from "@/components/Auth/Registration";
import Login from "@/components/Auth/Login";
import Orders from "@/components/User/Orders";
import Events from "@/components/Events/Events";
import Create from "@/components/Events/Create";
import Event from "@/components/Events/Event";
import Profile from "@/components/User/Profile";

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
      name: "event-create",
      component: Create
    },
    {
      path: "/events/:id",
      name: "event",
      component: Event
    },
    {
      path: "/profile/id",
      name: "profile",
      component: Profile
    }
  ],
  mode: "history"
});
