import request from '@/utils/request'
import Qs from 'qs'
// const url = '/plm-doc/api/baseCoderule/view'
/* 获取(编码规则)分页数据列表*/
export function getAllDatas(data) {
  return request({
    url: `/plm-doc/api/baseCoderule/queryPageList`,
    method: 'post',
    data
  })
}

/* 查看(编码规则)数据 */
export function getDataDetail(params) {
  return request({
    url: `/plm-doc/api/baseCoderule/view`,
    method: 'get',
    params
  })
}
/* 新增(编码规则)数据 */
export function addData(data) {
  return request({
    url: `/plm-doc/api/baseCoderule/add`,
    method: 'post',
    data
  })
}
/* 更新编码规则状态 */
export function updateStatusData(data) {
  return request({
    url: `/plm-doc/api/baseCoderule/updateStatus`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    data: Qs.stringify(data)
  })
}
/* 修改(编码规则)数据 */
export function updateData(data) {
  return request({
    url: `/plm-doc/api/baseCoderule/update`,
    method: 'post',
    data
  })
}
/* 删除(编码规则)数据 */
export function deleteData(data) {
  return request({
    url: `/plm-doc/api/baseCoderule/del?id=${data.id}`,
    method: 'post'
  })
}
