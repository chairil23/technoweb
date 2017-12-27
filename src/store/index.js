
import Vue from 'vue'
import Vuex from 'vuex'
import {post} from '../helper/api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    message: '',
    counter: 1
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setMessage (state, payload) {
      state.message = payload
    },
    setCounter (state) {
      state.counter += 1
    }
  },
  actions: {
    signUp ({commit}, payload) {
      post('auth/register', payload)
            .then((res) => {
              if (res.data.registered) {
                commit('setMessage', res.data.registered)
              }
            })
            .catch((err) => {
              commit('setMessage', err.response.data.email[0])
            })
    },
    counter ({commit}) {
      commit('setCounter')
    }
  },
  getters: {
    getMessage (state) {
      return state.message
    },
    getCounter (state) {
      return state.counter
    }
  }
})
