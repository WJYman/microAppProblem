<template>
  <div class="topbar">
    <div class="frond-container">
      <div class="left-container">
        <TagsView></TagsView>
      </div>
      <div class="right-container">
        <div v-if="$route.path !== '/Search' && isSearch">
          <el-input
            v-model="searchVal"
            class="frondSrarch"
            :placeholder="lang.enterKeywordSearch"
            @keyup.enter.native="handleSearch"
          >
            <i slot="suffix" class="el-input__icon el-icon-search" @click="handleSearch()"></i>
          </el-input>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagsView from './TagsView'

export default {
  components: {
    TagsView
  },
  inject: ['reload'],
  data() {
    return {
      isGlobalCreate: false,
      isSearch: false,
      lang: this.$store.getters.lang,
      searchVal: ''
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
    this.initHandle()
  },
  mounted() {
  },
  methods: {
    initHandle() {
      const params = { t: { code: 'whetherOrNotShowGlobalCreation' }}
      // queryPageList(params).then(res => {
      //   const records = (res.result || {}).records
      //   this.isGlobalCreate = (records.length ? records[0].value : '') === '1'
      // })

      // baseSettingDynamicParamQueryByCode('whetherOrNotShowSearch').then(res => {
      //   this.isSearch = (res.result || {}).value === '1'
      // })
    },
    handleSearch() {
      if (this.$route.path !== '/Search') {
        this.$router.push({
          name: 'Search',
          params: {
            searchVal: this.searchVal
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables";
@import "~@/assets/styles/mixin";
.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #afb1bd;
  background-color: #fafafc;
  border-color: #fafafc;
}
.transfer-btn {
  position: absolute;
  right: 12px;
  top: 60px;
  z-index: 9999;
}
.down-tem.el-form-item--small.el-form-item{
  margin-bottom: 0px;
}
.tb-edit .el-select {
     display: none
 }
 .tb-edit .current-row .el-select {
    display: block
 }
 .tb-edit .current-row .el-select+span {
     display: none
 }

::v-deep.bor .el-tabs--card > .el-tabs__header{
  margin-bottom: 0px !important;
}
::v-deep .bor{
  height: 390px;
}
::v-deep.el-select{
  width: 250px;
}
.topbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #0081FF;
  .frond-container {
    display: flex;
    justify-content: space-between;
    height: inherit;
    padding: 0 20px;
    .left-container {
      flex: 1;
      overflow: hidden;
    }
    .right-container {
      padding-left: 40px;
      display: inline-flex;
      align-items:center;
      & > div {
        margin: 0 10px;
      }
      .frondSrarch {
        width: 240px;
        ::v-deep .el-input__inner {
          border: none !important;
          background: #f3f3f9;
          border-radius: 16px;
        }
        .el-icon-search {
          cursor: pointer;
        }
      }
      .right-menu {
        width: auto;
        height: 56px;
        float: right;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
        transition: all 0.2s ease;
        &:focus {
          outline: none;
        }
        &-item {
          display: block;
          height: 100%;
          font-size: 12px;
          color: #555b6d;
          &.hover-effect {
            cursor: pointer;
            transition: background 0.2s;
            &:hover {
              background: transparent;
            }
          }
        }
        .avatar-container {
          .avatar-wrapper {
            @include flex(space-between, center, row);
            width: auto;
            height: 100%;
            position: relative;
            .el-icon-caret-bottom {
              cursor: pointer;
              position: absolute;
              right: -20px;
              top: 25px;
              font-size: 12px;
            }
            .icon-arrow-down-size {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .user_avatar {
    width: 36px;
    height: 36px;
    border-radius: 50px;
    background-color: #f6f6f6;
    border: 3px solid #f6f6f6;
    overflow: hidden;
  }
  .user_name {
    font-size: 12px;
    color: #555b6d;
    text-align: left;
    line-height: 36px;
    margin: 0 4px;
  }
}

/* 下拉菜单 */
::v-deep .dp-query{
  font-size: 20px!important;
  height: auto !important;
  max-height: 180px !important;
  overflow-y: auto;
    ::-webkit-scrollbar-track-piece {
    background: #d3dce6;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #EFF2F7;
    border-radius: 10px;
  }
}
.el-popper .popper__arrow::after {
  content: " ";
  border-width: 0;
}
.el-popper .popper__arrow {
  border-width: 0;
}
.el-popper[x-placement^="bottom"] .popper__arrow {
  top: 0;
  margin-right: 0;
  border-top-width: 0;
  border-bottom-color: transparent;
}

.el-popper[x-placement^="bottom"] .popper__arrow::after {
  top: 0;
  margin-left: 0;
  border-top-width: 0;
  border-bottom-color: transparent;
}

::v-deep .el-switch {
  width: 48px !important;
}
::v-deep .iconicon_trash {
  line-height: 24px;
}
.inst {
  display: flex;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  justify-items: space-between;
}
.ton {
  font-size: 12px;
  font-weight: 400;
  color:rgba(73,80,87,1);
  cursor: pointer;
}
.ten {
  font-size: 12px;
  margin-left: 24px;
}
.user_dropdown .el-dropdown-menu__item .modification {
  color: #212529 !important;
  width: 100%;
  white-space:nowrap;
}
.iconicon_readed {
  margin: 0 6px 0 0;
}
.noreaded {
  height: 18px;
  font-size: 12px;
  color: #74788d;
  line-height: 18px;
  float: right;
}
.readed {
  height: 18px;
  font-size: 12px;
  color: #495057;
  line-height: 18px;
  margin: 0 0 0 24px;
  float: right;
}
.txt {
  font-size: 12px;
  font-style: normal;
}
.shuzi {
  font-style: normal;
  color: #f46a6a;
}
.al.el-popper{
  width: 150px;
}
.bl.el-input--small .el-input__inner{
  width: 150px;
  height: 50px;
}
::v-deep.el-dropdown-menu__item i{
  margin-right: 0px;
}
.dropItem {
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  width:100%;
}

::v-deep .el-upload {
  width: 100%;

  .el-upload-dragger {
    width: 100%;
    height: 215px;
  }
}

.btn-wrap {
  margin: 11px auto 0;
  text-align: center;

  .btn {
    width: 108px;
  }
}
.el-radio-group.uploadTypeList{
  .el-radio{
    width: 100%;
  }
}

</style>
