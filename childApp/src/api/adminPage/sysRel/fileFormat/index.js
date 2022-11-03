import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/plm-doc/baseFilelimit/baseFilelimit/add',
    method: 'POST',
    data: data
  })
}

export function view(id) {
  return request({
    url: '/plm-doc/baseFilelimit/baseFilelimit/view?id=' + id,
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: '/plm-doc/baseFilelimit/baseFilelimit/update',
    method: 'POST',
    data: data
  })
}

export function dels(data) {
  return request({
    url: '/plm-doc/baseFilelimit/baseFilelimit/dels',
    method: 'POST',
    data: data
  })
}

export function delsCheck(data) {
  return request({
    url: '/plm-doc/baseFilelimit/baseFilelimit/delsCheck',
    method: 'POST',
    data: data
  })
}

export function queryPageList(data) {
  return request({
    url: '/plm-doc/baseFilelimit/baseFilelimit/queryPageList',
    method: 'POST',
    data: data
  })
}

