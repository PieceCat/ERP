<template>
  <div>
    <Aside :page='page'></Aside>
  </div>
</template>

<script>
import Aside from '@/components/common/Aside'
export default {
  data(){
    return{
      page:[
        {pageName:'楼盘管理',url:'/'},
        {pageName:'设计团队',url:'/'},
        {pageName:'设计师',url:'/'},
        {pageName:'设计案例',url:'/'},
        {pageName:'案例图片',url:'/'}
      ]
    }
  },
  components:{
    Aside
  }
}
</script>

<style lang="less" scope>
  
</style>