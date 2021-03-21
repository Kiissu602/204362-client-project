import axios from './axios'
export async function login($store, email, password) {
  const res = await axios.instance.post('/api/members/login', {
    email,
    password,
  })
  $store.commit('LOGIN', res.data)
  return res
}
