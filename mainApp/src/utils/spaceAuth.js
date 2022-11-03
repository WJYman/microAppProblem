import store from '@/store'

export function oriFinStop() {
  return ['1', '3', '4'].includes(store.state.app.workCenter.flowStatus)
}

export function finStop() {
  return ['3', '4'].includes(store.state.app.workCenter.flowStatus)
}
