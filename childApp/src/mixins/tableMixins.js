export default {
  data() {
    return {
      // 表格配置项
      tableOptions: {
        data: [], // 表格数据
        search: '', // 搜索栏查询内容
        columns: [], // 表格列配置项
        loading: false, // 表格 loading 加载
        total: 20,
        pageNo: 1,
        pageSize: 20,
        queryArr: [{ joinAll: '', child: [] }] // 查询配置
      },
      filterColumnVal: [], // 显示功能过滤值
      lang: this.$store.getters.lang,
      showSelectedChecked: false,
      treeConfig: {
        lazy: false,
        iconLoaded: 'el-icon-loading',
        children: 'children',
        hasChild: 'hasChildren',
        loadMethod: this.loadChildrenMethod
      },
      validRules: {},
      multipleSelectionData: [], // 表格多选值
      columnObj: {}, // 列配置对象
      typeObj: {},
      maxHeight: 0
    }
  },
  computed: {
    filterColumn({ tableOptions }) {
      // 过滤掉【当前用户】选项
      this.tableOptions.columns.forEach(item => {
        if (item.columnName === 'createBy') {
          item.listValues = (item.listValues || []).filter(k => k.value !== 'CURRENT_LOGIN_NAME')
        }
      })
      return tableOptions.columns.filter(item => item.show)
    },
    multipleSelection({ multipleSelectionData }) {
      return multipleSelectionData.map(item => item.id)
    }
  },
  watch: {
    filterColumn: {
      deep: true,
      immediate: true,
      handler(val) {
        this.filterColumnVal = val.reduce((acc, item) => {
          if (item.show) acc.push(item.columnName)
          return acc
        }, [])
      }
    }
  },
  created() {
    this.tableOptions.search = this.$route.params.search || ''
  },
  mounted() {
    // this.getCurrentTableMaxHeight('advanced-search', ['header'], false)
  },
  methods: {
    // 判断是否选中
    isMultiple() {
      if (this.multipleSelectionData.length !== 1) {
        this.$message.warning(this.lang.Onlyonerowcanbeselected)
        return false
      }
      return true
    },
    // 导出Excel
    exportToExcel() {
    },
    // 导出Word
    exportToWord() {
    },
    // 过滤Columns
    changeColumns(show, index) {
      // console.log(index, show)
      this.$set(this.tableOptions.columns[index], 'show', !show)
    },
    // 全选
    selctAllColumn() {
      this.tableOptions.columns.forEach(item => {
        this.$set(item, 'show', true)
      })
    },
    // 重置
    resetFilterColumn() {
      this.tableOptions.columns.forEach((item, index) => {
        if (index < 7) this.$set(item, 'show', true)
        else this.$set(item, 'show', false)
      })
    },
    // 多选
    handleSelectionChange({ records }) {
      this.multipleSelectionData = records
    },
    //  一级下面 禁止编辑
    activeCellMethod({ row, rowIndex }) {
      return !row.disabled
    },
    // 表格Cell 文本处理
    showListLabel({ str, item }) {
      return str
    },
    /**
     * 获取当前Table MaxHeight
     * @param {*} page 主容器
     * @param {*} other 其他Dom
     * @param {*} isHavePage 是否包含分页 暂未使用
     */
    getCurrentTableMaxHeight(main = 'app-main', other = [], isHavePage = true) {
      this.$nextTick(() => {
        const mainDomheight = Number(document.querySelector(`.${main}`).clientHeight)
        const otherDomHeight = other.reduce((acc, item) => {
          acc += Number(document.querySelector(`.${item}`).clientHeight)

          return acc
        }, 0)
        const pageHeight = isHavePage ? 20 : 0
        // console.dir(mainDomheight, 'mainDomheight')
        // console.dir(otherDomHeight, 'otherDomHeight')
        // console.dir(pageHeight, 'pageHeight')

        this.maxHeight = mainDomheight - otherDomHeight - pageHeight
        // console.log(this.maxHeight, 'maxHeight')
      })
    }
  }
}
