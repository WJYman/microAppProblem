import Vue from 'vue'

import btnPermission from './btnPermission'
import btnConPermission from './btnPermission/conditionButton.js'
import dialogDrag from './dialogDrag'

const directiveAll = {
  btnPer: btnPermission,
  btncon: btnConPermission,
  dialogDrag: dialogDrag
}

Object.keys(directiveAll).forEach(key => {
  Vue.directive(key, directiveAll[key]) // 全局注册指令
})
