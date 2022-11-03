import request from '@/utils/request'

export function queryPageList(data) {
  return request({
    url: '/plm-doc/api/baseObjects/queryPageList',
    method: 'POST',
    data
  })
}

export function viewObjectAttributes(id) {
  return request({
    url: '/plm-doc/api/baseObjects/viewObjectAttributes?id=' + id,
    method: 'get'
  })
}

export function getBomAttribute(data) {
  return request({
    url: '/plm-doc/api/baseAttributeMaterial/queryPageList',
    method: 'post',
    data
  })
}

export function queryWorkList(params) {
  return request({
    url: '/plm-doc/api/sysWorkspace/queryPageList',
    method: 'POST',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
      }
    }
  })
}

export function queryFields(modelId) {
  return request({
    url: `/plm-doc/api/sysDict/queryFields?modelId=${modelId}`,
    method: 'get'
  })
}
