/* eslint-disable */
import Axios from 'axios'

const HTTP = Axios.create({
    baseURL: 'http://localhost:8000/api/'
})

export function post(url, payload){
    return HTTP({        
        method: 'POST',
        url: url,
        data: payload
    });
}

export function get(url){
    return HTTP({
        method: 'GET',
        url: url
    })
}