import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    resources: [],
    resourcesMap: {},
  },
  mutations: {
    setResources(state, resources) {
      state.resources = resources
      state.resourcesMap = resources.reduce((map, r) => Object.assign({}, map, { [r.name]: r }), {})
    },
  },
})

export default store
