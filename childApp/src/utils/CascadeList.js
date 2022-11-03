
/**
 * 清理层叠列表中的空数组分支节点
 * @param {Array} list 要处理的数组
 * @param {String} nodeName 分支节点标签名
 * @returns 处理后
 */
export function delNullArr(list, nodeName = 'children') {
  if (list.length > 0) {
    list.forEach((item, index) => {
      const children = item[nodeName]
      if (children) list[index][nodeName] = delNullArr(children, nodeName)
    })

    return list
  } else {
    // 去除非null的空数组
    return null
  }
}

/**
 * 拍平层叠列表，返回叶子节点的集合
 * @param {Array} list 要处理的数组
 * @param {String} nodeName 分支节点标签名
 * @param {Boolean} nullNode 当叶子节点为空数组时是否返回叶子节点的父节点
 * @returns 处理后
 */
export function clap(list, nodeName = 'children', nullNode = false) {
  if (list && list.length > 0) {
    const clapList = []
    list.forEach(item => {
      if (item[nodeName] && item[nodeName].length > 0) {
        clapList.push(...clap(item[nodeName], nodeName), item)
      } else if (!item[nodeName]) {
        // 没有item[nodeName]代表item为叶子节点，如果有item[nodeName]代表item[nodeName]为叶子节点但为空
        clapList.push(item)
      } else if (nullNode) {
        // 如果nullNode为true，当item[nodeName]为空数组而不为未定义时，不返回空数组，返回叶子节点的父节点item
        clapList.push(item)
      }
    })

    return clapList
  } else {
    return []
  }
}

export function getFristNode(list, mutation = false, nodeName = 'children', ids = []) {
  if (list && list.length > 0) {
    ids.push(list[0].id)
    if (list[0][nodeName] && list[0][nodeName].length) {
      return getFristNode(list[0][nodeName], mutation, nodeName, ids)
    } else {
      return mutation ? ids : list[0]
    }
  }
}

// 检索节点，返回值包含所有父节点
export function searchNode(list, searchVal, attrName = { label: 'name', value: 'id', children: 'children' }) {
  const { children, label } = attrName
  if (list && list.length > 0) {
    const result = []
    list.forEach(item => {
      // 有子节点检索子节点，没有子节点或没有符合条件的子节点，检索当前节点
      if (item[children] && item[children].length) {
        // 先检索子节点，子节点有值则一定显示，不检索本节点，子节点没值检索本节点
        const childrenNodes = searchNode(item[children], searchVal, attrName)
        item[children] = childrenNodes
        if (childrenNodes && childrenNodes.length) {
          result.push(item)
        } else {
          if (item[label].includes(searchVal)) result.push(item)
        }
      } else {
        if (item[label].includes(searchVal)) result.push(item)
      }
    })

    return result.length ? result : null
  } else return null
}

// 获取所有叶子节点
export function getAllLeafNode(list, attrName = { label: 'name', value: 'id', children: 'children' }) {
  if (list && list.length > 0) {
    const LeafNodes = []
    list.forEach(item => {
      if (item[attrName.children] && item[attrName.children].length) {
        LeafNodes.push(...getAllLeafNode(item[attrName.children], attrName))
      } else {
        LeafNodes.push(item)
      }
    })

    return LeafNodes
  } else return null
}

/**
 * 获取所有节点的对应属性
 * @param {Array} list 原数组
 * @param {String} nodeName 分支节点名
 * @param {Array} attrName 要获取的属性名列表
 * @param {Number} index 递归用
 * @param {Boolean} nullNode 叶子节点为空数组时是否依然返回空值
 * @returns 处理后
 */
export function getAllNode(list, nodeName = 'children', attrName = ['type', 'detailsType', 'id'], index = 0, nullNode = false) {
  if (list && list.length > 0) {
    const Arr = []
    list.forEach(item => {
      const attribute = item[attrName[index]] || ''
      if (item[nodeName] && !nullNode) {
        // nullNode为true时，item[nodeName]为空数组依然返回['']
        Arr.push(attribute)
      } else if (attrName[index + 1]) {
        Arr.push(attribute, ...getAllNode(item[nodeName], nodeName, attrName, ++index))
      } else {
        Arr.push(attribute)
      }
    })

    return Arr
  } else {
    return ['']
  }
}
/**
 * 根据key值查层叠列表的名称
 * @param {Array} list 原数组
 * @param {String} key 要查询的节点唯一性标识（对应attrName的id）
 * @param {Array} nodeName 自定义节点子类标识
 * @param {Object} attrName 自定义属性名
 * @returns key对应的名称label
 */
export function getNode(list, key, nodeName = 'children', attrName = { id: 'id', name: 'name' }) {
  if (typeof key === 'object') {
    return getNodeByList(list, key, 0, nodeName, attrName)
  }
  if (list && list.length) {
    const obj = list.find(item => item[attrName.id] === key && (!item.nodeName || item.nodeName.length <= 0))
    if (obj) {
      return attrName.name ? obj[attrName.name] : obj
    } else {
      const length = list.length
      for (let i = 0; i < length; i++) {
        const item = list[i]
        if (item[nodeName] && item[nodeName].length) {
          const re = getNode(item[nodeName], key, nodeName, attrName)
          if (re) return re
        }
      }
      return 'not find'
    }
  } else return ''
}

function getNodeByList(list, key, index, nodeName = 'children', attrName = { id: 'id', name: 'name' }) {
  if (list && list.length) {
    const obj = list.find(item => item[attrName.id] === key[index])
    if (obj) {
      // 到底没
      if (index < (key.length - 1)) {
        return getNodeByList(obj[nodeName], key, ++index, nodeName, attrName)
      } else {
        return obj[attrName.name]
      }
    }
  }
}

/** */
export function getAllNodeAttr(list, nodeName = 'children', attrName = ['type', 'detailsType', 'id'], leafNodes = [], arrOrObj = 'Obj', nullNode = false) {
  // if (list && list.length > 0) {
  //   const Arr = []
  //   list.forEach(item => {
  //     if (item[nodeName] && item[nodeName].length > 0) {
  //       const result = getAllNodeAttr(list, nodeName, attrName, leafNodes)
  //       // 不在leafNode的处理范围内，跳出循环
  //       if (!result) return
  //       // 如果不在attrName的处理范围之内，返回值是处理后的数组，加在一起返回就完事了
  //       if (Array.isArray(result)) {
  //         Arr.push(...result)
  //       } else if (result.index) {
  //         // 上一个节点在attName和leafNode 的处理范围之内
  //         // 判断本节点是否在attrName处理范围之内
  //         if (attrName[result.index]) {

  //         }
  //       }
  //     } else if (item[nodeName] && nullNode && !leafNodes) {
  //       // item[nodeName] 叶子节点为空数组的情况
  //       const i = attrName.length - 2
  //       const value = {}
  //       value[attrName[i]] = item[attrName[i]]
  //       value[attrName[i + 1]] = ''
  //       return {
  //         value,
  //         index: i - 1
  //       }
  //     } else {
  //       // 到底了
  //       let i = attrName.length - 1
  //       // 如果有leafNode  判断当前叶子节点是否在leafNode的处理范围之内
  //       if (leafNodes && !leafNodes.includes(item[attrName[i]])) {
  //         return false
  //       }
  //       // 返回
  //       const value = {}
  //       value[attrName[i]] = item[attrName[i]]
  //       return {
  //         value,
  //         index: --i
  //       }
  //     }
  //   })

  //   return Arr
  // } else {
  //   return false
  // }
}
