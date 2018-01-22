
import * as types from '../mutation-types'
import {get, post, del, getToken} from '../../helper/api'

export const state = {
  cart: {
    id: '',
    items: []
  },
  badge: '',
  temp: [],
  checkout: []
}

export const mutations = {
  [types.ADD_TO_CART] (state, payload) {
    const product = state.cart.items.find(p => p.id === payload.id)
    if (!product) {
      state.cart.items.push(payload)
    } else {
      let index = state.cart.items.findIndex((x) => x.id === payload.id)
      state.cart.items.splice(index, 1, payload)
    }
  },
  [types.RECEIVE_CART] (state, payload) {
    state.cart.items = payload
  },
  cartId (state, id) {
    state.cart.id = id
  },
  [types.RECEIVE_ITEM] (state, payload) {
    let product = state.item.find(p => p.id === payload.id)
    if (!product) {
      state.item.push(payload)
    }
  },
  total (state, payload) {
    state.temp = payload
    state.checkout = state.temp
  },
  [types.DELETE_ITEM] (state, id) {
    let index = state.cart.items.findIndex((x) => x.id === id)
    let indx = state.temp.findIndex((x) => x.id === id)
    state.temp.splice(indx, 1)
    state.cart.items.splice(index, 1)
  },
  [types.ROLLBACK_CART] (state, items) {
    state.cart.items = items
  },
  [types.DELETE_CART] (state) {
    state.cart.items = []
  },
  deleteCheckout (state) {
    state.checkout = []
  }
}

export const actions = {
  getCart ({commit}) {
    console.log(getToken())
    get('/item').then((res) => {
      if (res.status === 200) {
        console.log('getcart')
        commit(types.RECEIVE_CART, res.data)
      }
    })
    .catch((err) => {
      commit(types.ERROR_MSG, err.response.data)
    })
  },
  addToCart ({commit}, product) {
    post('/item', product).then((res) => {
      if (res.status === 200) {
        commit(types.ADD_TO_CART, res.data)
      }
    })
  },
  setTemp ({commit}, payload) {
    commit('total', payload)
  },
  delItem ({commit}, id) {
    const savedCartitem = [...state.cart.items]
    commit(types.DELETE_ITEM, id)
    del('/item/' + id).then((res) => {
      if (res.status === 200) {
        console.log(id)
      }
    })
    .catch((err) => {
      if (err) {
        commit(types.ROLLBACK_CART, savedCartitem)
      }
    })
  },
  delCart ({commit}) {
    commit(types.DELETE_CART)
  },
  delCheckout ({commit}) {
    commit('deleteCheckout')
  }
}

export const getters = {
  cart: state => state.cart,
  temp: state => state.temp,
  checkout: state => state.checkout
}

export default {
  state,
  mutations,
  actions,
  getters
}
