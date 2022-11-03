<template>
  <div class="navbar">
    <div class="hamburger-container">
      <div>
        <hamburger
          :is-active="sidebar.opened"
          @toggleClick="toggleSideBar"
        />
      </div>
    </div>
    <div class="navbar-right">
      <div>

      </div>
      <div>
        <el-dropdown
          trigger="click"
        >
          <div>
            <img v-show="imageUrl" :src="imageUrl" class="user_avatar">
            <span class="user_name">{{ loginName }}</span>
            <i class="el-icon-arrow-down icon-arrow-down-size" />
          </div>
          <el-dropdown-menu
            slot="dropdown"
            class="user_dropdown"
          >
            <el-dropdown-item>
              <router-link to="/">
                <i class="iconfont iconicon_main fs14"></i>
                {{ lang.work_center }}
              </router-link>
            </el-dropdown-item>

            <el-dropdown-item>
              <span class="modification" @click="updatePassword">
                <i
                  class="iconfont iconicon_modification fs14"
                  style="center"
                ></i>
                {{ lang.change_password }}
              </span>
            </el-dropdown-item>
            <el-dropdown-item divided></el-dropdown-item>
            <el-dropdown-item>
              <span @click="open">
                <i class="iconfont iconicon_exit fs14"></i>
                {{ lang.logout }}
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <el-dropdown
          class="avatar-container"
          trigger="click"
        >
          <i class="iconfont iconicon_setting"></i>
          <el-dropdown-menu
            slot="dropdown"
          >
            <el-dropdown-item @click.native="showDownloadCenter">
              {{ lang.download_center }}
            </el-dropdown-item>
            <el-dropdown-item @click.native="openwin">
              {{ lang.import_platform }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <i
          class="iconfont iconicon_help"
          @click="help()"
        ></i>
      </div>
    </div>

    <el-dialog
      v-if="importPlatForm"
      v-dialogDrag
      :visible="importPlatForm"
      append-to-body
      :title="lang.import_platform"
      width="520px"
      class="dialog-wrap editdialog"
      :modal="false"
      :close-on-click-modal="false"
      :destroy-on-close="true"
      @close="closePlatFormDialog"
    >
      <div class="el-card__body" style="overflow-y:auto; height:440px">
        <div class="reate">
          <div class="dheader">
            <el-steps :active="active1" finish-status="success" class="steps">
              <el-step title></el-step>
              <el-step title></el-step>
              <el-step title></el-step>
            </el-steps>
          </div>
          <div v-show="active1==0" class="dbody">
            <div class="thr-title">
              <div>{{ lang.supportBothFormat }}：</div>
              <div style="margin-top:5px">
                <span class="tag-m">
                  <el-tag>{{ lang.noDuplicateCol }}</el-tag>
                </span>
                <span class="tag-m">
                  <el-tag>{{ lang.noSpecialFormat }}</el-tag>
                </span>
                <span class="tag-m">
                  <el-tag>{{ lang.noBlankTitle }}</el-tag>
                </span>
              </div>
            </div>
            <el-upload drag action multiple style="margin-top:10px;text-align:center">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                {{ lang.dragFile }}
                <em>{{ lang.clickUpload }}</em>
              </div>
            </el-upload>
            <div style="margin-top:10px">
              <div class="tag-m">
                <el-radio-group v-model="radio">
                  <el-radio :label="1">{{ lang.standardTemplate }}</el-radio>
                  <el-radio :label="2">{{ lang.customTemplate }}</el-radio>
                </el-radio-group>
              </div>
              <div class="tag-m">
                <span class="nor">{{ lang.selWorksheet }}</span>
                <el-select v-model="selectOne"></el-select>
              </div>
              <div class="tag-m">
                <span class="nor">{{ lang.startPosition }}</span>
                <el-input label="start" class="input-w"></el-input>
              </div>
              <div class="tag-m">
                <span class="nor">{{ lang.endPosition }}</span>
                <el-input label="end" class="input-w"></el-input>
              </div>
            </div>
          </div>
          <div v-show="active1==1" class="dbody">
            <el-collapse v-model="activeNames" :accordion="true" @change="handleChange">
              <el-collapse-item name="1">
                <template slot="title">
                  <i class="iconfont iconicon_basics iconM"></i>基础设置 Basic Settings
                </template>
                <div class="pass1">
                  <div v-for="item in list" :key="item.id">
                    <el-radio-group v-model="radio1">
                      <el-radio :label="item.check">
                        <el-tag style="margin-bottom:6px">
                          <span class="tag-Y">{{ item.name }}</span>
                        </el-tag>
                      </el-radio>
                    </el-radio-group>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item name="2">
                <template slot="title">
                  <i class="iconfont iconicon_property iconM"></i>属性 Attribute
                </template>
                <div class="pass1">
                  <div v-for="(item, index) in list1" :key="index">
                    <el-radio-group v-model="radio2">
                      <el-radio :label="item.check">
                        <el-tag style="margin-bottom:6px">
                          <span class="tag-Y">{{ item.name }}</span>
                        </el-tag>
                      </el-radio>
                    </el-radio-group>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item name="3">
                <template slot="title">
                  <i class="iconfont iconicon_material iconM"></i>对象 Obejct
                </template>
                <div class="pass1">
                  <div v-for="item in list2" :key="item.id">
                    <el-radio-group v-model="radio3">
                      <el-radio :label="item.check">
                        <el-tag style="margin-bottom:6px">
                          <span class="tag-Y">{{ item.name }}</span>
                        </el-tag>
                      </el-radio>
                    </el-radio-group>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item name="4">
                <template slot="title">
                  <i class="iconfont iconicon_user iconM"></i>用户 User
                </template>
                <div class="pass1">
                  <div v-for="item in list3" :key="item.id" :span="12">
                    <el-radio-group v-model="radio4">
                      <el-radio :label="item.check">
                        <el-tag style="margin-bottom:6px">
                          <span class="tag-Y">{{ item.name }}</span>
                        </el-tag>
                      </el-radio>
                    </el-radio-group>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>

          <div v-show="active1==2" class="dbody">
            <div style="margin: 0px 0px 10px 0px">
              将导入文件的列和系统对象的列建立映射关系，请仔细核对映射关系，否则数据将会导入错误。
            </div>
            <div class="pass1">
              <div class="part-3">
                <div class="header">导入字段</div>
                <el-tree :data="importData" :props="defaultProps" :render-content="renderContent" @node-click="handleNodeClick" @node-expand="handleExpand"></el-tree>
              </div>
              <div class="part-3">
                <div class="header">系统字段</div>
                <el-tree :data="systemData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
              </div>
            </div>
          </div>
          <!--自己定义一个最小化按钮 -->
        </div>

      </div>
      <div slot="footer" class="" style="padding :0px 0 0 0px; height:30px">
        <span style="float:right;margin-right:15px;">
          <el-button size="mini" type="info" @click.native="prevent">上一步</el-button>
          <el-button v-if="active1 != 2" size="mini" type="primary" @click.native="next">下一步</el-button>
          <el-button v-if="active1 == 2" size="mini" type="primary" @click.native="next">导入</el-button>
        </span>
      </div>
      <i class="el-icon-minus qp" style="float:left;padding:4px;border-color: #fff;color:#909399;position:absolute;top:18px;right:28px; cursor:pointer" @click="minBtn()"></i>
    </el-dialog>
  </div>
</template>

<script>
import {
  viewtoken
} from '@/api/frontPage/userInfo'
import { mapGetters } from 'vuex'
import Storage from '@/utils/storage'
var storage = new Storage()

export default {
  components: {
  },
  data() {
    var checkPsw = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.pswForm.password) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      lang: this.$store.getters.lang,
      radio4: 1,
      radio3: 1,
      radio2: 1,
      radio1: 1,
      moren: require('@/assets/avator/moren1.png'),
      loginUser: {},
      imageUrl: '',
      systemData: [],
      importData: [
        { label: 'sheet1',
          children: [
            { label: '编号' }, { label: '描述' }, { label: '状态' }
          ] }
      ],
      list: [
        { name: '列表', id: 1, check: 1 },
        { name: '列表值', id: 2, check: 2 }
      ],
      list1: [
        { name: '物料属性', id: 1, check: 1 },
        { name: '文档属性', id: 2, check: 2 },
        { name: '变更申请属性', id: 3, check: 3 },
        { name: '变更指令属性', id: 4, check: 4 }
      ],
      list2: [
        { name: '物料', id: 1, check: 1 },
        { name: '物料属性', id: 2, check: 2 },
        { name: '文档', id: 3, check: 3 },
        { name: '文档属性', id: 4, check: 4 },
        { name: '变更申请', id: 5, check: 5 },
        { name: '变更属性', id: 6, check: 6 },
        { name: '变更指令', id: 7, check: 7 },
        { name: '变更指令属性', id: 8, check: 8 }
      ],
      list3: [
        { name: '用户', id: 1, check: 1 },
        { name: '用户组', id: 2, check: 2 },
        { name: '用户组的用户', id: 3, check: 3 },
        { name: '角色', id: 4, check: 4 },
        { name: '角色的用户', id: 5, check: 5 },
        { name: '角色的用户组', id: 6, check: 6 }
      ],
      data: [
        {
          label: '基础设置',
          icon: 'iconicon_document',
          children: [{
            label: '列表导入模板',
            icon: 'iconicon_document'
          }, {
            label: '列表值导入模板'
          }]
        },
        {
          label: '属性模板',
          children: [{
            label: '物料属性导入模板'
          }, {
            label: '文档属性导入模板'
          },
          {
            label: '变更申请属性导入模板'
          },
          {
            label: '变更指令导入模板'
          }]
        }, {
          label: '对象模板',
          children: [{
            label: '物料对象导入模板'
          }, {
            label: '物料对象和属性关系导入模板'
          },
          {
            label: '文档对象导入模板'
          },
          {
            label: '文档对象和属性关系导入模板'
          },
          {
            label: '变更申请对象导入模板'
          },
          {
            label: '变更申请和属性关系导入模板'
          },
          {
            label: '变更指令对象导入模板'
          },
          {
            label: '变更指令和属性关系导入模板'
          }]
        },
        {
          label: '用户模板',
          children: [{
            label: '用户导入模板'
          }, {
            label: '用户组导入模板'
          },
          {
            label: '用户组和用户关系导入模板'
          },
          {
            label: '角色导入模板'
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      activeNames: [''],
      selectOne: 'sheet1',
      radio: 1,
      active1: 0,
      importPlatForm: false,
      downloadCenter: false,
      pswRules: {
        oldPsw: [
          { min: 6, max: 15, message: '密码必须为6到15位的英文数字组合', trigger: 'blur' },
          { required: true, message: '请输入原密码', trigger: 'blur' }
        ],
        password: [
          { min: 6, max: 15, message: '密码必须为6到15位的英文数字组合', trigger: 'blur' },
          { required: true, message: '请输入需要更改成的密码', trigger: 'blur' }
        ],
        pswSecond: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: checkPsw, trigger: 'blur' }
        ]
      },
      pswForm: {
        oldPsw: '',
        password: '',
        pswSecond: ''
      },
      updatePswDialog: false,
      dialogVisible: false,
      loginName: storage.get('loginName'),
      useravatar: require('../../assets/images/avatar.png')
    }
  },

  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      'user',
      'baseApi'
    ]),
    show: {
      get() {
        return this.$store.state.settings.showSettings
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'showSettings',
          value: val
        })
      }
    }
  },
  watch: {
    'sidebar.opened'(val) {
      this.drawerLeft(Number(val))
    }
  },
  mounted() {
    this.changeCss()
  },
  created() {
    this.drawerLeft(Number(this.sidebar.opened))
    this.getUserInfo()
  },
  methods: {
    openwin() {
      const { href } = this.$router.resolve({
        path: '/ImportPlatform'
      })
      window.open(href, 'popwindow', 'height=670,   width=750,   top=50,   left=400,   ．toolbar=no,   menubar=no,   scrollbars=no,   resizable=no,location=no,   status=no')
    },
    getUserInfo() {
      viewtoken().then((res) => {
        this.loginUser = res.result
        this.imageUrl = res.result.url
        if (!this.imageUrl) {
          this.imageUrl = this.moren
        }
      })
    },
    handleNodeClick(data) {
      console.log(data)
    },
    handleChange(val) {
      console.log(val)
    },
    finish() {
      this.importPlatForm = false
      this.$message({
        type: 'success',
        message: '导入成功'
      })
    },
    next() {
      if (this.active1++ > 2) this.active1 = 0
    },
    prevent() {
      if (this.active1-- <= 0) this.active1 = 0
    },
    closePlatFormDialog() {
      this.importPlatForm = false
      this.active1 === 0
    },
    showImportPlatForm() {
      this.$router.push({ path: '/ImportPlatform' })
    },
    handleExpand() {
      this.$nextTick(() => {
        this.changeCss()
      })
    },
    renderContent(h, { node, data, store }) {
      let classname = ''
      if (node.level === 1) {
        classname = 'foo'
      }
      if (node.level === 0) {
        classname = 'foo'
      }
      if (node.level === 2) {
        classname = 'foo'
      }
      return h(
        'span',
        {
          class: classname
        },
        node.label
      )
    },
    changeCss() {
      var levelName = document.getElementsByClassName('foo')
      for (var i = 0; i < levelName.length; i++) {
        levelName[i].parentNode.style = 'font-size:8px !important;'
        levelName[i].parentNode.onmouseover = function() {
          this.style.backgroundColor = '#fff'
        }
      }
    },
    closeTreeDialog() {
      this.downloadCenter = false
    },
    showDownloadCenter() {
      this.$router.push({ path: '/DownloadCenter' })
      // this.downloadCenter = true
    },
    drawerLeft(leftIndex) {
      '.admin-page .el-drawer__wrapper,.admin-page .v-modal'.split(',').forEach(el => {
        const dom = document.querySelector(el)
        dom && (dom.style.left = ['56px', '200px'][leftIndex])
      })
    },
    updatePassword() {
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    open() {
      this.$confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.logout()
      })
    },
    help() {
      this.$confirm('当前版本V5.0，发布日期 2021年 3月1日', '提示', {
        confirmButtonText: '确定',
        showCancelButton: false,
        type: 'info'
      })
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables";
@import "~@/assets/styles/mixin";
.navbar {
  height: 56px;
  line-height: 56px;
  overflow: hidden;
  position: relative;
  background: #fff;
  padding: 0 20px;
  box-shadow: 0px 12px 24px 0px rgba(17, 37, 63, 0.03);
  display: flex;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;

  .hamburger-container {
    flex: 1;
    transition: background 0.2s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: transparent;
    }
  }
  &-right {
    display: inline-flex;
    align-items:center;
    height: 56px;
    & > div {
      margin: 0 6px;
    }
  }
  ::v-deep .lang_name {
    color: #495057;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .user_avatar {
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #f6f6f6;
    overflow: hidden;
    vertical-align: middle;
  }
  .user_name {
    font-size: 12px;
    color: #555b6d;
    text-align: left;
    line-height: 32px;
    margin: 0 4px;
  }
}

