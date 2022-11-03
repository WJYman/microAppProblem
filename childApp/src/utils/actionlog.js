// import { postAddLog } from '@/api/common.js'
import store from '@/store'

// 传的参数格式
// vals: {
//     instanceId: '', // 对应选中的id
//     route: this.$route, // 当前路由信息
//     typeObj: { // 埋点类型
//       value: '02',
//       name: '修改',
//       specificTypeName: '修改基本属性' // 具体操作的类型
//     },
//     valObj: {
//       newVal: {}, // 最新的值 需要赋值
//       oldVal: {}, // 之前的值 // 修改需要
//       labelVal: {} // 属性名称
//     },
//     fileName: [] // 下载，预览，签出，签入，取消签出，添加附件，导出 需要传
//   }

// 创建axios实例F
const setLog = (vals = {}) => {
  // 工作空间id
  const workspaceId = JSON.parse(localStorage.getItem('workspaceId'))
  // 用户
  // const loginName = JSON.parse(localStorage.getItem('loginName'))
  const val = vals // 自定义参数值
  const logType = val.logType ? val.logType : ''
  const instanceId = val.instanceId ? val.instanceId : '' // id 选中操作的数据
  const route = val.route ? val.route : {} // 具体详细值
  const changeType = val.changeType ? val.changeType : {}
  const valObj = val.valObj ? val.valObj : {} // 具体详细值
  const typeObj = val.typeObj ? val.typeObj : {} // 埋点类型
  const fileName = val.fileName ? val.fileName : [] // 文件名
  const specificTypeName = typeObj.specificTypeName ? `${typeObj.specificTypeName}` : '' // 具体操作的类型名称
  const newVal = valObj.newVal ? valObj.newVal : {} // 最新的值
  const oldVal = valObj.oldVal ? valObj.oldVal : {} // 之前的值
  const labelVal = valObj.labelVal ? valObj.labelVal : {} // 属性名称
  let operation = '' // 详细信息
  if (Object.prototype.toString.call(val) !== '[object Object]') {
    console.log('不符合要求')
    return
  } else if (route === {}) {
    return
  }
  const params = {
    instanceId: instanceId, // 当前操作数据的id
    workspaceId: workspaceId, // 工作空间id
    operation: '', // 详细信息
    logType: '' // 页面id,区分当前操作的页面
  }
  // 0物料，1文档，4权限，5列表值，6变更做特殊处理，7制造商，8制造商部件，如果外面传过来不为空，根据另一个字段changeType区分，2变更申请，3变更指令
  const path = route.path
  if (logType === '') {
    if (path === '/Material') {
      params.logType = '0'
    } else if (path === '/Document') {
      params.logType = '1'
    } else if (path === '/Change' || path === '/ChangeRequests') {
      params.logType = '2'
    } else if (path.indexOf('/PermissionManage') !== -1) {
      params.logType = '4'
      params.workspaceId = ''
    } else if (path === '/BaseConfig/ListValue') {
      params.logType = '5'
      params.workspaceId = ''
    } else if (path === '/ManufacturerFront') {
      params.logType = '7'
    } else if (path === '/ManufacturerPartFront') {
      params.logType = '8'
    } else if (path === '/Plan' || path === '/PlanList') {
      params.logType = '9'
    } else if (path === '/Supplier') {
      params.logType = '11'
    } else if (path === '/BaseConfig/VerbList') {
      params.logType = '12'
    } else if (path === '/SiteInfo' || path === '/Site') {
      params.logType = '18'
    }
  } else if (logType === '6') {
    params.logType = '6'
    params.workspaceId = ''
  } else {
    if (path === '/Plan' || path === '/PlanList') {
      // 计划模块的创建对象
      if (logType && logType === '1') {
        params.logType = '0'
      } else if (logType && logType === '2') {
        params.logType = '1'
      } else if (logType && logType === '3') {
        params.logType = '2'
      } else if (logType && logType === '4') {
        params.logType = '3'
      } else {
        params.logType = '9'
      }
    } else {
      if (changeType === '3') {
        params.logType = '2'
      } else if (changeType === '4') {
        params.logType = '3'
      } else if (changeType === '12') {
        params.logType = '13'
      } else if (changeType === '13') {
        params.logType = '14'
      } else if (changeType === '14') {
        params.logType = '15'
      } else if (changeType === '15') {
        params.logType = '16'
      } else if (changeType === '16') {
        params.logType = '17'
      } else {
        params.logType = logType
      }
    }
  }

  /**
   * 创建:01，修改:02，另存:03，下载:04，预览:05，签出:06，签入:07，取消签出:08，添加附件:09 ，
   * 添加物料BOM:10,11: 添加物料BOM 12 删除 13: 附件删除， 14: 添加关系， 15: 删除关系 16：添加替代料
   * 自定义:666
   * */
  // console.log(typeObj.value)

  if (['01', '031', '12', '666'].includes(typeObj.value)) {
    operation = `<${specificTypeName}> ${store.state.language.lang.by} "`
    if (!Object.keys(newVal).length) return

    for (const key in newVal) {
      if (!(labelVal[key] === undefined || newVal[key] === undefined || newVal[key] === null)) {
        operation += `${labelVal[key]}:${newVal[key]}，`
      }
    }
    operation = operation.replace(/，$/gi, '')
    const codePrompt = {
      '01': store.state.language.lang.create,
      '031': store.state.language.lang.save_as,
      '12': store.state.language.lang.delete,
      '666': ''
    }
    operation += `" ${codePrompt[typeObj.value]}`
  } else if (['02'].includes(typeObj.value)) {
    operation = ` `
    if (!Object.keys(newVal).length) return

    for (const key in newVal) {
      if (newVal[key] !== oldVal[key] && labelVal[key] !== undefined && newVal[key] !== undefined) {
        operation += `<${specificTypeName}.${labelVal[key]}>：${store.state.language.lang.previousFor} <${oldVal[key] === null ? '' : oldVal[key]}> ${store.state.language.lang.nowFor} <${newVal[key]}>，`
      }
    }
    if (operation === ` `) {
      operation = store.state.language.lang.editWithoutChange
    }
    operation = operation.replace(/，$/gi, '')
  } else if (['03'].includes(typeObj.value)) {
    operation = `<${specificTypeName}> ${specificTypeName} ${store.state.language.lang.for} "`
    if (!Object.keys(newVal).length) return

    for (const key in newVal) {
      if (labelVal[key] !== undefined) {
        operation += `${labelVal[key]}:${newVal[key]}，`
      }
    }
    operation = operation.replace(/，$/gi, '')
  } else if (['04', '05', '06', '07', '08', '09', '13', '14', '15', '16'].includes(typeObj.value)) {
    operation = `<${specificTypeName}> `
    if (!fileName.length) return

    fileName.forEach(item => {
      operation += `${item}，`
    })
    operation = operation.replace(/，$/gi, '')
    operation += ` ${store.state.language.lang.already} ${specificTypeName}`
  } else if (['20'].includes(typeObj.value)) {
    operation = `<${specificTypeName}> `
    if (!fileName.length) return
    operation = operation + typeObj.name
    fileName.forEach(item => {
      operation += `${item}，`
    })
    operation = operation.replace(/，$/gi, '')
  } else if (['10', '11'].includes(typeObj.value)) {
    operation = `<${specificTypeName}> `
  } else {
    console.log('么有执行')
    return
  }

  params.operation = operation
  // postAddLog(params).then(res => {})
}
export default setLog
