import * as types from '../mutation-types'
import {get, post} from '../../helper/api'

export const state = {
  message: [],
  chat: [],
  cetak: ''
}

export const mutations = {
  [types.GET_MESSAGE_LIST] (state, payload) {
    console.log(payload)
    state.message = payload
  },
  [types.GET_MESSAGE] (state, payload) {
    let data = payload
    data.forEach(element => {
      state.chat.push(element)
    })
    state.chat = payload
  },
  pushMessage (state, payload) {
    state.chat.push(payload)
  },
  getCetak (state, payload) {
    state.cetak = payload
  }
}

export const actions = {
  getMessageList ({commit}) {
    get('/messages').then(res => {
      if (res.status === 200) {
        commit(types.GET_MESSAGE_LIST, res.data)
      }
    }).catch(err => {
      console.log(err)
    })
  },

  getMessage ({commit}, id) {
    get('/messages/' + id).then(res => {
      if (res.status === 200) {
        commit(types.GET_MESSAGE, res.data)
      }
    }).catch(err => {
      console.log(err)
    })
  },
  sendMessage ({commit}, data) {
    post('/sendmessage', data).then(res => {
      if (res.status === 200) {
        commit('pushMessage', res.data)
      }
    }).catch(err => {
      console.log(err)
    })
  },
  perubahan ({commit}, data) {
    console.log(data)
    post('/message/perubahan', data).then(res => {
      if (res.status === 200) {
        console.log(res.data)
      }
    }).catch(err => {
      if (err) {
        console.log(err)
      }
    })
  },
  setuju ({commit}, data) {
    post('/message/setuju', data).then(res => {
      if (res.status === 200) {
        commit('getCetak', res.data)
      }
    }).catch(err => {
      if (err) {
        console.log(err)
      }
    })
  },
  getCetak ({commit}, id) {
    get('/message/cetak/' + id).then(res => {
      if (res.status === 200) {
        commit('getCetak', res.data)
      }
    })
  }
}

export const getters = {
  message: state => state.message,
  chat: state => state.chat,
  cetak: state => state.cetak
}

export default {
  state,
  mutations,
  actions,
  getters
}
