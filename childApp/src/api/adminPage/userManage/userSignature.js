import request from '@/utils/request'

export function searchSignUser(data) {
  return request({
    url: '/plm-doc/api/sysUser/searchSignUser',
    method: 'post',
    data
  })
}

export function uploadSign(data) {
  return request({
    url: `/plm-doc/api/sysUser/uploadSign`,
    method: 'post',
    data: data
  })
}
