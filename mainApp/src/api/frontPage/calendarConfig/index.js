import request from '@/utils/request'

// 获取日历数据下拉框
export function getQueryList() {
  return request({
    url: '/plm-doc/api/calendar/queryList',
    method: 'get'
  })
}

// 获取日历数据下拉框
export function getView(id) {
  return request({
    url: `/plm-doc/api/calendar/view?id=${id}`,
    method: 'get'
  })
}

// 修改日历数据
export function postUpdate(data) {
  return request({
    url: `/plm-doc/api/calendar/update`,
    method: 'post',
    data: data
  })
}
// 修改日历数据
export function postAdd(data) {
  return request({
    url: `/plm-doc/api/calendar/add`,
    method: 'post',
    data: data
  })
}
// 具体日期设置工作日或休息日
export function postUpdateSpecialDay(data) {
  return request({
    url: `/plm-doc/api/calendar/updateSpecialDay`,
    method: 'post',
    data: data
  })
}

// 批量删除日历
export function deleteDels(data) {
  return request({
    url: '/plm-doc/api/calendar/dels',
    method: 'delete',
    data: data
  })
}

// 获取日历的使用位置
export function getCalendarUsed(id) {
  return request({
    url: `/plm-doc/api/projectManageInstance/calendarUsed?calendarId=${id}`,
    method: 'get'
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

