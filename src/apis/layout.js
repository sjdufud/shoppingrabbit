import httpInstance  from "@/utils/http";
export function getCategoryAPI(){
    return httpInstance({
        url:'/home/category/head' //这是获取分类头部信息的接口

    })
}