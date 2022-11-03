import request from '@/utils/request'

// 列表接口
export function postQueryPageList(params) {
  return request({
    url: '/plm-doc/api/baseObjects/queryPageList',
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        name: params.name,
        type: params.objectType,
        detailsType: params.detailsType
      }
    }
  })
}

// 编码规则的下拉框接口
export function postQueryList(data) {
  return request({
    url: '/plm-doc/api/baseCoderule/queryList',
    method: 'post',
    data
  })
}

// 新增接口
export function postAdd(data) {
  return request({
    url: '/plm-doc/api/baseObjects/add',
    method: 'post',
    data
  })
}

// 另存接口
export function putSaveanother(data) {
  return request({
    url: '/plm-doc/api/baseObjects/saveanother',
    method: 'post',
    data
  })
}

// 删除接口
export function deleteDels(data) {
  return request({
    url: '/plm-doc/api/baseObjects/dels',
    method: 'post',
    data: data
  })
}

// 启用接口
export function putUpdateEnable(data) {
  return request({
    url: '/plm-doc/api/baseObjects/updateEnable',
    method: 'post',
    data: data
  })
}

// 禁用接口
export function putUpdateDisableEnable(data) {
  return request({
    url: '/plm-doc/api/baseObjects/updateDisableEnable',
    method: 'post',
    data: data
  })
}

// 点击单条数据查看详情
export function getView(id) {
  return request({
    url: '/plm-doc/api/baseObjects/view?id=' + id,
    method: 'get'
  })
}

// 修改物料接口
export function putUpdate(data) {
  return request({
    url: '/plm-doc/api/baseObjects/update',
    method: 'post',
    data: data
  })
}

// 专有属性列表接口
export function getViewAttributes(id) {
  return request({
    url: '/plm-doc/api/baseAttributeMaterial/queryByObjectId?objectId=' + id,
    method: 'get'
  })
}

// 添加属性弹框的列表接口
export function postAAQueryPageList(params) {
  return request({
    url: '/plm-doc/api/baseAttributeMaterial/queryPageList',
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        name: params.name,
        type: params.type,
        attributeType: params.attributeType,
        status: 1,
        detailsType: params.detailsType
      }
    }
  })
}

// 物料添加属性保存接口
export function postAddAtrributes(data) {
  return request({
    url: '/plm-doc/api/baseObjects/addAtrributes',
    method: 'post',
    data: {
      attributeIds: data.attributeIds,
      objectId: data.objectId
    }
  })
}

// 属性顺序列表接口 对象属性查看
export function getViewObjectAttributes(id) {
  return request({
    url: '/plm-doc/api/baseObjects/viewObjectAttributes?id=' + id,
    method: 'get'
  })
}
// 属性可见
export function putUpdateVisible(data) {
  return request({
    url: '/plm-doc/api/baseObjects/updateVisible',
    method: 'put',
    data
  })
}
// 属性不可见
export function putUpdateNoVisible(data) {
  return request({
    url: '/plm-doc/api/baseObjects/updateNoVisible',
    method: 'put',
    data
  })
}

// 属性删除
export function putDeleteObjAttr(data) {
  return request({
    url: '/plm-doc/api/baseObjects/deleteObjAttr',
    method: 'post',
    data
  })
}

// 排序保存接口
export function putSaveSortObjectAttributes(data) {
  return request({
    url: '/plm-doc/api/baseObjects/saveSortObjectAttributes',
    method: 'post',
    data
  })
}

// 获取适用类型级联列表
export function queryBaseObjectsListByDefault(data) {
  return request({
    url: '/plm-doc/objectChangeInstance/queryBaseObjectsListByDefault',
    method: 'get',
    data
  })
}

// 获取版本编码下拉
export function getAllDatas(params) {
  return request({
    url: `/plm-doc/baseVersionrule/baseVersionrule/queryPageList`,
    method: 'post',
    data: {
      pageNo: params.pageNo,
      pageSize: params.pageSize,
      t: {
        status: params.status
      }
    }
  })
}

// 对象生命周期限制
export function getViewObjectLifeLimit(id) {
  return request({
    url: '/plm-doc/api/baseObjects/viewObjectLifeLimit?id=' + id,
    method: 'get'
  })
}
// 修改生命周期限制
export function putUpdateObjectLifeLimit(data) {
  return request({
    url: '/plm-doc/api/baseObjects/updateObjectLifeLimit',
    method: 'PUT',
    data: data
  })
}
// 根据列表code获取列表值的下拉数据
export function postQueryListSelectData(code) {
  return request({
    url: `/plm-doc/api/sysDict/queryListSelectData?code=${code}`,
    method: 'post'
  })
}

// 根据属性查询未绑定的对象
export function queryUnaddedBaseObjects(params) {
  return request({
    url: `/plm-doc/api/baseObjects/queryUnaddedBaseObjects`,
    method: 'get',
    params
  })
}

// 查询已绑定的替代料
export function queryBindMaterial(params) {
  return request({
    url: `/plm-doc/api/sysMaterialReplace/queryBindMaterial`,
    method: 'get',
    params
  })
}

export function queryNoBind(data) {
  return request({
    url: `/plm-doc/api/sysMaterialReplace/queryNoBind`,
    method: 'post',
    data
  })
}

// 批量添加物料-替代料类型
export function add(data) {
  return request({
    url: `/plm-doc/api/sysMaterialReplace/add`,
    method: 'post',
    data
  })
}

// 删除已添加的替代料
export function delReplace(data) {
  return request({
    url: `/plm-doc/api/sysMaterialReplace/delReplace`,
    method: 'post',
    data
  })
}

// 查询数据表下拉选项
export function queryTableNames() {
  return request({
    url: `/plm-doc/api/baseObjects/queryTableNames`,
    method: 'get'
  })
}

// 同步数据库
export function synchronizeDataTable(data) {
  return request({
    url: `/plm-doc/api/baseObjects/synchronizeDataTable`,
    method: 'post',
    data
  })
}

//
export function queryMarksById(params) {
  return request({
    url: '/plm-doc/objectInstance/queryMarksById',
    method: 'get',
    params
  })
}
// 获取系统模板分类数据-列表
export function queryListByCode(primaryCode, SecondaryCode) {
  return request({
    url: '/plm-doc/sysModelClassify/queryListByCode?primaryCode=' + primaryCode + '&SecondaryCode=' + SecondaryCode,
    method: 'post'
  })
}
// 根据模型以及模型对象树型结构
export function queryModelObjects(id) {
  return request({
    url: '/plm-doc/sysModel/queryModelObjects?primaryCode=' + id,
    method: 'get'
  })
}
// 根据对象主键查询属性
export function queryAttributes(id) {
  return request({
    url: '/plm-doc/api/baseObjects/queryAttributes?objectId=' + id,
    method: 'get'
  })
}
// 添加对象模型页签关联表数据
export function addBaseObjectsModel(data) {
  return request({
    url: '/plm-doc/baseObjectsModel/add',
    method: 'post',
    data
  })
}
// 获取对象模型页签关联表数据-列表
export function queryBaseObjectsModelList(id) {
  return request({
    url: '/plm-doc/baseObjectsModel/queryList?objectId=' + id,
    method: 'get'
  })
}
// 修改模型页签关联表顺序
export function updateTabOrder(data) {
  return request({
    url: '/plm-doc/baseObjectsModel/updateOrder',
    method: 'post',
    data
  })
}

/* 获取所有物料类型 */
export function getBaseObjectsExtend() {
  return request({
    url: `/plm-doc/api/baseObjectsExtend/view`,
    method: 'get'
  })
}
