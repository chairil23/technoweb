export default {
  state: {
    key: 'session-tech'
  },
  new () {
    if (JSON.parse(sessionStorage.length) === 0) {
      sessionStorage.setItem(this.state.key, JSON.stringify({}))
      console.log('lho')
    } else {
      // return this.getAll()
      console.log('wew')
    }
    
  },
  setAll (all) {
    sessionStorage.setItem(this.state.key, JSON.stringify(all)) 
  }, 
  getAll () {
    var all = JSON.parse(sessionStorage.getItem(this.state.key))
    return all || {};
  },
  set (key, value) {
    if (key === 'session-id') return false
    var all = this.getAll()   
    
    if (!('session-id' in all)) {
      this.start()
      all = this.getAll
    }

    all[key] = value

    this.setAll(all)
  },
  start() {
    var all = this.getAll
    all['session-id'] = 'sess'+Date.now()

    this.setAll(all)
  },
  remove () {
    setAll({})   
  },
  get (key) {
    var all = this.getAll()

    return all[key]
  },
  exist () {
    var all = this.getAll
    return 'session-id' in all
  }
}
