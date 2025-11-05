<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
  </div>
    <HomeNew />
    <HomeHot />
    <homeProduct />
    <home-panel title="新鲜好物" sub-title="新鲜好物 好多商品">
        <div>
            我是新鲜好物的插槽内容
        </div>
    </home-panel>
    <home-panel title="人气推荐" sub-title="人气适配 好多商品">
        <div>
            我是人气推荐的插槽内容
        </div>
    </home-panel>
  </div>

 
</template>