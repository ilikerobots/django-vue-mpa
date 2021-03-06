import {createAppInEl} from "@/util/create_app_utils";
import {defineAsyncComponent} from 'vue'

//note if a dynamic import is not used here, then we must render the dependent bundles ourselves on the entry page
const Stopwatch = defineAsyncComponent(() =>
    import('./components/Stopwatch.vue')
)
// otherwise use the static import and render the bundle in the entry page
//import Stopwatch from "@/components/Stopwatch";

createAppInEl(Stopwatch, null, "#stopwatch");
