
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'
//测试接口函数
// import { getCategory } from './apis/testAPI'
// getCategory().then(res=>{
//     console.log(res)
// })
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
//定义全局指令
//将一个自定义指令全局注册到应用层级
app.directive('img-lazy',{
    mounted(el,binding){
        //el:指令绑定元素 img
        //binding:binding.value 指令等于号后面绑定表达式的值
        console.log(el,binding.value)
        useIntersectionObserver(
        el,
        //isIntersecting是布尔值，当元素被用户滑动到可见视口时，值为true
        ([{isIntersecting}]) => {
           console.log(isIntersecting)
           if(isIntersecting){
            el.src=binding.value
           }
        },
        )
    }
})