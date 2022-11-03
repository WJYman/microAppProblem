import request from '@/utils/request'
/* 获取左侧拖拽列表的数据/和子节点的数据 */
export function postQueryPageList(data) {
  return request({
    url: `/plm-doc/objectFolder/queryPageList`,
    method: 'post',
    data: data
  })
}
// 左侧 拖动文档或者文件夹，接口
export function putUpdate(data) {
  return request({
    url: '/plm-doc/objectFolder/update',
    method: 'put',
    data: data
  })
}

// 附件列表接口
export function postFileQueryPageList(data) {
  return request({
    url: `/plm-doc/objectAttachment/queryPageList`,
    method: 'post',
    data
  })
}
// 附件预览接口
export function postPlmfile(data, responseType) {
  return request({
    url: `/plm-doc/api/plmfile`,
    headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    responseType: responseType,
    method: 'post',
    data
  })
}

// 附件列表
export function getFileList(id) {
  return request({
    url: `/plm-doc/sys/list/{${id}}`,
    method: 'get'
  })
}
// 批量上传附件
export function postBatchUpload(data) {
  return request({
    url: `/plm-doc/sys/batchUpload`,
    method: 'post',
    data: data
  })
}

// 确认绑定上传附件
export function postFileAdd(data) {
  return request({
    url: `/plm-doc/objectAttachment/add`,
    method: 'post',
    data: data
  })
}

// 基本属性接口
export function getQueryBaseAttribute(id, version) {
  return request({
    url: `/plm-doc/objectInstance/queryBaseAttribute?id=${id}&version=${version}`,
    method: 'get'
  })
}
// 根据列表code获取列表值的下拉数据
export function postQueryListSelectData(code) {
  // // 判读vuex里面是否存有该有code
  // if (store.state.app.codeOptions.some(item => { return item.key === code })) {
  //   var val = {}
  //   val = { result: store.state.app.codeOptions.filter(item => { return item.key === code.toString() })[0].options }
  //   return val
  // } else {
  return request({
    url: `/plm-doc/api/sysDict/queryListSelectData?code=${code}`,
    method: 'post'
  })
  //   }).then(res => {
  //     // 存入vuex中
  //     if (!store.state.app.codeOptions.map(item => { return item.key }).includes(code)) {
  //       store.state.app.codeOptions.push({ key: code, options: res.result })
  //     }
  //     return res
  //     // _this.$store.dispatch('app/setCodeOptions', { codeOptions: store.state.app.codeOptions })
  //   })
  // }
}

// 对象的属性保存/修改接口
export function putBAUpdate(data) {
  return request({
    url: '/plm-doc/objectInstance/update',
    method: 'put',
    data: data
  })
}
// 根据id查看(对象实例)数据 \ 基本信息接口
export function getViewObjectInstanceByList(id, version) {
  return request({
    url: `/plm-doc/objectInstance/viewObjectInstanceByList?id=${id}&version=${version}`,
    method: 'get'
  })
}

// 附件模块 删除接口
export function deleteDels(data) {
  return request({
    url: '/plm-doc/objectAttachment/dels',
    method: 'delete',
    data: data
  })
}

// 附件模块 签出接口
export function putCheckOutfile(id) {
  return request({
    url: `/plm-doc/objectAttachment/checkOutfile?id=${id}`,
    method: 'put'
  })
}
// 附件模块 签入接口
export function putCheckInfile(data) {
  return request({
    url: '/plm-doc/objectAttachment/checkInfile',
    method: 'put',
    data: data
  })
}
// 附件模块 下载接口
export function postDown(ids) {
  return request({
    url: `/plm-doc/objectAttachment/down`,
    method: 'post',
    responseType: 'blob',
    data: ids
  })
}

// 附件模块 粘贴接口
export function postCopy(data) {
  return request({
    url: `/plm-doc/objectAttachment/copy?fromfileId=${data.fromfileId}&toObjectInsId=${data.toObjectInsId}`,
    method: 'post'
  })
}

