import store from '@/store'
import {
  Notification
} from 'element-ui'

import {
  queryBaseSettingDynamicParam
} from '@/api/frontPage/public/index.js'

var websocket = null
var lockReconnect = false // 避免ws重复连接

// 连接webSocket
export function connectSocket() {
  try {
    const loginName = store.getters.user.loginName
    // 调用接口获取相关的参数
    queryBaseSettingDynamicParam('websoctMessage').then(res => {
      var url = res.result.value

      websocket = new WebSocket(url + loginName)
      // process.env.VUE_APP_WS_API
      initEvent()
    })
  } catch (e) {
    reconnect()
  }
}

function initEvent() {
  // 连接发生错误的回调方法

  websocket.onerror = function(e) {
    reconnect()
  }

  // 连接成功建立的回调方法
  websocket.onopen = function(event) {
    heartCheck.reset().start() // 心跳检测重置
  }

  // 接收到消息的回调方法
  websocket.onmessage = function(event) {
    // 接收服务器推送的信息
    var socketmsg = JSON.parse(event.data)
    console.log('收到了消息', socketmsg)
    infoHandle(socketmsg)
    heartCheck.reset().start()
  }

  // 连接关闭的回调方法
  websocket.onclose = function(e) {
    reconnect()
  }
}

// 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function() {
  websocket.close()
}

// 发送消息
function send() {
  const loginName = store.getters.user.loginName
  const mes = {
    'fromId': loginName,
    'type': 'heartCheck',
    'msg': {},
    'toId': ''
  }
  websocket.send(JSON.stringify(mes))
}

// 重连
function reconnect() {
  if (lockReconnect) return
  lockReconnect = true
  setTimeout(function() { // 没连接上会一直重连，设置延迟避免请求过多
    connectSocket()
    lockReconnect = false
  }, 2000)
}

// 心跳检测
var heartCheck = {
  timeout: 1000 * 30, // 30发一次心跳
  timeoutObj: null,
  serverTimeoutObj: null,
  reset: function() {
    clearTimeout(this.timeoutObj)
    clearTimeout(this.serverTimeoutObj)
    return this
  },
  start: function() {
    var self = this
    this.timeoutObj = setTimeout(function() {
      // 这里发送一个心跳，后端收到后，返回一个心跳消息，
      // onmessage拿到返回的心跳就说明连接正常

      send()
      self.serverTimeoutObj = setTimeout(function() { // 如果超过一定时间还没重置，说明后端主动断开了
        websocket.close() // 如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
      }, self.timeout)
    }, this.timeout)
  }
}

// 返回的消息处理
const infoHandle = ({ type, msg }) => {
  if (type === 'imInfo') {
    Notification({
      title: msg.title,
      message: msg.content,
      type: 'success',
      position: 'bottom-right'
    })
  } else {
    store.dispatch('updateSocketData', { type, t: msg.t })
  }
}
