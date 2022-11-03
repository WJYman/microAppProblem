const getters = {
  deployUploadApi: state => state.api.deployUploadApi,
  databaseUploadApi: state => state.api.databaseUploadApi,
  size: state => state.app.size,
  sidebar: state => state.app.sidebar,
  workCenter: state => state.app.workCenter,
  workspaceId: state => state.app.workspaceId,
  imageUrl: state => state.app.imageUrl,
  device: state => state.app.device,
  token: state => state.user.token,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  user: state => state.user.user,
  socketData: state => state.webSocketData.socketData,
  homePagePath: state => state.user.homePagePath,
  lang: state => state.language.lang,
  loadMenus: state => state.user.loadMenus,
  codeOptions: state => state.app.codeOptions,
  permissionRouters: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  socketApi: state => state.api.socketApi,
  imagesUploadApi: state => state.api.imagesUploadApi,
  baseApi: state => state.api.baseApi,
  fileUploadApi: state => state.api.fileUploadApi,
  updateAvatarApi: state => state.api.updateAvatarApi,
  qiNiuUploadApi: state => state.api.qiNiuUploadApi,
  sqlApi: state => state.api.sqlApi,
  swaggerApi: state => state.api.swaggerApi
}
export default getters