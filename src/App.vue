<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
#name {
  height: 60px;
  line-height: 60px;
}
#app {
  width: 100%;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
html,body {
  height: 100%;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.el-dropdown-menu__item {
  padding: 0 25px;
}
.el-dropdown-menu {
  left:90.5%;
}
.el-dropdown-menu__item--divided:before {
    margin: 0 -25px;
}
.el-aside {
  background-color: #eef1f6 !important;
}
</style>
