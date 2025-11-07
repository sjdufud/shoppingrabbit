import httpInstance  from "@/utils/http";
export function getBannerAPI(params ={}){
  const {distributionSite='1'}=params 
  //从 params 对象中解构出 distributionSite 参数
// 默认值为 '1'，如果调用时未传递该参数则使用默认值
  //'1' 表示默认展示，'2' 表示商品相关展示
    return httpInstance({
        url:'/home/banner', //这是获取分类头部信息的接口
        params:{
          distributionSite
        }
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

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}