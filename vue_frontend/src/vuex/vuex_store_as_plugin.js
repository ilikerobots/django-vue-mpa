import Vue from "vue/dist/vue.js";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import CounterModule from "./vuex_module_counter";

Vue.use(Vuex);
let plugins = [];
plugins.push(createPersistedState({
        paths: ["counter.count",]
    }
));

let store = new Vuex.Store({
    plugins: plugins,
    modules: {
        counter: CounterModule,
    },
    strict: process.env.NODE_ENV !== "production",
});

export default {
    store,
    install(Vue) { //resetting the default store to use this
        Vue.prototype.$store = store;
    }
};
