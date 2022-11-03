import request from '@/utils/request'

// 系统配置-动态参数 根据code查询数据
export function queryBaseSettingDynamicParam(code) {
  return request({
    url: '/plm-doc/baseSettingDynamicParam/queryByCode?code=' + code,
    method: 'post'
  })
}
