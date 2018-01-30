import * as types from '../mutation-types'
import {get} from '../../helper/api'

export const state = {
  transaction: []
}

export const mutations = {
  [types.GET_TRANSACTION] (state, payload) {
    state.transaction = payload
  }
}

export const actions = {
  getTransaction ({commit}) {
    get('/transaction').then((res) => {
      if (res.status === 200) {
        commit(types.GET_TRANSACTION, res.data)
      }
    }).catch((err) => {
      if (err) {
        console.log(err)
      }
    })
  }
}

export const getters = {
  getTransaction: state => state.transaction
}

export default {
  state,
  mutations,
  actions,
  getters
}