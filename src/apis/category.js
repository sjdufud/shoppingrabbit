import request from '@/utils/http'
//instance是默认导出所以命名随意

export const getCategoryAPI=(id)=>{
    return request({
        url:'/category',
        params:{
            id
        }
    })
}
