<template>
  <div>
    <Aside :page='page'></Aside>
    设计团队
  </div>
</template>

<script>
import Aside from '@/components/common/Aside'
export default {
  data(){
    return{ 
      page:[
        {pageName:'楼盘管理',url:'/estate'},
        {pageName:'设计团队',url:'/team'},
        {pageName:'设计师',url:'/designer'},
        {pageName:'设计案例',url:'/desCase'},
        {pageName:'案例图片',url:'/caseImg'}
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