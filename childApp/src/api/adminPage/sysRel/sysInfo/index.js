import request from '@/utils/request'

export function view() {
  return request({
    url: '/plm-doc/api/baseSetting/view',
    method: 'GET'
  })
}

export function update(data) {
  return request({
    url: '/plm-doc/api/baseSetting/update',
    method: 'POST',
    data
  })
}

export function uploadImage(data) {
  return request({
    url: '/plm-doc/api/baseSetting/upload',
    method: 'POST',
    data
  })
}
