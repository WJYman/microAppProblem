import { addOperationLog } from '@/api/common'
import { saveAs } from 'file-saver'
import exportFilter from '@/mixins/exportFilter'

export default {
  mixins: [exportFilter],
  data() {
    return {
      lang: this.$store.getters.lang,
      // operationType => operation 【操作类型】到【操作内容/详细信息】的对照表
      operationMap: {},
      // 模型map
      modelMap: {}
    }
  },
  created() {
    const exportSucc = this.lang.export + this.lang.succ

    this.operationMap = {
      'export': exportSucc, // 导出
      '53': this.lang.login, // 登录
      '7': this.lang.enable + this.lang.succ, // 启用
      '6': this.lang.disable + this.lang.succ, // 禁用
      'exportToExcel': this.lang.overview + exportSucc, // 导出为Excel【一般为总览导出，对象导出需特殊处理】
      '54': this.lang.enable + this.lang.succ, // 变更
      '20': '', // 导出配方单 【固定特殊处理】
      'exportRecipeTable': this.lang.recipeTable + exportSucc, // 导出配方表
      'exportHisRecord': this.lang.historyRecords + exportSucc, // 导出历史记录
      'exportContrast': this.lang.contrast + exportSucc, // 导出对比
      'exportAnalysisResult': this.lang.AnalysisResult + exportSucc, // 导出分析结果
      'exportPerdictResult': this.lang.perdictResult + exportSucc, // 导出预测结果
      'exportAnalysis': this.lang.analyse + exportSucc, // 导出分析
      'calculatedValue': this.lang.calculatedValueSucc // 计算价值
    }

    this.modelMap = {
      '1': this.lang.Material, // 物料
      '2': this.lang.Document, // 文档
      '103': this.lang.Recipe, // 配方
      '104': this.lang.Process, // 流程
      'systemTemplate': this.lang.SysTemplate // 系统模板
    }
  },
  methods: {
    /**
     * 添加历史记录通用方法
     * @param {Object} params 参数
     * operationType
     * operation
     * menu 【一级菜单】
     * childMenu 【二级菜单】
     * description // 描述
     * instanceNumber
     * version
     */
    addHistoryRecord(params) {
      params.logType = '1'
      // 如果未自定义【操作内容】，使用默认配置
      if (!params.operation && params.operationType) {
        params.operation = this.operationMap[params.operationType]
      }
      // 根据type识别一级菜单
      if (!params.menu && params.type) {
        params.menu = this.modelMap[params.type]
        delete params.type
      }
      return new Promise((resolve, reject) => {
        addOperationLog(params)
          .then(res => {
            console.log(res, '操作记录')
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /**
     * 添加多条记录
     * @param {Object} flexd 固定参数, 如【一级菜单】【二级菜单】...
     * @param {Array} paramsList 参数列表
     * @returns Promise对象
     */
    addAllHistoryRecords(paramsList) {
      const promiseList = []
      paramsList.forEach(item => {
        promiseList.push(this.addHistoryRecord(item))
      })
      return Promise.all(promiseList)
    },
    /**
     * 批量导出并添加历史记录
     */
    exportExcelAndAddRecord(res, fileName, params) {
      const blob = new Blob([res.data], { type: 'application/vnd.ms-excel' }) // res就是接口返回的文件流了
      saveAs(blob, fileName)
      if (params) {
        if (!params.operationType) {
          params.operationType = 'export'
        }
        return this.addHistoryRecord(params)
      }
    }
  }
}
