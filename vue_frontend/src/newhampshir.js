import {createAppInEl, createSharedStore} from "@/util/create_app_utils";
import App02 from "@/App02";
import CounterModule from "@/vuex/vuex_module_counter";

createAppInEl(App02, createSharedStore({
    counter: CounterModule,
}), "#app");
