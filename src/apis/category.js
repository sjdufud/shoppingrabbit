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
/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
  return request({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}


/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}

// POST请求默认不缓存，确保每次都是最新的筛选结果
// GET请求会被浏览器缓存，可能导致筛选结果不更新
// 从接口路径 /category/goods/temporary 来看：

// 是创建临时分类视图
// 或者生成临时的商品筛选结果
// 这属于创建操作，符合POST的语义
// POST可以发送大量复杂数据
// 如果用GET，URL会变得非常长且难以维护
// GET /category/goods/temporary?categoryPath=大家电&categoryPath=空调...
// POST数据在请求体中，更安全