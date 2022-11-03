import request from '@/utils/request'

// 实施对象/基本属性 接口
export function getQueryChangeFields(id) {
  return request({
    url: `/plm-doc/objectChangeInstance/queryChangeFields?id=${id}`,
    method: 'get'
  })
}

// 对象的属性保存/修改接口
export function postSaveChangeFields(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/saveChangeFields',
    method: 'post',
    data: data
  })
}

// 查询所有变更申请接口
export function selectWolkFlowInsByConditions(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/selectWolkFlowInsByConditions',
    method: 'post',
    data: data
  })
}

// 滚动分页查询所有变更申请接口
export function getRollPageImplementations(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/getRollPageImplementations',
    method: 'post',
    data: data
  })
}
// 变更/查询实施对象列表接口
export function getImplementations(params) {
  return request({
    url: '/plm-doc/objectChangeInstance/getImplementations',
    method: 'get',
    params
  })
}

// 变更/查询按钮类型接口
export function querybtnList(id) {
  return request({
    url: '/plm-doc/objectWorkflow/objectWorkflow/querybtnList?objectInsId=' + id,
    method: 'get'
  })
}

// 变更/保存添加实施对象列表接口
export function addObjectInsList(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/addObjectInsList',
    method: 'post',
    data
  })
}

// 变更/粘贴实施对象列表接口
export function addObjectIns(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/addObjectIns',
    method: 'post',
    data
  })
}

// 变更/删除实施对象列表接口
export function deleteObjectInsList(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/deleteObjectInsList',
    method: 'delete',
    data
  })
}

// 变更/获取添加实施对象的数据
export function getInsByChangeIns(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/getBathBom',
    method: 'post',
    data
  })
}
// 变更/获取添加实施对象的数据
export function getInsByChangeInsSenQuery(params) {
  return request({
    url: '/plm-doc/objectChangeInstance/getInsByChangeIns',
    method: 'get',
    params
  })
}
// 变更/ 批量删除变更数据
export function dels(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/dels',
    method: 'delete',
    data
  })
}

// 实施对象/附件

// 附件列表接口
export function postFileQueryPageList(id) {
  return request({
    url: `/plm-doc/objectChangeInstance/queryObjectAttachs?objectChangeInstanceId=${id}`,
    method: 'get'
  })
}
// 单个上传
export function postUpload(data, file) {
  return request({
    url: `/plm-doc/objectChangeInstance/upload`,
    method: 'post',
    onUploadProgress: (progressEvent) => {
      const num = progressEvent.loaded / progressEvent.total * 100 - 1 | 0 // 百分比
      file.onProgress({ percent: num }) // 进度条
    },
    data: data
  })
}
// 附件模块 删除接口
export function deleteDels(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/delAttachs',
    method: 'delete',
    data: data
  })
}
// 附件模块 签出接口
export function putCheckOutfile(id) {
  return request({
    url: `/plm-doc/objectChangeInstance/checkOutfile?id=${id}`,
    method: 'POST'
  })
}
// 附件模块 签入接口
export function putCheckInfile(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/checkInfile',
    method: 'post',
    data: data
  })
}
// 附件模块 下载接口
export function postDown(ids) {
  return request({
    url: `/plm-doc/objectChangeInstance/down`,
    method: 'post',
    responseType: 'blob',
    data: ids
  })
}
// 确认绑定上传附件
export function postFileAdd(data) {
  return request({
    url: `/plm-doc/objectChangeInstance/add`,
    method: 'post',
    data: data
  })
}
// 附件模块 取消签出接口
export function putCancelCheckOutfile(id) {
  return request({
    url: `/plm-doc/objectChangeInstance/cancelCheckOutfile?id=${id}`,
    method: 'post'
  })
}
export function queryJyPageList(data) {
  return request({
    url: '/plm-doc/objectAttachment/queryJyPageList',
    method: 'post',
    data: data
  })
}
// 附件借用
export function batchCopy(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/batchCopy',
    method: 'post',
    data: data
  })
}

// 附件借用
export function cancelEdit(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/cancelEdit',
    method: 'put',
    data: data
  })
}

