import axios from './axios'

export function postBook(obj) {
  return axios.instance.post('/api/books', obj, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
export function getCategory() {
  return axios.instance.get('/api/categories')
}

export function getBookByID(id) {
  return axios.instance.get(`/api/books/${id}`)
}

export function getBookToUpDate(id) {
  return axios.instance.get(`/api/books/up/${id}`)
}
