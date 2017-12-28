<template>
<div>
  <el-menu
    :default-active="activeIndex"
    class="menu"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="/">Admin</el-menu-item>
    <template v-for="item in this.$store.state.menuItems">
      <el-menu-item :key="item.title" :index="item.path" v-if="item.type == 'item'">{{ item.title }}</el-menu-item>
      <el-submenu :key="item.title" :index="''" v-else>
        <template slot="title">{{ item.title }}</template>
        <el-menu-item v-for="subitem in item.subitems" :key="subitem.title" :index="subitem.path">
          {{ subitem.title }}
        </el-menu-item>
      </el-submenu>
    </template>
    <el-submenu index="/" class="menu-profile">
      <template slot="title">Profile</template>
      <el-menu-item index="logout">
        Log out
      </el-menu-item>
    </el-submenu>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      activeIndex: this.$router.currentRoute.path,
      menu: [
        {
          title: "Resources",
          subMenu: [
            { title: "Users", route: "users" }
          ]
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // if (key === 'logout') {
      //   this.$store.commit('user/resetCurrentAdminUser')
      //   this.$router.push({ path: '/sign-in' })
      // } else {
      //   this.$router.push({ path: '/' + keyPath.join('/') })
      // }
      this.$router.push({ path: key })
    }
  },
  computed: {
    menuItems () {
      const resources = this.$store.state.resources
      let menuItems = [] // [ { type: 'item', title: 'Users', path: '/users' }, { type: 'submenu', title, subitems } .. ]
      let submenus = {}
      for (let r of resources) {
        if (r.submenuOf !== undefined) {
          if (submenus[r.submenuOf] === undefined) {
            submenus[r.submenuOf] = []
            menuItems.push({
              type: 'submenu', 
              title: r.submenuOf,
              subitems: submenus[r.submenuOf],
            })
          }
          submenus[r.submenuOf].push({
            type: 'item',
            title: r.name,
            path: `/${r.name}`,
          })
        } else {
          menuItems.push({
            type: 'item',
            title: r.name,
            path: `/${r.name}`,
          })
        }
      }
      return menuItems
    }
  },
}
</script>

<style lang="scss">
.menu-profile {
  float: right !important;
}
</style>