// 查询变更实例
export function viewObjectInstanceByList(id) {
  return request({
    url: '/plm-doc/objectInstance/viewObjectInstanceByList?id=' + id,
    method: 'get'
  })
}

// 启动变更实例
export function startFlow(id) {
  return request({
    url: '/plm-doc/baseWorkflowTask/baseWorkflowTask/startFlow?objInsId=' + id,
    method: 'post'
  })
}

export function approve(id) {
  return request({
    url: '/plm-doc/baseWorkflowTask/baseWorkflowTask/approve?objInsId=' + id,
    method: 'post'
  })
}

// 启动变更实例
export function approveSave(data) {
  return request({
    url: '/plm-doc/baseWorkflowTask/baseWorkflowTask/approveSave',
    method: 'post',
    data
  })
}

/* 据父级获取(对象bom)所有数据列表 */
export function getBomList(params) {
  return request({
    url: `/plm-doc/objectChangeBom/getObjectChangeBomVos?objChaInsId=${params.objChaInsId}&search=${params.search}&hidden=${params.hidden}&siteId=${params.siteId || ''}`,
    method: 'get'
  })
}

/* 保存 */
export function putSaveObjectbomList(objChaBoms) {
  return request({
    url: `/plm-doc/objectChangeBom/saveObjectbomList`,
    method: 'put',
    data: objChaBoms
  })
}

// 删除接口
export function deleteObjectbom(params) {
  return request({
    url: '/plm-doc/objectChangeBom/deleteObjectbomList',
    method: 'delete',
    data: params
  })
}

// 添加
export function addObjectbom(data) {
  return request({
    url: '/plm-doc/objectChangeBom/addObjectbomList',
    method: 'post',
    data: data
  })
}

// 取消
export function putCancelEdit(ids) {
  return request({
    url: `/plm-doc/objectChangeBom/cancelEdit`,
    method: 'put',
    data: ids
  })
}

// bom 替代料
export function getAllBomReplace(params) {
  return request({
    url: '/plm-doc/objectChangeBomReplace/objectChangeBomReplace/queryList?bomId=' + params.bomId,
    method: 'get'
  })
}

// 添加替代料
export function addsObjectBomReplace(data) {
  return request({
    url: '/plm-doc/objectChangeBomReplace/objectChangeBomReplace/add',
    method: 'post',
    data: data
  })
}

// 删除替代料
export function deleteBomReplace(params) {
  return request({
    url: '/plm-doc/objectChangeBomReplace/objectChangeBomReplace/dels',
    method: 'delete',
    data: params
  })
}

// 根据列表code获取列表值的下拉数据
export function postQueryListSelectData(code) {
  return request({
    url: `/plm-doc/api/sysDict/queryListSelectData?code=${code}`,
    method: 'post'
  })
}

// 替代料 取消
export function putAMCancelEdit(ids) {
  return request({
    url: `/plm-doc/objectChangeBomReplace/objectChangeBomReplace/cancelEdit`,
    method: 'put',
    data: ids
  })
}

/* 保存 */
export function putUpdateObjectBomReplaceList(data) {
  return request({
    url: `/plm-doc/objectChangeBomReplace/objectChangeBomReplace/updateObjectBomReplaceList`,
    method: 'put',
    data: data
  })
}
// 查询变更实例
export function queryTaskList(id) {
  return request({
    url: '/plm-doc/objectWorkflow/objectWorkflow/queryTaskList?objectInsId=' + id,
    method: 'get'
  })
}

// 变更申请-实施对象详情-tab-替代料视图数据
export function getObjectChangeBomRepVos(params) {
  return request({
    url: `/plm-doc/objectChangeBom/getObjectChangeBomRepVos?objChaInsId=${params.objChaInsId}&search=${params.search}&hidden=${params.hidden}`,
    method: 'get'
  })
}

// 变更申请-实施对象详情-tab-替代料视图数据 懒加载
export function getQueryListNoDel(bomId) {
  return request({
    url: `/plm-doc/objectChangeBomReplace/objectChangeBomReplace/queryListNoDel?bomId=${bomId}`,
    method: 'get'
  })
}

