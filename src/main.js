// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
//element按需引入
// import { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入echarts
import echarts from 'echarts'

//引入vuex
import store from './store'

//引入axios 
import axios from 'axios'
import App from './App'
import router from './router'



//挂载组件
// Vue.use(Button);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 
Vue.prototype.$http = axios
Vue.prototype.axios = axios
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5cc54d1cc591957410d201e4/ERP/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
