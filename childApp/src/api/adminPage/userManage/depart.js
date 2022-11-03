import request from '@/utils/request'

// 获取部门数据-树状
export function queryTreeNew() {
  return request({
    url: '/plm-doc/api/sysDepart/queryTreeNew',
    method: 'get'
  })
}

// 添加部门
export function addPart(data) {
  return request({
    url: '/plm-doc/api/sysDepart/add',
    method: 'post',
    data
  })
}

// 根据部门id或者部门下的所有用户
export function queryUserListByDepart(params) {
  return request({
    url: '/plm-doc/api/sysUser/queryListdepartAllAll',
    method: 'get',
    params
  })
}

// 根据部门删除用户
export function delPart(params) {
  return request({
    url: '/plm-doc/api/sysDepart/dels',
    method: 'post',
    params
  })
}

// 根据部门删除用户
export function updateSysDepartq(data) {
  return request({
    url: '/plm-doc/api/sysDepart/updateSysDepartq',
    method: 'post',
    data
  })
}

// 删除部门用户
export function delPartUser(data) {
  return request({
    url: '/plm-doc/api/sysUser/deleteDepartUser',
    method: 'POST',
    data
  })
}
