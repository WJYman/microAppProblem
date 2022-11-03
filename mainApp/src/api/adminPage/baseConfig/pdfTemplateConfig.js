import request from '@/utils/request'

/* 获取(字典主表)分页数据列表 */
export function queryPdfList(params) {
  return request({
    url: `/plm-doc/api/sysPdf/queryPdfList`,
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        name: params.name
      }
    }
  })
}

// 禁用接口
export function updateDisable(data) {
  return request({
    url: '/plm-doc/api/sysPdf/updateDisable',
    method: 'POST',
    data: data
  })
}

// 启用接口
export function updateEnable(data) {
  return request({
    url: '/plm-doc/api/sysPdf/updateEnable',
    method: 'POST',
    data: data
  })
}

// 列表值，删除接口
export function delSysPdf(data) {
  return request({
    url: '/plm-doc/api/sysPdf/delSysPdf',
    method: 'delete',
    data: data
  })
}

// 新增接口
export function addSysPdf(data) {
  return request({
    url: '/plm-doc/api/sysPdf/addSysPdf',
    method: 'post',
    data
  })
}

// 修改接口
export function updateSysPdf(data) {
  return request({
    url: '/plm-doc/api/sysPdf/updateSysPdf',
    method: 'post',
    data
  })
}

// 获取PDF位置数据-列表
export function queryList(params) {
  return request({
    url: '/plm-doc/api/SysPdfPosition/queryList',
    method: 'get',
    params
  })
}

// 批量删除PDF位置
export function dels(data) {
  return request({
    url: '/plm-doc/api/SysPdfPosition/dels',
    method: 'delete',
    data: data
  })
}

// 新增pdf位置字表
export function addPdfPosition(data) {
  return request({
    url: '/plm-doc/api/SysPdfPosition/addPdfPosition',
    method: 'post',
    data
  })
}

// 修改pdf位置表
export function updatePdfPosition(data) {
  return request({
    url: '/plm-doc/api/SysPdfPosition/updatePdfPosition',
    method: 'post',
    data
  })
}

