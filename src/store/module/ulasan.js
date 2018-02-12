import * as types from '../mutation-types'
import {get, post} from '../../helper/api'

export const state = {
  ulasan: []
}

export const mutations = {
  [types.SET_ULASAN] (state, payload) {
    state.ulasan = payload
  }
}

export const actions = {
  setUlasan ({commit}, payload) {
    post('/ulasan', payload).then(res => {
      if (res.status === 200) {
        commit(types.SET_ULASAN, res.data)
      }
    }).catch(err => {
      if (err) {
        console.log(err)
      }
    })
  },
  getUlasan ({commit}, id) {
    get('/ulasan/' + id).then(res => {
      if (res.status === 200) {
        commit(types.SET_ULASAN, res.data)
      }
    }).catch(err => {
      if (err) {
        console.log(err)
      }
    })
  }
}
export const getters = {
  ulasan: state => state.ulasan
}

export default {
  state,
  mutations,
  actions,
  getters
}
