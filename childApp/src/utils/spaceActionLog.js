// import { postAddLog } from '@/api/common.js'
import store from '@/store'

/**
   * 创建:01，修改:02, 维护03，添加04
   * */
// 传的参数格式
// vals: {
//     workspaceId: '', // 当前工作空间的id
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
//     user: {
//         name: '添加', //  01添加用户, 02删除用户
//         val: '01',
//         id: '用户ID'
//     },
//     role: {
//         name: '添加',
//         val: '02',
//         id: '角色Id'
//     },
//     authority: { // 用户权限
//       name: '只读', // 02 权限变为  修改
//       val: '01',
//       id: '用户ID'
//     }
//   }

const setLog = (vals = {}) => {
  // 工作空间ID
  // const workspaceId = JSON.parse(localStorage.getItem('workspaceId'))
  // 用户
  const loginName = JSON.parse(localStorage.getItem('loginName'))
  const val = vals // 自定义参数值
  const user = val.user ? val.user : ''
  const role = val.role ? val.role : ''
  const oldUser = val.oldUser ? val.oldUser : ''
  const newUser = val.newUser ? val.newUser : ''
  const oldOwner = val.oldOwner ? val.oldOwner : ''
  const newOwner = val.newOwner ? val.newOwner : ''
  const instanceId = val.instanceId ? val.instanceId : ''
  const valObj = val.valObj ? val.valObj : {} // 具体详细值
  const typeObj = val.typeObj ? val.typeObj : {} // 埋点类型
  const specificTypeName = typeObj.specificTypeName ? `${typeObj.specificTypeName}` : ''
  const newVal = valObj.newVal ? valObj.newVal : {} // 最新的值
  const oldVal = valObj.oldVal ? valObj.oldVal : {} // 之前的值
  const labelVal = valObj.label ? valObj.label : {} // 属性名称
  let operation = ''

  if (Object.prototype.toString.call(val) !== '[object Object]') {
    return
  }
  const params = {
    instanceId: instanceId, // 当前创建工作空间数据的ID
    // workspaceId: workspaceId, // 工作空间ID
    operation: '' // 详细信息
  }
  console.log(typeObj.value)
  if (['01'].includes(typeObj.value)) {
    operation = `<${specificTypeName}>${store.state.language.lang.byCreated}："${loginName}"，`
    operation += ` ${store.state.language.lang.create}`
    if (!Object.keys(newVal).length) {
      return
    }
    for (const key in newVal) {
      if (labelVal[key] !== undefined) {
        operation += `${labelVal[key]}：${newVal[key]}，`
      }
    }
    operation = operation.replace(/，$/gi, '')
  } else if (['02'].includes(typeObj.value)) {
    operation = `<${specificTypeName}>${store.state.language.lang.editUser}："${loginName}"，`
    if (!Object.keys(newVal).length) {
      return
    }
    for (const key in newVal) {
      if (newVal[key] !== oldVal[key]) {
        operation += `"${labelVal[key]}"${store.state.language.lang.previousFor}"${oldVal[key]}",${store.state.language.lang.nowFor}："${newVal[key]}"。`
      }
    }
    operation += `--${store.state.language.lang.dealPeople}：${loginName}`
    operation = operation.replace(/，$/gi, '')
  } else if (['03'].includes(typeObj.value)) {
    operation = `<${specificTypeName}>${store.state.language.lang.user}："${user}"`
    operation += `。--${store.state.language.lang.dealPeople}：${loginName}`
    operation = operation.replace(/，$/gi, '')
  } else if (['04'].includes(typeObj.value)) {
    operation = `<${specificTypeName}>${store.state.language.lang.user}："${user}"，${store.state.language.lang.roleAllocate}："${role}"`
    operation += `。--${store.state.language.lang.dealPeople}：${loginName}`
    operation = operation.replace(/，$/gi, '')
  } else if (['05'].includes(typeObj.value)) {
    operation = `<${specificTypeName}>${store.state.language.lang.user}："${user}"`
    operation += `。--${store.state.language.lang.dealPeople}：${loginName}`
    operation = operation.replace(/，$/gi, '')
  } else if (['06'].includes(typeObj.value)) {
    operation = `<${specificTypeName}>${store.state.language.lang.roles}："${role}"`
    operation += `。--${store.state.language.lang.dealPeople}：${loginName}`
    operation = operation.replace(/，$/gi, '')
  } else if (['07'].includes(typeObj.value)) {
    operation = `<${specificTypeName}>"${oldOwner}"${store.state.language.lang.transferSpaceTo}"${newOwner}"`
    operation += `。--${store.state.language.lang.dealPeople}：${loginName}`
    operation = operation.replace(/，$/gi, '')
  } else if (['08'].includes(typeObj.value)) {
    operation = `<${specificTypeName}>${store.state.language.lang.roles}："${role}"，${store.state.language.lang.usedPeople}："${oldUser}"，${store.state.language.lang.nowUser}："${newUser}"`
    operation += `。--${store.state.language.lang.dealPeople}：${loginName}`
    operation = operation.replace(/，$/gi, '')
  } else if (['09'].includes(typeObj.value)) {
    operation = `<${specificTypeName}>${typeObj.name}`
    operation += `。--${store.state.language.lang.dealPeople}：${loginName}`
    operation = operation.replace(/，$/gi, '')
  } else {
    return
  }

  params.operation = operation
  // postAddLog(params).then(res => {})
}
export default setLog
