import request from '@/utils/request'

// 添加菜单
export function add(data) {
  return request({
    url: '/plm-doc/sysMenu/add',
    method: 'post',
    data
  })
}

// 添加菜单
export function selFirstMenu(data) {
  return request({
    url: '/plm-doc/sysMenu/selFirstMenu',
    method: 'post',
    data
  })
}

// 获取所有菜单选择
export function selAllMenu(params) {
  return request({
    url: '/plm-doc/sysMenu/selAllMenu',
    method: 'get',
    params
  })
}

// 获取下级菜单选择
export function selMenuById(params) {
  return request({
    url: '/plm-doc/sysMenu/selMenuById',
    method: 'get',
    params
  })
}

// 查询当前菜单信息
export function query(params) {
  return request({
    url: '/plm-doc/sysMenu/query',
    method: 'get',
    params
  })
}

// 更新当前菜单信息
export function update(data) {
  return request({
    url: '/plm-doc/sysMenu/update',
    method: 'post',
    data
  })
}

// 删除菜单信息
export function delChoose(data) {
  return request({
    url: '/plm-doc/sysMenu/delChoose',
    method: 'post',
    data
  })
}

// 删除菜单信息
export function getIdByRoleId(params) {
  return request({
    url: '/plm-doc/sysMenu/getIdByRoleId',
    method: 'get',
    params
  })
}

// 角色绑定菜单
export function bindRole(data) {
  return request({
    url: '/plm-doc/sysMenu/bindRole',
    method: 'post',
    data
  })
}

export function updateStatus(params) {
  return request({
    url: '/plm-doc/sysMenu/setEnable',
    method: 'post',
    params
  })
}
