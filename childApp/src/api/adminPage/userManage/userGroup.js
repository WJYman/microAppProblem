import request from '@/utils/request'

export function queryList(data) {
  return request({
    url: '/plm-doc/api/sysUsergroup/queryPageList',
    method: 'post',
    data
  })
}

export function queryAllUser() {
  return request({
    url: '/plm-doc/api/sysUser/queryList',
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/plm-doc/api/sysUsergroup/add',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: '/plm-doc/api/sysUsergroup/dels',
    method: 'delete',
    data: ids
  })
}

export function view(id) {
  return request({
    url: '/plm-doc/api/sysUsergroup/view?id=' + id,
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: '/plm-doc/api/sysUsergroup/update',
    method: 'put',
    data
  })
}

export function addSysUser(data) {
  return request({
    url: '/plm-doc/api/sysUsergroup/addSysUsergroupUser',
    method: 'post',
    data
  })
}

export function delSysUser(data) {
  return request({
    url: '/plm-doc/api/sysUsergroup/removeSysUsergroupUser',
    method: 'post',
    data
  })
}

export function addUserGroupWorkSpace(data) {
  return request({
    url: '/plm-doc/api/sysUsergroup/addSysUsergroupWorkSpace',
    method: 'post',
    data
  })
}

export function delUserGroupWorkSpace(data) {
  return request({
    url: '/plm-doc/api/sysUsergroup/removeSysUsergroupWorkSpace',
    method: 'post',
    data
  })
}

export function getUserSelect(id) {
  return request({
    url: '/plm-doc/api/selectFilter/usergroup-selectuser-s?usergroupId=' + id,
    method: 'get'
  })
}

export function getSpaceSelect(id) {
  return request({
    url: '/plm-doc/api/selectFilter/usergroup-selectworkspace-s?usergroupId=' + id,
    method: 'get'
  })
}
