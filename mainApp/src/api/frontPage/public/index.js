import request from '@/utils/request'

export function view(id) {
  return request({
    url: '/plm-doc/objectRelation/view?id=' + id,
    method: 'GET'
  })
}
export function queryList(data) {
  return request({
    url: '/plm-doc/objectRelation/queryList?',
    method: 'POST',
    data
  })
}

// 获取关系滚动列表
export function queryRollPageList(data) {
  return request({
    url: '/plm-doc/objectRelation/queryRollPageList',
    method: 'POST',
    data
  })
}

export function dels(data) {
  return request({
    url: '/plm-doc/objectRelation/dels',
    method: 'DELETE',
    data
  })
}

export function delManufacSupplier(data) {
  return request({
    url: '/plm-doc/ManufacSupplier/del',
    method: 'DELETE',
    data
  })
}

export function getUsedLocation(params) {
  return request({
    url: '/plm-doc/objectInstance/getUsedLocation',
    method: 'POST',
    params
  })
}

export function add(data) {
  return request({
    url: '/plm-doc/api/sysWorkspace/add',
    method: 'POST',
    data
  })
}

export function queryMaterial(params) {
  return request({
    url: '/plm-doc/objectInstance/getObjectInsList',
    method: 'GET',
    params
  })
}

export function addRelation(data) {
  return request({
    url: '/plm-doc/objectRelation/add',
    method: 'POST',
    data
  })
}

export function operationLog(data) {
  return request({
    url: '/plm-doc/api/operationLog/queryPageList',
    method: 'POST',
    data
  })
}

export function queryHistoryRollPageList(data) {
  return request({
    url: '/plm-doc/api/operationLog/queryRollPageList',
    method: 'POST',
    data
  })
}
export function getFileUsedLocation(params) {
  return request({
    url: '/plm-doc/objectInstance/getFileUsedLocation',
    method: 'POST',
    params
  })
}

export function getRepLocationFirst(params) {
  return request({
    url: '/plm-doc/objectInstance/getRepLocationFirst',
    method: 'get',
    params
  })
}

export function getRepLocationSecond(params) {
  return request({
    url: '/plm-doc/objectInstance/getRepLocationSecond',
    method: 'get',
    params
  })
}

export function download(id) {
  return request({
    url: '/plm-doc/api/exportExcel/download?id=' + id,
    responseType: 'blob',
    method: 'post'
  })
}

export function downloadReplaceUserLocation(id) {
  return request({
    url: '/plm-doc/api/exportExcel/downloadReplaceUserLocation?id=' + id,
    responseType: 'blob',
    method: 'post'
  })
}

export function filedownload(id) {
  return request({
    url: '/plm-doc/api/exportExcel/filedownload?id=' + id,
    responseType: 'blob',
    method: 'post'
  })
}

export function viewObjectInstanceByList(id) {
  return request({
    url: '/plm-doc/objectInstance/viewObjectInstanceByList?id=' + id,
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: '/plm-doc/objectRelation/update',
    method: 'put',
    data
  })
}

// 获取最近用户更新数据
export function getSysOpLog() {
  return request({
    url: `/plm-doc/api/sysLog/getSysOpLog`,
    method: 'get'
  })
}
// 同步最近用户更新数据
export function updateSysOpLog(data) {
  return request({
    url: '/plm-doc/api/sysLog/updateSysOpLog',
    method: 'put',
    data: data
  })
}

// 查询物料下供应商数据
export function queryRollPageSuppliers(data) {
  return request({
    url: '/plm-doc/objectSupplier/queryRollPageSuppliers',
    method: 'post',
    data
  })
}

// 查询供应商联系人数据
export function queryRollPageSysUsers(data) {
  return request({
    url: '/plm-doc/objectSupplier/queryRollPageSysUsers',
    method: 'post',
    data
  })
}

// 查询供应商联系人数据


// 查询物料、文档、配方历史记录
// export function queryHistoryRecords(data) {
//   return request({
//     url: '/plm-doc/objectChange/queryPageListAndFilterHistoryRecords',
//     method: 'post',
//     data
//   })
// }
export function queryRecordAndHistoryRecords(data) {
  return request({
    url: '/plm-doc/objectInstance/queryHistoryAndChangeHistoryPageList',
    method: 'post',
    data
  })
}

// 查询物料、文档、配方变更记录
// export function queryChangeRecords(data) {
//   return request({
//     url: '/plm-doc/objectChange/queryPageListAndFilterChangeRecords',
//     method: 'post',
//     data
//   })
// }

// 根据模型大类小类获取对象模型页签关联表数据并作权限过滤-列表接口
export function queryModelId(data) {
  return request({
    url: '/plm-doc/SysModelTab/queryListByCode?detailsType=' + data.detailsType + '&type=' + data.type,
    method: 'get',
    data
  })
}

// 跳转前查询目标流程信息 获取流程标题
export function queryProcessTitle({ type, detailsType }) {
  return request({
    url: '/plm-doc/api/baseObjects/queryClassifyObjects?type=' + type + '&detailsType=' + detailsType,
    method: 'get'
  })
}

// code查询
export function queryProcessByCode(data) {
  return request({
    url: '/plm-doc/api/sysDict/queryListSelectData?code=' + data.code,
    method: 'post',
    data
  })
}
// 列头查询
export function queryBaseAttribute(data) {
  return request({
    url: '/plm-doc/api/baseAttributeMaterial/queryListVisibleAttributes',
    method: 'post',
    data
  })
}
// 系统配置-动态参数 根据code查询数据
export function queryBaseSettingDynamicParam(code) {
  return request({
    url: '/plm-doc/baseSettingDynamicParam/queryByCode?code=' + code,
    method: 'post'
  })
}
/* 根据列表code获取列表值的下拉数据 data:{code} */
export function queryListSelectData(code) {
  return request.post(`/plm-doc/api/sysDict/queryListSelectData?code=${code}`)
}