<template>
    <div>
        <Aside :page="page"></Aside>
        <el-container>
            <el-main>
                <el-row :gutter="10" class="list">
                  <el-col :span="4"><div class="grid-content bg">ID:</div></el-col>
                  <el-col :span="6"><div class="grid-content">152</div></el-col>
                </el-row>
                <el-row :gutter="20" class="list">
                  <el-col :span="4"><div class="grid-content">所属分站：</div></el-col>
                  <el-col :span="6"><div class="grid-content">未设置</div></el-col>
                </el-row>
                <el-row :gutter="20" class="list">
                  <el-col :span="4"><div class="grid-content">链接类型：</div></el-col>
                  <el-col :span="6"><div class="grid-content">友情链接</div></el-col>
                </el-row>
                <el-row :gutter="20" class="list">
                  <el-col :span="4"><div class="grid-content">链接名称：</div></el-col>
                  <el-col :span="6"><div class="grid-content">西安装修公司排名</div></el-col>
                </el-row>
                <el-row :gutter="20" class="list">
                  <el-col :span="4"><div class="grid-content">链接地址：</div></el-col>
                  <el-col :span="6"><div class="grid-content"><a href="http://www.xingtangzs.com">http://www.xingtangzs.com</a></div></el-col>
                </el-row>
                <el-row :gutter="20" class="list">
                  <el-col :span="4"><div class="grid-content">链接备注：</div></el-col>
                  <el-col :span="6"><div class="grid-content">友情链接</div></el-col>
                </el-row>
                <el-row :gutter="20" class="list">
                  <el-col :span="4"><div class="grid-content">排序数字：</div></el-col>
                  <el-col :span="6"><div class="grid-content">0</div></el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Aside from '@/components/common/Aside'
export default {
    data(){
        return {
            page:[
                {pageName:'后台首页',url:'/index'},
                {pageName:'友情链接',url:'/friendLink'}
            ],
        }
    },
    created(){

    },
    methods:{

    },
    components:{
        Aside
    },
    props:["id"]
}
</script>

<style lang="less" scope>
    .list{
      line-height: 30px;
      margin-bottom: 10px;
      color: #303133;
      a{
        color: #409EFF;
      }
    }
</style>
