import httpInstance  from "@/utils/http";
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner' //这是获取分类头部信息的接口

    })
}