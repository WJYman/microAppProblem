import request from '@/utils/request'

// 列表接口
export function postQueryPageList(params) {
  return request({
    url: '/plm-doc/api/baseAuthority/queryPageList',
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        search: params.search,
        type: params.type,
        condition: params.condition,
        column: params.column
      }
    }
  })
}

// 启用接口
export function putUpdateEnable(data) {
  return request({
    url: '/plm-doc/api/baseAuthority/updatEnable',
    method: 'put',
    data: data
  })
}

// 禁用接口
export function putUpdateDisable(data) {
  return request({
    url: '/plm-doc/api/baseAuthority/updateDisable',
    method: 'put',
    data: data
  })
}

// 删除接口
export function deleteDels(data) {
  return request({
    url: '/plm-doc/api/baseAuthority/dels',
    method: 'delete',
    data: data
  })
}

// 新增接口
export function postAdd(data) {
  return request({
    url: '/plm-doc/api/baseAuthority/add',
    method: 'post',
    data
  })
}

// 获取对象类型接口
export function getBaseObjects() {
  return request({
    url: '/plm-doc/api/baseAuthority/getBaseObjects',
    method: 'get'
  })
}

// 获取所有条件
export function getAll(params) {
  return request({
    url: '/plm-doc/baseCondition/baseCondition/getAll',
    method: 'get',
    params
  })
}

// 根据条件获取对象
export function getBaseObjectsByConditionId(conditionId) {
  return request({
    url: `/plm-doc/api/baseAuthority/getBaseObjectsByConditionId?conditionId=${conditionId}`,
    method: 'get'
  })
}

// 搜索-点击左侧的分类动态获取属性
export function getAutoColumn(data) {
  return request({
    url: `/plm-doc/api/baseAuthority/getAutoColumn?objectId=${data.objectId}&type=${data.type}`,
    method: 'get'
  })
}

// 权限-获取全局角色和权限角色
export function getRoles() {
  return request({
    url: `/plm-doc/api/baseAuthority/getRoles`,
    method: 'get'
  })
}

// 修改权限管理数据
export function postUpdate(data) {
  return request({
    url: '/plm-doc/api/baseAuthority/update',
    method: 'post',
    data
  })
}

// 根据id获取对应实体数据
export function getQueryById(id) {
  return request({
    url: '/plm-doc/api/baseAuthority/queryById?id=' + id,
    method: 'get'
  })
}

// 获取角色过滤掉被添加过
export function getSysRoleExist(id) {
  return request({
    url: '/plm-doc/api/baseAuthority/getSysRoleExist?id=' + id,
    method: 'get'
  })
}

// 添加角色，id：权限表主键|ids：角色表主键
export function addRoles(data) {
  return request({
    url: '/plm-doc/api/baseAuthority/addRoles',
    method: 'put',
    data: {
      id: data.id,
      ids: data.ids
    }
  })
}

// 删除角色，id：权限表主键|ids：角色表主键
export function delRoles(data) {
  return request({
    url: '/plm-doc/api/baseAuthority/delRoles',
    method: 'put',
    data: {
      id: data.id,
      ids: data.ids
    }
  })
}

// 操作记录
export function operationLog(data) {
  return request({
    url: '/plm-doc/api/operationLog/queryPageList',
    method: 'post',
    data
  })
}

// 根据权限获取对象类型接口
export function queryBaseObjectList(data) {
  return request({
    url: '/plm-doc/objectInstance/queryBaseObjectList',
    method: 'post',
    data
  })
}

// 获取所有基础数据权限
export function queryBaseDataPermissionList(data) {
  return request({
    url: '/plm-doc/sysBaseDataPermission/queryPageList',
    method: 'post',
    data
  })
}

// 更新数据基础权限
export function updateBaseDataPermission(data) {
  return request({
    url: '/plm-doc/sysBaseDataPermission/update',
    method: 'post',
    data
  })
}
