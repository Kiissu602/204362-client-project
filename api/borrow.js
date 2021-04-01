import axios from './axios'

export function postBorrow(obj) {
  return axios.instance.post(`/api/bbrs`, obj)
}

export function getFines(obj) {
  return axios.instance.get(`/api/bbrs/return`, { params: obj })
}
export function putBorrow(obj) {
  return axios.instance.put(`/api/bbrs`, obj)
}

export function getBorrowList() {
  return axios.instance.get('/api/bbrs')
}

export function deleteBorrow(id) {
  return axios.instance.delete(`/api/bbrs/${id}`)
}
export function postBooking(obj) {
  return axios.instance.post('/api/bbrs/Booking', obj)
}

export function getBooking(id) {
  return axios.instance.get('/api/bbrs/memberbooking', { params: id })
}

export function putPlaceBooking(obj) {
  return axios.instance.put('/api/bbrs/updateplace', obj)
}

export function getBookingLibrarian() {
  return axios.instance.get('/api/bbrs/member/booking')
}

export function getBookingByID(id) {
  return axios.instance.get(`/api/bbrs/${id}`)
}

export function putStatusBooking(obj) {
  return axios.instance.put('/api/bbrs/updatestatus', obj)
}

export function getDelivery(id) {
  return axios.instance.get('/api/bbrs/status', { params: id })
}
