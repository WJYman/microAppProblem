import Storage from '@/utils/storage'
import { getTranslate } from '@/api/common'
const storage = new Storage()
const getLocale = _ => storage.get('locale') || 'zh'

const language = {
  state: {
    locale: getLocale(),
    lang: {}
  },
  mutations: {
    SET_LANG: (state, data) => {
      state.lang = data
    },
    SET_LOCALE: (state, data) => {
      storage.set('locale', data)
      state.locale = data
    }
  },
  actions: {
    setLocale({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        getTranslate(data || state.locale).then(res => {
          const result = res.result
          commit('SET_LOCALE', data || state.locale)
          commit('SET_LANG', result)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
export default language
