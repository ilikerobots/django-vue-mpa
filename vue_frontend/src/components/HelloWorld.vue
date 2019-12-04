<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <button @click="decrement">-</button>
        <span>{{ count }}</span>
        <button @click="increment">+</button>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        computed: {
            count() {
                return this.$store.state.counter.count
            }
        },
        methods: {
            increment() {
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        text-align: center;
    }

    .hello span {
        display: inline-block;
        min-width: 4em;
        margin: 1em;
    }
</style>
