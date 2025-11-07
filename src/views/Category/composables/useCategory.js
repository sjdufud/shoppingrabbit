//封装分类数据业务相关代码
import { ref } from "vue"
import { getCategoryAPI } from '@/apis/category';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { onMounted, onUpdated } from 'vue';


export function useCategory(){
    
    const categoryData =ref({})

    const route=useRoute()  //调用 useRoute() 获取当前路由信息对象 route 对象包含：params、query、path 等路由信息

    const getCategory =async(id=route.params.id)=>{
    //不同的id返回不同的数据
        const res =await getCategoryAPI(id)
        // console.log(res.result)
        categoryData.value=res.result
    }

    onMounted(()=>
        getCategory()
    )

//目标：路由参数变化时，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to)=>{
    //to:当前路由
    getCategory(to.params.id)

    })

    return{
        categoryData
    }

}

//其他解法： onUpdated(()=>getCategory())
// 其他解法：watch(
//   () => route.params.id,
//   (newId) => {
//     if (newId) {
//       getCategory()
//     }
//   },
//   { immediate: true }  // 立即执行一次
// )
