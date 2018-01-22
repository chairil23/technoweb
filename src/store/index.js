
import Vue from 'vue'
import Vuex from 'vuex'
import {post} from '../helper/api'
import products from './module/products'
import cart from './module/cart'
import ongkir from './module/ongkir'
import * as types from './mutation-types'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {},
    msg: {},
    loading: false,
    err: {text: '', value: false}
  },
  mutations: {
    setMsg (state, payload) {
      state.msg = payload
    },
    setCounter (state) {
      state.counter += 1
    },
    setNull (state) {
      state.msg = {}
    },
    setUser (state, payload) {
      state.user = payload
    },
    setUserNull (state) {
      state.user = {}
    },
    setLoading (state, bool) {
      state.loading = bool
    },
    [types.ERROR_MSG] (state, payload) {
      state.err.text = payload
      state.err.value = payload
    },
    [types.ERROR_MSG_NULL] (state) {
      state.err.text = ''
      state.err.value = false
    }

  },
  actions: {
    signUp ({commit}, payload) {
      commit('setLoading', true)
      commit('setNull')
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
            commit('setLoading', false)

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
          commit('setLoading', false)
          // console.log(this.state.msg)
        })
    },
    signIn ({commit}, payload) {
      commit('setLoading', true)
      commit('setNull')
      post('auth/login', payload)
        .then((res) => {
          if (res.status === 200) {
            commit('setUser', res.data)
            commit('setLoading', false)
            post('/cart').then((res) => {
              if (res.status === 200) {
                commit('cartId', res.data.id)
              }
            })
          }
        })
        .catch((err) => {
          let warn = {
            color: 'error',
            icon: 'warning',
            msg: err.response.data.error,
            alert: true
          }
          commit('setMsg', warn)
          commit('setLoading', false)
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
    products,
    cart,
    ongkir
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
    },
    getLoading (state) {
      return state.loading
    }
  }
})
