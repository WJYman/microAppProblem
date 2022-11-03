<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      // vnodes.push(<svg-icon icon-class={icon}/>)
      if (icon) {
        const elHtml = h('i', {
          attrs: {
            'class': 'menu-icon iconfont ' + icon
          }
        })
        vnodes.push(elHtml)
      }
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
<style scoped lang="scss">
  .menu-icon{
    margin-right: 10px;
    font-size: 12px;
    display: inline-block;
    width: 12px;
  }
  .is-active .menu-icon{
    color: #fff !important;
  }
</style>
