import Vue from 'vue'
import Router from 'vue-router'
import Layout2 from '@/layout/frontIndex'
import MicroApps from '@/microApps'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/', redirect: { name: 'TestPage' }
  },
  {
    'pageType': 'frontPage',
    'path': '/Infos',
    'component': Layout2,
    'hidden': false,
    'meta': {
      'title': '测试',
      'icon': 'iconicon_setting',
      'breadcrumb': false
    },
    'children': [
      {
        'pageType': 'frontPage',
        'path': '/testPage',
        'name': 'TestPage',
        'component': MicroApps,
        'hidden': false,
        'meta': {
          'title': '测试页面',
          'noCache': true,
          'breadcrumb': false
        }
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
