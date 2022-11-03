import request from '@/utils/request'
import Qs from 'qs'
const url = `/plm-doc/objectInstance`
/* 左侧搜索查询 创建部分接口 */
/* 新增(对象实例)数据 */
export function addData(data) { return request.post(`${url}/add`, data) }
/* 获取物料类型 */
export function getQueryBaseObjectList(data) { return request.post(`${url}/queryBaseObjectList`, data) }
/* 根据类型查询对应的编号规则 */
export function getqueryBaseRules(params) { return request.get(`${url}/queryBaseRules`, { params }) }
/* 根据类型查询对应的属性 */
export function getqueryFieldsList(params) { return request.get(`${url}/queryFieldsList`, { params }) }
/* 根据列表code获取列表值的下拉数据 data:{code} */
export function queryListSelectData(code) { return request.post(`/plm-doc/api/sysDict/queryListSelectData?code=${code}`) }
/* 根据列表code获取级联的下拉数据 data:{code} */
export function queryListCascaderData(code) { return request.get(`/plm-doc/api/sysMultidict/queryList?code=${code}`) }
/* 根据主键删除(对象实例)数据 */
export function querydel(data) { return request.post(`/plm-doc/objectInstance/del?${Qs.stringify(data)}`) }

/* 继承替代料 */
export function copyReplace(id) { return request.post(`/plm-doc/objectBomReplace/copyReplace?id=${id}`) }

/* 文件夹管理 */
/* 获取物料的左侧树形结构--非共用 */
// export function queryLeftTreeData(data) { return request.post(`/plm-doc/objectInstance/queryLeftTreeData`, Qs.stringify(data)) }
export function queryLeftTreeData(data) {
  return request({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: `/plm-doc/objectInstance/queryLeftTreeData`,
    method: 'post',
    data: Qs.stringify(data)
  })
}

/** 根据id查看(对象实例)数据---copy */
export function viewObjectInstanceByIdCopy(params) { return request.get(`/plm-doc/objectInstance/viewObjectInstanceByIdCopy`, { params }) }
/* 右边bom */
/* 获取所有子对象的数量 */
export function getAllRelationObjects(data) { return request.post(`${url}/getAllRelationObjects?${Qs.stringify(data)}`) }

/* 据父级获取(对象bom)所有数据列表 */
export function queryBomList(params) {
  return request({
    url: `${url}/queryBomList`,
    method: 'get',
    params
  })
}
/* 动态获取bom属性列 */
export function queryAutoBomList(noEdit, id = '', noSite = false) { return request.get(`${url}/queryAutoBomList?noEdit=${noEdit}&instanceId=${id}&noSite=${noSite}`) }
/** 获取(对象bom)分页数据列表 */
export function queryPageBomList(data) { return request.post(`${url}/queryPageBomList`, data) }
/** 对象实例-bom维护-添加bom */
export function addObjectbom(data) { return request.post(`${url}/addObjectbomList`, data) }

/** 对象实例-bom维护-批量添加bom */
export function addsObjectbom(data) { return request.post(`${url}/addObjectbomList`, data) }
/** 对象实例-bom维护-删除bom */
export function deleteObjectbom(data) { return request.post(`/plm-doc/objectInstance/deleteObjectbom`, data) }
/** 批量修改(对象bom)数据 */
export function updateBom(data) { return request.put(`/plm-doc/objectInstance/updateBomList`, data) }
/* bom 工具栏  */
/* 添加物料 */
/** 对象实例-bom维护-物料列表 弹出窗口列表 */
export function getObjectInsList(params) { return request.get(`${url}/getObjectInsList`, { params }) }

/** NEW对象实例-bom维护-物料列表 弹出窗口列表 */
export function getObjectInsListByType(data) { return request.post(`/plm-doc/objectInstance/queryRelation`, data) }

/* bom替代料 */
/** 获取(bom-替代料表)分页数据列表 */
export function getAllBomReplace(data) { return request.post(`/plm-doc/objectBomReplace/queryList`, data) }
/** 批量删除(对象-替代料表)数据 */
export function deleteBomReplace(data) { return request.delete(`/plm-doc/objectBomReplace/dels`, { data }) }
/** 新增(bom-替代料表)数据 */
export function addsObjectBomReplace(data) { return request.post(`/plm-doc/objectBomReplace/add`, data) }
/** 修改(bom-替代料表)数据 */
export function updateObjectBomReplace(data) { return request.put(`/plm-doc/objectBomReplace/update`, data) }

/* 替代料 */
/** 获取(对象-替代料表)分页数据列表 */
export function getAllObjectReplace(data) { return request.post(`/plm-doc/objectReplace/queryPageList`, data) }
/** 批量新增(对象-替代料表)数据 */
export function addsObjectReplace(data) { return request.post(`/plm-doc/objectReplace/addObjectReplaceList`, data) }

/** 新增(对象-替代料表)数据 */
export function addObjectReplace(data) { return request.post(`/plm-doc/objectReplace/add`, data) }
/** 批量删除(对象-替代料表)数据 */
export function deleteObjectReplace(data) { return request.delete(`/plm-doc/objectReplace/dels`, { data }) }
/** 批量修改(对象-替代料表)数据 */
export function updateObjectReplaceList(data) { return request.put(`/plm-doc/objectReplace/updateObjectReplaceList`, data) }
/** 获取实例变更记录*/
export function listChangeByInstId(data) {
  return request.post('/plm-doc/objectInstance/queryChangeList/' + data)
}

