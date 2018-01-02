import {get} from '../../helper/api'
import * as types from '../mutation-types'

const state = {
  all: []
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, payload) {
    state.all = payload
  }
}

const actions = {
  getAllProducts ({commit}, page) {
    get('productlist?page=' + page).then((res) => {
      let payload = res.data
      commit(types.RECEIVE_PRODUCTS, payload)
    })
  }
}
const getters = {
  allProducts: state => state.all
}

export default {
  state,
  mutations,
  actions,
  getters
}
