import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/packages/theme-chalk/src/index.scss'

import Admin from './Admin.vue'
import router from './router'
import store from './store'
import './components'
import './fields'

Vue.use(ElementUI)

export const resourceList = (component) => {
  const defaultComponent = {
    props: {
      data: {
        type: Array,
          required: true
      }
    },
  }
  return Object.assign(defaultComponent, component)
}

export const start = ({ el, resources }) => {
  store.commit('setResources', resources)

  return new Vue({
    el,
    router,
    store,
    render: h => h(Admin)
  })
}
