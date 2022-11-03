import request from '@/utils/request'
// import Qs from 'qs'

/** 获取(工作流主表)分页数据列表 */
export function getAllbaseWorkflow(data) { return request.post(`/plm-doc/baseWorkflow/baseWorkflow/queryPageList`, data) }

/** 批量删除工作流主表 */
export function getWorkflowDels(data) { return request.post(`/plm-doc/baseWorkflow/baseWorkflow/dels`, data) }

/** 工作流另存为 */
export function saveAs(data) { return request.post(`/plm-doc/baseWorkflow/baseWorkflow/saveAs`, data) }
