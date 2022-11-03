import request from '@/utils/request'
import Qs from 'qs'

/** 根据主键查询 */
export function getAllworkflowRules(params) { return request.get(`/plm-doc/baseWorkflow/baseWorkflow/findById`, { params }) }

/** 添加工作流主表数据 */
export function postWorkflowAdd(data) { return request.post(`/plm-doc/baseWorkflow/baseWorkflow/add`, data) }

/** 前端主键编辑 */
export function getEditById(params) { return request.get(`/plm-doc/baseWorkflow/baseWorkflow/editById`, { params }) }

/** 适用变更对象分组级联(新增flowId为空,编辑时主键不能为空) */
export function getObjCascadeList(params) { return  null }

/** 查看(物料对象)数据 */
export function getBaseObjects(params) { return request.get(`/plm-doc/api/baseObjects/view`, { params }) }

/** 获取工作流节点数据 */
export function getByFlowIdAndPoseId(data) { return request.post(`/plm-doc/baseWorkflowNode/baseWorkflowNode/getByFlowIdAndPoseId?${Qs.stringify(data)}`) }

/** 添加，编辑工作流节点数据 */
export function addWorkflowNode(data) { return request.post(`/plm-doc/baseWorkflowNode/baseWorkflowNode/addOrUpdate`, data) }

/** 添加规则表数据 */
export function postNodeRuleAdd(data) { return request.post(`/plm-doc/baseNodeRule/baseNodeRule/add`, data) }

/** 保存所有工作流节点和连线数据 */
export function saveAllNodeAndLine(data) { return request.post(`/plm-doc/baseWorkflow/baseWorkflow/saveAllNodeAndLine`, data) }

/** 查询规则表 */
export function getAllPostNodeRule(data) { return request.post(`/plm-doc/baseNodeRule/baseNodeRule/getById?${Qs.stringify(data)}`) }

/** 修改规则表数据 */
export function updatePostNodeRule(data) { return request.post(`/plm-doc/baseNodeRule/baseNodeRule/update`, data) }

/** 获取文件格式限制数据-列表 */
export function getBaseFilelimit(params) { return request.get(`/plm-doc/baseFilelimit/baseFilelimit/queryList`, { params }) }

/** 根据工作流变更对象查找审批条件 */
export function getfindByObjectId(params) { return request.get(`/plm-doc/baseWorkflow/baseWorkflow/findByObjectId`, { params }) }

/** 根据审批条件查询工作流影响物件必填项级联 */
export function getFindCascadeByConditionId(params) { return request.get(`/plm-doc/baseWorkflow/baseWorkflow/findCascadeByConditionId`, { params }) }

/** 根据变更对象查询工作流流程表单必填项级联 */
export function findCascadeByObjectId(params) { return request.get(`/plm-doc/baseWorkflow/baseWorkflow/findCascadeByObjectId`, { params }) }

/** 查询规则表 */
export function getAllbaseNodeRule(data) { return request.post(`/plm-doc/baseNodeRule/baseNodeRule/getById?${Qs.stringify(data)}`) }

/** 批量删除规则表 */
export function delsBaseNodeRule(data) { return request.post(`/plm-doc/baseNodeRule/baseNodeRule/dels`, data) }

/** 根据主键查询变更条件 */
export function getAllBaseConditionIdObject(params) { return request.get(`/plm-doc/baseCondition/baseCondition/getById`, { params }) }

/** 批量发布禁止 */
export function updateStatus(data) { return request.post(`/plm-doc/baseWorkflow/baseWorkflow/bpmn/updateSave`, data) }

/** 编辑工作流时保存数据 */
export function updateBaseInfo(data) { return request.post(`/plm-doc/baseWorkflow/baseWorkflow/updateSave`, data) }

// 添加，编辑工作流节点数据
export function postAddOrUpdate(data) { return request.post(`/plm-doc/baseWorkflowNode/baseWorkflowNode/bpmn/addOrUpdate`, data) }

// 查看节点数据
export function postViewNode(data) { return request.post(`/plm-doc/baseWorkflowNode/baseWorkflowNode/bpmn/viewNode`, data) }

// 保存流程图
export function postSaveAllNodeAndLine(data) { return request.post(`/plm-doc/baseWorkflow/baseWorkflow/bpmn/saveAllNodeAndLine`, data) }

// 查看流程图
export function getViewflowInfo(data) { return request.get(`/plm-doc/baseWorkflow/baseWorkflow/bpmn/viewflowInfo?baseWorkflowId=${data}`) }

// 添加连线
export function postUpdateLine(data) { return request.post(`/plm-doc/baseWorkflowNode/baseWorkflowNode/bpmn/updateLine`, data) }

// 查看当前节点所有数据
export function getViewNodeLists(data) { return request.get(`/plm-doc/baseWorkflowNode/baseWorkflowNode/bpmn/viewNodeLists?baseWorkflowId=${data}`) }

// 查看节点规则数据
export function postViewNoderules(data) { return request.post(`/plm-doc/baseWorkflowNode/baseWorkflowNode/bpmn/viewNoderules`, data) }

// 查看节点规则数据
export function postUpdateSave(data) { return request.post(`/plm-doc/baseWorkflow/baseWorkflow/bpmn/updateSave`, data) }

// 查看当前节点所有数据
export function getflowExtend(data) { return request.get(`/plm-doc/baseWorkflow/baseWorkflow/bpmn/getflowExtend`) }

// 获取签名配置数据-列表
export function queryList(data) { return request.post(`/plm-doc/api/fileConfig/queryList`, data) }

// 批量删除签名配置
export function dels(data) {
  return request({
    url: `/plm-doc/api/fileConfig/dels`,
    method: 'DELETE',
    data
  })
}

// 添加签名配置数据
export function add(data) { return request.post(`/plm-doc/api/fileConfig/add`, data) }

export function queryPdfList(data) {
  return request.post(`/plm-doc/api/sysPdf/queryPdfList`, {
    'pageNo': 1,
    'pageSize': 999999999,
    't': {
      'status': '1'
    }
  })
}

// 同步pdf模板
export function addPDF(params) {
  return request({
    url: `/plm-doc/api/fileConfig/addPDF`,
    method: 'post',
    params
  })
}

// 修改签名配置数据
export function update(data) {
  return request.post(`/plm-doc/api/fileConfig/update`, data)
}

