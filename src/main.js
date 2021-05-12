import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入vant
import Vant from 'vant'
// 引入vantcss
import 'vant/lib/index.css'
// 它能根据的手机尺寸来调整rem的基准值
import 'amfe-flexible'
// 注册vant
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
