import Vue from 'vue/dist/vue.js'
import { saveAs } from 'file-saver'
import { getPreviewUrl } from '@/utils/utils'
import { queryBaseSettingDynamicParam } from './api'

export const AddPreviewDownloadFeature = Vue.extend({
  props: {
    fileInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    clickHandle(type) {
      const fileUrl = this.fileInfo.url || this.fileInfo.fileUrl
      const fileName = this.fileInfo.name || this.fileInfo.fileName

      if (type === 'view') {
        queryBaseSettingDynamicParam('previewDownUrl').then(res => {
          var url = res.result.value + '/plm-doc' + fileUrl // 要预览文件的访问地址
          getPreviewUrl(url)
        })
      } else if (type === 'download') {
        saveAs(process.env.VUE_APP_BASE_API + '/plm-doc' + fileUrl, fileName)
      }
    }
  },
  template: `<span class="add-new-node">
  <i class="el-icon-view" v-on:click="clickHandle('view')">
  </i> <i class="el-icon-download" v-on:click="clickHandle('download')"></i>
  </span>`
})
