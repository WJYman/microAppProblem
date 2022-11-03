import request from '@/utils/request'

// 根据工作空间ID获取项目报表
export function projectReport(data) {
  return request({
    url: '/plm-doc/api/report/project',
    method: 'POST',
    data
  })
}

// 根据工作空间ID获取项目成员报表
export function memberReport(data) {
  return request({
    url: '/plm-doc/api/report/member',
    method: 'POST',
    data
  })
}

// 工时统计报表
export function getWorkTime(data) {
  return request({
    url: `/plm-doc/api/report/workTime`,
    method: 'POST',
    data
  })
}

// 根据工作空间ID获取各个分类数量
export function getClassficationCount(params) {
  return request({
    url: '/plm-doc/api/report/queryObjects',
    method: 'get',
    params
  })
}

// 个人延期报表
export function getPersonalDelay(data) {
  return request({
    url: `/plm-doc/api/report/personalDelay`,
    method: 'POST',
    data
  })
}

// 项目延期报表
export function getProjectDelay(data) {
  return request({
    url: `/plm-doc/api/report/projectDelay`,
    method: 'POST',
    data
  })
}

// 可完成的活动
export function canPublishProject(data) {
  return request({
    url: `/plm-doc/api/report/canPublishProject`,
    method: 'POST',
    data
  })
}

// 导出项目
export function exportProject(params) {
  return request({
    url: `/plm-doc/sys/api/report/excel/project`,
    method: 'get',
    responseType: 'blob',
    params
  })
}

// 导出成员
export function exportMember(params) {
  return request({
    url: `/plm-doc/sys/api/report/excel/member`,
    method: 'get',
    responseType: 'blob',
    params
  })
}

// 导出工时
export function exportTime(params) {
  return request({
    url: `/plm-doc/sys/api/report/excel/workTime`,
    method: 'get',
    responseType: 'blob',
    params
  })
}

// 导出任务延时
export function exportTaskDelay(params) {
  return request({
    url: `/plm-doc/sys/api/report/excel/projectDelay`,
    method: 'get',
    responseType: 'blob',
    params
  })
}

// 导出个人延时
export function exportPersonalDelay(params) {
  return request({
    url: `/plm-doc/sys/api/report/excel/personalDelay`,
    method: 'get',
    responseType: 'blob',
    params
  })
}

// 导出可完成的任务
export function exportcanPublishProject(params) {
  return request({
    url: `/plm-doc/sys/api/report/excel/canPublishProject`,
    method: 'get',
    responseType: 'blob',
    params
  })
}

// 获取项目费用列表
export function getGraphData(params) {
  return request({
    url: `/plm-doc/api/projectManageInstance/getGraphData`,
    method: 'get',
    params
  })
}
