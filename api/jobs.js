import axios from './axios'

export function getJobs() {
  return axios.instance.get('/api/jobs')
}
