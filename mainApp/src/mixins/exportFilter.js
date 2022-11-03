import { queryPageList } from '@/views/adminPage/baseConfig/api'
import '@/assets/styles/btn.scss'

export default {
  data() {
    return {
      maxExportNum: 5000
    }
  },
  created() {
    this.getSysParam('exportMax')
  },
  methods: {
    // 获取最大导出数量的动态参数
    getSysParam(code) {
      queryPageList({
        pageNo: 1,
        pageSize: 10,
        t: {
          name: '',
          code: code
        }
      }).then(res => {
        const num = res.result.records[0]?.value
        this.maxExportNum = num
      })
    },
    // 导出数量过多时，询问是否导出
    exportFilter(length = null, sed = null, columnList = null) {
      console.log(length, sed, columnList, this.filterColumnVal, 'input')
      // 选中行，选中行为零需警告用户
      const sedList = sed || (this.multipleSelectionData?.length ? this.multipleSelectionData.map(item => item.id) : [])
      // 所有数据长度，判断是否需要提示
      const dataLength = length !== null ? length : this.tableData?.length || this.tableOptions.data?.length || this.tableOptions.rightData?.length
      // 列头，列头数为零需警告用户
      const colList = columnList

      console.log(sedList, dataLength, colList, 'math')
      if (colList && colList.length <= 0) {
        // 列头为空
        this.$message.warning(this.lang.sedLastColumn)
        return
      }

      // 数据为空
      if (dataLength <= 0) {
        this.$message.error(this.lang.pleaseAddData)
        return
      }

      if (sedList.length > 5 || (sedList.length === 0 && dataLength > 5)) {
        this.$confirm(sedList.length > 5 ? this.lang.tooManyExports : `${this.lang.defaultLessthanorEqual}${this.maxExportNum}${this.lang.stripData}`, this.lang.export, {
          confirmButtonText: this.lang.export,
          cancelButtonText: this.lang.cancel,
          type: 'warning',
          loading: true,
          // 是否可点击遮罩关闭
          closeOnClickModal: false,
          // 是否可按ESC关闭
          closeOnPressEscape: false,
          closeOnHashChange: false,
          beforeClose: (action, ctx, done) => {
            if (action !== 'confirm') {
              // 加载过程中不允许关闭❎
              if (ctx.confirmButtonLoading) return
              done()
              return
            }
            ctx.confirmButtonLoading = true
            ctx.cancelButtonClass = 'disabled'
            // ctx.cancelButtonLoading = true
            this.exportToExcel().then(() => {
              ctx.confirmButtonLoading = false
              ctx.cancelButtonClass = ''
              // ctx.cancelButtonLoading = false
              done()
            }).catch(() => {
              ctx.confirmButtonLoading = false
              ctx.cancelButtonClass = ''
              // ctx.cancelButtonLoading = false
              done()
            })
          }
        })
      } else {
        this.exportToExcel()
      }
    }
    /**
     * 没有模型的导出🌞
     */
  }
}
