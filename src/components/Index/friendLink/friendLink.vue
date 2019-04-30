<template>
  <div>
    <el-container>
      <el-main>
        <h5 class="title">友链管理</h5>
        <!-- 搜索 -->
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="ID：">
            <el-input v-model="searchArg.id" placeholder></el-input>
          </el-form-item>
          <el-form-item label="所属分站：">
            <el-select v-model="searchArg.site" placeholder="活动区域">
              <el-option label="上海" value="上海"></el-option>
              <el-option label="北京" value="北京"></el-option>
              <el-option label="天津" value="天津"></el-option>
              <el-option label="沈阳" value="沈阳"></el-option>
              <el-option label="武汉" value="武汉"></el-option>
              <el-option label="青岛" value="青岛"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="链接类型：">
            <el-select v-model="searchArg.linkType" placeholder="活动区域">
              <el-option label="友情链接" value="友情链接"></el-option>
              <el-option label="合作伙伴" value="合作伙伴"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="链接名称">
            <el-input v-model="searchArg.linkName" placeholder></el-input>
          </el-form-item>
          <el-form-item label="是否有效">
            <el-select v-model="searchArg.linkFlag" placeholder="活动区域">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <!-- 搜索 -->

        <!-- 搜索列表  -->
        <el-table :data="newArr" v-loading="loading" style="width: 100%">
          <el-table-column prop="id" label="id"></el-table-column>
          <el-table-column prop="site" label="所属分站"></el-table-column>
          <el-table-column prop="linkType" label="链接类型"></el-table-column>
          <el-table-column prop="linkName" label="链接名称"></el-table-column>
          <el-table-column prop="linkUrl" label="链接地址"></el-table-column>
          <el-table-column prop="linkFlag" label="是否有效"></el-table-column>
          <el-table-column prop="addTime" label="添加时间"></el-table-column>
          <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">
                <router-link :to="{name:'linkDetail',params:{id:scope.row.id}}" class="look">查看</router-link>
              </el-button>
              <el-button type="text" size="small">
                <router-link
                  :to="{name:'editLink', params:{id:scope.row.id,data:scope.row}}"
                  class="look"
                >编辑</router-link>
              </el-button>
              <el-button @click="del(scope.row.id)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 搜索列表 -->

        <!-- 分页 -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="linkList.length"
          :page-size="pageSize"
          :current-page="currentPage"
          @prev-click="handleCurrentChange(currentPage-1)"
          @next-click="handleCurrentChange(currentPage+1)"
          @current-change="handleCurrentChange"
        ></el-pagination>
        <!-- 分页 -->
      </el-main>
    </el-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0, //总数量，默认0
      currentPage: 1, //当前页码数，默认1
      pageSize: 10, //每页数量
      newArr: [],
      linkList: [],
      loading: true,
      searchArg: {
        id: "",
        site: "",
        linkType: "",
        linkName: "",
        linkUrl: "",
        linkFlag: ""
      }
    };
  },
  created() {
    this.getLinklist();
  },
  mounted() {
    // this.pager(this.total,this.currentPage);
  },
  methods: {
    //获取链接列表
    getLinklist() {
      this.axios
        .get("/linkList")
        .then(response => {
          if (response.status == 200 && !response.data.length == 0) {
            this.linkList = response.data;
            this.pager(this.currentPage);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    //当前页面改变跟换页面数据
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.pager(this.currentPage);
    },

    //获取每一页的数据
    pager(currentPage) {
      //如果总数大于10
      this.newArr = this.linkList.slice(
        (currentPage - 1) * this.pageSize,
        currentPage * this.pageSize
      );
      this.loading = false;
    },

    //查看列表详情
    handleClick(data) {
      console.log(data);
    },

    //从数据库查询并删除列表
    delete(data) {
      // this.linkList.splice(
      // )
      this.linkList.forEach((v, i) => {
        if (v.id == data) {
          this.axios
            .get("/linkList")
            .then(response => {
              if (response.status == 200 && !response.data.length == 0) {
                this.linkList.splice(i, 1);
                if (this.newArr.length <= 1) {
                  this.handleCurrentChange(this.currentPage - 1);
                }
                this.pager(this.currentPage);
                this.$message({
                  type: "success",
                  message: "删除成功!",
                  showClose: true
                });
              }
            })
            .catch(err => {
              this.$message({
                type: "info",
                message: "删除失败"
              });
              console.log(err);
            });
        }
      });
    },

    //删除确认弹框
    del(data) {
      this.$confirm("此操作将永久删除该项数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.delete(data);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 查询
    onSubmit() {
      let data = {};
      var arr = [];
      for (let j in this.searchArg) {
        if (this.searchArg && this.searchArg[j] != "") {
          data[j] = this.searchArg[j];
          arr.push(j);
          // console.log(this.searchArg[j]);
        }
      }
      this.newArr = [];
      for (let i = 0; i < this.linkList.length; i++) {
        for (let d in this.linkList[i]) {
          if (this.linkList[i][d] == data[d]) {
            console.log(1);
          }
          for (let b = 0; b < arr.length; b++) {}
          // console.log(d);
        }
        this.newArr.push(this.linkList[i]);
      }
      // this.newArr = this.linkList.filter(item => {
      //   if (data == item) {
      //     return true;
      //   }
      // });
      // console.log(this.newArr);
    }
  }
};
</script>

<style lang="less" scope>
.title {
  color: #409eff;
}
.text {
  text-align: center;
  line-height: 40px;
  height: 40px;
}
.look {
  color: #409eff;
  &:hover {
    color: #409eff;
  }
}
</style>