/*
  v-btncon 条件按钮权限指令
  v-btncon="type/detailType/author/instanceId"        返回值：123                         注释：123
*/

import { getAuthorizedConditionButton } from '@/api/common'

export default {
  bind(dom, options) {
    const value = options.value || ''
    const array = value.split('.')
    let flag = true
    // 当参数数组不满足要求，则进行处理
    if (array.length !== 4 && array.length !== 5) {
      flag = false
      if (!dom.parentNode) {
        dom.style.display = 'none'
      } else {
        dom.parentNode.removeChild(dom)
      }
    } else {
      // 当传递第五个参数：变更受控状态时，进行处理
      let controlStatus = null
      if (array.length === 5 && array[4] !== '') {
        controlStatus = array[4]
      }
      // 获取各个权限按钮需要的参数
      const params = {
        type: array[0],
        detailsType: array[1],
        buttonMarks: [array[2]],
        instanceId: array[3],
        controlStatus: controlStatus
      }
      // 查询该按钮的权限
      getAuthorizedConditionButton(params).then(res => {
        const map = res.result
        if (map && map[array[2]]) {
          flag = true
        } else {
          flag = false
        }
        if (!flag) {
          if (!dom.parentNode) {
            dom.style.display = 'none'
          } else {
            dom.parentNode.removeChild(dom)
          }
        }
      })
    }
  }
}
