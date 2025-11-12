//封装倒计时函数

import { computed,onUnmounted,ref } from "vue"
import dayjs from "dayjs"
export const useCountDown= ()=>{
let timer=null
//1.响应式数据
const Time=ref(0)
//格式化时间 为xx分xx秒

const formatTime=computed(()=>dayjs.unix(Time.value).format('mm分ss秒'))

//2.开启倒计时的函数

const start =(currentTime)=>{
    //开始倒计时的逻辑
//核心逻辑：每隔1s就减一
    Time.value =currentTime
setInterval(()=>{
    Time.value--

},1000)

}


//组件销毁时清除定时器

onUnmounted(()=>{
    timer&&clearInterval(timer)
})




return{

    formatTime,
    start

}


}