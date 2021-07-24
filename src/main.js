import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueRouter from "vue-router";
Vue.use(VueRouter);

// import the global Store
import store from "./store";

import Main from "./components/Main.vue";
import ArticlesIndex from "./components/articles/Index.vue";
import ArticlesCreate from "./components/articles/Create.vue";
import ArticlesUpdate from "./components/articles/Update.vue";

// Define routes:
const routes = [
   {
      path: '/',
      component: Main
   },
   {
      path: '/articles',
      component: ArticlesIndex
   },
   {
      path: '/articles/create',
      component: ArticlesCreate,
      name: 'createArticle'
   },
   {
      path: '/articles/edit/:id',
      component: ArticlesUpdate,
      name: 'editArticle'
   }
];

const router = new VueRouter({
   routes,
   mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
