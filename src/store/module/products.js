import {get, post} from '../../helper/api'
import * as types from '../mutation-types'

const state = {
  all: [],
  product: {},
  subcategory: [],
  value: {}
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
  },
  [types.GET_MATERIAL] (state, payload) {
    payload.forEach(element => {
      let material = state.subcategory.find(x => x.id === element.id)
      if (!material) {
        state.subcategory.push(element)
      }
    })
  },
  getValue (state, payload) {
    state.value = payload
  }
}

const actions = {
  getAllProducts ({commit}, page) {
    get('/productlist?page=' + page).then((res) => {
      let payload = res.data
      commit(types.RECEIVE_PRODUCTS, payload)
    })
    .catch((err) => {
      commit(types.ERROR_MSG, err.response.data)
    })
  },
  getProduct ({commit}, id) {
    get('/productlist/' + id).then((res) => {
      let payload = res.data
      commit(types.RECEIVE_PRODUCT, payload)
      get('/material/' + payload.subcategory_id).then(res => {
        if (res.status === 200) {
          commit(types.GET_MATERIAL, res.data)
        }
      })
      // console.log(state.product, payload)
    })
    .catch((err) => {
      commit(types.ERROR_MSG, err.response.data)
    })
  },
  getValue ({commit}, payload) {
    post('/material/', payload).then(res => {
      if (res.status === 200) {
        console.log(res.data, 'value')
        commit('getValue', res.data)
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
const getters = {
  allProducts: (state, getters) => page => {
    let products = state.all.find(p => p.current_page === page)
    return products
  },
  // allProducts: state => state.all,
  productDetail: (state) => state.product,
  materials: (state) => id => {
    let material = state.subcategory.filter(x => x.id === id)
    return material
  },
  value: state => state.value
}

export default {
  state,
  mutations,
  actions,
  getters
}
