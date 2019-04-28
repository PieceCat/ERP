<template>
    <div>
      <el-row>
          <el-col :span="3">
            <div class="logo-bg">
                <img src="../../assets/logo.png" alt="">
            </div>
          </el-col>
          <el-col :span="21">
          <el-menu 
              :default-active="activeIndex"
              class="el-menu-demo top-bar"
              mode="horizontal"
              @select="handleSelect"  
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true">
              <el-menu-item index="/index">
                首页  
              </el-menu-item>
              <el-menu-item index="/school">
                装修学堂
              </el-menu-item>
              <el-menu-item index="/estate">
                团队&案例
              </el-menu-item>
              <el-menu-item index="4">材料展厅</el-menu-item>
              <el-menu-item index="5">活动专题</el-menu-item>
              <el-menu-item index="6">在线预约</el-menu-item>
              <el-menu-item index="7">客户认证</el-menu-item>
              <el-menu-item index="8">关于我们</el-menu-item>
              <el-menu-item index="9">广告管理</el-menu-item>
              <el-menu-item index="10">系统设置</el-menu-item>
              <el-submenu index="11">
              <template slot="title">我的工作台</template>
              <el-menu-item index="11-1">选项1</el-menu-item>
              <el-menu-item index="11-2">选项2</el-menu-item>
              <el-menu-item index="11-3">选项3</el-menu-item>
              <el-submenu index="12-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="12-4-1">选项1</el-menu-item>
                  <el-menu-item index="12-4-2">选项2</el-menu-item>
                  <el-menu-item index="12-4-3">选项3</el-menu-item>
              </el-submenu>
              </el-submenu>
              <el-menu-item index="13" disabled>消息中心</el-menu-item>
              <el-menu-item index="14">订单管理</el-menu-item>
          </el-menu>
          </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="brand">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>后台首页</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
          activeIndex: '/index',
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            this.$store.commit('key')
        }
    }
}
</script>

<style scope  lang="less">
@BaseColor: rgb(84, 92, 100);
  .logo-bg{
      background-color: @BaseColor;
      height: 60px;
      text-align: center;
      img{
          width: 60px;
          height: 60px;
          vertical-align: middle;
      }
  }
  .el-menu.el-menu--horizontal{
    border-bottom: 0px;
  }
  .brand{
    position: absolute;
    top: 15px;
    left: 237px;
    padding-left: 20px;
    .brand-box{
      line-height: 30px;
      height: 30px;
    }
  }
</style>