export default {
  /**
     * 解决两个数相加精度丢失问题
     * @param a
     * @param b
     * @returns {Number}
     */
  floatAdd(a, b) {
    let c, d, e
    if (undefined == a || a == null || a == '' || isNaN(a)) { a = 0 }
    if (undefined == b || b == null || b == '' || isNaN(b)) { b = 0 }
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    e = Math.pow(10, Math.max(c, d))
    return (this.floatMul(a, e) + this.floatMul(b, e)) / e
  },

  /**
     * 解决两个数相减精度丢失问题
     * @param a
     * @param b
     * @returns {Number}
     */
  floatSub(a, b) {
    let c, d, e
    if (undefined == a || a == null || a == '' || isNaN(a)) { a = 0 }
    if (undefined == b || b == null || b == '' || isNaN(b)) { b = 0 }
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    e = Math.pow(10, Math.max(c, d))
    return (this.floatMul(a, e) - this.floatMul(b, e)) / e
  },
  /**
     * 解决两个数相乘精度丢失问题
     * @param a
     * @param b
     * @returns {Number}
     */
  floatMul(a, b) {
    let c = 0
    const d = a.toString()
    const e = b.toString()
    try {
      c += d.split('.')[1].length
    } catch (f) {}
    try {
      c += e.split('.')[1].length
    } catch (f) {}
    return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
  },
  /**
     * 解决两个数相除精度丢失问题
     * @param a
     * @param b
     * @returns
     */
  floatDiv(a, b) {
    let c; let d; let e = 0
    let f = 0
    try {
      e = a.toString().split('.')[1].length
    } catch (g) {}
    try {
      f = b.toString().split('.')[1].length
    } catch (g) {}
    return c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), this.floatMul(c / d, Math.pow(10, f - e))
  }
}
