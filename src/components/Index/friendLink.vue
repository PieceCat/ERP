<template>
  <div>
    <Aside :page="page"></Aside>
    <router-view></router-view>
  </div>
</template>

<script>
import Aside from "@/components/common/Aside";
export default {
  data() {
    return {
      page: [
        { pageName: "后台首页", url: "/index" },
        { pageName: "友情链接", url: "/friendLink" }
      ]
    };
  },
  created() {},

  components: {
    Aside
  }
};
</script>

<style lang="less" scope>
</style>