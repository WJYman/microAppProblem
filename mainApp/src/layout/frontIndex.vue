<template>
  <div :class="classObj" class="app-wrapper admin-page">
    <template v-if="isMICRO_APP">
      <app-main></app-main>
    </template>
    <template v-else>
      <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />

      <Sidebar id="frontSidebarContainer" page-type="frontPage" />

      <div :class="{hasTagsView:needTagsView}" class="main-container" :style="contentStyleObj">
        <div :class="{'fixed-header':fixedHeader}">
          <!-- navbar 顶部导航 -->
          <Topbar></Topbar>
        </div>

        <!-- 各个页面渲染 -->
        <div class="main-content">
          <app-main></app-main>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { Topbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'FrontLayout',
  components: {
    Topbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  data() {
    return {
      contentStyleObj: {
        height: ''
      },
      isMICRO_APP: false
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'

      }
    }

  },
  watch: {
  },
  created() {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      this.isMICRO_APP = true
    }
    window.addEventListener('resize', this.getHight)
    this.getHight()
  },
  destroyed() {
    window.removeEventListener('resize', this.getHight)
  },
  methods: {
    getHight() {
      this.contentStyleObj.height = window.innerHeight + 'px'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/mixin.scss";
@import "~@/assets/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    background: $background;
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  #app .main-container {
    margin-left: 180px;
  }

  #frontSidebarContainer {
    background-color: #FFFFFF !important;
    box-shadow: 4px 0px 6px 0px rgba(16, 16, 16, 0.1);
    width: 180px !important;
    ::v-deep .el-menu {
      background-color: #FFFFFF !important;

      .el-menu--inline {
        padding-left: 0px;
      }
      .el-submenu__title > span,
      .el-menu-item > span {
        font-size: 14px !important;
      }
      .menu-icon {
        margin-right: 16px !important;
        font-size: 12px;
      }
      .el-submenu__title {
        padding: 0 28px 0 16px !important;
        .el-submenu__icon-arrow {
          right: 16px;
        }
      }
      .el-menu-item, .el-submenu__title {
        color: #666666 !important;
        height: 44px;
        line-height: 44px;
        padding: 0 28px 0 16px !important;
      }
      .el-menu-item {
        padding-right: 10px !important;
      }
      .nest-menu .el-menu-item {
        height: 44px !important;
        line-height: 44px !important;
      }
      .is-active > span,
      .is-active > .el-submenu__title i,
      .is-active .menu-icon,
      .is-active > .el-submenu__title {
        color: #0081FF !important;
      }
      .el-menu-item.is-active.submenu-title-noDropdown,
      .el-submenu .is-active.el-menu-item {
        background-color: rgba(0, 129, 255, 0.08) !important;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background-color: #0081FF;
        }
      }
    .nest-menu .el-submenu > .el-submenu__title, .el-submenu .el-menu-item {
        background-color: #FBFBFB !important;
        padding: 0 10px 0 44px !important;
      }
    .nest-menu .el-submenu > .el-submenu__title {
      padding-right: 28px !important;
    }
      .el-submenu:hover > .el-submenu__title,
      .nest-menu .el-submenu > .el-submenu__title:hover, .el-menu-item:hover {
          background: rgba(0, 129, 255, 0.08) !important;
          color: #0081FF !important;
          i {
            color: #0081FF !important;
          }
      }

    }
  }
  .hideSidebar {

    .main-container {
      margin-left: 44px !important;
    }
    #frontSidebarContainer {
      width: 44px !important;
      ::v-deep.el-menu--collapse {
        width: 44px !important;
      }
      ::v-deep .el-menu {
        .el-submenu {
          .el-submenu__title,.el-menu-item {
            padding: 0 16px !important;
          }
        }
        .menu-icon {
          font-size: 12px !important;
        }

        .is-active .menu-icon {
          color: #0081FF !important;
        }

        .el-menu .el-menu-item:hover {
          background: #FBFBFB !important;
        }
        .el-menu-item.is-active.submenu-title-noDropdown,
        .el-submenu .is-active.el-menu-item {
          background-color: rgba(0, 129, 255, 0.08) !important;
          &:before {
            width: 0px;
          }
        }
      }
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: relative;
    top: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    transition: width 0.2s;
    padding: 0;
  }

  .hideSidebar .fixed-header {
    width: 100%;
  }

  .mobile .fixed-header {
    width: 100%;
  }
.tile {
  margin-bottom: 12px;
}
.frontpage_content {
  height: calc(100vh - 56px);
  .container{
    width: auto !important;
    margin-left:184px !important;
  }
  .container.front{
      margin-left: 0px !important;
    }
}
 .main-content {
    width: 100%;
    height: calc(100% - 50px);
    padding: 20px 20px 0;
    background-color: #F1F1F1;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-color: transparent transparent;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: #eff2f7;
      border-radius: 4px;
      border-right: 2px solid #FFF;
    }
  }
</style>
