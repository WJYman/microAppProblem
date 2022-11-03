import {
  view
} from '@/api/adminPage/sysRel/sysInfo'

import store from '@/store'
// 将二维数组变成一维数组
export function secondArrayToFirst(arr) {
  return [].concat.apply([], arr)
}

export function numberFormat(value, params) {
  const {
    integerLength,
    decimalLength,
    isNegative
  } = {
    integerLength: 19,
    decimalLength: 10,
    isNegative: true,
    ...params
  }
  let val = JSON.stringify(value)
  val = val.replace(/[^\d.-]/g, '') //  先把非数字的都替换掉，除了数字和.
  val = val.replace(/^\./g, '') // 必须保证第一个为数字而不是.
  val = val.replace(/\.{2,}/g, '.') // 保证只有出现一个.而没有多个.
  val = val.replace(/\.{2,}/g, '-')
  val = val.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.') // 保证.只出现一次，而不能出现两次以上
  val = val.replace('-', '$#$').replace(/-/g, '').replace('$#$', '-') // 保证.只出现一次，而不能出现两次以上
  if (!isNegative) {
    val = val.replace(/[^\d.]/g, '')
  }
  if (![0, -1].includes(val.indexOf('-'))) {
    const arr = val.split('')
    arr.splice(val.indexOf('-'), 1)
    val = arr.join('')
  }
  if (val.split('')[0] === '-') {
    if (val.split('')[1] === '.') {
      const arr = val.split('')
      arr.splice(1, 1)
      val = arr.join('')
    } else if (val.split('')[1] === '0') {
      if (val.split('')[2] !== '.' && val.split('').length > 1) {
        const arr = val.split('')
        arr.splice(2, 1)
        val = arr.join('')
      }
    }
  }
  if (val.split('')[0] === '0') {
    if (val.split('')[1] !== '.' && val.split('').length > 1) {
      let arr = val.split('')
      arr = arr.slice(0, 1)
      val = arr.join('')
    }
  }
  if (val.split('.')[0]) {
    const addVal = (val.split('.')[0]).indexOf('-') !== -1 ? 1 : 0
    if (val.split('.')[0].length > (integerLength + addVal)) {
      let arr = val.split('')
      arr = arr.slice(0, integerLength + addVal)
      val = arr.join('')
    }
  }
  if (val.split('.')[1] && val.split('.')[1].length > decimalLength) {
    let arr = val.split('.')[1].split('')
    arr = arr.slice(0, decimalLength)
    val = val.split('.')[0] + '.' + arr.join('')
  }

  return val
}

export function getPreviewUrl(url, notOpen) {
  var promise = new Promise(function(resolve, reject) {
    view().then(ress => {
      var textUser = ''
      var textDATE = ''
      var text = ''
      if (ress.result.watermark.split(',').filter(function(s) {
        return s && s.trim()
      })
      ) {
        ress.result.watermark
          .split(',')
          .filter(function(s) {
            return s && s.trim()
          })
          .forEach(item => {
            if (item === '$USER') {
              textUser = store.getters.user.loginName
            } else if (item === '$DATE') {
              textDATE = new Date().toLocaleDateString() + new Date().toLocaleTimeString()
            } else {
              text = item
            }
          })
      }

      // 对字符串进行编码
      var encode = encodeURI(url)
      // 对编码的字符串转化base64
      var base64 = btoa(encode)
      if (textDATE) {
        text = textDATE + '-' + text
      }
      if (textUser) {
        text = textUser + '-' + text
      }
      // 水印文本
      var watermarkTxt = encodeURI('&watermarkAngle=35&&watermarkTxt=' + text + '&watermarkColor=%23221f1f')
      // 签章文字
      var signatureCompany = encodeURI('&signatureCompany=')

      var ret = 'http://172.29.201.235:8075/onlinePreview?url=' + encodeURIComponent(base64)
      var result = ret + watermarkTxt + signatureCompany
      if (!notOpen) {
        window.open(result)
      }
      resolve(result)
    })
  })
  return promise
}
