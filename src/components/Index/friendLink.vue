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
      ],
      total: 0, //总数量，默认0
      currentPage: 1, //当前页码数，默认1
      pageSize: 10, //每页数量
      newArr: [],
      linkList: [],
      loading: true,
      id: "",
      site: "",
      linkType: "",
      linkName: "",
      linkUrl: "",
      linkFlag: ""
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
    handleClick(data) {},

    //从数据库查询并删除列表
    delete(data) {
      // this.linkList.splice(
      // )
      this.linkList.forEach((v, i) => {
        if (v.id == data) {
          this.axios
            .get("/linkList")
            .then(response => {
              console.log(response);
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

    onSubmit() {}
  },
  components: {
    Aside
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