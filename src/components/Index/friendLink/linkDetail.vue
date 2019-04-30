<template>
  <div>
    <el-container>
      <el-main>
        <el-row :gutter="10" class="list">
          <el-col :span="4">
            <div class="grid-content bg">ID:</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">{{data.id}}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="list">
          <el-col :span="4">
            <div class="grid-content">所属分站：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">{{data.site}}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="list">
          <el-col :span="4">
            <div class="grid-content">链接类型：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">{{data.linkType}}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="list">
          <el-col :span="4">
            <div class="grid-content">链接名称：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">{{data.linkName}}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="list">
          <el-col :span="4">
            <div class="grid-content">链接地址：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <a :href="data.linkUrl">{{data.linkUrl}}</a>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="list">
          <el-col :span="4">
            <div class="grid-content">链接备注：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">{{data.linkType}}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="list">
          <el-col :span="4">
            <div class="grid-content">排序数字：</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">{{data.id}}</div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    this.checkLinkdetail();
  },
  methods: {
    checkLinkdetail() {
      this.axios
        .get("/linkList")
        .then(response => {
          if (response.status == 200 && !response.data.length == 0) {
            this.data = response.data.find(obj => obj.id == this.id);
            // console.log(this.data)
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {},
  props: ["id"]
};
</script>

<style lang="less" scope>
.list {
  line-height: 30px;
  margin-bottom: 10px;
  color: #303133;
  a {
    color: #409eff;
  }
}
</style>
