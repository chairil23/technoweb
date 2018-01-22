export default {
  state: {
    token: ''
  },
  initialize () {
    this.state.token = localStorage.getItem('token')
  },
  set (token) {
    localStorage.setItem('token')
    this.initialize()
  },
  remove () {
    localStorage.removeItem('token')
  }
}