/** 批量修改(bom-替代料表)数据 */
export function updateObjectBomReplaceList(data) { return request.put(`/plm-doc/objectBomReplace/updateObjectBomReplaceList`, data) }

// 获取位号数据
export function getGenTagVo(tag) {
  return request({
    url: `/plm-doc/objectChangeBom/genTagVo?tag=${tag}`,
    method: 'get'
  })
}

// 替代料替换BOM
export function changeObjectBom(data) {
  return request({
    url: `/plm-doc/objectBomReplace/changeObjectBom`,
    method: 'POST',
    data
  })
}

// 替代料替代BOM
export function replaceObjectBom(data) {
  return request({
    url: `/plm-doc/objectBomReplace/replaceObjectBom`,
    method: 'POST',
    data
  })
}

// 通过层级获取bom数据展示
export function queryBomTreeList(params) {
  return request({
    url: `/plm-doc/objectInstance/queryBomTreeList`,
    method: 'get',
    params
  })
}

// bom版本比较
export function getObjectChangeBomVosByInsIdAndVersion(params) {
  return request({
    url: `/plm-doc/objectChangeBom/getObjectChangeBomVosByInsIdAndVersion`,
    method: 'get',
    params
  })
}

// 校验制造商
export function validName(data) {
  return request({
    url: `/plm-doc/objectInstance/valid`,
    method: 'post',
    data
  })
}
// 获取树状可创建类型
export function queryObject(data) {
  return request({
    url: `/plm-doc/objectInstance/queryObject`,
    method: 'post',
    data
  })
}
// 动态获取物料属性列头信息
export function getPublicAttrColumn(params) {
  return request({
    url: `/plm-doc/api/seacrh/getPublicAttrColumn`,
    method: 'get',
    params
  })
}
// 批量删除物料
export function delMaterials(data) {
  return request({
    url: `/plm-doc/objectInstance/dels`,
    method: 'post',
    data
  })
}
// 更新附件信息
export function updateAttachmentInfo(data) {
  return request({
    url: `/plm-doc/objectAttachment/update`,
    method: 'put',
    data
  })
}
// 获取替代料弹窗列表
export function queryAlternativeMaterial(data) {
  return request({
    url: `/plm-doc/objectInstance/queryAlternativeMaterial`,
    method: 'post',
    data
  })
}
// 导出物料到Excel
export function exportToExcel(data) {
  return request({
    url: `/plm-doc/generalExport/exprotAttrsExcel?instanceId=${data.instanceId}&version=${data.version}`,
    method: 'post',
    responseType: 'blob'
  })
}
// 导出物料到Word
export function exportToWord(data) {
  return request({
    url: `/plm-doc/generalExport/exprotAttrsWord?instanceId=${data.instanceId}&version=${data.version}`,
    method: 'post',
    responseType: 'blob'
  })
}
// 导出物料列表excel
export function exprotInstanceExcel(data) {
  return request({
    url: '/plm-doc/generalExport/exprotInstanceExcel',
    method: 'post',
    responseType: 'blob',
    data
  })
}
// 导出物料列表word
export function exprotInstanceWord(data) {
  return request({
    url: '/plm-doc/generalExport/exprotInstanceWord',
    method: 'post',
    responseType: 'blob',
    data
  })
}
// 导出替代料exce
export function exprotReplaceExcel(data) {
  return request({
    url: '/plm-doc/generalExport/exprotReplaceExcel',
    method: 'post',
    responseType: 'blob',
    data
  })
}
// 导出替代料word
export function exprotReplaceWord(data) {
  return request({
    url: '/plm-doc/generalExport/exprotReplaceWord',
    method: 'post',
    responseType: 'blob',
    data
  })
}
// 导出关系excel
export function exprotRelationExcel(data) {
  return request({
    url: '/plm-doc/generalExport/exprotRelationExcel',
    method: 'post',
    responseType: 'blob',
    data
  })
}
// 导出关系word
export function exprotRelationWord(data) {
  return request({
    url: '/plm-doc/generalExport/exprotRelationWord',
    method: 'post',
    responseType: 'blob',
    data
  })
}
// 获取代号编码
export function queryCodeNumber(params) {
  return request({
    url: '/plm-doc/objectInstance/queryCodeNumber',
    method: 'get',
    params
  })
}
export function queryHistoryCodeNumbers() {
  return request({
    url: '/plm-doc/objectInstance/queryHistoryCodeNumbers',
    method: 'get'
  })
}
// 获取收藏文件夹/文件的数据
export function queryTreeData() {
  return request({
    url: '/plm-doc/objectFavorites/queryList',
    method: 'post'
  })
}
// 获取对象实例详情数据
export function viewObjectInstance(id, objversion) {
  return request({
    url: `/plm-doc/objectInstance/view?instanceId=${id}&objversion=${objversion}`,
    method: 'post'
  })
}

// 查看(物料对象)数据
export function baseObjectsView(id) {
  return request({
    url: '/plm-doc/api/baseObjects/view?id=' + id,
    method: 'get'
  })
}
