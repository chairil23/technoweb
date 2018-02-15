
import * as types from '../mutation-types'
import {get, post, del, getToken} from '../../helper/api'

export const state = {
  cart: {
    id: '',
    items: []
  },
  badge: '',
  temp: [],
  checkout: [],
  order: {
    bank_id: '',
    address: '',
    city_id: '',
    city_name: '',
    province: '',
    postal_code: '',
    kurir: '',
    service: '',
    biaya_kurir: '',
    items: []
  },
  transaction: {},
  item: {}
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
  [types.ADD_CART] (state, id) {
    post('/cart').then((res) => {
      if (res.status === 200) {
        console.log(res.data)
      }
    }).catch((err) => {
      console.log(err)
    })
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
    state.temp = []
  },
  [types.CHECKOUT] (state) {
    state.temp.forEach(element => {
      let index = state.cart.items.findIndex((x) => x.id === element.id)
      state.cart.items.splice(index, 1)
    })
  },
  rollback (state) {
    state.checkout.forEach(element => {
      let item = state.cart.items.find(x => x.id === element.id)
      if (!item) {
        state.cart.items.push(element)
      }
    })
  },
  [types.ORDER] (state, payload) {
    console.log(payload)
    post('/order', payload).then((res) => {
      if (res.status === 200) {
        state.checkout = []
        // state.temp = []
        state.transaction = res.data
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  getItem (state, payload) {
    state.item = payload
  }
}

export const actions = {
  getCart ({commit}) {
    console.log(getToken())
    get('/item').then((res) => {
      if (res.status === 200) {
        console.log(getToken(), 'token')
        console.log(res.data, 'getcart')
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
  },
  checkout ({commit}) {
    commit(types.CHECKOUT)
  },
  rollback ({commit}) {
    commit('rollback')
  },
  order ({commit, rootState}, kurir) {
    console.log(kurir)
    let order = {}
    order.bank_id = 1
    order.address = rootState.alamat.address
    order.city_id = rootState.alamat.city_id
    order.city_name = rootState.alamat.city_name
    order.postal_code = rootState.alamat.postal_code
    order.province = rootState.alamat.province
    order.kurir = kurir.name
    order.service = kurir.service.service
    order.biaya_kurir = kurir.service.cost[0].value
    order.items = state.checkout
    commit(types.ORDER, order)
  },
  getItem ({commit}, id) {
    get('/order/' + id).then(res => {
      if (res.status === 200) {
        commit('getItem', res.data)
      }
    }).catch(err => {
      if (err) {
        console.log(err)
      }
    })
  }
}

export const getters = {
  cart: state => state.cart,
  temp: state => state.temp,
  checkout: state => state.checkout,
  transaction: state => state.transaction,
  item: state => state.item
}

export default {
  state,
  mutations,
  actions,
  getters
}
