import { login, getInfo, logout, baseSettingDynamicParamQueryByCode } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import Storage from '@/utils/storage'
var storage = new Storage()
/* 获取本地存储 用户名 */
const getLoginName = _ => storage.get('loginName') || ''
const homePagePath = _ => storage.get('homePagePath') || ''
const user = {
  state: {
    token: getToken(),
    user: {},
    loginName: getLoginName(),
    // 第一次加载菜单时用到
    loadMenus: false,
    homePagePath: homePagePath()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_LOGIN_NAME: (state, name) => {
      storage.set('loginName', name)
      state.loginName = name
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_LOAD_MENUS: (state, loadMenus) => {
      state.loadMenus = loadMenus
    },
    SET_HOME_PAGE_PATH: (state, path) => {
      storage.set('homePagePath', path)
      state.homePagePath = path
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo.loginName, userInfo.password).then(res => {
          setToken(res.result.token)
          commit('SET_TOKEN', res.result.token)
          commit('SET_LOGIN_NAME', res.result.loginName)
          storage.set('locale', res.result.lang)
          // 第一次加载菜单时用到， 具体见 src 目录下的 permission.js
          commit('SET_LOAD_MENUS', true)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetHomePath({ commit }) {
      return new Promise((resolve, reject) => {
        baseSettingDynamicParamQueryByCode('defaultHomePage').then(res => {
          const pathVal = (res.result || {}).value || '/Front'
          commit('SET_HOME_PAGE_PATH', pathVal)
          resolve(pathVal)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          setUserInfo(res.result || {}, commit)
          resolve(res.result || {})
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(res => {
          logOut(commit)

          resolve()
        }).catch(error => {
          logOut(commit)
          reject(error)
        })
      })
    },
    updateLoadMenus({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOAD_MENUS', false)
      })
    }
  }
}

export const logOut = (commit) => {
  commit('SET_TOKEN', '')
  removeToken()
}

export const setUserInfo = (res, commit) => {
  commit('SET_USER', res)
}

export default user
