<template>
  <div class="stopwatch">
    <h3>This component was loaded {{ formattedTime }}</h3>
    <h3 v-if="showCountdown">Seconds remaining:  {{ secondsRemaining }}</h3>
  </div>
</template>

<script>
    import * as moment from "moment";

    export default {
        name: 'Stopwatch',
        props: {
            showCountdown: Boolean,
            countdown: Number,
        },
        data() {
            return {
                elapsedTime: 0,
                timer: undefined
            };
        },
        created: function () {
            this.timer = setInterval(() => {
                this.elapsedTime += 1000;
            }, 1000);
        },
        computed: {
            formattedTime() {
                let secs = this.elapsedTime / 1000;
                return moment.duration(0 - secs, "second").humanize(true) + ` (${secs}s)`;
            },
            secondsRemaining() {
                return this.countdown -  this.elapsedTime / 1000;
            }
        },
        methods: {},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .stopwatch {
    text-align: center;
  }

  .stopwatch h3 {
    color: #454545;
  }

</style>
