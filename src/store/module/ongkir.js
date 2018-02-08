import * as types from '../mutation-types'
import {get} from '../../helper/api'

export const state = {
  kota: [],
  provinsi: [],
  kurir: {}
}

export const mutations = {
  [types.GET_KOTA] (state, payload) {
    console.log(payload)
    state.kota = payload
  },
  [types.GET_PROVINSI] (state, payload) {
    console.log(payload)
    state.provinsi = payload
  },
  [types.GET_KURIR] (state, payload) {
    state.kurir = payload
  },
  setKurirNull (state) {
    state.kurir = {}
  }
}

export const actions = {
  getKota ({commit}, id) {
    get('/city/' + id).then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        commit(types.GET_KOTA, res.data.rajaongkir.results)
      }
    }).catch((err) => {
      if (err) {
        console.log(err)
      }
    })
  },
  getProvinsi ({commit}) {
    get('/provinsi').then((res) => {
      if (res.status === 200) {
        commit(types.GET_PROVINSI, res.data.rajaongkir.results)
      }
    }).catch((err) => {
      if (err) {
        console.log(err)
      }
    })
  },
  getKurir ({commit}, x) {
    get('/cost/berat/' + x.berat + '/kurir/' + x.kurir).then((res) => {
      if (res.status === 200) {
        commit(types.GET_KURIR, res.data.rajaongkir.results[0].costs)
      }
    }).catch((err) => {
      if (err) {
        console.log(err)
      }
    })
  },
  setKurirNull ({commit}) {
    commit('setKurirNull')
  }
}

export const getters = {
  kota: state => state.kota,
  provinsi: state => state.provinsi,
  kurir: state => state.kurir
}

export default {
  state,
  mutations,
  actions,
  getters
}
