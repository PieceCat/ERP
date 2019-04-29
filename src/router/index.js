import Vue from 'vue'
import Router from 'vue-router'
// import CMS from '@/components/CMS'

//首页
import index from '@/components/Index/index'
import friendLink from '@/components/Index/friendLink'
import linkDetail from '@/components/Index/linkDetail'
import editLink from '@/components/Index/editLink'
import addLink from '@/components/Index/addLink'

//装修学堂
import school from '@/components/School/school'

//团队与案例
import estate from '@/components/Team/estate'
import team from '@/components/Team/team'
import designer from '@/components/Team/designer'
import desCase from '@/components/Team/case'
import caseImg from '@/components/Team/caseImg'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    { path: '/', redirect: '/index' },
    // 首页
    { path: '/index', meta: { title: '首页' }, component: index },
    { path: '/friendLink', meta: { title: '友情链接' }, component: friendLink },
    { name: 'linkDetail', path: '/friendLink/linkDetail/:id', meta: { title: '查看链接' }, component: linkDetail, props: true },
    { name: 'editLink', path: '/friendLink/editLink/:id', meta: { title: '编辑链接' }, component: editLink, props: true },
    { name: 'addLink', path: '/friendLink/addLink', meta: { title: '添加链接' }, component: addLink, props: true },

    //装修学堂
    { path: '/school', meta: { title: '装修学堂' }, component: school },

    //团队与案例
    { path: '/estate', meta: { title: '团队与案例' }, component: estate },
    { path: '/team', meta: { title: '团队与案例' }, component: team },
    { path: '/designer', meta: { title: '团队与案例' }, component: designer },
    { path: '/desCase', meta: { title: '团队与案例' }, component: desCase },
    { path: '/caseImg', meta: { title: '团队与案例' }, component: caseImg }

  ]
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'ERP'
  }
})


export default router