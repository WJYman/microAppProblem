import Vue from 'vue'
import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import App from './App'
import store from './store/index'
import router from './router/routers'
// global css
import './assets/font/iconfont.css'
import './assets/styles/font/font.scss'
import './assets/styles/index.scss'
import './assets/styles/frontPage/style.scss'

import './assets/icons' // icon
import './router/index' // control

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

import './directive/index.js'

import VXETablePluginElement from 'vxe-table-plugin-element'
import 'vxe-table-plugin-element/dist/style.css'
VXETable.use(VXETablePluginElement)

import uploader from 'vue-simple-uploader'
Vue.use(uploader)

import Video from 'video.js'
import 'video.js/dist/video-js.css'
import VueCropper from 'vue-cropper'
import GLOBAL from '@/utils/global.js'
import { message } from '@/utils/resetMessage'
import Print from 'vue-print-nb'
Vue.use(Print)
Vue.prototype.$modal = VXETable.modal
Vue.prototype.$video = Video
Vue.use(VueCropper)

import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
import enUS from 'vxe-table/lib/locale/lang/en-US'

import Storage from '@/utils/storage'
const storage = new Storage()
const getLocale = _ => storage.get('locale') || 'zh'
Vue.use(VueI18n)
const messages = {
  en: { ...enLocale, ...enUS },
  zh: { ...zhLocale, ...zhCN }
}

const i18n = new VueI18n({
  locale: getLocale(), // set locale
  messages // set locale messages
})
const render = Element.Input.render
Element.Input.render = function() {
  // 设置组件默认原生属性（attr）
  this.$attrs.maxlength || (this.$attrs.maxlength = 50)
  return render.apply(this, arguments)
}
Vue.use(VXETable, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(Element, {
  size: 'small',
  i18n: (key, value) => i18n.t(key, value)
})
Vue.prototype.$message = message
Vue.prototype.$global = GLOBAL
Vue.config.productionTip = false

import microApp from '@micro-zoe/micro-app'
microApp.start()

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
