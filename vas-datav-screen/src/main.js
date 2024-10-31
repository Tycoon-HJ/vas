
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Screen from './components/Screen/index.js'
createApp(App)
    .use(ElementPlus)
    .use(Screen).mount('#app')
