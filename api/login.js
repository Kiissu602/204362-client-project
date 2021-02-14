import axios from './axios'
export async function login($store, username, password) {
  const res = await axios.instance.post('/api/users/login', {
    username,
    password,
  })
  $store.commit('LOGIN', res.data)
  return res
}
