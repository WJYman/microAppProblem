import request from '@/utils/request'

// 添加定时任务
export function add(data) {
  return request({
    url: '/plm-doc/api/quartzJob/add',
    method: 'POST',
    data
  })
}

// 获取列表
export function list(data) {
  return request({
    url: '/plm-doc/api/quartzJob/list',
    method: 'POST',
    data
  })
}

// 立即执行
export function execute(params) {
  return request({
    url: '/plm-doc/api/quartzJob/execute',
    method: 'GET',
    params
  })
}

// 暂停
export function pause(params) {
  return request({
    url: '/plm-doc/api/quartzJob/pause',
    method: 'GET',
    params
  })
}

// 通过ID查询
export function queryById(params) {
  return request({
    url: '/plm-doc/api/quartzJob/queryById',
    method: 'GET',
    params
  })
}

// 恢复定时任务
export function resume(params) {
  return request({
    url: '/plm-doc/api/quartzJob/resume',
    method: 'GET',
    params
  })
}

// 更新定时任务
export function edit(data) {
  return request({
    url: '/plm-doc/api/quartzJob/edit',
    method: 'PUT',
    data
  })
}

// 单个删除
export function deletes(params) {
  return request({
    url: '/plm-doc/api/quartzJob/delete',
    method: 'DELETE',
    params
  })
}
