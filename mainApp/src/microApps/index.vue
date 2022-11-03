<template>
  <div class="micro-front-end">
    <!--
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page`

      baseroute="/wjy/material"
     -->
    <micro-app
      name="microApps"
      url="http://localhost:8013/"
    ></micro-app>

  </div>
</template>

<!-- :data="microAppData"
  @created="created"
@beforemount="beforemount"
@mounted="mounted"
@unmount="unmount"
@error="error"
@datachange="handleDataChange" -->

<!--
  if (window.__MICRO_APP_ENVIRONMENT__) 判断是否是微前端环境
-->

<script>
export default {
  data() {
    return {
      microAppData: {
        // pushState: ({ path }) => {
        //   if (path) this.$router.push('/child/vue2' + path)
        // }
      }
    }
  },
  created() {
    // 判断微前端环境
    // if (window.__MICRO_APP_ENVIRONMENT__) {
    //   console.log(window.microApp.getData(), '获取基座下发的数据')
    //   // 全局数据监听，监听来自其它子应用页面跳转，控制侧边栏的菜单展示
    //   // 因为子应用之间无法直接通信，这里采用全局数据通信
    //   window.microApp.addGlobalDataListener((data) => {
    //     console.log('全局数据:', data)
    //   })
    // }
  },
  mounted() {
  },
  methods: {
    created() {
      // console.log('创建', this.$route)
    },
    beforemount() {
      // console.log('即将被渲染', this.$route)
    },
    mounted() {
      // console.log('已经渲染完成', this.$route)
    },
    unmount() {
      // console.log('已经卸载', this.$route)
    },
    error() {
      // console.log('渲染出错', this.$route)
    },
    handleDataChange(e) {
      console.log('来自子应用 child-vue2 的数据:', e.detail.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.micro-front-end {
  height: 100%;
}
</style>
