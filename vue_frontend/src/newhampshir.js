import Vue from "vue/dist/vue.js";
import Vuex from "vuex";
import storePlugin from "./vuex/vuex_store_as_plugin";
import App02 from './App.vue'

Vue.use(Vuex);
Vue.use(storePlugin);
Vue.config.productionTip = false;

/* NOTE: unlike index.js, we are not passing props from our template, so the following render/mount 
  syntax is ok */

new Vue({
    render: h => h(App02),
}).$mount('#app');