export function formatDate(date, fmt = 'yyyy-MM-dd') {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

/*
*  @params 获取当前输入的日期，返回新的年月的返回值
*/
export function getNewMonth(date, monthNum = 0) {
  date.setDate(1)
  date.setMonth(date.getMonth() + Number(monthNum))
  return formatDate(date, 'yyyy-MM')
}

/*
*  @params date 时间对象/时间字符串/时间戳等等
*  @params type {String}  值：prev/current/next 上周/本周/下周
*  @params fmt {String} 日期连接符
*/
export function getWeekList(date, type, fmt) {
  const arr = []
  // 格式化日期
  const dateFormat = (date, fmt) => {
    const y = date.getFullYear() // 年
    let m = date.getMonth() + 1 // 月
    let d = date.getDate() // 日
    m = m < 10 ? ('0' + m) : m
    d = d < 10 ? ('0' + d) : d
    return `${y}${fmt}${m}${fmt}${d}`
  }

  const currentDate = new Date(date)
  const w = currentDate.getDay() // 当前星期 0-6
  let y = currentDate.getFullYear() // 当前年
  let m = currentDate.getMonth() + 1 // 当前月
  let d = currentDate.getDate() // 当前日期
  // 先算出周日是几号 根据type类型计算
  let Sunday = 0
  // 获取周日的年份 月份 日期
  const getSunday = (zf) => {
    if (zf <= 0) {
      // 日期小于0 且当前星期不是0
      if (m - 1 <= 0) {
        // 月份<=0 年份-1
        y = y - 1 // 年份 -1
        m = 12 // 月份 = 12
        const n = d - w
        Sunday = new Date(y, m, 0).getDate() + n
      } else {
        m = m - 1 // 月份 -1
        const n = d - w
        Sunday = new Date(y, m, 0).getDate() + n
      }
    } else if (zf > 0) {
      // 日期大于0
      Sunday = d - w
    }
  }

  switch (type) {
    case 'current': // 本周
      break
    case 'prev': // 上一周
      if (d - 7 < 0) {
        if (m - 1 < 1) {
          m = 12
          y = y - 1
          d = new Date(y, m, 0).getDate() + (d - 7)
        } else {
          m = m - 1
          d = new Date(y, m, 0).getDate() + (d - 7)
        }
      } else {
        d = d - 7
      }
      break
    case 'next': // 下一周
      if (d + 7 > new Date(y, m, 0).getDate()) {
        if (m + 1 > 12) {
          m = 1
          y = y + 1
          d = d + 7 - new Date(y - 1, 12, 0).getDate() // d + 7 大于 12月的天数多少天 就是几号
        } else {
          m = m + 1
          d = d + 7 - new Date(y, m - 1, 0).getDate()
        }
      } else {
        d = d + 7
      }
      break
  }
  getSunday(d - w) // 获取周日日期

  // 获取日期
  const getDate = (mon, i) => {
    if (mon + i > new Date(y, m, 0).getDate()) {
      // 大于当月天数
      Sunday = -i + 1
      mon = 1
      if (m + 1 > 12) {
        y += 1
        m = 1
      } else {
        m += 1
      }
      return dateFormat(new Date(`${y}-${m}-${mon}`), fmt)
    }
    return dateFormat(new Date(`${y}-${m}-${mon + i}`), fmt)
  }
  // 往后推7天
  for (let i = 0; i < 7; i++) {
    arr[i] = getDate(Sunday, i)
  }
  return arr
}

/**
 * @param startDate  开始日期 yyyy-MM-dd
 * @param enDate  结束日期 yyyy-MM-dd
 * @returns {number} 两日期相差的天数
 */
export function getDaysBetween(startDate, enDate) {
  const sDate = Date.parse(startDate)
  const eDate = Date.parse(enDate)
  const days = (eDate - sDate) / (1 * 24 * 60 * 60 * 1000)
  return days
}

/**
 * @param date yyyy-MM-dd
 */
export function getAddReductionDate(date, num) {
  let dateTime = new Date(date)
  dateTime = dateTime.setDate(dateTime.getDate() + num)
  return formatDate(new Date(dateTime))
}

/**
 * @param 获取开始日期与结束日期的所有日期数组
 */
export function getAllDate(begin, end, isTimeStamp = false) {
  const arr = []
  const unixDb = new Date(begin).getTime()
  const unixDe = new Date(end).getTime()
  for (let k = unixDb; k <= unixDe;) {
    if (isTimeStamp) {
      arr.push(parseInt(k))
    } else {
      arr.push(formatDate(new Date(parseInt(k))))
    }

    k = k + 24 * 60 * 60 * 1000
  }
  return arr
}

/**
 * @param 获取当前日期的加多少天，生成的新日期
 */
export function GetDateStr(data, AddDayCount) {
  var dd = new Date(data)
  dd.setDate(dd.getDate() + AddDayCount)
  var y = dd.getFullYear()
  var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1)// 获取当前月份的日期，不足10补0
  var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()// 获取当前几号，不足10补0
  return y + '-' + m + '-' + d
}

