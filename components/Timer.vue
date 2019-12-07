<template>
  <div class="timer">
    <div class="timer-display">
      <input
        v-model.number="min"
        class="timer-min"
        type="number"
        min="0"
        max="59"
      />
      <span class="timer-colon">:</span>
      <input
        v-model.number="sec"
        class="timer-sec"
        type="number"
        min="0"
        max="59"
      />
    </div>
    <div class="timer-tool">
      <button
        v-on:click="start"
        v-if="!toggleTimer"
        class="button is-success is-large"
      >
        Start
      </button>
      <button v-on:click="stop" v-if="toggleTimer" class="button is-large">
        Stop
      </button>
      <button v-on:click="reset" class="button is-danger is-large">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import Push from 'push.js'

export default {
  data() {
    return {
      setMin: 10,
      setSec: 0,
      min: 10,
      sec: 0,
      toggleTimer: false,
      timer: null,
      audio: null
    }
  },
  methods: {
    count: function() {
      if (this.sec <= 0 && this.min >= 1) {
        this.min--
        this.sec = 59
      } else if (this.sec <= 1 && this.min <= 0) {
        this.continue()
      } else {
        this.sec--
      }
    },
    start: function() {
      const self = this
      this.setMin = this.min
      this.setSec = this.sec
      this.timer = setInterval(function() {
        self.count()
      }, 1000)
      this.toggleTimer = true
    },
    stop: function() {
      clearInterval(this.timer)
      this.toggleTimer = false
    },
    continue: function() {
      this.min = this.setMin
      this.sec = this.setSec
      Push.create('Timer End! Next Loop Start!')
    },
    reset: function() {
      this.stop()
      this.min = this.setMin
      this.sec = this.setSec
    }
  }
}
</script>

<style lang="scss">
.timer {
  display: flex;
  justify-content: center;
  flex-direction: column;

  &-display {
    color: #000;
  }

  &-min,
  &-sec {
    width: 50vh;
    height: 50vh;
    font-size: 50vh;
    font-family: 'Times';
    border: none;
    text-align: right;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &-colon {
    width: 50vh;
    height: 50vh;
    font-size: 50vh;
    font-family: 'Times';
  }

  &-tool {
    display: flex;
    justify-content: center;
  }
}
</style>
