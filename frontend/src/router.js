// =========================================================================================
//     File Name: router.js
//     Description: Ag Grid table
//     ------------------------------------------------------------------------------------
//     Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
//     Author: Pixinvent
//     Author URL: http://www.themeforest.net/user/pixinvent
// =========================================================================================
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Index",
    component: () =>
      import("@/views/laravue_template/Index.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("@/views/laravue_template/Home.vue")
  },
  {
    path: "/documentation",
    name: 'Documentation',
    component: () =>
      import("@/views/laravue_template/Documentation.vue"),
  }, {
    path: '/about',
    name: 'Laravue',
    component: () =>
      import("@/views/laravue_template/documentation/Laravue.vue"),

  }, {
    path: "/profile",
    name: "Profile",
    component: () =>
      import("@/views/laravue_template/Profile.vue")
  }, {
    path: "/chart",
    name: "Chart",
    component: () =>
      import("@/views/laravue_template/Chart.vue")
  }, {
    path: "/form",
    name: "Form",
    component: () =>
      import("@/views/laravue_template/Form.vue")
  }, {
    path: "/darkmode",
    name: "Darkmode",
    component: () =>
      import("@/views/laravue_template/Darkmode.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;