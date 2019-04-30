<template>
  <div>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="10" v-loading="loading">
            <el-form ref="form" :model="data" label-width="80px">
              <el-form-item label="所属分站">
                <el-select v-model="data.site" placeholder="请选择所属分站">
                  <el-option label="上海" value="shanghai"></el-option>
                  <el-option label="北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="链接类型">
                <el-select v-model="data.linkType" placeholder="请选择链接类型">
                  <el-option label="友情链接" value="shanghai"></el-option>
                  <el-option label="合作伙伴" value></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="添加时间">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="data.addTime"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="添加时间" v-model="data.addTime" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="是否有效">
                <el-switch v-model="data.linkFlag"></el-switch>
              </el-form-item>
              <el-form-item label="链接名称*">
                <el-input v-model="data.linkName"></el-input>
              </el-form-item>
              <el-form-item label="链接地址*">
                <el-input v-model="data.linkUrl"></el-input>
              </el-form-item>
              <el-form-item label="链接备注">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <!-- 文件上传 -->
              <el-upload
                class="upload-demo"
                action="https://www.easy-mock.com/mock/5cc54d1cc591957410d201e4/ERP/api/upload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
              <!-- 文件上传 -->
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
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
      form: {
        site: "",
        type: "",
        date1: "",
        date2: "",
        delivery: false,
        name: "",
        url: "",
        desc: ""
      },
      fileList: [
        {
          name: "README.md",
          url: "C:UsersAdministratorDesktopitem\vueREADME.md"
        },
        {
          name: "README.md",
          url: "C:UsersAdministratorDesktopitem\vueREADME.md"
        }
      ],
      loading: false
    };
  },
  created() {
    console.log(this.data);
  },
  methods: {
    onSubmit() {
      this.loading = true;
      this.axios
        .get("/linkList")
        .then(response => {
          if (response.status == 200 && !response.data.length == 0) {
            this.loading = false;
            this.$message({
              type: "success",
              message: "创建成功!",
              showClose: true
            });
            setTimeout(() => {
              this.$router.push("/friendLink");
            }, 3000);
          }
        })
        .catch(err => {
          this.loading = false;
          this.$message({
            type: "error",
            message: "创建失败!",
            showClose: true
          });
          console.log(err);
        });
    },
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {},
    handleExceed() {}
  },
  props: ["id", "data"],
  computed: {}
};
</script>

<style lang="less" scope>
.upload-demo {
  margin-bottom: 20px;
}
</style>
