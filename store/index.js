export const state = () => ({
  login: {
    loggedIn: false,
    pid: null,
    bdate: null,
    sex: null,
    username: null,
    type: null,
    faculty: null,
    department: null,
    token: null,
    phone: null,
    email: null,
    imgUrl: null,
  },
})

export const mutations = {
  LOGIN(state, data) {
    state.login = { ...state.login, ...data, loggedIn: true }
    localStorage.setItem('mm-login', JSON.stringify(state.login))
  },
  LOGOUT(state) {
    // resetti
    state.login = {
      loggedIn: false,
      pid: null,
      bdate: null,
      sex: null,
      username: null,
      type: null,
      faculty: null,
      department: null,
      token: null,
      phone: null,
      email: null,
      imgUrl: null,
    }
    localStorage.removeItem('mm-login')
  },
}
