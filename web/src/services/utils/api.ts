import axios from "axios";

export const api = axios.create({
  baseURL: 'http://api:3000/api/v1',
  headers: {
    'Content-type': 'application/json'
  }
})
