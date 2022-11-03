import request from '@/utils/request'

export function license(data) {
  return request({
    url: '/plm-doc/api/baseSetting/license',
    method: 'post',
    data
  })
}

export function ImportLicense(data) {
  return request({
    url: '/plm-doc/api/baseSetting/ImportLicense',
    method: 'post',
    data
  })
}

export function getUserList() {
  return request({
    url: '/plm-doc/api/baseSetting/getUserList',
    method: 'get'
  })
}
