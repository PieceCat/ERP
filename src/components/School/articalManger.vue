<template>
  <div>
    <Aside :page="page"></Aside>
  </div>
</template>

<script>
import Aside from "@/components/common/Aside";
export default {
  data() {
    return {
      page: [
        { pageName: "文章管理", url: "/articalManger" },
        { pageName: "文章分类", url: "/articalSort" }
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