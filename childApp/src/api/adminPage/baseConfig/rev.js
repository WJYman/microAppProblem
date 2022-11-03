import request from '@/utils/request'

export function getAllDatas(data) {
  return request({
    url: `/plm-doc/baseVersionrule/baseVersionrule/queryPageList`,
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: `/plm-doc/baseVersionrule/baseVersionrule/update`,
    method: 'post',
    data
  })
}

export function view(id) {
  return request({
    url: '/plm-doc/baseVersionrule/baseVersionrule/view?id=' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/plm-doc/baseVersionrule/baseVersionrule/add',
    method: 'post',
    data
  })
}

export function dels(data) {
  return request({
    url: '/plm-doc/baseVersionrule/baseVersionrule/dels',
    method: 'delete',
    data
  })
}

export function disRev(data) {
  return request({
    url: '/plm-doc/baseVersionrule/baseVersionrule/disRev',
    method: 'post',
    data
  })
}

export function enRev(data) {
  return request({
    url: '/plm-doc/baseVersionrule/baseVersionrule/enRev',
    method: 'post',
    data
  })
}
