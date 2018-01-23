
import Axios from 'axios'
// import session from './session'

/* eslint-disable */

const state = {
  token: ''
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
    baseURL: 'http://localhost:8000/api/',
    headers: {
      'Authorization' : 'Bearer ' + getToken()
    }
})

export function post (url, payload ){
  return Axios(
    {
      method: 'POST',
      url: 'http://localhost:8000/api' + url,
      data: payload,
      headers: {
        'Authorization' : 'Bearer ' + getToken()
      }
    }
  )
}

export function get (url) {
  console.log(getToken(), 'get')
  return Axios(
    {
      method: 'GET',
      url: 'http://localhost:8000/api' + url,
      headers: {
        'Authorization' : 'Bearer ' + getToken()
      }
    }
  )
}

export function del (url) {
  return Axios(
    {
      method: 'DELETE',
      url: 'http://localhost:8000/api' + url,
      headers: {
        'Authorization' : 'Bearer ' + getToken()
      }
    }
  )
}

export function getCart (url) {
  return Axios(
    {
      method: 'GET',
      url: 'http://localhost:8000/api' + url,
      headers: {
        'Authorization' : 'Bearer ' + getToken()
      }
    }
  )
}
