<template>
  <div v-if="pageType === 'adminPage' || pageType === 'frontPage'" :class="{'has-logo':showLogo}" class="sidebar-container">
    <template v-if="showLogo">
      <logo v-if="pageType === 'adminPage'" :collapse="isCollapse" />
      <FrontLogo v-if="pageType === 'frontPage'" :collapse="isCollapse" />
    </template>

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-openeds="$router.path"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="$store.state.settings.uniqueOpened"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permissionRouters"
          :key="route.path"
          :page-type="pageType"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
  <div v-else class="navbarfrond-wrap">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-openeds="$router.path"
        :default-active="activeMenu"
        class="navbarfrond"
        mode="vertical"
        :collapse="isCollapse"
        :collapse-transition="false"
        :unique-opened="$store.state.settings.uniqueOpened"
        @select="handleSelect"
      >
        <sidebar-item
          v-for="route in permissionRouters"
          :key="route.path"
          :page-type="pageType"
          :item="route"
          :base-path="route.path"
        />
        <div class="menu-return">
          <el-menu-item @click="$router.go(-1)">
            <i class="iconfont iconicon_cancel"></i>
            <span slot="title">{{ lang.back }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import FrontLogo from './frontLogo'
import SidebarItem from './SidebarItem'
import variables from '@/assets/styles/variables.scss'

export default {
  components: { SidebarItem, Logo, FrontLogo },
  props: {
    pageType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      lang: this.$store.getters.lang
    }
  },
  computed: {
    ...mapGetters(['permissionRouters', 'sidebar']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    handleSelect() {
      localStorage.setItem('jumpPageParams', '')
    }
  }
}
</script>
<style lang="scss" scoped>
.navbarfrond:not(.el-menu--collapse) {
    width: 184px !important;
    ::v-deep .el-menu-item{
      padding: 0 10px!important;
      overflow: hidden;
    }
    ::v-deep .el-submenu .el-menu-item {
      min-width: 184px!important;
      background: #556ee6 !important;
      opacity: 1 !important;
      padding: 0 30px!important;
    }
    ::v-deep .el-menu-item:hover {
      background: #6c8adc !important;
    }

    ::v-deep .menu-return .el-menu-item {
      width: 184px !important;
      .iconfont{
        padding-right: 10px;
      }
  }
}
</style>