.el-popper {
  .popper__arrow {
    border-width: 0;
    &::after {
      content: " ";
      border-width: 0;
    }
  }
  &[x-placement^="bottom"] {
    .popper__arrow {
      top: 0;
      margin-right: 0;
      border-top-width: 0;
      border-bottom-color: transparent;
      &::after {
        top: 0;
        margin-left: 0;
        border-top-width: 0;
        border-bottom-color: transparent;
      }
    }
  }
}

.thr-title {
  text-align: center;
  margin: 0px;
}
.el-divider--horizontal {
  margin: 0px;
}
.upload-demo-dragger {
  margin: 10px 30px;
}
.qp:hover {
  color: #556ee6;
}
.btn-m {
  margin-top: 160px;
  height: 10%;
}
.iconM {
  margin-right: 6px;
}
.part-3 {
 border:1px solid lightgrey;
  height: 250px;
  width: 190px;
  overflow-y:auto
}
.el-card.is-always-shadow {
  height: 580px;
}
.header {
   border-bottom:1px solid #F5F7FA;
   background: #F5F7FA;
   height: 40px;
   padding: 10px;
}
.do {
  overflow-y: auto;
}
div::-webkit-scrollbar {
  width:10px;
  height:10px;
}
div::-webkit-scrollbar-track {
  background: #F5F7FA;
  border-radius:2px;
}
div::-webkit-scrollbar-thumb {
  background: #F5F7FA;
  border-radius:10px;
}
div::-webkit-scrollbar-thumb:hover {
  background: #F5F7FA;
}
div::-webkit-scrollbar-corner {
  background: #F5F7FA;
}
.el-card__body {
  padding: 0px;
}
.input-w {
  width: 80px;
}
.nor {
  margin-right: 10px;
}
.tag-m {
  margin: 5px 2px;
}
::v-deep .el-tree-node__label {
  font-size: 10px !important;
  background: #212529;
}
::v-deep .el-input--small .el-input__inner{
  width: 250px;
}
::v-deep .steps{
  padding-top: 10px;
  .el-step.is-horizontal .el-step__line{
    background-color:#CED4DA;
    top: 16px;
    height: 1px;
    left: 30%;
    right: 20%;
  }
    .el-step__title.is-success{
    color: #556EE6;
  }
    .el-step__head.is-success, .el-step__head.is-process {
    color: #556EE6;
    border-color: #556EE6;
  }
    .el-step__title{
    font-size: 12px;
  }
    .el-step__title.is-process{
    color: #556EE6;
    font-weight: normal;
    font-size: 12px;
  }
    .el-step__icon{
    width: 32px;
    height: 32px;
  }
    .is-finish{
    .el-step__icon{
      background: #556EE6;
      color: #ffffff;
    }
  }
}
.reate{
  display: grid;
  grid-template-rows: 50px 350px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
  ". . h h h h h h h h . . "
  ". f f f f f f f f f f . ";
}
.dheader{
  grid-area: h;
}
.dbody{
  grid-area: f;
}
.pass1{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
::v-deep.editdialog .el-form-item__content{
  width: 68% !important;
}
</style>
