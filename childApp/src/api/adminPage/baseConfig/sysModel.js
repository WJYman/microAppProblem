import request from '@/utils/request'

// 获取主分类模型表数据
export function queryPrimarys(data) {
  return request({
    url: '/plm-doc/sysModel/queryPrimarys',
    method: 'post',
    data
  })
}
// 添加系统模型表数据
export function addSysModel(data) {
  return request({
    url: '/plm-doc/sysModel/add',
    method: 'post',
    data
  })
}
// 删除主分类模型
export function delPrimaryModel(id) {
  return request({
    url: '/plm-doc/sysModel/delPrimaryModel?id=' + id,
    method: 'delete'
  })
}
// 获取二级分类模型表数据
export function querySecondaryPageList(data) {
  return request({
    url: '/plm-doc/sysModel/querySecondaryPageList',
    method: 'post',
    data
  })
}
// 删除二级分类模型
export function delSecondaryModels(data) {
  return request({
    url: '/plm-doc/sysModel/delSecondaryModels',
    method: 'delete',
    data
  })
}
// 查看二级分类模型详情信息
export function viewSecondaryModel(id) {
  return request({
    url: '/plm-doc/sysModel/viewSecondaryModel?id=' + id,
    method: 'get'
  })
}
// 添加系统模型生命周期表数据
export function addSysModelLifeCycle(data) {
  return request({
    url: '/plm-doc/sysModelLifeCycle/add',
    method: 'post',
    data
  })
}
// 修改系统模型表数据
export function updateSysModel(data) {
  return request({
    url: '/plm-doc/sysModel/update',
    method: 'post',
    data
  })
}
// 批量删除系统模型生命周期表
export function delSysModelLifeCycle(data) {
  return request({
    url: '/plm-doc/sysModelLifeCycle/dels',
    method: 'post',
    data
  })
}
// 修改系统模型生命周期表数据
export function updateSysModelLifeCycle(data) {
  return request({
    url: '/plm-doc/sysModelLifeCycle/update',
    method: 'post',
    data
  })
}

// 获取未被添加的模型属性关联表数据
export function queryNoAddList(data) {
  return request({
    url: '/plm-doc/sysModelAttribute/queryNoAddList',
    method: 'post',
    data
  })
}
// 添加模型属性关联表数据
export function addSysModelAttribute(data) {
  return request({
    url: '/plm-doc/sysModelAttribute/add',
    method: 'post',
    data
  })
}
// 删除模型属性关联表
export function delSysModelAttribute(id) {
  return request({
    url: '/plm-doc/sysModelAttribute/del?id=' + id,
    method: 'post'
  })
}
// 获取系统模板分类数据-列表
export function querySysModelClassifyList(data) {
  return request({
    url: '/plm-doc/sysModelClassify/queryList',
    method: 'post',
    data
  })
}
// 添加系统模板分类数据
export function addSysModelClassify(data) {
  return request({
    url: '/plm-doc/sysModelClassify/add',
    method: 'post',
    data
  })
}
// 删除系统模板分类
export function delSysModelClassify(id) {
  return request({
    url: '/plm-doc/sysModelClassify/del?id=' + id,
    method: 'post'
  })
}
// 修改系统模板分类数据
export function updateSysModelClassify(data) {
  return request({
    url: '/plm-doc/sysModelClassify/update',
    method: 'post',
    data
  })
}
// 根据id查询生命周期
export function viewSysModelLifeCycle(id) {
  return request({
    url: '/plm-doc/sysModelLifeCycle/view?id=' + id,
    method: 'get'

  })
}
// 获取模型属性关联表数据-列表
export function querySysModelAttributeList(data) {
  return request({
    url: '/plm-doc/sysModelAttribute/queryList',
    method: 'post',
    data
  })
}
// 修改模型属性关联表顺序
export function updateOrder(data) {
  return request({
    url: '/plm-doc/sysModelAttribute/updateOrder',
    method: 'post',
    data
  })
}
// 同步数据表
export function synchronizeDataTable(id) {
  return request({
    url: '/plm-doc/sysModel/synchronizeDataTable?id=' + id,
    method: 'post'
  })
}
// 获取主分类模型表数据
export function querySysModelTree() {
  return request({
    url: '/plm-doc/sysModel/queryTreeData',
    method: 'get'
  })
}
// 获取所有的基本数据权限可见的模型树型结构数据
export function queryTreeForBaseDataPermission() {
  return request({
    url: '/plm-doc/sysModel/queryTreeForBaseDataPermission',
    method: 'get'
  })
}
// 创建菜单
export function createMenu(id) {
  return request({
    url: '/plm-doc/sysModel/createMenu?id=' + id,
    method: 'get'
  })
}
// 根据模型主键获取表字段
export function queryTableFieldById(id) {
  return request({
    url: '/plm-doc/sysModel/queryTableFieldById?id=' + id,
    method: 'get'
  })
}
// 根据模型主键获取表字段
export function queryTableFieldByCode(SecondaryCode, primaryCode) {
  return request({
    url: '/plm-doc/sysModel/queryTableFieldByCode?SecondaryCode=' + SecondaryCode + '&primaryCode=' + primaryCode,
    method: 'get'
  })
}
