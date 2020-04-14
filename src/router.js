import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import home from './components/home/home'
import list from'./components/list/list.vue'
Vue.use(Router)
 
export default new Router({
	mode: 'history',
  routes: [
    { path: '/', name: 'home', component: home },
	{ path: '/list', name: 'list', component: list }
  ]
})