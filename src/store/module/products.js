import {get, post} from '../../helper/api'
import * as types from '../mutation-types'

const state = {
  all: [],
  product: {},
  subcategory: [],
  value: {},
  pFreelancer: {},
  rate: '',
  subProducts: []
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, payload) {
    let products = state.all.find(p => p.current_page === payload.current_page)
    if (!products) {
      state.all.push(payload)
    }
  },
  [types.RECEIVE_PRODUCT] (state, payload) {
    console.log(payload, 'payload')
    state.product = payload
    // console.log(payload, 'wew', state.product)
  },
  [types.GET_MATERIAL] (state, payload) {
    console.log(payload, 'mater')
    payload.forEach(element => {
      let material = state.subcategory.find(x => x.id === element.id)
      if (!material) {
        state.subcategory.push(element)
      }
    })
  },
  getValue (state, payload) {
    state.value = payload
  },
  getProductFreelancer (state, payload) {
    state.pFreelancer = payload
  },
  getRating (state, payload) {
    state.rate = payload
  },
  getSubProducts (state, payload) {
    state.subProducts = payload
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
      get('/rate/' + payload.freelancer_id).then(res => {
        if (res.status === 200) {
          console.log(res.data, 'rating')
          commit('getRating', res.data.rate)
        }
      }).catch(err => {
        if (err) {
          console.log(err)
        }
      })
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
  },
  getProductFreelancer ({commit}, form) {
    get('/products-freelancer/' + form.freelancer_id + '?page=' + form.page).then(res => {
      if (res.status === 200) {
        commit('getProductFreelancer', res.data)
      }
    }).catch(err => {
      if (err) {
        console.log(err)
      }
    })
  },
  getRating ({commit}, id) {
    get('/rate/' + id).then(res => {
      if (res.status === 200) {
        console.log(res.data, 'rating')
        commit('getRating', res.data.rate)
      }
    }).catch(err => {
      if (err) {
        console.log(err)
      }
    })
  },
  getSubProducts ({commit}, id) {
    get('/sub/' + id).then(res => {
      if (res.status === 200) {
        commit('getSubProducts', res.data)
      }
    }).catch(err => {
      if (err) {
        console.log(err)
      }
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
  value: state => state.value,
  pFreelancer: state => state.pFreelancer,
  rating: state => state.rate,
  subProducts: state => state.subProducts
}

export default {
  state,
  mutations,
  actions,
  getters
}
