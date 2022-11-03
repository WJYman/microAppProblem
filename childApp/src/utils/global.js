import router from '@/router/routers'
import { queryListSelectData } from '@/api/frontPage/public/index.js'
import { postQueryListSelectData, getBaseObjectsExtend } from '@/api/adminPage/objectManage/index'

const adminObjectPageName = {
  '1': 'MaterielManage',
  '2': 'DocumentManagement',
  '3': 'ChangeApplyForManage',
  '4': 'ChangeInstructionManage',
  '5': 'Activity',
  '6': 'Pass',
  '7': 'ManufacturerManager',
  '8': 'ManufacturerPartManager',
  '11': 'SupplierManager',
  '12': 'ProblemReportForManage',
  '13': 'QualityFlowForManage',
  '14': 'ApplicationFlowForManage',
  '15': 'ManufacturerChangeManage',
  '16': 'StateChangeManage',
  '18': 'SiteManagement'
}
const objectTypeClassId = {
  '1': '1000002',
  '2': '1000003',
  '3': '1000004',
  '4': '1000005',
  '7': '1000011',
  '8': '1000012',
  '11': '1000013',
  '12': '1000009',
  '13': '1000010',
  '14': '1000008',
  '15': '1000006',
  '16': '1000007',
  '18': '1000014'
}
const objectTypeReverseClassId = {
  '1000002': '1',
  '1000003': '2',
  '1000004': '3',
  '1000005': '4',
  '1000011': '7',
  '1000012': '8',
  '1000013': '11',
  '1000009': '12',
  '1000010': '13',
  '1000008': '14',
  '1000006': '15',
  '1000007': '16',
  '1000014': '18'
}
const pdfFormat = [
  '.pdf', '.doc', '.docx', '.pptx', '.ppt',
  '.jpg', '.png', '.gif', '.bmp', '.heic', '.jpeg',
  '.dwg', '.dxf', '.txt', '.java', '.php', '.py', '.md',
  '.js', '.css', '.xml', '.log', '.json', '.html', '.svg',
  '.vue', '.xls', '.xlsx'
]
const pageName = {
  '1': '/Material/Info',
  '2': '/Document/Info',
  '103': '/Recipe/Info',
  'systemTemplate': '/PersonalCenter/sysInfo'
}

// 编码规则中，关于指定字符的正则，当满足该表达式时，则会被替换成''
const specifyCharacterRegex = /[^a-z0-9A-Z.\-_+,~`/.?() :]/g
// 前台跳转方法
function jumpPages(id, type, detailsType) {
  return new Promise((resolve) => {
    postQueryListSelectData('20000356').then(res => {
      const result = res.result
      if (result) {
        resolve(true)
        const route = result.find((item) => {
          return item.name === type
        })
        const params = {
          id: id,
          type: type,
          detailsType: detailsType,
          flowState: true
        }
        console.log(route.code, 'code--', params, 'params--')
        router.push({
          path: route.code,
          query: params
        })
      }
    })
  })
}
const jumpeParams = 'jumpeParams'
// New Jump Method
function jumpToMaterial(type, detailsType, id, jumpOther = false) {
  if (jumpOther) {
    const url = '/MaterialManage/material'
  } else {
    // 从一个物料跳转到另一个物料
    localStorage.setItem(jumpeParams, id)
  }
}
// Get ID
function getJumpId() {
  const params = localStorage.getItem(jumpeParams)
  if (params) {
    setTimeout(() => {
      localStorage.removeItem(jumpPages)
    }, 200)
    return params
  } else return false
}
function jumpAdminPage(name, objectType) {
  router.push({
    name: adminObjectPageName[objectType],
    params: {
      code: name
    }
  })
}
// 列表名称字段排序
function sortDevName(str1, str2, property) {
  let res = 0
  if (str1 && str2) {
    // 如果有一个为空
    if (!str1[property] && str2[property]) {
      return -1
    }
    if (!str2[property] && str1[property]) {
      return 1
    }
    if (!str2[property] && !str1[property]) {
      return 0
    }
    // if (!str1[property] || !str2[property]) {
    //   res = str1[property].length - str1[property].length
    //   return res
    // }
    const char1 = str1[property][0]
    const char1Type = getChartType(char1)
    const char2 = str2[property][0]
    const char2Type = getChartType(char2)
    // 类型相同的逐个比较字符
    if (char1Type[0] === char2Type[0]) {
      if (char1 !== char2) {
        if (char1Type[0] === 'zh') {
          res = char1.localeCompare(char2)
        } else if (char1Type[0] === 'en') {
          res = char2.charCodeAt(0) - char1.charCodeAt(0)
        } else {
          res = char2 - char1
        }
      }
    } else {
    // 类型不同的，直接用返回的数字相减
      res = char1Type[1] - char2Type[1]
    }
  }
  return res
}
function getChartType(char) {
  // 数字可按照排序的要求进行自定义
  // 数字（0->9）->大写字母（A->Z）->小写字母（a->z）->中文拼音（a->z）
  if (/^[\u4e00-\u9fa5]$/.test(char)) {
    return ['zh', 300]
  }
  if (/^[a-zA-Z]$/.test(char)) {
    return ['en', 200]
  }
  if (/^[0-9]$/.test(char)) {
    return ['number', 100]
  }
  return ['others', 999]
}
function customSortMethod({ data, sortList }) {
  const sortItem = sortList[0]
  // 取出第一个排序的列
  const { property, order } = sortItem
  let list = []
  if (order === 'asc' || order === 'desc') {
    // 例如：实现中英文混排，按照字母排序
    list = data.sort((a, b) => {
      return sortDevName(a, b, property)
    })
  }
  if (order === 'desc') {
    list.reverse()
  }
  return list
}
function getCodeMap(code, isMap = false) {
  var obj = {}
  return new Promise((resolve) => {
    queryListSelectData(code).then(res => {
      res.result.map(item => {
        obj[item.code] = item.name
      })
      // 需要返回对象做映射
      if (isMap) {
        return resolve(obj)
      } else {
        return resolve(res.result)
      }
    })
  })
}
function selectable(val) {
  return val.readonly !== '0'
}

function getObjectTypeMap(isArray = false) {
  return new Promise((resolve) => {
    getBaseObjectsExtend().then(res => {
      const array = []
      if (isArray) {
        if (res.result) {
          Object.keys(res.result).forEach(item => {
            array.push({ value: item, label: res.result[item] })
          })
        }
        return resolve(array)
      } else {
        return resolve(res.result)
      }
    })
  })
}

/**
 * 根据value反显Label值
 * @param {*} value value值
 * @param {*} list List列表
 * @param {*} props 字段名设置 默认{ value: 'code', label: 'name' }
 * @returns label
 */
function showLabelByList(value, list, props = { value: 'code', label: 'name' }, reValue = false) {
  if (value) {
    if (list) {
      const find = list.find(item => item[props.value] === value)
      if (find && find[props.label]) return find[props.label]
      else return reValue ? value : ''
    } else return reValue ? value : ''
  } else return reValue ? value : ''
}

export default {
  pageName,
  pdfFormat,
  objectTypeClassId,
  objectTypeReverseClassId,
  jumpPages,
  customSortMethod,
  sortDevName,
  getCodeMap,
  getObjectTypeMap,
  jumpAdminPage,
  selectable,
  showLabelByList,
  specifyCharacterRegex,
  jumpToMaterial,
  getJumpId
}

