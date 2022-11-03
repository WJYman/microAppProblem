import request from '@/utils/request'

/* 获取消息通知表数据-列表 */
export function getQueryList(data) {
  return request({
    url: `/plm-doc/baseMsg/queryPageList`,
    method: 'post',
    data
  })
}

/* 添加消息通知表数据 */
export function postAdd(data) {
  return request({
    url: `/plm-doc/baseMsg/add`,
    method: 'post',
    data: data
  })
}

/* 批量删除消息通知表 */
export function deleteDels(data) {
  return request({
    url: `/plm-doc/baseMsg/dels`,
    method: 'delete',
    data: data
  })
}

/* 发送消息 */
export function deleteSendMsg(data) {
  return request({
    url: `/plm-doc/baseMsg/sendMsg`,
    method: 'post',
    data: data
  })
}

/* 修改消息通知表数据 */
export function postUpdate(data) {
  return request({
    url: `/plm-doc/baseMsg/updateMsgs`,
    method: 'post',
    data: data
  })
}
