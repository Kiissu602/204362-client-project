export const state = () => ({
  login: {
    loggedIn: false,
    imgUrl: null,
    memberID: null,
    firstName: null,
    lastName: null,
    birthDate: null,
    sex: null,
    phone: null,
    faculty: null,
    department: null,
    job: null,
    email: null,
  },
})

export const mutations = {
  LOGIN(state, data) {
    state.login = { ...state.login, ...data, loggedIn: true }
    localStorage.setItem('mm-login', JSON.stringify(state.login))
  },
  LOGOUT(state) {
    state.login = {
      loggedIn: false,
      imgUrl: null,
      memberID: null,
      firstName: null,
      lastName: null,
      birthDate: null,
      sex: null,
      phone: null,
      faculty: null,
      department: null,
      job: null,
      email: null,
    }
    localStorage.removeItem('mm-login')
  },
}
