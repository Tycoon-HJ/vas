
import { createApp } from 'vue'
import App from './App.vue'
import  Container from './lib/imooc.datav.es.js'
import Screen from "@/components/Screen/index.js";
createApp(App).use(Container).use(Screen).mount('#app')
