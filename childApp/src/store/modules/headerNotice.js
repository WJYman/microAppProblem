import { getQueryList, deleteDels, postUpdate } from '@/api/frontPage/headerNotice'

// delSuccess
const notice = {
  state: {
    tableList: [],
    loading: false,
    pagingParams: {
      pageNo: 1,
      pages: 0,
      isPreventScroll: false
    },
    oldSearchVal: '',
    total: 0,
    isShowAll: false
  },
  actions: {
    getTotalNum({ commit, state }) {
      getQueryList({
        pageNo: 1,
        pageSize: 999999,
        t: {
          showAll: false
        }
      }).then(res => {
        commit('SET_TOTAL', res.result.total)
      }).catch(() => {
        commit('SET_TOTAL', 0)
      })
    },
    getTableList({ commit, state, dispatch }, { isScroll, searchVal }) {
      dispatch('getTotalNum')

      if (isScroll) {
        commit('SET_PAGINGPARAMSPAGENO', state.pagingParams.pageNo + 1)
      } else {
        commit('SET_OLDSEARCHVAL', searchVal || '')
        commit('SET_PAGINGPARAMSPAGENO', 1)
      }
      const params = {
        pageNo: state.pagingParams.pageNo,
        pageSize: 50,
        t: {
          search: state.oldSearchVal,
          showAll: state.isShowAll
        }
      }
      commit('SET_LOADING', true)
      dispatch('getTableData', { params, isScroll })
    },
    getTableData({ commit, state }, { params, isScroll }) {
      getQueryList(params).then(res => {
        const result = res.result
        const bigData = result.records
        commit('SET_PAGINGPARAMSPAGES', result.pages)
        if (isScroll) {
          commit('SET_TABLELIST', [...state.tableList, ...bigData])
          commit('SET_LOADING', false)
        } else {
          commit('SET_TABLELIST', [])
          commit('SET_PAGINGPARAMSISPREVENTSCROLL', true)
          setTimeout(() => {
            commit('SET_TABLELIST', bigData)
            commit('SET_PAGINGPARAMSISPREVENTSCROLL', false)
            commit('SET_LOADING', false)
          }, 500)
        }
      }).catch(() => {
        commit('SET_LOADING', false)
      })
    },
    changeIsShowAll({ dispatch, commit, state }) {
      dispatch('getTableList', { isScroll: false, searchVal: state.oldSearchVal })
    },
    handleDels({ dispatch, commit, state }, ids) {
      return new Promise((resolve, reject) => {
        deleteDels([ids]).then(res => {
          resolve(res)
          dispatch('getTableList', { isScroll: false, searchVal: state.oldSearchVal })
        }).catch(error => {
          reject(error)
        })
      })
    },
    scrollHandle({ commit, state, dispatch }, { $event }) {
      const node = $event.srcElement || $event.target
      const { scrollHeight, scrollTop, clientHeight } = node
      const scrollDistance = scrollHeight - scrollTop - clientHeight
      if (scrollDistance <= 100) {
        if (!state.loading && state.pagingParams.pages > state.pagingParams.pageNo) {
          if (state.pagingParams.isPreventScroll) return
          commit('SET_LOADING', true)
          dispatch('getTableList', { isScroll: true, searchVal: state.oldSearchVal })
        }
      }
    },
    handleUpdate({ dispatch }, { checkData, isRefresh }) {
      postUpdate(checkData).then(() => {
        if (isRefresh) {
          dispatch('getTableList', {})
        }
      })
    }
  },
  mutations: {
    SET_TABLELIST: (state, val) => {
      state.tableList = val
    },
    SET_LOADING: (state, val) => {
      state.loading = val
    },
    SET_PAGINGPARAMSPAGENO: (state, val) => {
      state.pagingParams.pageNo = val
    },
    SET_PAGINGPARAMSPAGES: (state, val) => {
      state.pagingParams.pages = val
    },
    SET_PAGINGPARAMSISPREVENTSCROLL: (state, val) => {
      state.pagingParams.isPreventScroll = val
    },
    SET_TOTAL: (state, val) => {
      state.total = val
    },
    SET_SHOWALL: (state, val) => {
      state.isShowAll = val
    },
    SET_OLDSEARCHVAL: (state, val) => {
      state.oldSearchVal = val
    }
  }
}

export default notice
