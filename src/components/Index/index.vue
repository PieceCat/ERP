<template>
  <div>
    <Aside :page="page"></Aside>
    <el-container>
      <el-main class="content">
        <h3>欢迎光临管理后台</h3>
        <p>通过登录管理后台，您可以进行任何网站管理操作，完成后注意安全退出</p>
        <el-row>
          <el-col :span="20" class="box">
            <div class="grid-content bg-purple">快捷管理菜单</div>
            <el-row class="btnGrp">
              <el-button type="primary">活动报名管理</el-button>
              <el-button type="primary">注册用户管理</el-button>
              <el-button type="primary">添加幻灯</el-button>
              <el-button type="primary">首页预约管理</el-button>
            </el-row>
          </el-col>
        </el-row>
        <div id="echartContainer" style="width: 40%;height: 500px;border:1px solid rgb(180,180,180)" ></div>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Aside from '@/components/common/Aside'
import echarts from 'echarts'
export default {
  data(){
    return {
      page:[
        {pageName:'后台首页',url:'/index'},
        {pageName:'友情链接',url:'/friendLink'}
      ],
      id: 'container',
      option : {
          backgroundColor: '#2c343c',

          title: {
              text: 'Customized Pie',
              left: 'center',
              top: 20,
              textStyle: {
                  color: '#ccc'
              }
          },

          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },

          visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                  colorLightness: [0, 1]
              }
          },
          series : [
              {
                  name:'访问来源',
                  type:'pie',
                  radius : '55%',
                  center: ['50%', '50%'],
                  data:[
                      {value:335, name:'直接访问'},
                      {value:310, name:'邮件营销'},
                      {value:274, name:'联盟广告'},
                      {value:235, name:'视频广告'},
                      {value:400, name:'搜索引擎'}
                  ].sort(function (a, b) { return a.value - b.value; }),
                  roseType: 'radius',
                  label: {
                      normal: {
                          textStyle: {
                              color: 'rgba(255, 255, 255, 0.3)'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          lineStyle: {
                              color: 'rgba(255, 255, 255, 0.3)'
                          },
                          smooth: 0.2,
                          length: 10,
                          length2: 20
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#c23531',
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  },

                  animationType: 'scale',
                  animationEasing: 'elasticOut',
                  animationDelay: function (idx) {
                      return Math.random() * 200;
                  }
              }
          ]
      }
    }
  },
  mounted(){
    this.initChart();
  },
  methods:{
    initChart(){
      let myChart = echarts.init(document.getElementById("echartContainer"));
      myChart.setOption(this.option, true);
    }
  },
  components: {
    Aside
  }
}
</script>

<style lang="less" scope>
  .box{
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    height:  100px;
    .bg-purple{
      background: #F2F6FC;
      height: 30px;
      line-height: 30px;
      text-indent: 2em;
      border-bottom:  1px solid #DCDFE6;
    }
    .btnGrp{
      margin-top: 10px;
      margin-left:  10px;
    }
  }
  .content{
    height: 100%;
    overflow-y: scroll;
  }
</style>