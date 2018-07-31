<template>
  <div id="app">
    <el-container style="height:100%;">
      <el-aside width="200px">
        <div id="name">元高分3.0</div>
        <el-row class="tac">
          <el-col :span="24">
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose" 
            background-color="#eef1f6"
            text-color="#48576a"
            active-text-color="#20a0ff"
            unique-opened="true">
            <el-menu-item index="1-2">学校基本信息</el-menu-item>
            <el-menu-item index="1-3">组织架构管理</el-menu-item>
            <el-menu-item index="1-4">年级班级管理</el-menu-item>
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>学校管理</span>
              </template>
              <el-menu-item index="1-1">班级管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>APP管理</span>
              </template>
              <el-menu-item index="2-1">用户管理</el-menu-item>
              <el-submenu index="2-2">
                <template slot="title">反馈管理</template>
                <el-menu-item index="2-2-1">教辅反馈</el-menu-item>
                <el-menu-item index="2-2-2">意见反馈</el-menu-item>                
              </el-submenu>
              <el-submenu index="2-3">
                <template slot="title">反馈管理</template>
                <el-menu-item index="2-3-1">教辅反馈</el-menu-item>
                <el-menu-item index="2-3-2">意见反馈</el-menu-item>                
              </el-submenu>
              <el-submenu index="2-4">
                <template slot="title">版本管理</template>
                <el-menu-item index="2-4-1">新增版本</el-menu-item>              
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统设置</span>
              </template>
              <el-menu-item index="3-1">账号管理</el-menu-item>
              <el-menu-item index="3-2">角色管理</el-menu-item>
              <el-menu-item index="3-3">修改密码</el-menu-item>
            </el-submenu> -->
            <!-- <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item> -->
          </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-wrapper">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            </el-breadcrumb>

            <el-dropdown split-button="true"  trigger="click" type="primary" @click="handleClick">
              admin
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>用户信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    
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
  beforeRouteEnter(to,form,next){
    // console.log(to)
    // console.log(from)
    next()
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(){

    }
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
