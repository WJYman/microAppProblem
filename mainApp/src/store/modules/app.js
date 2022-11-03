import Cookies from 'js-cookie'
import Storage from '@/utils/storage'
var storage = new Storage()
/* 获取本地存储空间ID */
const getWorkspaceId = _ => storage.get('workspaceId') || ''
const getImageUrl = _ => storage.get('imageUrl') || ''
const getWorkCenter = _ => storage.get('workCenter') || ''
const getCodeOptions = _ => storage.get('codeOptions') || []

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  imageUrl: getImageUrl(),
  workspaceId: getWorkspaceId(),
  workCenter: getWorkCenter(),
  codeOptions: getCodeOptions(),
  size: Cookies.get('size') || 'small',
  isDefaultJump: true
}
const getters = {

}
const mutations = {
  SET_ISDEFAULTJUMP: (state, data) => {
    state.isDefaultJump = data
  },
  SET_CODEOPTIONS: (state, codeOptions) => {
    storage.set('codeOptions', codeOptions)
    state.codeOptions = codeOptions
  },
  SET_WORKCENTER: (state, workCenter) => {
    storage.set('workCenter', workCenter)
    state.workCenter = workCenter
  },
  SET_IMAGEURL: (state, imageUrl) => {
    storage.set('imageUrl', imageUrl)
    state.imageUrl = imageUrl
  },
  SET_WORKSPACE_ID: (state, workspaceId) => {
    storage.set('workspaceId', workspaceId)
    state.workspaceId = workspaceId
  },
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  }
}

const actions = {
  setIsDefaultJump({ commit }, data) {
    commit('SET_ISDEFAULTJUMP', data)
  },
  setCodeOptions({ commit }, { codeOptions }) {
    commit('SET_CODEOPTIONS', codeOptions)
  },
  setWorkCenter({ commit }, { workCenter }) {
    commit('SET_WORKCENTER', workCenter)
  },
  setImageUrl({ commit }, { imageUrl }) {
    commit('SET_IMAGEURL', imageUrl)
  },
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  setWorkspaceId({ commit, dispatch }, { workspaceId }) {
    if (state.workspaceId === workspaceId) {
      dispatch('setIsDefaultJump', true)
    } else {
      commit('SET_WORKSPACE_ID', workspaceId)
    }
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
