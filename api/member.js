import axios from './axios'

export function postMember(obj) {
  return axios.instance.post('/api/members', obj, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