// 附件模块 取消签出接口
export function putCancelCheckOutfile(id) {
  return request({
    url: `/plm-doc/objectAttachment/cancelCheckOutfile?id=${id}`,
    method: 'put'
  })
}
// 文件信息 删除
export function postDel(queryVos) {
  return request({
    url: `/plm-doc/objectFolder/del`,
    method: 'post',
    data: {
      queryVos: queryVos
    }
  })
}
// 文件信息 搜索文档
export function getObjectInsList(data) {
  return request({
    url: `/plm-doc/objectInstance/getObjectInsList?workspaceId=${data.workspaceId}&objectType=${data.objectType}&search=${data.search}&parentId=${data.id}`,
    method: 'get'
  })
}

// 创建文件夹
export function postAdd(data) {
  return request({
    url: `/plm-doc/objectFolder/add`,
    method: 'post',
    data: data
  })
}

// 另存文件
export function getViewObjectInstanceByIdCopy(id) {
  return request({
    url: `/plm-doc/objectInstance/viewObjectInstanceByIdCopy?id=${id}`,
    method: 'get'
  })
}

export function queryJyPageList(data) {
  return request({
    url: '/plm-doc/objectAttachment/queryJyPageList',
    method: 'post',
    data: data
  })
}

export function batchCopy(data) {
  return request({
    url: '/plm-doc/objectAttachment/batchCopy',
    method: 'post',
    data: data
  })
}

// 根据对象id查询版本
export function getQueryVersionList(id) {
  return request({
    url: `/plm-doc/objectInstance/queryVersionList?id=${id}`,
    method: 'get'
  })
}

// 根据对象id查询版本
export function viewVersionAttachments(id) {
  return request({
    url: `/plm-doc/objectAttachment/viewVersionAttachments?id=${id}`,
    method: 'post'
  })
}

// 根据变更对象id查询版本
export function viewVersionAttachmentsChange(id) {
  return request({
    url: `/plm-doc/objectChangeInstance/viewVersionAttachments?id=${id}`,
    method: 'post'
  })
}
// 单个上传
export function postUpload(data, file) {
  return request({
    url: `/plm-doc/objectAttachment/upload`,
    method: 'post',
    onUploadProgress: (progressEvent) => {
      try {
        const num = progressEvent.loaded / progressEvent.total * 100 - 1 | 0 // 百分比
        file.onProgress({ percent: num }) // 进度条
      } catch (err) {
        //
      }
    },
    data: data
  })
}

// 单个上传 大文件上传
export function largeFileUpload(data, file, ind, total) {
  return request({
    url: `/plm-doc/sys/largeFileUpload`,
    method: 'post',
    onUploadProgress: (progressEvent) => {
      try {
        const num = (((progressEvent.loaded / progressEvent.total * 100) / total) + (ind / total * 100)) - 1 | 0 // 百分比
        file.onProgress({ percent: num }) // 进度条
      } catch (err) {
        //
      }
    },
    data: data
  })
}
// 附件大文件合并
export function largeMerge(data) {
  return request({
    url: `/plm-doc/objectInsAttachment/largeMerge`,
    method: 'post',
    data
  })
}

// 签入大附件数据
export function checkInLargeFile(data) {
  return request({
    url: '/plm-doc/objectAttachment/checkInLargeFile',
    method: 'put',
    data: data
  })
}

// 文件是否已可以被预览
export function attachmentReviewPrepared(id) {
  return request({
    url: `/plm-doc/objectAttachment/attachmentReviewPrepared?id=${id}`,
    method: 'get'
  })
}

// 导出附件清单
export function exportAttachments(params) {
  return request({
    url: `/plm-doc/api/exportExcel/exportAttachments`,
    method: 'get',
    params,
    responseType: 'blob'
  })
}

// 根据type获取是否有对应权限
export function queryAuthority(params) {
  return request({
    url: `/plm-doc/api/baseAuthority/queryAuthority`,
    method: 'get',
    params
  })
}
// 根据对象的主键,查询版本
export function queryVersions(id, objversion) {
  return request({
    url: `/plm-doc/objectChangeInstance/queryVersions?id=${id}`,
    method: 'get'
  })
}
// 查文档模板
export function queryDocTemplate(data) {
  return request({
    url: '/plm-doc/objectTemplate/queryList',
    method: 'post',
    data
  })
}
