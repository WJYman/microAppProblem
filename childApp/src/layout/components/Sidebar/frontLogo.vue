<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link v-if="logo && !collapse" key="expand" class="sidebar-logo-link" to="/">
        <img :src="logo" class="sidebar-logo">
      </router-link>
    </transition>
    <div class="hamburger-wrap">
    </div>
  </div>
</template>

<script>
import logoMin from '@/assets/images/logo-dark.png'
import { viewBaseParams } from './api'
import { mapGetters } from 'vuex'

export default {
  name: 'SidebarLogo',
  components: {
  },
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      logo: ''
    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  created() {
    this.getLogo()
  },
  methods: {
    getLogo() {
      viewBaseParams()
        .then(res => {
          if (res.result.logoImage) {
            this.logo = '/plm-doc' + res.result.logoImage
          } else {
            this.logo = logoMin
          }
        })
        .catch(() => {
          this.logo = logoMin
        })
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #0081ff;
  box-shadow: 4px 0px 6px 0px rgba(16, 16, 16, 0.1);
  display: flex;
  .hamburger-wrap {
    flex: 1;
    text-align: center;
    .hamburger-container {
      color: #ffffff;
      font-size: 16px;
    }
  }

  & .sidebar-logo-link {
    height: 100%;
    width: auto !important;
    display: inline-block !important;
    margin-left: 20px;

    & .sidebar-logo {
      width: 87px;
      height: 24px;
      vertical-align: middle;
      &.min {
        width: 26px;
        height: 26px;
      }
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
