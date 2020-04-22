import Vue from "vue/dist/vue.js"; // See note about import below
//note if a dynamic import is not used here, then we must render the dependent bundles ourselves on the entry page
const Stopwatch = () => import( /* webpackChunkName: "chunk-stopwatch" */ "./components/Stopwatch.vue");
// otherwise use the static import and render the bundle in the entry  page
// import Stopwatch from "./components/Stopwatch";

Vue.config.productionTip = false;

/* NOTE: in order to retrieve props from static HTML, we must instantiate Vue with
el/component style below instead of the render(h) -> h(MyWidget) / $mount syntax. However, doing so will
utilize a runtime build without the template compiler. To work around this, vue must be imported
from dist/vue/vue. Be careful about changing this import or the way vue is instantiated. */

new Vue({
  el: "#stopwatch",
  components: {Stopwatch}
});

// Include any other components on the page
