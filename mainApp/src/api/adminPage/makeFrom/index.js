import request from '@/utils/request'

/* 获取 层叠列表 列表值 目录*/
export function queryList(data) {
  return request({
    url: `/plm-doc/genericalListValue/queryList`,
    method: 'post',
    data
  })
}

/* 获取 层叠列表 列表值*/
export function queryListValue(data) {
  return request({
    url: `/plm-doc/genericalListValue/queryListValue`,
    method: 'post',
    data
  })
}

/* 查询模板数据 */
export function baseObjectsView(id) {
  return request({
    url: `/plm-doc/api/baseObjects/view?id=${id}`,
    method: 'get'
  })
}

/* 查询模板数据 */
export function queryFormTemplate(id) {
  return request({
    url: `/plm-doc/api/baseObjects/queryFormTemplate?id=${id}`,
    method: 'get'
  })
}

// 更新模板数据
export function baseObjectsSaveCustomModules(data) {
  return request({
    url: '/plm-doc/api/baseObjects/saveCustomModules',
    method: 'post',
    data
  })
}

/* 新增表单模板数据 */
export function addFormTemplate(data) {
  return request({
    url: `/plm-doc/api/baseObjects/addFormTemplate`,
    method: 'post',
    data
  })
}

// 删除模板数据
export function deleteFormTemplates(data) {
  return request({
    url: '/plm-doc/api/baseObjects/deleteFormTemplates',
    method: 'delete',
    data: data
  })
}

// 禁用表单模板
export function disableFormTemplates(data) {
  return request({
    url: '/plm-doc/api/baseObjects/disableFormTemplates',
    method: 'put',
    data: data
  })
}

// 启用表单模板
export function enableFormTemplates(data) {
  return request({
    url: '/plm-doc/api/baseObjects/enableFormTemplates',
    method: 'put',
    data: data
  })
}

