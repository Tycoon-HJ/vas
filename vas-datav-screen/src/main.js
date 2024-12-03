
import { createApp } from 'vue'
import App from './App.vue'
import  Container from './lib/imooc.datav.es.js'
import Screen from "@/components/Screen/index.js";
import Map from "@/components/Screen/index.js";
import Calendar from "@/components/Screen/index.js";
import Line from "@/components/Screen/index.js";
import Lines from "@/components/Screen/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { VueUiRadar } from "vue-data-ui"

createApp(App).use(Container).use(Screen).use(Map)
    .use(Calendar)
    .use(Line)
    .use(Lines)
    .use(ElementPlus)
    .component("VueUiRadar", VueUiRadar)
    .mount('#app')
