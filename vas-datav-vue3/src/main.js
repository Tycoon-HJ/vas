import './assets/main.css'
import './assets/imooc.datav.js'
import {createApp} from 'vue'
import App from './App.vue'


createApp(App).use(imoocDatav,{})
    .mount('#app')
