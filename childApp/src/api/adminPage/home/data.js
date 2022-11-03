import request from '@/utils/request'

export function queryPageList(params) {
  return request({
    url: '/plm-doc/api/sysWorkspace/queryPageList',
    method: 'POST',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        workspaceName: params.queryStr
      }
    }
  })
}

export function viewSpace(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/viewuser?id=' + id,
    method: 'GET'
  })
}

export function delSpace(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/del',
    method: 'POST',
    params: {
      id
    }
  })
}

export function updateSpace(data) {
  return request({
    url: '/plm-doc/api/sysWorkspace/update',
    method: 'PUT',
    data
  })
}

export function getUserGroup() {
  return request({
    url: '/plm-doc/api/sysUsergroup/queryList',
    method: 'GET'
  })
}

export function getUser() {
  return request({
    url: '/plm-doc/api/sysUser/queryList',
    method: 'GET'
  })
}

export function getZyUser(query) {
  return request({
    url: '/plm-doc/api/sysWorkspace/listZyuser',
    method: 'GET',
    params: query
  })
}

export function viewSpaceGroup(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/viewusergroup?id=' + id,
    method: 'GET'
  })
}

export function delUserTest(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/deluser?id=' + id,
    method: 'post'
  })
}

export function delUserGroupTest(id) {
  return request({
    url: '/plm-doc/api/sysWorkspace/delusergroup?id=' + id,
    method: 'POST'
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

export function addUsers(data) {
  return request({
    url: '/plm-doc/api/sysWorkspace/addusers',
    method: 'POST',
    data
  })
}

export function updateUserTransfer(data) {
  return request({
    url: '/plm-doc/api/sysWorkspace/updateuser',
    method: 'PUT',
    data
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

export function queryLogList(params) {
  return request({
    url: '/plm-doc/api/sysLog/queryPageList',
    method: 'POST',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        workspaceId: params.workspaceId
      }
    }
  })
}

export function getObjectTemplate(params) {
  return request({
    url: '/plm-doc/api/excel/downLoadObjectTemplate',
    method: 'GET',
    responseType: 'blob',
    params
  })
}
