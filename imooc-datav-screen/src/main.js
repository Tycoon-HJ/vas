import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import VueCountTo from './components/VueCountTo/vue-countTo.vue'

createApp(App)
  // .use(router)
  .use(store)
  .use(dataV)
  .component('CountTo', VueCountTo)
  .mount('#app')
