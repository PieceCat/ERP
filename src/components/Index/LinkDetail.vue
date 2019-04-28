<template>
    <div>
        <Aside :page="page"></Aside>
        <el-container>
            <el-main>
                
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
    
</style>
