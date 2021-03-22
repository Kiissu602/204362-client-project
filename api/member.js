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
