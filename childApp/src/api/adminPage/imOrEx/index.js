import request from '@/utils/request'

export function postUpload(data) {
  return request({
    url: `/plm-doc/api/excel/getExcelBaseInfo`,
    method: 'post',
    data: data
  })
}

export function getExcelAttr(data) {
  return request({
    url: `/plm-doc/api/excel/getExcelAndTableColumn`,
    method: 'post',
    data: data
  })
}

export function finalImport(data) {
  return request({
    url: `/plm-doc/api/excel/importExcel`,
    method: 'post',
    data: data
  })
}

export function importObjectExcel(data) {
  return request({
    url: `/plm-doc/api/excel/importObjectExcel`,
    method: 'post',
    data: data
  })
}

export function importRelationExcel(data) {
  return request({
    url: `/plm-doc/api/excel/importRelationExcel`,
    method: 'post',
    data: data
  })
}

export function downLoadTemplate(data) {
  return request({
    url: '/plm-doc/api/excel/downLoadTemplate?fileType=' + data,
    responseType: 'blob',
    method: 'get'
  })
}

export function exportExcel(params) {
  return request({
    url: '/plm-doc/api/excel/exportExcel?' + params,
    method: 'get',
    responseType: 'blob'
  })
}
export function exportProjectExcel(params) {
  return request({
    url: '/plm-doc/api/projectManageInstance/exportProjectExcel?' + params,
    method: 'get',
    responseType: 'blob'
  })
}

export function exportPrint(params) {
  return request({
    url: '/plm-doc/api/excel/print?' + params,
    method: 'get'
  })
}
// 打印
export function exportPrintPro(params) {
  return request({
    url: '/plm-doc/api/projectManageInstance/projectPrint?' + params,
    method: 'get'
  })
}
// 测试获取列表
export function queryBaseAttribute(params) {
  return request({
    url: '/plm-doc/objectInstance/queryBaseAttribute',
    method: 'get',
    params
  })
}
// BOM导入
export function importObjectBom(data) {
  return request({
    url: '/plm-doc/api/excel/importObjectBom',
    method: 'post',
    data
  })
}
