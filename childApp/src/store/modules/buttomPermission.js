import { getAuthorizedRbacButton } from '@/api/common'

const buttomPermission = {
  state: {
    btnPermission: []
  },
  mutations: {
    SET_BTN_PERMISSION: (state, data) => {
      state.btnPermission = data
    }
  },
  actions: {
    setBtnPermission({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        getAuthorizedRbacButton().then(res => {
          const result = res.result || []
          commit('SET_BTN_PERMISSION', result)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default buttomPermission
