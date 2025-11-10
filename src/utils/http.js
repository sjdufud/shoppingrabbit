//axios基础封装
import 'element-plus/theme-chalk/el-message.css'
import axios from "axios";
import { ElMessage } from 'element-plus';
import {useUserStore}from '@/stores/user'
import router from '@/router'
const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:10000
})

//拦截器
// axios请求拦截器 前端到后端 (没到后端)
//拦截器允许你在请求发送到服务器之前或响应返回到客户端之前对它们进行一些处理。
httpInstance.interceptors.request.use(
  config => {
    //1.从pinia获取token数据

    const userStore=useUserStore();

    //2.按照后端的要求拼接后端数据

    const token =userStore.userInfo.token
    if(token){

      config.headers.Authorization=`Bearer ${token}`

    }

    return config //第一个函数是请求成功时的处理函数，它接收请求配置对象（config）作为参数。
    // 这里我们直接返回config，表示不对请求做任何修改，只是传递下去。
  },
  e => Promise.reject(e)
  //第二个函数是请求错误时的处理函数，当请求配置出错时会调用这个函数。
  // 这里我们返回一个被拒绝的Promise，将错误传递下去。
)

// axios响应式拦截器 后端返回前端
httpInstance.interceptors.response.use(
  res => res.data,  //响应成功时的处理函数，它接收响应对象（res）作为参数。
  // 这里我们直接返回res.data，即只返回响应体中的数据部分，而不是整个响应对象。
  // 这样在后续的then方法中，我们得到的就是数据部分。
  e => {
    const userStore=useUserStore();
    //统一错误提示
    ElMessage({
      type:'warning',
      message: e.response.data.message
    })


    //401token失效处理
    //1.清除本地数据
    //2.跳转登录页

    if(e.response.status ===401){

      userStore.clearUserInfo()
      router.push('/login')
    }


    return Promise.reject(e)
    // 第二个函数是响应错误时的处理函数，当响应出错（比如网络错误、状态码不在2xx范围内等）时会调用这个函数。
    // 这里我们返回一个被拒绝的Promise，将错误传递下去。

  }
)
export default httpInstance
//将配置好的httpInstance实例导出，以便在其他文件中使用这个实例来发送HTTP请求。