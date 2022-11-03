import './public-path'
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

// 与基座进行数据交互
function handleMicroData() {
  // 是否是微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 主动获取基座下发的数据
    console.log('child-vue2 getData:', window.microApp.getData())

    // 监听基座下发的数据变化
    window.microApp.addDataListener((data) => {
      console.log('child-vue2 addDataListener:', data)

      // 当基座下发path时进行跳转
      if (data.path && data.path !== router.currentRoute.path) {
        router.push(data.path)
      }
    })

    // 向基座发送数据
    setTimeout(() => {
      window.microApp.dispatch({ myname: 'child-vue2' })
    }, 3000)
  }
}

let app = null
// 将渲染操作放入 mount 函数
function mount() {
  app = new Vue({
    el: '#app',
    i18n,
    router,
    store,
    render: h => h(App)
  })
  handleMicroData()
}

// 将卸载操作放入 unmount 函数
function unmount() {
  app.$destroy()
  app.$el.innerHTML = ''
  app = null
  console.log('微应用卸载了')
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}
