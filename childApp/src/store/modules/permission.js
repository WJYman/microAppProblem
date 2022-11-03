import { constantRouterMap } from '@/router/routers'
import Layout from '@/layout/index'
import Layout2 from '@/layout/frontIndex'
import PageWindow from '@/layout/components/pageWindow'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, asyncRouter) {
      commit('SET_ROUTERS', asyncRouter)
    }
  }
}

export const filterAsyncRouter = (routers) => { // 遍历后台传来的路由字符串，转换为组件对象
  return routers.filter(router => {
    if (router.component) {
      if (router.component === 'Layout') { // Layout组件特殊处理
        router.component = Layout
      } else if (router.component === 'Layout2') { // Layout组件特殊处理
        router.component = Layout2
      } else if (router.component === 'PageWindow') { // Layout组件特殊处理
        router.component = PageWindow
      } else {
        const component = router.component
        router.component = loadView(component)
      }
    }
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children)
    }
    return true
  })
}
export const loadView = (view) => {
  // 因为webpack版本原因，如下写法将导致路由懒加载时路径加载不出来，所以更改如下写法
  // return () => import(`@/views/${view}`)
  return (resolve) => require([`@/views/${view}`], resolve)
}

export default permission
