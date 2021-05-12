import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入vant, 字体图标
import Vant, { Icon } from 'vant'
// 引入vantcss
import 'vant/lib/index.css'
// 它能根据的手机尺寸来调整rem的基准值
import 'amfe-flexible'
// 注册vant
Vue.use(Vant)
// 注册字体图标
Vue.use(Icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
