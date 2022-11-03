import Vue from 'vue'

const webSocketData = {
  state: {
    socketData: {}
  },
  mutations: {
    SET_SOCKET_DATA: (state, data) => {
      Vue.set(state.socketData, data.type, data.t)
    }
  },
  actions: {
    updateSocketData({ commit }, data) {
      commit('SET_SOCKET_DATA', data)
    }
  }
}

export default webSocketData
