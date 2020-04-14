import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import state from './store/state.js'
Vue.prototype.$state=state
import axios from 'axios'
Vue.prototype.$http = axios
import './assets/css/iconfont.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  state
}).$mount('#app')
