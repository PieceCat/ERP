<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/common/Header.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    Header: Header
  }
};
</script>

<style lang="less">
html,
body {
  margin: 0;
}
.el-container {
  padding-top: 40px;
}
</style>
