import { start } from 'adminvue'
import UsersList from './users/List.vue'

const resources = [
  {
    name: 'users',
    submenuOf: 'Resources',
    list: () => UsersList,
    // show: require('./users/Show.vue').default,
    // edit: require('./users/Edit.vue').default,
  },
]

start({
  el: '#app',
  resources,
})
