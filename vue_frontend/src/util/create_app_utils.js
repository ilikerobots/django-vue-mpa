import {createApp} from "vue";
import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";

export const createAppInEl = (options, store, selector) => {
    const mountEl = document.querySelector(selector);
    const app = createApp(options, convertDatasetToTyped({...mountEl.dataset}));
    app.use(store);
    app.mount(selector);
    return app;
}

export const createSharedStore = (modules) => {
    return new createStore({
        plugins: [
            createPersistedState({
                paths: Object.entries(modules).map(
                    ([mName , m]) => 'persistentPaths' in m ? m.persistentPaths.map(path => mName + "." + path) : []
                ).flat(),
            })
        ],
        modules: modules,
        strict: process.env.NODE_ENV !== "production",
    });
}

const datasetDatatypePostfix = "Datatype";

const convertDatasetToTyped = (dataset) => {
   const keys = Object.keys(dataset);
   keys.forEach(function( key ){
      let datatypeKey = key + datasetDatatypePostfix;
      if (datatypeKey in dataset) {
          let datatype = dataset[datatypeKey];
          switch (datatype) {
              case "String": //already string, do nothing
                  break;
              case "Number":
                  dataset[key] = Number(dataset[key])
                  break;
              case "Boolean":
                  dataset[key] = dataset[key] === 'true'
                  break;
              // TODO: Add additional datatype conversions
              default: //do nothing
          }
          delete dataset[datatypeKey];

      }
   });
   return dataset;
}

