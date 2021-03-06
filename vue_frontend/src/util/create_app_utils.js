import {createApp} from "vue";
import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";

export const createAppInEl = (options, store, selector) => {
    const mountEl = document.querySelector(selector);
    const app = createApp(options, {...mountEl.dataset});
    app.use(store);
    app.mount(selector);
    return app;
}

export const createSharedStore = (modules) => {
    return new createStore({
        plugins: [
            createPersistedState({
                paths: Object.values(modules).map(m => m.persistentPaths ?? []).flat(),
            })
        ],
        modules: modules,
        strict: process.env.NODE_ENV !== "production",
    });
}

// For other possible ways to pass parameters from template, see
// https://stackoverflow.com/questions/64010560/passing-props-to-vue-root-instance-via-attributes-on-element-the-app-is-mounted
