import request from '@/utils/request'

export function queryList(data) {
  return request({
    url: '/plm-doc/api/sysRole/queryPageList',
    method: 'post',
    data
  })
}

export function add(data) {
  return request({
    url: '/plm-doc/api/sysRole/add',
    method: 'post',
    data
  })
}

export function copyAdd(data) {
  return request({
    url: '/plm-doc/api/sysRole/addByOne',
    method: 'post',
    data
  })
}

export function queryAllGroup(ids) {
  return request({
    url: '/plm-doc/api/sysUsergroup/queryList',
    method: 'get'
  })
}

export function view(id) {
  return request({
    url: '/plm-doc/api/sysRole/view?id=' + id,
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: '/plm-doc/api/sysRole/update',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: '/plm-doc/api/sysRole/dels',
    method: 'delete',
    data: ids
  })
}

export function selectRoleUnRalatedUser(id, name) {
  return request({
    url: `/plm-doc/api/sysRole/selectRoleUnRalatedUser?id=${id}&userName=${name}`,
    method: 'get'
  })
}

export function addRoleUser(data) {
  return request({
    url: ' /plm-doc/api/sysRole/addRoleUser',
    method: 'post',
    data
  })
}
export function addRoleUsergroup(data) {
  return request({
    url: '/plm-doc/api/sysRole/addRoleUsergroup',
    method: 'post',
    data
  })
}

export function selectRoleUnRalatedUserGroup(id) {
  return request({
    url: '/plm-doc/api/sysRole/selectRoleUnRalatedUserGroup?id=' + id,
    method: 'get'
  })
}

export function deleteRoleUser(params) {
  return request({
    url: '/plm-doc/api/sysRole/deleteRoleUser',
    method: 'post',
    params
  })
}

export function deleteRoleUsergroup(params) {
  return request({
    url: '/plm-doc/api/sysRole/deleteRoleUsergroup',
    method: 'post',
    params
  })
}
/** 获取(启用角色)数据列表 */
export function sysRoleList(params) {
  return request({
    url: '/plm-doc/api/sysRole/queryList',
    method: 'get',
    params
  })
}
/** 获取数据列表 */
export function sysUser(params) {
  return request({
    url: '/plm-doc/api/sysUser/queryList',
    method: 'get',
    params
  })
}
// 获取所有的权限
export function queryAuthList(data) {
  return request({
    url: '/plm-doc/api/baseAuthority/queryAuthorityList',
    method: 'post',
    data
  })
}

// 查询角色权限
export function getRoleInfo(params) {
  return request({
    url: '/plm-doc/api/sysRole/getRoleInfo',
    method: 'get',
    params
  })
}

// 查询角色权限
export function deleteRoleAuthority(params) {
  return request({
    url: '/plm-doc/api/sysRole/deleteRoleAuthority',
    method: 'post',
    params
  })
}

export function addRoleAuthority(data) {
  return request({
    url: '/plm-doc/api/sysRole/addRoleAuthority',
    method: 'post',
    data
  })
}
// 获取工作空间信息
export function viewSpaceInfo(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/view?id=' + id,
    method: 'GET'
  })
}
