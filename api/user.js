import axios from './axios'

export function postUser(obj) {
  return axios.instance.post('/api/users', obj, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
