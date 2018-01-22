import {get} from '../../helper/api'
import * as types from '../mutation-types'

const state = {
  all: [],
  product: {}
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, payload) {
    let products = state.all.find(p => p.current_page === payload.current_page)
    if (!products) {
      state.all.push(payload)
    }
  },
  [types.RECEIVE_PRODUCT] (state, payload) {
    state.product = payload
    // console.log(payload, 'wew', state.product)
  }
}

const actions = {
  getAllProducts ({commit}, page) {
    get('productlist?page=' + page).then((res) => {
      let payload = res.data
      commit(types.RECEIVE_PRODUCTS, payload)
    })
    .catch((err) => {
      commit(types.ERROR_MSG, err.response.data)
    })
  },
  getProduct ({commit}, id) {
    get('productlist/' + id).then((res) => {
      let payload = res.data
      commit(types.RECEIVE_PRODUCT, payload)
      // console.log(state.product, payload)
    })
    .catch((err) => {
      commit(types.ERROR_MSG, err.response.data)
    })
  }
}
const getters = {
  allProducts: (state, getters) => page => {
    let products = state.all.find(p => p.current_page === page)
    return products
  },
  // allProducts: state => state.all,
  productDetail: (state) => state.product
}

export default {
  state,
  mutations,
  actions,
  getters
}
