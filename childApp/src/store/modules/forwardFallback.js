import Storage from '@/utils/storage'
var storage = new Storage()
import { getSysOpLog, updateSysOpLog } from '@/api/frontPage/public/index'

const forwardFallback = {
  state: {
    recordList: [
      // {
      //   route: {},
      //   type: '', // page: 页面, leftList: 列表, tab: tab选项
      //   workspaceId: '', // 工作控件id
      //   valObj: {
      //     leftValObj: {}, // 左边列表选中的值
      //     tabObj: {}, // tab切换记录
      //   }
      // }
    ],
    recordVal: {},
    recordIndex: -1,
    isRecord: true,
    leftListStatus: false,
    tabStatus: false,

    // 悬浮框的历史记录
    operationRecords: [
      // {
      //   route: {},
      //   workspaceId: '',
      //   valObj: {},
      //   id: ''
      // }
    ],
    isProcess: true,
    num: 0,
    selectVal: {},
    selectValStatus: false,
    dialogVisible: false,
    isOperate: true,
    xPum: 600,
    yPum: 10

  },

  mutations: {
    SET_RECORDINDEX: (state, data) => {
      state.recordIndex = data
    },
    SET_RECORDLIST: (state, data) => {
      state.recordList = data
    },
    SET_ISRECORD: (state, data) => {
      state.isRecord = data
    },
    SET_LEFTLISTSTATUS: (state, data) => {
      state.leftListStatus = data
    },
    SET_RECORDVAL: (state, data) => {
      state.recordVal = data
    },
    SET_TABSTATUS: (state, data) => {
      state.tabStatus = data
    },
    SET_OPERATIONRECORDS: (state, data) => {
      state.operationRecords = data
    },
    SET_NUM: (state, data) => {
      state.num = data
    },
    SET_SELECTVAL: (state, data) => {
      state.selectVal = data
    },
    SET_SELECTVALSTATUS: (state, data) => {
      state.selectValStatus = data
    },
    SET_DIALOGVISIBLE: (state, data) => {
      state.dialogVisible = data
    },
    SET_YPUM: (state, data) => {
      state.yPum = data
    },
    SET_XPUM: (state, data) => {
      state.xPum = data
    },
    SET_ISPROCESS: (state, data) => {
      state.isProcess = data
    },
    SET_ISOPERATE: (state, data) => {
      state.isOperate = data
    }
  },
  actions: {
    setIsRecord({ commit, state }, data) {
      commit('SET_ISRECORD', data)
    },
    setRecordindex({ dispatch, commit, state }, data) {
      commit('SET_RECORDINDEX', data)
    },
    setRecordOperation({ dispatch, commit, state }, data) {
      const recordList = state.recordList
      const recordIndex = state.recordIndex
      recordList.splice(recordIndex + 1, 0, data)
      commit('SET_RECORDLIST', recordList)
      commit('SET_RECORDINDEX', recordIndex + 1)
    },
    leftListTrigger({ dispatch, commit, state }, data) {
      const leftListStatus = !state.leftListStatus
      commit('SET_LEFTLISTSTATUS', leftListStatus)
    },
    setRecordVal({ dispatch, commit, state }, data) {
      commit('SET_RECORDVAL', data)
    },
    updateRecordList({ dispatch, commit, state }, data) {
      const recordList = state.recordList
      const recordIndex = state.recordIndex
      recordList[recordIndex] = { ...recordList[recordIndex], ...data }
      commit('SET_RECORDLIST', recordList)
    },
    tabTrigger({ dispatch, commit, state }, data) {
      const tabStatus = !state.tabStatus
      commit('SET_TABSTATUS', tabStatus)
    },
    setOperationRecords({ dispatch, commit, state }, data) {
      let num = state.num + 1
      let operationRecords = state.operationRecords
      if (operationRecords.length) {
        operationRecords = operationRecords.filter(item => item.id !== data.id)
        operationRecords.unshift(data)
        if (operationRecords.length > 20) {
          operationRecords.pop()
        }
      } else {
        if (storage.get('operationRecords')) {
          operationRecords = storage.get('operationRecords') || []
        }
        operationRecords.unshift(data)
      }
      if (num > 5) {
        num = 0
        updateSysOpLog(JSON.stringify(operationRecords)).then(res => {})
      }
      commit('SET_NUM', num)
      // console.log(operationRecords, 'operationRecords')
      storage.set('operationRecords', operationRecords)
      commit('SET_OPERATIONRECORDS', operationRecords)
    },
    getOperationRecords({ dispatch, commit, state }, data) {
      let operationRecords = state.operationRecords
      if (!operationRecords.length) {
        if (storage.get('operationRecords')) {
          operationRecords = storage.get('operationRecords')
          commit('SET_OPERATIONRECORDS', operationRecords)
        } else {
          getSysOpLog().then(res => {
            operationRecords = res.result ? JSON.parse(res.result) : []
            commit('SET_OPERATIONRECORDS', operationRecords)
            storage.set('operationRecords', operationRecords)
          })
        }
      }
    },
    clearOperationRecords({ dispatch, commit, state }, data) {
      commit('SET_OPERATIONRECORDS', [])
      storage.remove('operationRecords')
    },
    delOperationRecords({ dispatch, commit, state }, idArr) {
      let operationRecords = state.operationRecords
      operationRecords = operationRecords.filter(item => !idArr.includes(item.id))
      console.log(operationRecords, 'operationRecords')
      commit('SET_OPERATIONRECORDS', operationRecords)
    },
    setSelectVal({ dispatch, commit, state }, data) {
      commit('SET_SELECTVAL', data)
    },
    selectValTrigger({ dispatch, commit, state }, data) {
      const selectValStatus = !state.selectValStatus
      commit('SET_SELECTVALSTATUS', selectValStatus)
    },
    setDialogVisible({ dispatch, commit, state }, data) {
      commit('SET_DIALOGVISIBLE', data)
    },
    setXPum({ dispatch, commit, state }, data) {
      commit('SET_XPUM', data)
    },
    setYPum({ dispatch, commit, state }, data) {
      commit('SET_YPUM', data)
    },
    setIsProcess({ commit, state }, data) {
      commit('SET_ISPROCESS', data)
    },
    setIsOperate({ commit, state }, data) {
      commit('SET_ISOPERATE', data)
    }
  }
}

export default forwardFallback
