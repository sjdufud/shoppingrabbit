//封装购物车模块

import{defineStore}from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'
export const useCartStore=defineStore('cart',()=>{
    // 1.定义state-cartlist
    const cartList=ref([])
    //2.定义action-addcart
    const addCart=(goods)=>{
        //添加购物车功能
        //已添加过 --count+1
        //没有添加直接push
        //思路：通过匹配传递过来的商品对象中的skuId能不能在cartlist中找到，找到了就是添加过
          const item = cartList.value.find((item)=>goods.skuId===item.skuId)

          if(item){
            item.count += goods.count
          }else{
            cartList.value.push(goods)
          }
    }
  //删除购物车

    const delCart=(skuId)=>{
      //思路：1.找到要删除的下标值 - splice 法通过删除或替换现有元素，或者添加新元素来修改数组。
      //2.使用数组过滤方法 -filter 方法创建一个新数组，包含通过测试函数的所有元素。筛选符合条件的元素
      //3.findIndex() 方法返回数组中满足测试函数的第一个元素的索引。如果没有找到则返回 -1。
      const idx=cartList.value.findIndex((item)=>skuId===item.skuId)
      cartList.value.splice(idx,1)
      //使用filter
      // cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
    }
    //单选功能
    const singleCheck=(skuId,selected)=>{
      // 通过skuid找到要修改的那一项，然后把它的selected修改为传过来的selected
      const item = cartList.value.find((item)=>item.skuId===skuId)
      item.selected=selected

    }
    //全选功能
    const allCheck=(selected)=>{
      //把cartlist中的每一项的selected都设置为当前的选项
      cartList.value.forEach(item=>item.selected=selected)
    }
    //计算属性
    //1.总的数量
    //accumulator: 累积器，累积回调的返回值
    // currentValue: 当前处理的元素
    // reduce:用于将数组元素累积计算为一个单一的值 (a,c)=>a+c.count累计方法。0：起始值
    const allCount=computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    //2.总价
    const allPrice=computed(()=>cartList.value.reduce((a,c)=>a+c.price*c.count,0))
    //是否全选
    const isAll=computed(()=>cartList.value.every((item)=>item.selected))
    //3.已选择数量
    const selectedCount =computed(()=>cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count,0))
   //4.已选择商品合计
    const selectedPrice =computed(()=>cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count*c.price,0))
    return{

        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice

    }
    
},{

    persist:true

})