// 替代料页签列表获取
export function getQueryList(id) {
  return request({
    url: `/plm-doc/objectChangeReplace/queryList?objChaInsId=${id}`,
    method: 'get'
  })
}

// 滚动查询替代料页签列表
export function queryObjectChangeReplaceRollPageList(data) {
  return request({
    url: `/plm-doc/objectChangeReplace/queryRollPageList`,
    method: 'post',
    data
  })
}
// 替代料页签保存
export function updateObjectReplaceList(data) {
  return request({
    url: `/plm-doc/objectChangeReplace/updateObjectBomReplaceList`,
    method: 'put',
    data: data
  })
}

/* 保存 */
export function putcCancelEdit(ids) {
  return request({
    url: `/plm-doc/objectChangeReplace/cancelEdit`,
    method: 'put',
    data: ids
  })
}

// 添加替代料
export function addsObjectReplace(data) {
  return request({
    url: '/plm-doc/objectChangeReplace/add',
    method: 'post',
    data: data
  })
}

// 删除替代料
export function deleteObjectDels(dels) {
  return request({
    url: '/plm-doc/objectChangeReplace/dels',
    method: 'delete',
    data: dels
  })
}

// 替换物料
export function putReplaceEdit(data) {
  return request({
    url: `/plm-doc/objectChangeBom/replaceEdit`,
    method: 'put',
    data: data
  })
}

// 获取实施对象消息数量
export function getAllRelationObjects(id, siteId) {
  return request({
    url: `/plm-doc/objectChangeInstance/objectChangeInstance/getAllRelationObjects?objectInsId=${id}&siteId=${siteId || ''}`,
    method: 'post'
  })
}

// 转签页面数据获取
export function resign(id) {
  return request({
    url: '/plm-doc/baseWorkflowTask/baseWorkflowTask/resign?objInsId=' + id,
    method: 'post'
  })
}

// 转签页面数据保存
export function resignSave(data) {
  return request({
    url: '/plm-doc/baseWorkflowTask/baseWorkflowTask/resignSave',
    method: 'post',
    data
  })
}

// 拒绝页面数据获取
export function refuse(id) {
  return request({
    url: '/plm-doc/baseWorkflowTask/baseWorkflowTask/refuse?objInsId=' + id,
    method: 'post'
  })
}

// 拒绝页面数据获取
export function refuseSave(data) {
  return request({
    url: '/plm-doc/baseWorkflowTask/baseWorkflowTask/refuseSave',
    method: 'post',
    data
  })
}
// 取消提交
export function quxiao(data) {
  return request({
    url: '/plm-doc/baseWorkflowTask/baseWorkflowTask/cansle',
    method: 'post',
    data
  })
}

// 拒绝页面数据获取
export function copyReplace(id) {
  return request({
    url: `/plm-doc/objectChangeBomReplace/objectChangeBomReplace/copyReplace?id=${id}`,
    method: 'post'
  })
}

// 实施对象更改大版本小版本
export function getNewVersion(params) {
  return request({
    url: `/plm-doc/objectChangeInstance/objectChangeInstance/getNewVersion`,
    method: 'post',
    params
  })
}

// 实施对象更改大版本小版本
export function updateStatus(data) {
  return request({
    url: `/plm-doc/objectChangeInstance/objectChangeInstance/updateStatus`,
    method: 'post',
    data
  })
}

// 实施对象更新备注
export function updateRemark(params) {
  return request({
    url: `/plm-doc/objectChangeInstance/objectChangeInstance/updateRemark`,
    method: 'post',
    params
  })
}

// 变更另存接口
export function getViewObjectInstanceByIdCopy(id) {
  return request({
    url: '/plm-doc/objectInstance/viewObjectInstanceByIdCopy?id=' + id,
    method: 'get'
  })
}

// 获取动态列头
export function getObjectChangeInstanceRender(instanceId, objectType) {
  return request({
    url: `/plm-doc/api/baseAuthority/getObjectChangeInstanceRender?instanceId=${instanceId}&objectType=${objectType}`,
    method: 'get'
  })
}

