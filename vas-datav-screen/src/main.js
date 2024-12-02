
import { createApp } from 'vue'
import App from './App.vue'
import  Container from './lib/imooc.datav.es.js'
import Screen from "@/components/Screen/index.js";
import Map from "@/components/Screen/index.js";
import Calendar from "@/components/Screen/index.js";
import Line from "@/components/Screen/index.js";
import Lines from "@/components/Screen/index.js";
createApp(App).use(Container).use(Screen).use(Map)
    .use(Calendar)
    .use(Line)
    .use(Lines)
    .mount('#app')
