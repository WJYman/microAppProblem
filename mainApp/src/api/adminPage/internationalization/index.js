import request from '@/utils/request'

// 语种维护

// 获取(语言维护属性)分页数据列表
export function postPageList(data = null) {
  return request({
    url: '/plm-doc/api/sysLanguageMaintenanceMaterial/queryList',
    method: 'post',
    data
  })
}

// 新增(语言维护)数据
export function postAdd(data = null) {
  return request({
    url: '/plm-doc/api/sysLanguageMaintenanceMaterial/add',
    method: 'post',
    data
  })
}

// 更新(语言维护)数据
export function postUpdate(data = null) {
  return request({
    url: '/plm-doc/api/sysLanguageMaintenanceMaterial/update',
    method: 'post',
    data
  })
}

// 批量更新(语言维护)状态
export function postBatchUpdateStatus(data = null) {
  return request({
    url: '/plm-doc/api/sysLanguageMaintenanceMaterial/batchUpdateStatus',
    method: 'post',
    data
  })
}

// 删除(语言维护)数据
export function postDel(data = null) {
  return request({
    url: '/plm-doc/api/sysLanguageMaintenanceMaterial/del',
    method: 'post',
    data
  })
}

// 国际化字段维护

// 获取(国际化字段维护属性)数据列表
export function getCodePageList(data = null) {
  return request({
    url: `/plm-doc/api/sysInternationalizedMaintenance/queryList?search=${data}`,
    method: 'get',
    data
  })
}

// 新增(国际化字段维护)数据
export function postCodeAdd(data = null) {
  return request({
    url: '/plm-doc/api/sysInternationalizedMaintenance/add',
    method: 'post',
    data
  })
}

// 删除(国际化字段维护)数据
export function postCodeDel(data = null) {
  return request({
    url: '/plm-doc/api/sysInternationalizedMaintenance/del',
    method: 'post',
    data
  })
}

// 更新(语言维护)数据
export function postCodeUpdate(data = null) {
  return request({
    url: '/plm-doc/api/sysInternationalizedMaintenance/update',
    method: 'post',
    data
  })
}

// 动态获取国际化语言维护属性列
export function getQueryAutoList(type) {
  return request({
    url: `/plm-doc/api/sysInternationalizedMaintenance/queryAutoList?type=${type}`,
    method: 'get'
  })
}

// 获取国际化语言维护列表
export function getQueryConfigList(search, type) {
  return request({
    url: `/plm-doc/api/sysInternationalizedMaintenance/queryConfigList?search=${search}&type=${type}`,
    method: 'get'
  })
}

// 修改国际化语言配置
export function postUpdateLanguageConfig(data = null) {
  return request({
    url: '/plm-doc/api/sysInternationalizedMaintenance/updateLanguageConfig',
    method: 'post',
    data
  })
}

// 动态获取国际化语言维护属性列
export function clear() {
  return request({
    url: `/plm-doc/api/clearCahche/clear`,
    method: 'get'
  })
}

/**
 * 国际化页签列表
 */
export function querySecondaryPageList(data) {
  return request({
    url: `/plm-doc/sysPageTip/sysPageTip/queryTabs`,
    method: 'post',
    data
  })
}

/**
 * 菜单列表
 */
export function queryMenuList(data) {
  return request({
    url: `/plm-doc/sysPageTip/sysPageTip/queryMenuList`,
    method: 'post',
    data
  })
}

/**
 * 提示语列表
 */
export function queryTipsList(data) {
  return request({
    url: `/plm-doc/api/sysInternationalizedMaintenance/queryChineseAndEnglish`,
    method: 'post',
    data
  })
}
