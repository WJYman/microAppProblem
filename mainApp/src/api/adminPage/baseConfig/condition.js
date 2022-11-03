import request from '@/utils/request'

export function add(data) {
  return request({
    url: '/plm-doc/baseCondition/baseCondition/add',
    method: 'post',
    data
  })
}
// 获取(物料对象)数据列表
export function queryBaseObjectsList(detailsType, objectType) {
  return request({
    url: '/plm-doc/api/baseObjects/queryList?detailsType=' + detailsType + '&objectType=' + objectType,
    method: 'get'
  })
}
