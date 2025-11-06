//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'


export const lazyPlugin ={
    install(app){
    //懒加载指令逻辑
    app.directive('img-lazy',{
    mounted(el,binding){
        //el:指令绑定元素 img
        //binding:binding.value 指令等于号后面绑定表达式的值
        console.log(el,binding.value)
       const{stop}= useIntersectionObserver(
        el,
        //isIntersecting是布尔值，当元素被用户滑动到可见视口时，值为true
        ([{isIntersecting}]) => {
           console.log(isIntersecting)
           if(isIntersecting){
            el.src=binding.value
            stop()
           }
        },
        )
    }
})
    }
}