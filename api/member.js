import axios from './axios'

export function postMember(obj) {
  return axios.instance.post('/api/members', obj, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
export function putMember(obj) {
  return axios.instance.put('/api/members', obj, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
export function getMemberByID(id) {
  return axios.instance.get(`/api/members/${id}`)
}

export function getMemberByLibrarian(obj) {
  return axios.instance.get(`/api/members/librarian`, { params: obj })
}

export function getMemberRuleBorrow(id) {
  return axios.instance.get(`/api/members/rule/`, { params: id })
}

export function getMemberReturn(id) {
  return axios.instance.get(`/api/members/borrow`, { params: id })
}
