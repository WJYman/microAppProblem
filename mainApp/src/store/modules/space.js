const space = {
  state: {
    ceshi: ''
  },

  mutations: {
    CESHI_NUM: (state, data) => {
      state.ceshi += data
    }
  },

  actions: {
    ceshi({ commit, state }, data) {
      commit('CESHI_NUM', data)
    }
  }
}

export default space
