import axios from "axios";

export const api = axios.create({
  baseURL: 'http://api:3000/api/v1',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Authorization': '',
  }
})

export const apiUser = axios.create({
  baseURL: 'http://api:3000/',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  }
})

export const apiLocal = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  }
})
