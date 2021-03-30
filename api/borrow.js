import axios from './axios'

export function postBorrow(obj) {
  return axios.instance.post(`/api/bbrs`, obj)
}

export function getBorrowByMember(id) {
  return axios.instance.post(`/api/bbrs/memberid/${id}`)
}
