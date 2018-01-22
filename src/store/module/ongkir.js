import * as types from '../mutation-types'
import {get} from '../../helper/api'

export const state = {
  kota: [],
  provinsi: []
}

export const mutations = {
  [types.GET_KOTA] (state, payload) {
    console.log(payload)
    state.kota = payload
  },
  [types.GET_PROVINSI] (state, payload) {
    console.log(payload)
    state.provinsi = payload
  }
}

export const actions = {
  getKota ({commit}, id) {
    get('/city/' + id).then((res)  => {
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
  }
}

export const getters = {
  kota: state => state.kota,
  provinsi: state => state.provinsi
}

export default {
  state,
  mutations,
  actions,
  getters
}