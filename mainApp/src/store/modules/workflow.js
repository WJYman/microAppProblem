const workflow = {
  state: {
    isSign: true
  },
  mutations: {
    SET_IS_SIGN: (state, data) => {
      state.isSign = data
    }
  },
  actions: {
    updateIsSign({ commit }, data) {
      return new Promise(() => {
        commit('SET_IS_SIGN', data)
      })
    }
  }
}

export default workflow
