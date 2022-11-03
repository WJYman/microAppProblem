import { baseOperationLogAdds } from '@/api/common'
import { deepClone } from '@/utils'
import Storage from '@/utils/storage'

export default {
  data() {
    return {
      // 老数据
      contrastData: {},
      // 新数据
      metaData: {},
      // 老数据
      contrastList: [],
      // 新数据
      metaList: [],
      // 暂存数据
      holdData: []
    }
  },
  methods: {
    setLogs() {
      this.contrastList.forEach((item, index) => {
        this.setLog(
          {
            ...item,
            type: '1',
            metaData: this.metaList[index].data,
            contrastData: item.data
          },
          false
        )
      })
    },
    /**
     * @params type 0 创建 1 修改 2 批量修改
     * @params flag true 单个 false 批量
     * */
    async setLog(params, flag = true) {
      try {
        // console.log(params, 'params')
        // 结构参数
        const { description = '', type, lang = {}, name, extraMenu = '', objectType } = params

        let metaData = {}
        let contrastData = {}

        if (flag) {
          metaData = this.metaData
          contrastData = this.contrastData
        } else {
          metaData = params.metaData
          contrastData = params.contrastData
        }

        const { $route, lang: copyLang } = this

        var storage = new Storage()

        // 生成菜单
        const matched = $route.matched.filter(item => item.meta && item.meta.title)

        const menuList = matched.map(item => lang[item.meta.title] || copyLang[item.meta.title])

        // 定义参数
        // eslint-disable-next-line no-unused-vars
        let formData = {
          createBy: storage.get('loginName'),
          name,
          description,
          type: objectType,
          menu: menuList[0] || '',
          childMenu: menuList[1] || '',
          thirdMenu: menuList[2] || extraMenu || ''
        }

        switch (type) {
          // 创建
          case '0':
            // api
            formData = {
              ...formData,
              operation: '',
              operationType: '1'
            }
            break

          // 修改
          case '1':
            formData = {
              ...formData,
              operation: this.getDescription(metaData, contrastData, lang),
              operationType: '2'
            }

            // api
            break

          // 删除
          case '2':
            formData = {
              ...formData,
              operation: '',
              operationType: '3'
            }

            break

          default:
            break
        }

        if (type === '1' && formData.operation === '') return false
        // console.log(formData, 'formData')
        await baseOperationLogAdds(formData)

        // 初始化值
        if (type === '0') this.contrastData = {}
        else if (type === '1') this.contrastData = deepClone(this.metaData)
      } catch (error) {
        console.log(error)
      }
    },
    // 生成改变历史
    getDescription(metaData, contrastData, lang) {
      return Object.keys(metaData).reduce((acc, item) => {
        if (lang[item]) {
          // console.log(metaData[item], 'metaData')
          // console.log(contrastData[item], 'contrastData')
          const newValue =
            typeof metaData[item] === 'object' ? this.getLabelByListValue(metaData[item]) : metaData[item]

          const oldValue =
            typeof contrastData[item] === 'object' ? this.getLabelByListValue(contrastData[item]) : contrastData[item]
          console.log(newValue, ':::', oldValue, item)

          if (newValue !== oldValue) {
            acc += `${acc.length ? ',' : ''}<${lang[item]}>从<${oldValue}>变成<${newValue}>`
          }
        }

        return acc
      }, '')
    },
    // 获取Label文本描述
    getLabelByListValue(data = {}) {
      if (!data) return ''
      else if (typeof data !== 'object' || !Object.keys(data).length) return ''
      const { value, list, labelKey = 'label', childrenKey = 'children', valueKey = 'value' } = data

      if (Array.isArray(value)) {
        // console.log(
        //   value
        //     .map(item => {
        //       return this.findLabeByValue(list, item, labelKey, childrenKey)
        //     })
        //     .join(','),
        //   'value'
        // )
        return value
          .map(item => {
            return this.findLabeByValue(list, item, labelKey, childrenKey, valueKey)
          })
          .join(',')
      }

      return this.findLabeByValue(list, value, labelKey, childrenKey, valueKey) || ''
    },
    // 递归获取匹配值
    findLabeByValue(list, str, labelKey, childrenKey, valueKey = 'value') {
      let res
      for (let i = 0; i < list.length; i++) {
        const item = list[i]

        if (item.id === str || item.code === str || item.value === str || item[valueKey] === str) {
          return item[labelKey] || ''
        } else if (item[childrenKey] && item[childrenKey].length) {
          res = this.findLabeByValue(item[childrenKey], str, labelKey, childrenKey, valueKey)

          if (res) return res
        }
      }

      return res
    },
    // 递归获取完整路径
    findPathById(list, id, path, idKey = 'value', labelKey = 'label', childrenKey = 'children') {
      if (typeof path === 'undefined') {
        path = []
      }
      for (let i = 0; i < list.length; i++) {
        const item = list[i]
        const tempPath = [...path]
        tempPath.push(item[labelKey])

        if (item[idKey] === id) {
          return tempPath
        }

        if (item[childrenKey] && item[childrenKey].length) {
          const result = this.findPathById(item[childrenKey], id, tempPath, idKey, labelKey, childrenKey)
          if (result) return result
        }
      }
    },
    findPathByIdList(idList, list, path, idKey, labelKey, childrenKey = 'children', joinLabel = [' / ', ',']) {
      return idList
        .map(id => {
          return (this.findPathById(list, id, path, idKey, labelKey, childrenKey) || []).join(joinLabel[0])
        })
        .join(joinLabel[1])
    },
    // 根据数据获取值
    getValue(data) {
      if (!data) return ''
      else if (typeof data !== 'object') return data
      else if (Array.isArray(data)) return deepClone(data)
      data = deepClone(data)

      return data.value
    }
  }
}
