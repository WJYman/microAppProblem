import request from '@/utils/request'
import qs from 'qs'

// 文件信息 删除
export function postAddLog(data) {
  return request({
    url: `/plm-doc/api/operationLog/add`,
    method: 'post',
    data: data
  })
}

export function initData(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get'
  })
}

export function download(url, params) {
  return request({
    url: url + '?' + qs.stringify(params, { indices: false }),
    method: 'get',
    responseType: 'blob'
  })
}

// 获取字段某语言翻译
export function getTranslate(language) {
  return request({
    url: `/plm-doc/api/clearCahche/getTranslate?language=${language}`,
    method: 'GET'
  })
}

// 添加属性弹框的列表接口
export function postAAQueryPageList(params) {
  return request({
    url: '/plm-doc/api/baseAttributeMaterial/queryPageList',
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        name: params.name,
        type: params.type,
        attributeType: params.attributeType,
        status: 1,
        detailsType: params.detailsType
      }
    }
  })
}

// 物料添加属性保存接口
export function postAddAtrributes(data) {
  return request({
    url: '/plm-doc/api/baseObjects/addAtrributes',
    method: 'post',
    data: {
      attributeIds: data.attributeIds,
      objectId: data.objectId
    }
  })
}

// 根据属性查询未绑定的对象
export function queryUnaddedBaseObjects(params) {
  return request({
    url: `/plm-doc/api/baseObjects/queryUnaddedBaseObjects`,
    method: 'get',
    params
  })
}

// 查询数据表下拉选项
export function queryTableNames() {
  return request({
    url: `/plm-doc/api/baseObjects/queryTableNames`,
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

// 点击单条数据查看详情
export function getView(id) {
  return request({
    url: '/plm-doc/api/baseObjects/view?id=' + id,
    method: 'get'
  })
}

// 根据对象主键查询属性
export function queryAttributes(id) {
  return request({
    url: '/plm-doc/api/baseAttributeMaterial/queryAttributes?objectId=' + id,
    method: 'get'
  })
}

// 根据模型以及模型对象树型结构
export function queryModelObjects(id) {
  return request({
    url: '/plm-doc/sysModel/queryModelObjects?primaryCode=' + id,
    method: 'get'
  })
}

export function queryNoBind(data) {
  return request({
    url: `/plm-doc/api/sysMaterialReplace/queryNoBind`,
    method: 'post',
    data
  })
}

// 批量添加物料-替代料类型
export function add(data) {
  return request({
    url: `/plm-doc/api/sysMaterialReplace/add`,
    method: 'post',
    data
  })
}

// 修改物料接口
export function putUpdate(data) {
  return request({
    url: '/plm-doc/api/baseObjects/update',
    method: 'PUT',
    data: data
  })
}

export function queryMarksById(params) {
  return request({
    url: '/plm-doc/objectInstance/queryMarksById',
    method: 'get',
    params
  })
}

// 获取属性数据列表
export function queryBaseAttributeMaterialList(data) {
  return request({
    url: '/plm-doc/api/baseAttributeMaterial/queryList',
    method: 'post',
    data
  })
}

// 获取当前用户授权的RBAC按钮标识符
export function getAuthorizedRbacButton() {
  return request({
    url: '/plm-doc/sysRoleButton/getAuthorizedRbacButton',
    method: 'get'
  })
}
// 获取当前用户授权的条件按钮标识符
export function getAuthorizedConditionButton(data) {
  return request({
    url: '/plm-doc/baseAuthorityConditionButton/getAuthorityConditionButtonStatus',
    method: 'post',
    data
  })
}

// 后台历史记录添加接口
export function baseOperationLogAdds(data) {
  return request({
    url: '/plm-doc/baseOperationLog/adds',
    method: 'post',
    data
  })
}
// 前台新增(系统日志表)数据
export function addOperationLog(data) {
  return request({
    url: '/plm-doc/api/operationLog/add',
    method: 'post',
    data
  })
}
// 需求评审流程 使用位置
export function queryUsePositionForRe(data) {
  return request({
    url: '/plm-doc/objectChange/queryUsePositionForRe',
    method: 'post',
    data
  })
}
