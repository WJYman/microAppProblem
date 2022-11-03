import request from '@/utils/request'

/* 获取(字典主表)分页数据列表 */
export function postQueryPageList(params) {
  return request({
    url: `/plm-doc/api/sysDict/queryPageList`,
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        name: params.name
      }
    }
  })
}

// 新增接口
export function postAddCd(data) {
  return request({
    url: '/plm-doc/api/sysMultidict/add',
    method: 'post',
    data
  })
}

// 删除接口
export function deleteDels(data) {
  return request({
    url: '/plm-doc/api/sysDict/dels',
    method: 'post',
    data: data
  })
}
// 删除接口
export function deleteMultiDels(data) {
  return request({
    url: '/plm-doc/api/sysMultidict/dels',
    method: 'delete',
    data: data
  })
}
// 启用接口
export function putUpdateEnable(data) {
  return request({
    url: '/plm-doc/api/sysDict/updateEnable',
    method: 'post',
    data: data
  })
}

// 层叠列表值启用接口
export function updateEnable(data) {
  return request({
    url: '/plm-doc/api/sysMultidict/updateEnable',
    method: 'post',
    data: data
  })
}

// 层叠列表值禁用接口
export function updateDisable(data) {
  return request({
    url: '/plm-doc/api/sysMultidict/updateDisable',
    method: 'post',
    data: data
  })
}
// 禁用接口
export function putUpdateDisableEnable(data) {
  return request({
    url: '/plm-doc/api/sysDict/updateDisableEnable',
    method: 'post',
    data: data
  })
}

// 点击单条数据查看详情
export function getView(id) {
  return request({
    url: '/plm-doc/api/sysDict/view?id=' + id,
    method: 'get'
  })
}

// 修改单条数据接口
export function putUpdate(data) {
  return request({
    url: '/plm-doc/api/sysDict/update',
    method: 'POST',
    data: data
  })
}

// 列表值 列表接口
export function getViewtable(id) {
  return request({
    url: '/plm-doc/api/sysDict/viewtable?id=' + id,
    method: 'get'
  })
}

// 添加列表值接口
export function postAddtable(data) {
  return request({
    url: '/plm-doc/api/sysDict/addtable',
    method: 'post',
    data
  })
}

// 列表值 列表接口
export function postAdds(data) {
  return request({
    url: `/plm-doc/api/sysDict/adds`,
    method: 'post',
    data
  })
}

// 列表值 列表接口
export function postCdAdds(data) {
  return request({
    url: `/plm-doc/api/sysMultidict/adds `,
    method: 'post',
    data
  })
}
// 列表值，删除接口
export function deleteDelstable(data) {
  return request({
    url: '/plm-doc/api/sysDict/delstable',
    method: 'post',
    data: data
  })
}
// 层叠列表值删除接口
export function delTable(params) {
  return request({
    url: '/plm-doc/api/sysMultidict/delTable',
    method: 'delete',
    params
  })
}
// 列表值，启用接口
export function putUpdateEnabletable(data) {
  return request({
    url: '/plm-doc/api/sysDict/updateEnabletable',
    method: 'post',
    data: data
  })
}
// 层叠列表值, 启用接口
export function updateEnableValue(params) {
  return request({
    url: '/plm-doc/api/sysMultidict/updateEnableValue',
    method: 'post',
    params
  })
}
// 列表值，禁用接口
export function putUpdateDisableEnabletable(data) {
  return request({
    url: '/plm-doc/api/sysDict/updateDisableEnabletable',
    method: 'post',
    data: data
  })
}

// 层叠列表值，禁用接口
export function updateDisableValue(params) {
  return request({
    url: '/plm-doc/api/sysMultidict/updateDisableValue',
    method: 'post',
    params
  })
}

// 列表值，修改数据
export function putUpdatetable(data) {
  return request({
    url: '/plm-doc/api/sysDict/updatetable',
    method: 'post',
    data: data
  })
}
// 列表值，修改数据
export function updateMultiCode(data) {
  return request({
    url: '/plm-doc/api/sysMultidict/update',
    method: 'post',
    data
  })
}
// 列表值，修改列表值里面的数据
export function updateListValue(data) {
  return request({
    url: '/plm-doc/api/sysMultidict/updateListValue',
    method: 'post',
    data
  })
}
// 列表值，点击单条数据查看详情
export function getViewDictItem(id) {
  return request({
    url: '/plm-doc/api/sysDict/viewDictItem?id=' + id,
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

// 查询列表值国际化列头
export function queryInternationListValueTitle(params) {
  return request({
    url: '/plm-doc/api/sysInternationalizedMaintenance/queryLangList',
    method: 'get',
    params
  })
}

// 查询列表值国际化展示列表
export function queryListValConfig(params) {
  return request({
    url: '/plm-doc/api/sysInternationalizedMaintenance/queryListValConfig',
    method: 'get',
    params
  })
}

// 修改国际化更新数据
export function updateInternationalData(data) {
  return request({
    url: '/plm-doc/api/sysInternationalizedMaintenance/updateLanguageConfig',
    method: 'post',
    data
  })
}
// 根据code获取列表主数据
export function viewSysDictList(params) {
  return request({
    url: '/plm-doc/api/sysDict/viewSysDict',
    method: 'get',
    params
  })
}

/* 获取层叠列表分页数据列表 */
export function postVerbQueryPageList(params) {
  return request({
    url: `/plm-doc/api/sysMultidict/queryPageList`,
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        name: params.name === '' ? undefined : params.name
      }
    }
  })
}

// 根据id获取层叠列表详情数据
export function queryList(params) {
  return request({
    url: '/plm-doc/api/sysMultidict/queryList',
    method: 'get',
    params
  })
}

// 添加层叠列表值
export function addtable(data) {
  return request({
    url: '/plm-doc/api/sysMultidict/addtable',
    method: 'post',
    data
  })
}

// 新增接口
export function postAdd(data) {
  return request({
    url: '/plm-doc/api/sysDict/add',
    method: 'post',
    data
  })
}

// 新增接口
// export function getConditionList(data) {
//   return request({
//     url: '/plm-doc/baseCondition/baseCondition/queryList',
//     method: 'post',
//     data
//   })
// }
export function getConditionList(data) {
  return request({
    url: '/plm-doc/baseCondition/queryPageList',
    method: 'post',
    data
  })
}

