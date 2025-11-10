
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'
//测试接口函数
// import { getCategory } from './apis/testAPI'
// getCategory().then(res=>{
//     console.log(res)
// })
//引入懒加载指令注册

import { lazyPlugin } from '@/directives/index'
import {componentPlugin}from "@/components"

const app = createApp(App)
const pinia =createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
