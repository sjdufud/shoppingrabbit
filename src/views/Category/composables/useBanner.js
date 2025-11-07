//封装轮播图业务相关代码
import { getBannerAPI } from '@/apis/Home';
import { ref } from 'vue';
import { onMounted } from 'vue';
export function useBanner(){
    
    const bannerList=ref([])

    const getBanner=async()=>{
        const res=await getBannerAPI({
            distributionSite:'2'
        })
        console.log(res)
        bannerList.value=res.result
    }

    onMounted(()=>getBanner())

    return{
        bannerList
    }
}