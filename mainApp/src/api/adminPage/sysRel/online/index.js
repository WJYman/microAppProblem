import request from '@/utils/request'

export function queryLoginSysUsers(data) {
  return request({
    url: '/plm-doc/api/sysUser/queryLoginSysUsers',
    method: 'POST',
    data
  })
}

export function forceLoginOut(data) {
  return request({
    url: '/plm-doc/api/sysUser/forceLoginOut',
    method: 'post',
    data
  })
}
