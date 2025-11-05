import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';
export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据处理
    //state 导航列表数据
    const categoryList =ref([])
    //获取异步修改数据的方法
    const getCategory=async()=>{
    const res=await getCategoryAPI() //拿到header
    console.log(res)
    categoryList.value=res.result
}
return{
    categoryList,
    getCategory
}
})
