/**
 * number转Scientific
 * @param {String} number 数字
 * @returns 科学记数法
 */
function NumberToScientfic(number, power = 10) {
  if (number && typeof number === 'string') {
    // if (number.toString().includes('e')) return number
    const value = Number(number)
    if (value.toString().includes('e')) return value.toString()
    const p = Math.floor(Math.log(Math.abs(value)) / Math.LN10)
    if (Math.abs(p) < power) return value.toString()
    const n = value * Math.pow(10, -p)
    return n + 'e' + p
  } else return ''
}

// 要求数字加逗号  1000000 => 1,000,000
function numMenony(val) {
  // 是否数字
  if (Number(val)) {
    // 是否科学计数法
    if (val.toString().toLocaleLowerCase().includes('e')) return val
    return val.toString().replace(/\d+/, function(n) {
      return n.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    })
  } else return ''
}

const MAX = 999

/**
 * 科学记数法转number
 * @param {String} scient 科学记数法
 * @returns number
 */
function ScientificToNumber(scient) {
  if (scient && typeof scient === 'string') {
    if (scient.toLocaleLowerCase().includes('e')) {
      const list = scient.toLocaleLowerCase().split('e')
      // 判断用户输入的是否科学记数法
      if (list && list.length === 2) {
        const firstNum = Number(list[0])
        const secNum = Number(list[1])
        if (firstNum && secNum) {
          // 幂不能超过 MAX，过多数据会难以处理，造成页面卡死
          if (Math.abs(secNum) > MAX) {
            return 'error'
          }
          // 底数处理成个位数
          // if (Math.abs(firstNum) > 9) {
          //   const obj = toSingle(firstNum)
          //   firstNum = obj.num
          //   secNum = secNum + obj.length
          // }
          let overNum = firstNum.toString()
          // 幂为负数小数点前移，正数小数点后移
          if (Number(secNum) < 0) {
            for (let i = secNum; i < 0; i++) {
              if (overNum.toString().includes('.')) {
                // 小数点向前移一位 如果移到顶，补零
                let index = overNum.indexOf('.')
                overNum = insertStr(overNum.replace('.', ''), '.', --index)
                if (index === 0) {
                  overNum = '0' + overNum
                }
              } else {
                // 没有小数点，加！🍀
                const length = overNum.length - 1
                overNum = insertStr(overNum, '.', length)
                // 到顶，补零
                if (overNum.indexOf('.') === 0) {
                  overNum = '0' + overNum
                }
              }
            }
          } else {
            for (let i = 0; i < secNum; i++) {
              if (overNum.toString().includes('.')) {
                // 小数点向后移一位 如果移到底，清除小数点，变成整数
                let index = overNum.indexOf('.')
                overNum = insertStr(overNum.replace('.', ''), '.', ++index)
                if (index === overNum.length - 1) {
                  overNum = overNum.substring(0, index)
                }
              } else {
                // 没有小数 加零
                overNum = overNum + '0'
              }
            }
          }
          return overNum
        } else return 'error'
      } else return 'error'
    } else return scient
  } else return ''
}

// 求个位数
// function toSingle(num) {
//   const length = Math.abs(num).toString().length - 1
//   const scient = Number('1e' + length)
//   return {
//     num: num / scient,
//     length
//   }
// }

// 插入
function insertStr(S, str, index) {
  return S.substr(0, index) + str + S.substr(index)
}

export {
  NumberToScientfic,
  ScientificToNumber,
  numMenony
}
