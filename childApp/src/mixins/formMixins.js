export default {
  methods: {
    initFormByKey(formKey, formOptKey) {
      // options
      this[formOptKey].forEach(item => {
        const val = item.multiple || ['datetimerange', 'date'].includes(item.type) ? [] : ''
        this.$set(this[formKey], item.field, val)
      })

      // setTimeout(() => {
      // this.$refs[formKey] && this.$refs[formKey].resetFields()
      this.$refs[formKey] && this.$refs[formKey].clearValidate()
      // }, 800)
    },
    initRulesByKey(ruleKey, formOptKey) {
      this[formOptKey].forEach(item => {
        const vaild = [
          {
            required: item.required || !(item.required !== undefined),
            message: this.getMessage(item),
            trigger: 'change'
          }
        ]
        this.$set(this[ruleKey], item.field, vaild)
      })
    },
    getMessage({ label, type }) {
      return `${['select', 'dictSelect', 'datetimerange', 'cascader'].includes(type) ? this.lang.pleaseChoose : this.lang.enter}${this.lang[label]}`
    }
  }
}
