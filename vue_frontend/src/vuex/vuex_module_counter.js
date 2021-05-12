export default {
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    },
    persistentPaths: ["count", ]
}
