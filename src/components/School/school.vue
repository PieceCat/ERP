<template>
  <div>
    <Aside :page="page"></Aside>
    装修学堂
  </div>
</template>

<script>
import Aside from '@/components/common/Aside'
export default {
  data(){
    return {
      page:[
        {pageName:'装修学堂',url:'/school'},
      ]
    }
  },
  methods:{
    
  },
  components: {
    Aside
  }
}
</script>

<style lang="less" scope>
  
</style>