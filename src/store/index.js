import Vue from 'vue'
import Vuex from 'vuex'
import phone from './phone'
import questions from '../questions.json'
import { doc, updateDoc, increment } from 'firebase/firestore'
import db from '../firebase'
import router from '@/router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    user: null,
    galleryItem: null,

    progress: null,
    currentEvent: null,

    // questions
    questions
  },
  mutations: {
    SET_LOADING: (state, value) => {
      state.loading = value
    },
    SET_USER: (state, user) => {
      state.user = user
      state.progress = user.progress
    },
    SET_GALLERY_ITEM: (state, galleryItem) => {
      state.galleryItem = galleryItem
    },
    SET_CURRENT_EVENT: (state, currentEvent) => {
      state.currentEvent = currentEvent
    },
    INCREMENT_EVENT: state => {
      state.currentEvent += 1
    },
    INCREMENT_PROGRESS: state => {
      state.progress += 1
    },
    INCREMENT_WRONG_ATTEMPT: state => {
      state.user.wrongAttempts += 1
    },
    RESET_WRONG_ATTEMPT: state => {
      state.user.wrongAttempts = 0
    }
  },
  actions: {
    LOAD_QUESTIONS: ({ commit, dispatch, state }) => {
      setTimeout(() => {
        for (let i = 0; i <= state.progress; i++) {
          if (i === state.progress) {
            if (state.questions[state.progress].events) {
              dispatch('LOAD_EVENT', {
                event: state.questions[state.progress].events[0],
                options: {
                  silent: false,
                  setCurrentEvent: true,
                  currentEvent: 0
                }
              })
            }
          } else {
            if (state.questions[i].events) {
              for (let j = 0; j < state.questions[i].events.length; j++) {
                dispatch('LOAD_EVENT', {
                  event: state.questions[i].events[j],
                  options: { silent: true }
                })
              }
            }
          }
        }
      }, 2000)
    },
    NEXT_QUESTION: ({ commit, dispatch, state }) => {
      if (state.progress + 1 < state.questions.length) {
        commit('INCREMENT_PROGRESS')
        commit('RESET_WRONG_ATTEMPT')
        updateDoc(doc(db, 'users', state.user.id), {
          progress: state.progress,
          wrongAttempts: 0
        })
          .then(data => {})
          .catch(err => {
            console.error(err)
          })
        if (state.questions[state.progress].events) {
          dispatch('LOAD_EVENT', {
            event: state.questions[state.progress].events[0],
            options: { silent: false, setCurrentEvent: true, currentEvent: 0 }
          })
        } else {
          commit('SET_CURRENT_EVENT', null)
        }
      } else {
        // complete quiz
        updateDoc(doc(db, 'users', state.user.id), {
          completed: true,
          completedTime: new Date()
        })
          .then(data => {
            router.push({ name: 'Result' })
          })
          .catch(err => {
            console.error(err)
          })
      }
    },
    NEXT_EVENT: ({ commit, dispatch, state }) => {
      if (state.currentEvent < questions[state.progress].events.length - 1) {
        commit('INCREMENT_EVENT')
        dispatch('LOAD_EVENT', {
          event: questions[state.progress].events[state.currentEvent],
          options: {
            silent: false
          }
        })
      } else if (
        state.currentEvent ===
        questions[state.progress].events.length - 1
      ) {
        commit('INCREMENT_EVENT')
      }
    },
    WRONG_ATTEMPT: ({ commit, state }) => {
      commit('INCREMENT_WRONG_ATTEMPT')
      updateDoc(doc(db, 'users', state.user.id), {
        wrongAttempts: increment(1)
      })
        .then(data => {})
        .catch(err => {
          console.error(err)
        })
      if (state.user.wrongAttempts >= 3) {
        // eliminate user
        updateDoc(doc(db, 'users', state.user.id), {
          eliminated: true
        })
          .then(data => {
            Vue.$toast.error(state.questions[state.progress].endMessage)
            router.push({ name: 'Result' })
          })
          .catch(err => {
            console.error(err)
          })
      } else {
        Vue.$toast.error(
          `${state.questions[state.progress].attempts -
            state.user.wrongAttempts} attempts left!`
        )
      }
    }
  },
  getters: {
    GET_LOADING: state => state.loading,
    GET_USER: state => state.user,
    GET_GALLERY_ITEM: state => state.galleryItem,
    GET_QUESTIONS: state => state.questions,
    GET_PROGRESS: state => state.progress,
    GET_CURRENT_EVENT: state => state.currentEvent
  },
  modules: {
    phone
  }
})
