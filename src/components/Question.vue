<template>
    <transition name="conjure">
  <div id="Question px-10" v-if="!(questions[progress].last && isDisabled)">
    <div>
      <h2 class="text-2xl font-bold text-left mt-32">
        <span
           v-for="(line,lineNumber) of questions[progress].question.split('\n')"
           v-bind:key="lineNumber" >
          {{ line }}<br/>
        </span>
      </h2>
      <div v-if="questions[progress].type === 'MCQ'" id="MCQ-wrapper" class="flex flex-col items-center justify-between mt-20">
        <div @click="selectOption(option)" v-for="(option, index) in questions[progress].options" :key="index"  class="text-center my-2 w-full rounded-xl text-gray-800 px-6 cursor-pointer py-2 transition-all duration-200 ease-in-out border hover:bg-blue-100 bg-opacity-10" :class="{'bg-blue-800': answer === option}">{{option}}</div>
        <button @click="submitAnswer" :disabled="isDisabled" class="w-full rounded-xl text-white px-6 py-2 transform hover:-translate-y-1 transition-all duration-200 ease-in-out mt-2 mb-10" :class="{'bg-red-300': isDisabled, 'bg-red-700': !isDisabled}">Submit</button>
      </div>
      <div v-else id="input-wrapper" class="flex items-center justify-between mt-20 mb-10">
        <input type="text" placeholder="Enter your answer here" v-model="answer" class="appearance-none w-full px-6 py-2 rounded-xl bg-gray-100 font-gray-800 focus:outline-none mr-4">
        <button @click="submitAnswer" :disabled="isDisabled || answer == null" class="rounded-xl text-white px-6 py-2 transform hover:-translate-y-1 transition-all duration-200 ease-in-out" :class="{'bg-red-300': isDisabled, 'bg-red-700': !isDisabled}">Submit</button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import questions from '../questions.json'
export default {
  name: '',
  data () {
    return {
      loading: false,
      answer: null
    }
  },
  mounted () {
    // load question logic
    // for (let i = 0; i <= this.progress; i++) {
    //   if (i === this.progress) {
    //     if (this.questions[this.progress].events) {
    //       this.$store.dispatch('LOAD_EVENT', { event: this.questions[this.progress].events[0], options: { silent: false, setCurrentEvent: true, currentEvent: 0 } })
    //     }
    //   } else {
    //     if (this.questions[i].events) {
    //       for (let j = 0; j < this.questions[i].events.length; j++) {
    //         this.$store.dispatch('LOAD_EVENT', { event: this.questions[i].events[j], options: { silent: true } })
    //       }
    //     }
    //   }
    // }
  },
  methods: {
    selectOption (option) {
      this.answer = option
    },
    submitAnswer () {
      this.loading = true
      // answer submission logic

      // if (this.questions[this.progress].elimination === true) {
      //   this.$toast(this.questions[this.progress].message)
      // }
      fetch('https://nisbheistbackend.onrender.com/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question: `question_${this.progress + 1}`,
          answer: this.answer
        })
      }).then(response => response.json()).then((data) => {
        console.log(data)

        if (data.success === true && data.submission === true) {
          this.$store.dispatch('NEXT_QUESTION')
        } else {
          if (this.questions[this.progress].elimination === true && this.questions[this.progress].attempts === 3) {
            this.$toast.error('Sending information to shreesh, No reply')
          } else {
            this.$toast.error('Incorrect answer')
          }
          if (this.questions[this.progress].elimination === true) {
            this.$store.dispatch('WRONG_ATTEMPT')
          }
        }

        // increment progress
      }).catch((err) => {
        console.error(err)
        if (err.response) { this.$toast.error(err.response.error) }
      }).finally(() => {
        this.loading = false
        this.answer = null
      })
    }
  },
  computed: {
    ...mapGetters({
      questions: 'GET_QUESTIONS',
      progress: 'GET_PROGRESS',
      currentEvent: 'GET_CURRENT_EVENT'
    }),
    isDisabled () {
      if (this.loading === true) return true
      if (questions[this.progress].events) {
        console.log(this.currentEvent, questions[this.progress].events.length)
        return this.currentEvent !== questions[this.progress].events.length
      }
      return false
    }
  }
}
</script>

<style>

</style>
