import {createAppInEl, createSharedStore} from "@/util/create_app_utils";
import App from './App.vue'
import CounterModule from "@/vuex/vuex_module_counter";

createAppInEl(App, createSharedStore({
    counter: CounterModule,
}), "#app");
