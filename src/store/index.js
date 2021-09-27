import Vue from 'vue'
import Vuex from 'vuex'
import phone from './phone'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    user: null
  },
  mutations: {
    SET_LOADING: (state, value) => {
      state.loading = value
    },
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {},
  getters: {
    GET_LOADING: state => state.loading,
    GET_USER: state => state.user
  },
  modules: {
    phone
  }
})