// 更新属性
export function updateFiled(params) {
  return request({
    url: `/plm-doc/objectChangeInstance/objectChangeInstance/updateFiled`,
    method: 'post',
    data: {
      attributeId: params.attributeId,
      instanceId: params.instanceId,
      value: params.value
    }
  })
}

// 查找物件
export function getObjectInsListByType(data) {
  return request({
    url: `/plm-doc/objectInstance/getObjectInsListByType`,
    method: 'post',
    data
  })
}

// 批量添加BOM
export function addChangeObjectboms(data) {
  return request({
    url: `/plm-doc/objectChangeBom/addChangeObjectboms`,
    method: 'post',
    data
  })
}

// 批量添加BOM
export function getAutoColumn(params) {
  return request({
    url: `/plm-doc/api/seacrh/getAutoColumn`,
    method: 'get',
    params
  })
}

// 批量删除BOM数据准备
export function getChangeObjects(params) {
  return request({
    url: `/plm-doc/objectChangeBom/getChangeObjects`,
    method: 'get',
    params
  })
}
// 批量删除BOM数据准备
export function deleteChangeObjectboms(data) {
  return request({
    url: `/plm-doc/objectChangeBom/deleteChangeObjectboms`,
    method: 'delete',
    data
  })
}

// 批量删除BOM数据准备第一步
export function getChangeObjectboms(params) {
  return request({
    url: `/plm-doc/objectChangeBom/getChangeObjectboms`,
    method: 'get',
    params
  })
}

// 批量查找相关的BOM数据准备第二步
export function getObjectBoms(params) {
  return request({
    url: `/plm-doc/objectChangeBom/getObjectBoms`,
    method: 'get',
    params
  })
}

// 批量查找相关的BOM数据准备第二步
export function replaceChangeObjectboms(data) {
  return request({
    url: `/plm-doc/objectChangeBom/replaceChangeObjectboms`,
    method: 'POST',
    data
  })
}

// 批量查找相关的BOM数据准备第二步
export function getChangeClass(params) {
  return request({
    url: `/plm-doc/objectChangeBom/getChangeClass`,
    method: 'GET',
    params
  })
}

// 获取所有物料的公有属性
export function queryPageList(data) {
  return request({
    url: `/plm-doc/api/baseAttributeMaterial/queryPageList`,
    method: 'post',
    data
  })
}

// 通过任务获取变更ID
export function changeInstance(params) {
  return request({
    url: `/plm-doc/api/projectManageInstance/changeInstance`,
    method: 'get',
    params
  })
}
export function queryAutoBomList(noEdit, id = '') { return request.get(`/plm-doc/objectInstance/queryAutoBomList?noEdit=${noEdit}&instanceId=${id}`) }

// 批量修改实施对象生命周期
export function mulitUpdateEffect(data) {
  return request({
    url: `/plm-doc/objectChangeInstance/objectChangeInstance/updateStatus`,
    method: 'post',
    data
  })
}
// 获取待审批节点
export function getCurrentNodeAndThen(params) {
  return request({
    url: `/plm-doc/api/baseWorkflowTaskExtuser/getCurrentNodeAndThen`,
    method: 'get',
    params
  })
}

// 添加审批者
export function addApprovalMan(data) {
  return request({
    url: `/plm-doc/api/baseWorkflowTaskExtuser/add`,
    method: 'POST',
    data
  })
}

// 删除审批者
export function delApprovalMan(data) {
  return request({
    url: `/plm-doc/api/baseWorkflowTaskExtuser/dels`,
    method: 'DELETE',
    data
  })
}

// 获取添加审批者列表
export function queryCheckList(params) {
  return request({
    url: `/plm-doc/api/baseWorkflowTaskExtuser/queryList`,
    method: 'get',
    params
  })
}

// 签入大附件数据
export function checkInLargeFile(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/checkInLargeFile',
    method: 'put',
    data: data
  })
}

// 文件是否已可以被预览
export function attachmentReviewPrepared(id) {
  return request({
    url: `/plm-doc/objectChangeInstance/attachmentReviewPrepared?id=${id}`,
    method: 'get'
  })
}

