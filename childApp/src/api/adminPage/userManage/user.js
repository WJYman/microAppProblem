import request from '@/utils/request'

export function queryUserList(params) {
  return request({
    url: '/plm-doc/api/sysUser/queryPageList',
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        queryStr: params.queryStr,
        status: params.status
      }
    }
  })
}

export function addUser(data) {
  return request({
    url: '/plm-doc/api/sysUser/add',
    method: 'post',
    data
  })
}

export function deleteUser(data) {
  return request({
    url: '/plm-doc/api/sysUser/dels',
    method: 'delete',
    data: data
  })
}

export function enableUser(data) {
  return request({
    url: '/plm-doc/api/sysUser/updateEnable',
    method: 'put',
    withCredentials: true,
    data: data
  })
}

export function disableUser(data) {
  return request({
    url: '/plm-doc/api/sysUser/updateDisableEnable',
    method: 'put',
    data
  })
}

export function copyAddUser(data) {
  return request({
    url: '/plm-doc/api/sysUser/copyadd',
    method: 'post',
    data
  })
}

export function viewUser(id) {
  return request({
    url: '/plm-doc/api/sysUser/view?Id=' + id,
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

export function getUserGroup(id) {
  return request({
    url: '/plm-doc/api/sysUser/getSysUsergroupWorkspace?userId=' + id,
    method: 'get'
  })
}

export function getUserRoleOrWorkSpace(id) {
  return request({
    url: '/plm-doc/api/sysUser/getRolesByUser?userId=' + id,
    method: 'get'
  })
}

export function addWorkSpace(data) {
  return request({
    url: '/plm-doc/api/sysUser/addSysUserWork',
    method: 'post',
    data
  })
}

export function queryWorkSpace(data) {
  return request({
    url: '/plm-doc/api/sysWorkspace/getSysWorkspaces',
    method: 'get'
  })
}

export function deleteSysUserWork(id) {
  return request({
    url: '/plm-doc/api/sysUser/deleteSysUserWork?id=' + id,
    method: 'delete'
  })
}

export function addSysUserWork(data) {
  return request({
    url: '/plm-doc/api/sysUser/addSysUserWork',
    method: 'post',
    data: data
  })
}

export function getSpaceSelect(id) {
  return request({
    url: '/plm-doc/api/selectFilter/user-selectworkspace-s?userId=' + id,
    method: 'get'
  })
}

export function queryAllList() {
  return request({
    url: '/plm-doc/api/sysUser/queryList',
    method: 'GET'
  })
}

export function queryAllGroupList() {
  return request({
    url: '/plm-doc/api/sysUsergroup/queryList',
    method: 'GET'
  })
}

export function getRolesFromUserId(id) {
  return request({
    url: '/plm-doc/sysWorkspaceRole/sysWorkspaceRole/getRolesFromUserId?uid=' + id,
    method: 'GET'
  })
}

export function selectWorkSpacesRoleByUser(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/selectWorkSpacesRoleByUser?userId=' + id,
    method: 'GET'
  })
}

export function queryTreeNewAll(params) {
  return request({
    url: '/plm-doc/api/sysDepart/queryTreeNewAll',
    method: 'get',
    params
  })
}

export function zyRole(data) {
  return request({
    url: '/plm-doc/api/sysWorkspace/zyRole',
    method: 'POST',
    data
  })
}

// 已有的转签用户
export function queryTransferUser(params) {
  return request({
    url: '/plm-doc/api/sysTransfer/queryUser',
    method: 'get',
    params
  })
}

// 可添加的转签用户

export function queryTranserAddUser(params) {
  return request({
    url: '/plm-doc/api/sysTransfer/queryAllUser',
    method: 'get',
    params
  })
}

// 添加转签用户
export function addTransferUser(data) {
  return request({
    url: '/plm-doc/api/sysTransfer/addTransferUser',
    method: 'post',
    data
  })
}

// 删除转签用户
export function deleteTransferUser(params) {
  return request({
    url: '/plm-doc/api/sysTransfer/deleteUser',
    method: 'post',
    params
  })
}

// 根据人员id获取为被添加的角色
export function queryUnaddedRoles(data) {
  return request({
    url: '/plm-doc/api/sysUser/queryUnaddedRoles',
    method: 'post',
    data
  })
}

// 根据人员id获取为被添加的角色
export function addRole(data) {
  return request({
    url: '/plm-doc/api/sysUser/addRole',
    method: 'post',
    data
  })
}
export function queryListBySysUser(data) {
  return request({
    url: '/plm-doc/api/sysUser/queryListBySysUser',
    method: 'POST',
    data
  })
}

// token查看用户
export function viewtoken() {
  return request({
    url: '/plm-doc/api/sysUser/viewtoken',
    method: 'GET'
  })
}
