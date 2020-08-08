import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import axios from 'axios';
// Vue.use(axios);
Vue.config.productionTip = false;

// sassの導入
require('@/assets/sass/app.scss');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');