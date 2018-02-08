
import Axios from 'axios'
import cookie from 'vue-cookie'
// import session from './session'

/* eslint-disable */

const state = {
  token: '',
  url: 'http://localhost:8000/api'
}

export function setAll () {
  var all = getAll()
  window.sessionStorage.setItem('vue-session-key', JSON.stringify(all))
}

export function getAll () {
  var all = JSON.parse(window.sessionStorage.getItem('vue-session-key'))
  return all || {}
}

export function getToken () {
  setAll()
  var all = getAll()
  return all['token']
}

const HTTP = Axios.create({
    baseURL: 'http://192.168.137.1/api/',
    headers: {
      'Authorization' : 'Bearer ' + getToken()
    }
})

export function post (url, payload ){
  return Axios(
    {
      method: 'POST',
      url: state.url + url,
      data: payload,
      headers: {
        'Authorization' : 'Bearer ' + cookie.get('token')
      }
    }
  )
}

export function get (url) {
  console.log(getToken(), 'get')
  return Axios(
    {
      method: 'GET',
      url: state.url + url,
      headers: {
        'Authorization' : 'Bearer ' + cookie.get('token')
      }
    }
  )
}

export function del (url) {
  return Axios(
    {
      method: 'DELETE',
      url: state.url + url,
      headers: {
        'Authorization' : 'Bearer ' + cookie.get('token')
      }
    }
  )
}

export function getCart (url) {
  return Axios(
    {
      method: 'GET',
      url: state.url + url,
      headers: {
        'Authorization' : 'Bearer ' + cookie.get('token')
      }
    }
  )
}
