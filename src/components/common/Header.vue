<template>
  <div>
    <el-row>
      <el-col :span="3">
        <div class="logo-bg">
          <img src="../../assets/logo.png" alt>
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
          :router="true"
        >
          <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/school">装修学堂</el-menu-item>
          <el-menu-item index="/estate">团队&案例</el-menu-item>
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
          <!-- 面包屑遍历数组，路径是唯一的值 并且如果对象数组中没有meta.title的值就隐藏该条面包屑-->
          <el-breadcrumb-item v-for="(item)  in levelList" :key="item.path" v-if="item.meta.title">
            <!-- 跳转到数组中的path或者重定向地址 -->
            <router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/index",
      levelList: null
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
    getBreadcrumb() {
      // 过滤 路由方法中存在name属性值的对象，返回一个新数组
      let matched = this.$route.matched.filter(item => item.name);
      //获取数组中的第一项
      const first = matched[0];
      //如果第一项存在，并且第一项的name值不是首页，那么就是和首页同级的目录
      if (first && first.name !== "首页") {
        // 面包屑就需要在获取到的数组前面加上 首页项数组
        matched = [{ path: "/Index", meta: { title: "首页" } }].concat(matched);
      }
      // 所有带有 name以及meta等属性的对象所组成的数组赋值给levelList
      this.levelList = matched;
      // console.log(
      //   this.$route.matched,
      //   this.$route.matched.filter(item => item.name)
      // );
    }
  },
  mounted() {
    this.getBreadcrumb();
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb();
    }
  }
};
</script>

<style scope  lang="less">
@BaseColor: rgb(84, 92, 100);
.logo-bg {
  background-color: @BaseColor;
  height: 60px;
  text-align: center;
  img {
    width: 60px;
    height: 60px;
    vertical-align: middle;
  }
}
.el-menu.el-menu--horizontal {
  border-bottom: 0px;
}
.brand {
  position: absolute;
  top: 15px;
  left: 237px;
  padding-left: 20px;
  .brand-box {
    line-height: 30px;
    height: 30px;
  }
}
</style>