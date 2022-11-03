import request from '@/utils/request'
import Qs from 'qs'
// const url = '/plm-doc/api/baseCoderule/view'

/* 获取(物料属性)分页数据列表 */
export function getAllDatas(data) {
  return request({
    url: `/plm-doc/api/baseAttributeMaterial/queryPageList`,
    method: 'post',
    data
  })
}
/* 查看(物料属性)数据 */
export function getDetail(params) {
  return request({
    url: `/plm-doc/api/baseAttributeMaterial/view`,
    method: 'get',
    params
  })
}
/* 更新为bom可见 */
export function updateBom(data) {
  /* 不可见 */
  const url = `/plm-doc/api/baseAttributeMaterial/updateBomDisable`
  /* 可见 */
  const url1 = `/plm-doc/api/baseAttributeMaterial/updateBomVisible`
  return request({
    url: Number(data.bom) ? url1 : url,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'put',
    data: Qs.stringify(data)
    //
  })
}
/* 新增(物料属性)数据 */
export function postAdd(data) {
  return request({
    url: `/plm-doc/api/baseAttributeMaterial/add`,
    method: 'post',
    data
  })
}
/* 批量删除(物料属性)数据 */
export function deleteDels(data) {
  return request({
    url: `/plm-doc/api/baseAttributeMaterial/dels`,
    method: 'post',
    data
  })
}
/* 批量禁用属性(4种类型公用接口) */
export function putUpdateDisableEnable(data) {
  return request({
    url: `/plm-doc/api/baseAttributeMaterial/updateDisable`,
    method: 'post',
    data
  })
}
/* 批量启用属性 */
export function putUpdateEnable(data) {
  return request({
    url: `/plm-doc/api/baseAttributeMaterial/updateEnable`,
    method: 'post',
    data
  })
}
/* 修改(物料属性)数据 */
export function putUpdate(data) {
  return request({
    url: `/plm-doc/api/baseAttributeMaterial/update`,
    method: 'post',
    data
  })
}
/* 获取(字典主表)数据列表 列表值*/
export function getListValue(data) {
  return request({
    url: `/plm-doc/api/sysDict/queryList`,
    method: 'post',
    data
  })
}
/* code数据列表 列表值中的下拉数据*/
export function getListDefaults(data) {
  return request({
    url: `/plm-doc/api/sysDict/queryListSelectData?code=${data.code}`,
    method: 'post'
  })
}

/* code数据列表 列表值中的下拉数据*/
export function viewSysDict(code) {
  return request({
    url: `/plm-doc/api/sysDict/viewSysDict?code=${code}`,
    method: 'get'
  })
}

// 获取费用属性
export function constAttributes() {
  return request({
    url: '/plm-doc/api/projectManageInstance/costAttributes',
    method: 'get'
  })
}

// 更新项目 属性 名称 及启用状态
export function updateCostAttribute(data) {
  return request({
    url: '/plm-doc/api/projectManageInstance/updateCostAttribute',
    method: 'post',
    data
  })
}

// 属性绑定对象
export function addObject(data) {
  return request({
    url: '/plm-doc/api/baseAttributeMaterial/addObject',
    method: 'post',
    data
  })
}

// 属性绑定对象
export function queryaddedBaseObjects(attrId) {
  return request({
    url: `/plm-doc/api/baseObjects/queryaddedBaseObjects?attrId=${attrId}`,
    method: 'GET'
  })
}
