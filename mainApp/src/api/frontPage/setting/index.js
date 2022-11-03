import request from '@/utils/request'

export function viewuser(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/viewuser?id=' + id,
    method: 'GET'
  })
}

export function viewusergroup(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/viewusergroup?id=' + id,
    method: 'GET'
  })
}
export function updateWrite1(data) {
  return request({
    url: `/plm-doc/api/sysWorkspace/updategroupWrite`,
    method: 'PUT',
    data
  })
}

export function updateRead1(data) {
  return request({
    url: `/plm-doc/api/sysWorkspace/updategroupRead`,
    method: 'PUT',
    data
  })
}

export function updateWrite(data) {
  return request({
    url: `/plm-doc/api/sysWorkspace/updateuserWrite`,
    method: 'PUT',
    data
  })
}

export function updateRead(data) {
  return request({
    url: `/plm-doc/api/sysWorkspace/updateuserRead`,
    method: 'PUT',
    data
  })
}

export function delUserTest(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/deluser?id=' + id,
    method: 'POST'
  })
}

export function delUserGroupTest(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/delusergroup?id=' + id,
    method: 'POST'
  })
}
export function getUserSelect(id) {
  return request({
    url: '/plm-doc/api/selectFilter/workspace-select-s?workspaceId=' + id,
    method: 'GET'
  })
}

export function getUserGroupSelect(id) {
  return request({
    url: '/plm-doc/api/selectFilter/workspacegroup-selectuser-s?workspaceId=' + id,
    method: 'GET'
  })
}

export function addUsers(data) {
  return request({
    url: '/plm-doc/api/sysWorkspace/addusers',
    method: 'POST',
    data
  })
}

export function addUserGroup(params) {
  return request({
    url: '/plm-doc/api/sysWorkspace/addusergroup',
    method: 'POST',
    data: {
      usergroupId: params.groupId,
      workspaceId: params.spaceId
    }
  })
}

export function view(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/view?id=' + id,
    method: 'GET'
  })
}

export function updateSpace(data) {
  return request({
    url: '/plm-doc/api/sysWorkspace/update',
    method: 'PUT',
    data
  })
}

export function postUpload(data) {
  return request({
    url: `/plm-doc/api/sysWorkspace/upload`,
    method: 'post',
    data: data
  })
}

export function listWkRole(workspaceId) {
  return request({
    url: '/plm-doc/sysWorkspaceRole/sysWorkspaceRole/listWkRole?' + 'workspaceId=' + workspaceId,
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/plm-doc/sysWorkspaceRole/sysWorkspaceRole/add',
    method: 'post',
    data
  })
}

export function queryRolePageList(params) {
  return request({
    url: '/plm-doc/sysWorkspaceRole/sysWorkspaceRole/queryPageList',
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        workspaceId: params.workspaceId
      }
    }
  })
}

export function queryRoleList(params) {
  return request({
    url: '/plm-doc/sysWorkspaceRole/sysWorkspaceRole/queryList',
    method: 'post',
    data: {
      workspaceId: params.workspaceId
    }
  })
}

export function delById(id) {
  return request({
    url: '/plm-doc/sysWorkspaceRole/sysWorkspaceRole/delById?' + 'id=' + id,
    method: 'post'
  })
}

export function updateRole(data) {
  return request({
    url: '/plm-doc/sysWorkspaceRole/sysWorkspaceRole/update',
    method: 'post',
    data
  })
}
