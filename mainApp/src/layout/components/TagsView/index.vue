<template>
  <div class="tags-view">
    <el-tabs v-model="routePath" type="card" closable @tab-remove="closeSelectedTag" @tab-click="jumpPage">
      <el-tab-pane
        v-for="tag in visitedViews"
        :key="tag.path"
        :name="tag.path"
      >
        <span slot="label">{{ lang[tag.title] || tag.title }}</span>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import path from 'path'

export default {
  components: {},
  data() {
    return {
      affixTags: [],
      routePath: '',
      lang: this.$store.getters.lang
    }
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    },
    routes() {
      return this.$store.state.permission.routers
    }
  },
  watch: {
    $route() {
      this.addTags()
      this.routePath = this.$route.path
    }
  },
  mounted() {
    this.routePath = this.$route.path
    this.initTags()
    this.addTags()
  },
  methods: {
    jumpPage() {
      const tag = this.visitedViews.filter(item => item.path === this.routePath)[0]
      this.$router.push({ path: tag.path, query: tag.query, fullPath: tag.fullPath })
    },
    isActive(route) {
      return route.path === this.$route.path
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    initTags() {
      const affixTags = this.affixTags = this.filterAffixTags(this.routes)
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch('tagsView/addVisitedView', tag)
        }
      }
    },
    addTags() {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route)
      }
      return false
    },
    closeSelectedTag(view) {
      if (typeof view !== 'object') {
        view = this.visitedViews.filter(item => item.path === view)[0]
      }
      this.$store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
      })
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-view {
  width: 100%;
  margin-top: 20px;
  ::v-deep .el-tabs {
    width: 100%;
    background-color: #0081FF;
    .el-tabs__nav-wrap.is-scrollable {
      padding: 0 30px;
    }

    .el-tabs__header {
      border-bottom: none;
      margin: 0 !important;
    }
    .el-tabs__nav {
      border: none;
    }
    .el-tabs__nav-next, .el-tabs__nav-prev {
      line-height: 30px;
      width: 30px;
      height: 30px;
      color: #FFFFFF;
      text-align: center;
      border-radius: 4px;
      background-color: #0081FF;
      &:hover {
        background-color: #016BD2;
        i {
          opacity: 0.6;
        }
      }
    }

    .el-tabs__item {
      height: 30px;
      line-height: 30px;
      color: #FFFFFF;
      border-left: none;
      padding: 0 16px !important;
      user-select: none;
      font-size: 12px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 25%;
        width: 1px;
        height: 50%;
        background-color: #6B9EE1
      }
      .el-icon-close {
        width: 14px;
        &::before {
          content: ""
        }
      }
    }
    .el-tabs__item.is-closable:hover,
    .el-tabs__item.is-active {
      color: #666666;
      background-color: #FFFFFF;
      border-radius: 6px 6px 0 0;
      padding: 0 16px !important;
      &:before {
        width: 0px;
      }

      .el-icon-close {
        width: 14px;
        &::before {
          content: "\e6db"
        }
      }
    }
    .el-tabs__item:first-child,
    .el-tabs__item.is-closable:hover + .el-tabs__item,
    .el-tabs__item.is-active + .el-tabs__item {
      &:before {
        width: 0px;
      }
    }
  }
}
</style>
