import axios from './axios'

export function postBorrow(obj) {
  return axios.instance.post(`/api/bbrs`, obj)
}

export function getBorrowByMember(obj) {
  return axios.instance.get('/api/bbrs/member', obj)
}

export function putReturn(id) {
  return axios.instance.put(`/api/bbrs/return/${id}`)
}
