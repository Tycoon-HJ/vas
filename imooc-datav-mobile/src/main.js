import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'

import './styles/reset.scss'

import TopHeader from './components/TopHeader/index.vue'
import SalesBar from './components/SalesBar/index.vue'
import SalesLine from './components/SalesLine/index.vue'
import SalesPie from './components/SalesPie/index.vue'
import SalesMap from './components/SalesMap/index.vue'
import SalesSun from './components/SalesSun/index.vue'
import SalesRadar from './components/SalesRadar/index.vue'

Vue.prototype.$echarts = ECharts
Vue.prototype.$bmap = window.BMapGL
Vue.prototype.$bmap2 = window.BMap
Vue.prototype.$initMap = window.initMap
Vue.prototype.$mapvgl = window.mapvgl
Vue.prototype.$mapv = window.mapv
Vue.prototype.$purpleStyle = window.purpleStyle
Vue.prototype.$darkStyle = window.darkStyle

Vue.config.productionTip = false
Vue.component('vue-echarts', VueECharts)
Vue.component('top-header', TopHeader)
Vue.component('sales-bar', SalesBar)
Vue.component('sales-line', SalesLine)
Vue.component('sales-pie', SalesPie)
Vue.component('sales-map', SalesMap)
Vue.component('sales-sun', SalesSun)
Vue.component('sales-radar', SalesRadar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
