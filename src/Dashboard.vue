<template>
<div class="dashboard">
  <!-- <img src="../assets/logo.png"> -->
  <div>
    <el-button @click="startHacking">Start</el-button>
    <div>Dashboard baby!</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'av-dashboard',
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  },
  created () {
    // this.$store.commit('setTitle', 'Dashboard')
    // getDashboard().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  },
}
</script>

<style>
.dashboard {
  text-align: center;
}
</style>
