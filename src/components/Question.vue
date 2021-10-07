<template>
  <div id="Question px-10">
    <h2 class="text-2xl font-bold text-center mt-32">
      {{ questions[progress].question}}
    </h2>
    <div id="input-wrapper" class="flex items-center justify-between mt-20">
      <input type="text" placeholder="Enter your answer here" v-model="answer" class="appearance-none w-full px-6 py-2 rounded-xl bg-gray-100 font-gray-800 focus:outline-none mr-4">
      <button @click="submitAnswer" class="rounded-xl text-white px-6 py-2 transform hover:-translate-y-1 transition-all duration-200 ease-in-out" :class="{'bg-red-300': isDisabled, 'bg-red-700': !isDisabled}">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import questions from '../questions.json'
export default {
  name: '',
  data () {
    return {
      answer: null
    }
  },
  mounted () {
    // load question logic
    for (let i = 0; i < this.questions.length; i++) {
      if (i === this.progress) {
        if (this.questions[this.progress].events) {
          this.$store.dispatch('LOAD_EVENT', { event: this.questions[i].events[0], options: { silent: false, setCurrentEvent: true, currentEvent: 0 } })
        }
      } else {
        if (this.questions[i].events) {
          for (let j = 0; j < this.questions.length; j++) {
            this.$store.dispatch('LOAD_EVENT', { event: this.questions[i].events[j], options: { silent: true } })
          }
        }
      }
    }
  },
  methods: {
    submitAnswer () {
      // answer submission logic

      // increment progress
      this.$store.dispatch('NEXT_QUESTION')
    }
  },
  computed: {
    ...mapGetters({
      questions: 'GET_QUESTIONS',
      progress: 'GET_PROGRESS',
      currentEvent: 'GET_CURRENT_EVENT'
    }),
    isDisabled () {
      if (questions[this.progress].events) {
        return this.currentEvent !== questions[this.progress].events.length
      }
      return false
    }
  }
}
</script>

<style>

</style>
