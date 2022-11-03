import request from '@/utils/request'

export function viewtoken() {
  return request({
    url: '/plm-doc/api/sysUser/viewtoken',
    method: 'GET'
  })
}

export function getUserRoleOrWorkSpace(id) {
  return request({
    url: '/plm-doc/api/sysUser/getRolesByUser?userId=' + id,
    method: 'get'
  })
}

export function updateUser(data) {
  return request({
    url: '/plm-doc/api/sysUser/update',
    method: 'post',
    data
  })
}

export function updateSpace(data) {
  return request({
    url: '/plm-doc/api/sysWorkspace/update',
    method: 'PUT',
    data
  })
}

export function postUpload(params) {
  return request({
    url: `/plm-doc/api/sysUser/upload`,
    method: 'post',
    params
  })
}
