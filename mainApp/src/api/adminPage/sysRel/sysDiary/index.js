import request from '@/utils/request'

export function queryPageList(params) {
  return request({
    url: '/plm-doc/api/sysLog/queryPageList',
    method: 'POST',
    data: params
  })
}

export function exportHistory(data) {
  return request({
    url: '/plm-doc/api/sysLog/downloadLocalFromBrowser',
    method: 'POST',
    data
  })
}
