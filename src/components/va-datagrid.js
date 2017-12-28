import Vue from 'vue'

Vue.component('va-datagrid', {
  props: {
    data: Array,
  },
  render(h) {
    const columns = this.$slots.default.filter(s => s.tag).map(s => {
      const { prop, label, width } = s.componentOptions.propsData
      return h('el-table-column', {
        props: { prop, label, width }
      }, s)
    })
    return h('el-table', {
      props: {
        data: this.data,
        style: this.style,
      }
    }, columns)
  }
})
