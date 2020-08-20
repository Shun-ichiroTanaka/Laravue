// =========================================================================================
//     File Name: router.js
//     Description: Ag Grid table
//     ------------------------------------------------------------------------------------
//     Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
//     Author: Pixinvent
//     Author URL: http://www.themeforest.net/user/pixinvent
// =========================================================================================
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/laravue_example/Index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/laravue_example/Home.vue')
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import('@/views/laravue_example/Documentation.vue')
  },
  {
    path: '/about',
    name: 'Laravue',
    component: () => import('@/views/laravue_example/documentation/Laravue.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/laravue_example/Profile.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('@/views/laravue_example/Chart.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/laravue_example/Form.vue')
  },
  {
    path: '/darkmode',
    name: 'Darkmode',
    component: () => import('@/views/laravue_example/Darkmode.vue')
  },
  {
    path: '/trello',
    name: 'Trello',
    component: () =>
      import('@/views/laravue_example/examples/trello/Trello.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
