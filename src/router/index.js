import Vue from 'vue'
import VueRouter from 'vue-router'
import voca from 'voca'
import { flatten } from 'lodash'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: require('../Dashboard.vue').default,
      props: true,
    },
    {
      path: '/:resourceName',
      name: 'resource',
      component: require('../ResourceList.js').default,
      props: true,
    },
    {
      path: '/:resourceName/:id',
      name: 'resource-show',
      component: require('../ResourceShow.vue').default,
      props: true,
    },
    {
      path: '/:resourceName/:id/edit',
      name: 'resource-edit',
      component: require('../ResourceEdit.vue').default,
      props: true,
    },
  ]
})

export default router
