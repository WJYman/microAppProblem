/*
  v-btnPer 按钮权限指令
  三种写法                例如当前网址：http://localhost:8013/Material/1
  v-btnPer              返回值  /Material/1                 注释：页面地址
  v-btnPer:add          返回值：add/Material/1              注释：add页面地址
  v-btnPer:add="123"    返回值：add123                      注释：add123
  v-btnPer="123"        返回值：123                         注释：123
*/

import store from '@/store'
export default {
  bind(dom, options) {
    // 只调用一次，指令第一次绑定到元素时调用
    const permissions = store.state.buttomPermission.btnPermission
    let value = null
    const pathname = window.location.pathname
    const arg = options.arg || ''
    // console.log(permissions)
    if (Object.keys(options).indexOf('value') >= 0) {
      value = `${arg}${options.value}`
    } else {
      value = `${arg}${pathname}`
    }
    // console.log(value, 'value')

    let flag = true

    if (!permissions.includes(value)) {
      flag = false
    }
    // console.log(flag, 'flag')
    if (!flag) {
      if (!dom.parentNode) {
        dom.style.display = 'none'
      } else {
        dom.parentNode.removeChild(dom)
      }
    }
  }
  // inserted(dom, options) {
  //   // 被绑定元素插入父节点时调用
  // },
  // update() {
  //   // 所在组件的VNode 更新时调用，可能发生在其子VNode更新之前
  // },
  // componentUpdated() {
  //   // 指令所在组件的VNode及其子VNode全部更新后调用
  // },
  // unbind() {
  //   // 只调用一次，指令与元素解绑时调用
  // }
}
