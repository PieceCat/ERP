<template>
  <div>
    <el-col :span="3">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo syl"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item :index="item.url" v-for="item in page" :key="item.id">
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.pageName}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/index"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
    },
    getNav() {
      let matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      if (first && first.name !== "首页") {
        matched = [{ path: "/Index", meta: { title: "首页" } }].concat(matched);
      }
      console.log(first);
    }
  },
  mounted() {
    this.getNav();
  },
  watch: {
    $route(to, from) {
      this.getNav();
    }
  },
  props: ["page"]
};
</script>

<style scope lang="less">
.syl {
  min-height: 900px;
  background: rgb(84, 92, 100);
}

a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  &:hover {
    color: rgb(255, 208, 75);
  }
}
</style>