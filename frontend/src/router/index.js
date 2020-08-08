import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Index",
    component: () =>
      import("@/views/Index.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("@/views/Home.vue")
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
  }, {
    path: "/profile",
    name: "Profile",
    component: () =>
      import("@/views/Profile.vue")
  }, {
    path: "/chart",
    name: "Chart",
    component: () =>
      import("@/views/Chart.vue")
  }, {
    path: "/form",
    name: "Form",
    component: () =>
      import("@/views/Form.vue")
  }, {
    path: "/darkmode",
    name: "Darkmode",
    component: () =>
      import("@/views/Darkmode.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;