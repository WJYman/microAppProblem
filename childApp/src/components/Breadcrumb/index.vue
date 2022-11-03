<template>
  <div v-if="levelList.length" class="breadcrumb-wrap">
    <el-breadcrumb class="app-breadcrumb fs16" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in levelList" :key="item.path">
          <span v-if="item.redirect" class="no-redirect fs16">{{ lang[item.meta.title] || item.meta.title }}</span>
          <span v-if="!item.redirect" class="current-page fs16">{{ lang[item.meta.title] || item.meta.title }}</span>
          <!--          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>-->
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
import pathToRegexp from 'path-to-regexp'

export default {
  data() {
    return {
      lang: this.$store.getters.lang,
      levelList: null
    }
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      // console.log('this.$route', this.$route)
      // only show routes with meta.title
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (!this.isDashboard(first)) {
        // matched = [{ path: '/main/home', meta: { title: '首页' }}].concat(matched)
      }

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables';
@import '~@/assets/styles/mixin';

.breadcrumb-wrap {
  @include clearfix;
  // background: $background;

  ::v-deep .el-breadcrumb {
    display: block;

    ::v-deep .el-breadcrumb__inner,
    ::v-deep .el-breadcrumb__inner a {
      font-weight: 600 !important;
    }
    .el-breadcrumb__separator {
      font-size: 16px !important;
      color: #74788d;
      margin: 0 8px;
      font-weight: 600;
      float: left;
    }
    .no-redirect {
      color: #74788d;
      cursor: text;
    }
    .current-page {
      color: #495057;
      font-weight: 600;
    }
    .el-breadcrumb__inner {
      color: #74788d;
      float: left;
    }
  }
}
</style>
