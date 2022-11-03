import request from '@/utils/request'

export function countstatus(params) {
  return request({
    url: '/plm-doc/objectInstance/countstatus',
    method: 'POST',
    params
  })
}

export function view(params) {
  return request({
    url: '/plm-doc/objectAttachment/view',
    method: 'POST',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        workspaceId: params.workspaceId,
        type: params.type
      }
    }
  })
}

export function viewObject(params) {
  return request({
    url: '/plm-doc/objectInstance/view',
    method: 'POST',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        workspaceId: params.workspaceId,
        type: params.type
      }
    }
  })
}

// 项目延期图表
export function projectDelayChart(workspaceId) {
  return request({
    url: '/plm-doc/api/report/projectDelayChart',
    method: 'post',
    data: {
      pageNo: 0,
      pageSize: 0,
      t: {
        name: '',
        userId: '',
        workspaceId: workspaceId
      }
    }
  })
}

// 工时统计图表
export function workTimeChart(workspaceId) {
  return request({
    url: '/plm-doc/api/report/workTimeChart',
    method: 'post',
    data: {
      pageNo: 0,
      pageSize: 0,
      t: {
        name: '',
        userId: '',
        workspaceId: workspaceId
      }
    }
  })
}

// 项目统计完成任务数图表
export function projectTaskChart(workspaceId) {
  return request({
    url: '/plm-doc/api/report/projectTaskChart',
    method: 'post',
    data: {
      pageNo: 0,
      pageSize: 0,
      t: {
        name: '',
        userId: '',
        workspaceId: workspaceId
      }
    }
  })
}

// 成员统计图表
export function memberChart(workspaceId) {
  return request({
    url: '/plm-doc/api/report/memberChart',
    method: 'post',
    data: {
      pageNo: 0,
      pageSize: 0,
      t: {
        name: '',
        userId: '',
        workspaceId: workspaceId
      }
    }
  })
}
