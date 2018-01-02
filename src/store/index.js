
import Vue from 'vue'
import Vuex from 'vuex'
import {post} from '../helper/api'
import products from './module/products'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {},
    msg: {color: '', icon: '', msg: '', alert: false},
    counter: 1
  },
  mutations: {
    setMsg (state, payload) {
      state.msg = payload
    },
    setCounter (state) {
      state.counter += 1
    },
    setNull (state) {
      state.msg = null
    },
    setUser (state, payload) {
      state.user = payload
    },
    setUserNull (state) {
      state.user = {}
    }

  },
  actions: {
    signUp ({commit}, payload) {
      post('auth/register', payload)
        .then((res) => {
          if (res.status === 200) {
            let warn = {
              color: 'success',
              icon: 'check_circle',
              msg: res.data.message,
              alert: true
            }
            commit('setMsg', warn)
            // console.log(this.state.msg)
          }
        })
        .catch((err) => {
          let warn = {
            color: 'error',
            icon: 'warning',
            msg: err.response.data.email[0],
            alert: true
          }
          commit('setMsg', warn)
          // console.log(this.state.msg)
        })
    },
    signIn ({commit}, payload) {
      post('auth/login', payload)
        .then((res) => {
          if (res.status === 200) {
            commit('setUser', res.data)
            console.log(res.data)
          }
        })
        .catch((err) => {
          // let warn = {
          //   color: 'error',
          //   icon: 'warning',
          //   msg: err.response.data
          //   alert: true
          // }
          // commit('setMsg', warn)
          console.log(err)
        })
    },
    counter ({commit}) {
      commit('setCounter')
    },
    null ({commit}) {
      commit('setNull')
    },
    userNull ({commit}) {
      commit('setUserNull')
    }
  },
  modules: {
    products
  },
  getters: {
    getMsg (state) {
      return state.msg
    },
    getCounter (state) {
      return state.counter
    },
    getUser (state) {
      return state.user
    }
  }
})
