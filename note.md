![1762238495393](image/note/1762238495393.png)

![1762246008007](image/note/1762246008007.png)

![1762259550505](image/note/1762259550505.png)

# Home-整体结构拆分和分类实现

## 1.页面结构 拆分

![1762329857884](image/note/1762329857884.png)

## 2.轮播图实现

![1762334281839](image/note/1762334281839.png)

## 3.版面组件安装

![1762336334272](image/note/1762336334272.png)

![1762336429998](image/note/1762336429998.png)

![1762337208132](image/note/1762337208132.png)

## 4.新鲜好物业务实现

## 5.图片懒加载

![1762408140306](image/note/1762408140306.png)

![1762410215995](image/note/1762410215995.png)

![1762417060235](image/note/1762417060235.png)

## 6.懒加载的优化

![1762424463764](image/note/1762424463764.png)

![1762424525285](image/note/1762424525285.png)

## 7.PRODUCT产品列表

![1762424980150](image/note/1762424980150.png)

## 8.封装GoodsItems组件

![1762426615141](image/note/1762426615141.png)

goodsitem属于纯展示类组件，这类组件的封装思路是：抽象Props参数，传入什么就显示什么

## 9.一级分类显示

![1762441577216](image/note/1762441577216.png)

![1762441619534](image/note/1762441619534.png)

## 10.面包屑导航渲染

![1762442023516](image/note/1762442023516.png)

封装接口函数：位置为query，就用params![1762444773612](image/note/1762444773612.png)

调用接口获取数据

![1762444822803](image/note/1762444822803.png)

渲染

![1762444865398](image/note/1762444865398.png)

## 11.分类轮播图实现

![1762444970507](image/note/1762444970507.png)

![1762445545679](image/note/1762445545679.png)

### **1.改造接口**

![1762447518695](image/note/1762447518695.png)

## 2.迁移

![1762447690387](image/note/1762447690387.png)

![1762447708540](image/note/1762447708540.png)

## 12.激活状态显示和分类列表

![1762479884218](image/note/1762479884218.png)

active-class固定属性名，激活出现类名样式

![1762480185313](image/note/1762480185313.png)

## 13.路由缓存问题

![1762482626172](image/note/1762482626172.png)

### 方法一：

![1762482651370](image/note/1762482651370.png)

![1762482701109](image/note/1762482701109.png)

在index.vue中

![1762482799215](image/note/1762482799215.png)

问题：频繁销毁重建开销太大

### 方案2：![1762482945362](image/note/1762482945362.png)

![1762483532090](image/note/1762483532090.png)

如果穿了参数（to），那么就走getCategory（to.params.id),如果没传参数，则走默认id=route.params.id

![1762483920656](image/note/1762483920656.png)

## 14.使用逻辑函数来拆分业务

![1762495124423](image/note/1762495124423.png)

### 实现步骤：

####  1.按照业务声明以 `use`开头的逻辑函数

见步骤2

#### 2.把独立的业务逻辑封装在各个函数内部

![1762495652846](image/note/1762495652846.png)

#### 3.函数内部把组件中需要的数据或方法retrun出去

代码上下衔接

![1762495755549](image/note/1762495755549.png)

#### 4.在组件中调用把数据或者方法组合回来使用

![1762496592731](image/note/1762496592731.png)

![1762496791621](image/note/1762496791621.png)

# DAY4-二级分类-

## 1.整体认识和路由配置

![1762497024985](image/note/1762497024985.png)


![1762497611075](image/note/1762497611075.png)

## 2.面包屑导航实现

![1762499142777](image/note/1762499142777.png)

## 3.基础商品列表实现

![1762501536350](image/note/1762501536350.png)

 get post 的区别


### **GET 请求（原方式）**

```
// GET - 参数在URL中
export const getCategoryAPI = (id) => {
  return request({
    url: `/category/goods/temporary?id=${id}`,  // 参数在URL中
    method: 'GET'
  })
}

// 或者使用 params
export const getCategoryAPI = (id) => {
  return request({
    url: '/category/goods/temporary',
    method: 'GET',
    params: { id }  // GET参数在这里
  })
}
```

### **POST 请求（新方式）**

```
// POST - 参数在请求体中
export const getSubCategoryAPI = (data) => {
  return request({
    url: '/category/goods/temporary',  // ⭐ URL不变
    method: 'POST',
    data: data  // POST参数在这里
  })
}
```


## 📝 调用方式的差异

### **GET 调用方式**

```
// 通常传递单个ID或简单参数
const res = await getCategoryAPI(route.params.id)
// 或者
const res = await getCategoryAPI({ id: 123 })
```

### **POST 调用方式**

```
// 需要传递对象格式的data
const res = await getSubCategoryAPI({
  id: route.params.id,
  page: 1,
  pageSize: 20,
  sort: 'price'
  // 可以传递更复杂的参数
})
```


## GET vs POST URL 对比示例

```
// 调用
const res = await getCategoryAPI({
  categoryId: 123,
  page: 1,
  pageSize: 20,
  sort: 'price',
  brand: 'apple,samsung,huawei',
  priceRange: '1000-5000',
  attributes: 'color:red,size:large'
})// 实际请求的 URL 会变成：
/category/goods/temporary?
  categoryId=123&
  page=1&
  pageSize=20&
  sort=price&
  brand=apple,samsung,huawei&
  priceRange=1000-5000&
  attributes=color:red,size:large// ⭐ URL 变得很长且复杂！
```


### **POST 请求 - URL 简洁**


```
// 调用同样的参数
const res = await getSubCategoryAPI({
  categoryId: 123,
  page: 1,
  pageSize: 20,
  sort: 'price',
  brand: 'apple,samsung,huawei',
  priceRange: '1000-5000',
  attributes: 'color:red,size:large'
})// 实际请求的 URL 仍然是：
/category/goods/temporary// ⭐ 参数在请求体中，URL 保持简洁
```

核心代码

![1762507785171](image/note/1762507785171.png)

![1762507820151](image/note/1762507820151.png)

![1762507839344](image/note/1762507839344.png)

## **4.添加筛选参数实现筛选功能**


![1762508219044](image/note/1762508219044.png)

核心代码：

![1762509531538](image/note/1762509531538.png)

![1762509562208](image/note/1762509562208.png)

el-tabs标签功能：激活对应事件其 name的值被赋值给v-model

## 5.列表无限加载实现

![1762514801190](image/note/1762514801190.png)


数组展开

```
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]// 合并数组
const combined = [...arr1, ...arr2]  // [1, 2, 3, 4, 5, 6]// 相当于
const combinedOld = arr1.concat(arr2)
```


核心代码：

![1762525631994](image/note/1762525631994.png)

![1762525690000](image/note/1762525690000.png)

## 6.定制路由滚动行为

![1762526295565](image/note/1762526295565.png)

## 7.详情页与路由配置

![1762526958165](image/note/1762526958165.png)

### 路由配置

![1762527094169](image/note/1762527094169.png)

![1762528641809](image/note/1762528641809.png)

![1762528683948](image/note/1762528683948.png)

## 8.基础数据渲染

![1762528756274](image/note/1762528756274.png)

![1762533313651](image/note/1762533313651.png)

![1762533332227](image/note/1762533332227.png)

## 9.详情页-热榜区-基础组件封装和数据渲染

![1762533500260](image/note/1762533500260.png)

## 10.详情页-热榜区-适配不同title和数据列表

![1762535986827](image/note/1762535986827.png)
