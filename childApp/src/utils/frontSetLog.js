import { addOperationLog } from '@/api/common'
import { postQueryListSelectData } from '@/api/common'

const setLog = async(val = {}, logType = '1') => {
  console.log('val123', val)
  const { result: operateListValues } = await postQueryListSelectData('20000285')
  const fn = async(val) => {
    try {
      const item = operateListValues.find(item => { return item.name === val.operationType })
      if (item) {
        console.log('itemitem', item, val.operationType, operateListValues)
        const obj = { operationType: item.code, logType: logType }
        const logObj = Object.assign(val, obj)
        await addOperationLog(logObj)
      }
    } catch (e) {
      console.log('e', e)
    }
  }
  if (Array.isArray(val)) {
    val.forEach(item => {
      fn(item)
    })
  } else {
    fn(val)
  }
}

export default setLog
