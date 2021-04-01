import axios from './axios'

export function putRule(obj) {
  return axios.instance.put('/api/rules/', obj)
}
