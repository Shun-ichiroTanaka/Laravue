import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Index from "@/views/Index.vue";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("@/views/About.vue")
  },
  {
    path: "/documentation",
    name: "Documentation",
    component: () =>
      import("@/views/Documentation.vue")
  },  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import("@/views/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;