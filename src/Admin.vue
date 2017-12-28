<template>
  <div id="admin">
    <navigation v-if="showNavigation"></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  components: { Navigation },
  computed: {
    showNavigation () {
      // return this.$store.getters['user/isLoggedIn']
      return true
    }
  }
}
</script>

<style lang="scss">
#admin {
  font-family: Helvetica, sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
</style>
