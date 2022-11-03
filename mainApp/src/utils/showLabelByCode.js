import { queryLifeCycleByCode } from '@/views/frontPage/changeManage/api.js'

export default class ShowLabel {
  content = {}
  api
  code = ''
  constructor(api, content) {
    // 生命周期 预制
    if (typeof api === 'string' && api === 'life') {
      this.api = (params) => {
        return queryLifeCycleByCode(params.detailsType, params.type, '1')
      }
    } else if (typeof api === 'string' || typeof api === 'number') {
      this.code = api
      this.api = 'code'
    } else {
      this.api = api
    }
    this.content = content
  }

  // showLabelByMap.showLabelByCode(item.columnName + 'List', row[item.columnName], { type: row.type, detailsType: row.detailsType }) || _this[item.columnName + 'List'] ? _this[item.columnName + 'List'][row[item.columnName]] : row[item.columnName]

  showLabelByCode(title, code, params) {
    if (this.content[title]) {
      return this.content[title][code] || false
    } else {
      this.content[title] = {}
      this.content[title][code] = ''
      if (typeof this.code === 'string' && this.api === 'code') {
        this.content.$global.getCodeMap(this.code, true).then(res => {
          this.content[title] = res
        })
      } else if (params) {
        this.api(params).then(res => {
          const obj = {}
          res.result.forEach(item => {
            obj[item.unicode || item.code] = item.name
          })
          this.content[title] = obj
        })
      }
      console.log('12')
      return false
    }
  }

  getContent() {
    console.log(this.content, 'content')
  }
}

