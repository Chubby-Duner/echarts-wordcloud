import Vue from 'vue'
import App from './App.vue'

// 引入echarts
// import echarts from 'echarts'
// import * as echarts from 'echarts';

// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
