import axios from './axios'

export function getCategory() {
  return axios.instance.get('/api/categories')
}
