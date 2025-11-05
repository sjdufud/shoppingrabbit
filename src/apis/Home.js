import httpInstance  from "@/utils/http";
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner' //这是获取分类头部信息的接口

    })
}



/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}


/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return  httpInstance({
    url:'/home/hot'
  })
}