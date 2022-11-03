import request from '@/utils/request'
// 基础设置的接口
export function viewBaseParams() {
  return request({
    url: '/plm-doc/api/baseSetting/view',
    method: 'GET'
  })
}
