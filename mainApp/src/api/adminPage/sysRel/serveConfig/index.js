import request from '@/utils/request'

export function viewDBinfo() {
  return request({
    url: '/plm-doc/sysEmail/viewDBinfo',
    method: 'POST'
  })
}

export function view() {
  return request({
    url: '/plm-doc/sysEmail/viewSysEmail',
    method: 'POST'
  })
}

export function update(data) {
  return request({
    url: '/plm-doc/sysEmail/update',
    method: 'PUT',
    data
  })
}

export function checkemail(data) {
  return request({
    url: '/plm-doc/sysEmail/sysEmail/ckeckemail',
    method: 'POST',
    data
  })
}

//
export function baseSettingProjectParamList(data) {
  return request({
    url: '/plm-doc/api/baseSettingProjectParam/list',
    method: 'get'
  })
}

export function objectInsDocumentLibraryTreeDisplay() {
  return request({
    url: `/plm-doc/api/objectInsDocumentLibrary/treeDisplay`,
    method: 'get'
  })
}

// 根据列表code获取列表值的下拉数据
export function postQueryListSelectData(code) {
  return request({
    url: `/plm-doc/api/sysDict/queryListSelectData?code=${code}`,
    method: 'post'
  })
}

// 系统参数页面修改接口
export function baseSettingProjectParamUpdate(data) {
  return request({
    url: '/plm-doc/api/baseSettingProjectParam/update',
    method: 'POST',
    data
  })
}
// 项目参数主计划变更执行流程查询接口（后续可能会调整） /plm-doc/baseWorkflow/queryPageList
export function baseWorkflowQueryPageList(data) {
  return request({
    url: '/plm-doc/baseWorkflow/queryPageList',
    method: 'post',
    data
  })
}
// 项目参数上传文件
export function baseSettingProjectParamAddReviewTemplate(data) {
  return request({
    url: '/plm-doc/api/baseSettingProjectParam/addReviewTemplate',
    method: 'post',
    data
  })
}

// 预览
export function baseSettingProjectParamViewTemplate(data) {
  return request({
    url: '/plm-doc/api/baseSettingProjectParam/viewTemplate',
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

// 修改水印设置
export function baseSettingProjectParamSetWatermark(data) {
  return request({
    url: '/plm-doc/api/baseSettingProjectParam/setWatermark',
    method: 'post',
    data
  })
}

// 获取水印
export function baseSettingProjectParamGetWater(data) {
  return request({
    url: '/plm-doc/api/baseSettingProjectParam/getWater',
    method: 'post',
    data
  })
}
// /plm-doc/api/baseObjectsAttribute/queryByObjectId 根据对象主键查看属性
export function queryByObjectId(objectId) {
  return request({
    url: '/plm-doc/api/baseObjectsAttribute/queryByObjectId?objectId=' + objectId,
    method: 'get'
  })
}
//
export function baseSettingProjectParamSetDashboardFilter(data) {
  return request({
    url: '/plm-doc/api/baseSettingProjectParam/setDashboardFilter',
    method: 'post',
    data
  })
}
