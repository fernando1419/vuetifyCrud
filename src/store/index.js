import Vue from "vue";
import Vuex from "vuex";

import ArticlesStore from "./ArticlesStore";

Vue.use(Vuex);

export default function() {
   const Store = new Vuex.Store({
      modules: {
         ArticlesStore
      },
      
      strict: process.env.DEV
   })
   
   return Store;
}
