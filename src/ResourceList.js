import Vue from 'vue'
import clone from 'lodash'

export default Vue.component('resource-list', {
  props: {
    'resourceName': String
  },
  created () {
  },
  render(createElement) {
    const resource = this.$store.state.resourcesMap[this.resourceName]
    const data = [{ id: 1, name: 'qwe' }]
    return createElement(resource.list(), {
      props: {
        data,
      }
    })
  }
})
