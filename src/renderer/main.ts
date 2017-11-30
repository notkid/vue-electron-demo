import Vue = require('vue');
// import axios from 'axios';

import App from './App.vue';
import Landing from '@/components/LandingPage.vue'
// import Router from 'vue-router';

// Vue.use(Router);
// let routeOptions = <Router.RouterOptions>{
//   routes: [
//     {
//       path: '/',
//       name: 'landing-page',
//       component: Landing
//     }
//   ]
// } 

// let router: Router = new Router(routeOptions);
// import store from './store/index';

// if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
// Vue.http = Vue.prototype.$http = axios;
// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h=> h(App)
})
