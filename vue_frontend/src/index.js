import HelloWorld from "@/components/HelloWorld";
import CounterModule from "@/vuex/vuex_module_counter";
import {createAppInEl, createSharedStore} from "@/util/create_app_utils";

// Initialize our shared store including the counter module
let store = createSharedStore({
    counter: CounterModule,
});

// Create and mount our apps
createAppInEl(HelloWorld, store, "#hello_world_a");
createAppInEl(HelloWorld, store, "#hello_world_b");
