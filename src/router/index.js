import Vue from 'vue'
import Router from 'vue-router'
// import CMS from '@/components/CMS'

//首页
import index from '@/components/Index/index'
import friendLink from '@/components/Index/friendLink'

//装修学堂
import school from '@/components/School/school'

//团队与案例
import estate from '@/components/Team/estate'
import team from '@/components/Team/team'
import designer from '@/components/Team/designer'
import desCase from '@/components/Team/case'
import caseImg from '@/components/Team/caseImg'

Vue.use(Router)

let router =  new Router({
  // mode: 'history',
  routes: [
    { path: '/', redirect: '/index' },
    // 首页
    { path: '/index', name: 'index', meta: {title:'首页'}, component: index },
    { path: '/friendLink', name: 'friendLink', meta: {title:'友情链接'}, component: friendLink },
    
    //装修学堂
    { path: '/school', name: 'school', meta: {title:'装修学堂'}, component: school},

    //团队与案例
    { path: '/estate', name: 'estate', meta:{ title:'团队与案例' },component: estate },
    { path: '/team', name: 'team', meta:{ title:'团队与案例' },component: team },
    { path: '/designer', name: 'designer', meta:{ title:'团队与案例' },component: designer },
    { path: '/desCase', name: 'desCase', meta:{ title:'团队与案例' },component: desCase },
    { path: '/caseImg', name: 'caseImg', meta:{ title:'团队与案例' },component: caseImg }

  ]
})

router.afterEach((to,from)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }else{
    document.title = 'ERP'
  }
})


export default router