<template>
  <div :class="classObj" class="app-wrapper admin-page">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />

    <sidebar class="sidebar-container" page-type="adminPage" />
    <div :class="{hasTagsView:needTagsView}" class="main-container" :style="contentStyleObj">
      <div :class="{'fixed-header':fixedHeader}">
        <!-- navbar 顶部导航 -->
        <navbar></navbar>
      </div>
      <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
      <!-- 各个页面渲染 -->
      <div class="main-content">
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
import Breadcrumb from '@/components/Breadcrumb'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    Breadcrumb
  },
  mixins: [ResizeMixin],
  data() {
    return {
      contentStyleObj: {
        height: ''
      }
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
  created() {
    window.addEventListener('resize', this.getHight)
    this.getHight()
  },
  destroyed() {
    window.removeEventListener('resize', this.getHight)
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
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
  .main-content {
    width: 100%;
    height: calc(100% - 115px);
    padding: 0 20px;
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
