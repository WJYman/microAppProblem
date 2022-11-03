import request from '@/utils/request'

export function addCondition(data) {
  return request({
    url: '/plm-doc/baseCondition/baseCondition/add',
    method: 'post',
    data: data
  })
}

/** 条件设置列表 */
export function queryConditionList(data) {
  return request({
    url: '/plm-doc/baseCondition/baseCondition/queryPageList',
    method: 'post',
    data: data
  })
}

export function getById(id) {
  return request({
    url: '/plm-doc/baseCondition/baseCondition/getById?id=' + id,
    method: 'get'
  })
}

export function dels(data) {
  return request({
    url: '/plm-doc/baseCondition/baseCondition/dels',
    method: 'post',
    data
  })
}

export function updateStatus(data) {
  return request({
    url: '/plm-doc/baseCondition/baseCondition/updateStatus',
    method: 'post',
    data
  })
}

export function updateCondition(data) {
  return request({
    url: '/plm-doc/baseCondition/baseCondition/update',
    method: 'post',
    data: data
  })
}

export function getWorkflowInfo(params) {
  return request({
    url: '/plm-doc/baseCondition/baseCondition/getWorkflowInfo',
    method: 'get',
    params
  })
}
/* 根据小分类获取属性对象 */
export function getCondition(data) {
  return request({
    url: `/plm-doc/api/baseAttributeMaterial/getCondition?objectId=${data.objectId}&type=${data.type}`,
    method: 'GET'
  })
}

/* 获取物料类型 */
export function postQueryBaseObjectList(data) {
  return request({
    url: `/plm-doc/objectInstance/queryBaseObjectList`,
    method: 'post',
    data: data
  })
}
