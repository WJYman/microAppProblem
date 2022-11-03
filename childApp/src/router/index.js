import router from './routers'
import store from '@/store'
import Config from '@/settings'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title && store.state.language.lang && store.state.language.lang[to.meta.title]) {
    document.title = store.state.language.lang[to.meta.title] + ' - ' + Config.title
  } else if (to.meta && to.meta.title) {
    document.title = to.meta.title + ' - ' + Config.title
  }
  next()
})
router.afterEach(() => {
  NProgress.done() // finish progress bar
})
