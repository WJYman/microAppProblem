import request from '@/utils/request'

export function queyrFavouriteList() {
  return request({
    url: '/plm-doc/objectFavorites/queryList',
    method: 'POST',
    data: {
      t: {
      }
    }
  })
}

export function delFav(id) {
  return request({
    url: '/plm-doc/objectFavorites/del?id=' + id,
    method: 'POST'
  })
}

export function getWorkspacebyuser(type, search) {
  return request({
    url: '/plm-doc/api/sysWorkspace/workspacebyuser?type=' + type + '&search=' + search,
    method: 'GET'
  })
}

export function addFavData(data) {
  return request({
    url: '/plm-doc/objectFavorites/add',
    method: 'POST',
    data
  })
}

export function queryWorkFlowPageList(params) {
  return request({
    url: '/plm-doc/baseWorkflowTask/baseWorkflowTask/queryPageList',
    method: 'POST',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        search: params.search,
        type: params.type
      }
    }
  })
}
export function getHomeData() {
  return request({
    url: '/plm-doc/baseWorkflow/baseWorkflow/getAllBaseNumberInfos',
    method: 'get'
  })
}

// 获取代办任务
export function todoList(data) {
  return request({
    url: '/plm-doc/api/projectUser/pageTodoList',
    method: 'POST',
    data
  })
}
// 接受或者拒绝任务

export function updateRefuseStatus(data) {
  return request({
    url: '/plm-doc/api/projectUser/updateRefuseStatus',
    method: 'post',
    data: data
  })
}

// 获取可完成的活动
export function canPublishProject(workspace) {
  return request({
    url: '/plm-doc/api/report/canPublishProject',
    method: 'get'
  })
}

// 获取可完成的活动
export function delegateTaskList(data) {
  return request({
    url: '/plm-doc/api/projectManageInstance/delegateTaskList',
    method: 'post',
    data
  })
}

// 获取可完成的活动
export function queryFavRollPageList(data) {
  return request({
    url: '/plm-doc/objectFavorites/queryRollPageList',
    method: 'post',
    data
  })
}
// 拒绝委托
export function rejectDelegate(data) {
  return request({
    url: '/plm-doc/api/projectManageInstance/rejectDelegate',
    method: 'post',
    data
  })
}

// 接受委托
export function acceptDelegate(data) {
  return request({
    url: '/plm-doc/api/projectManageInstance/acceptDelegate',
    method: 'post',
    data
  })
}

// 工作空间筛选-用
export function queryWorkspacebyuser(params) {
  return request({
    url: '/plm-doc/api/sysWorkspace/queryWorkspacebyuser',
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        search: params.search,
        type: params.type
      }
    }
  })
}

// 人力资源项目计划时间报表
export function humanResources(data) {
  return request({
    url: '/plm-doc/api/report/humanResources',
    method: 'post',
    data: {
      pageNo: 0,
      pageSize: 0,
      t: {
        name: '',
        workspaceId: ''
      }
    }
  })
}

// 个人延期图表
export function personalDelayChart(userId) {
  return request({
    url: '/plm-doc/api/report/personalDelayChart',
    method: 'post',
    data: {
      pageNo: 0,
      pageSize: 0,
      t: {
        name: '',
        userId: userId,
        workspaceId: ''
      }
    }
  })
}

// 项目统计完成任务数图表
export function projectTaskChart() {
  return request({
    url: '/plm-doc/api/report/projectTaskChart',
    method: 'post',
    data: {
      pageNo: 0,
      pageSize: 0,
      t: {
        name: '',
        userId: '',
        workspaceId: ''
      }
    }
  })
}

// 获取数据列表
export function queryList(workspace) {
  return request({
    url: '/plm-doc/api/sysUser/queryList',
    method: 'get'
  })
}

// 获取工作流任务表代办数据--分页
export function queryCustomPageList(params) {
  return request({
    url: '/plm-doc/baseWorkflowTask/baseWorkflowTask/queryCustomPageList',
    method: 'POST',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        search: params.search
      }
    }
  })
}
