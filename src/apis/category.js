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