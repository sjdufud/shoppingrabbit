<script setup>

import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'

//触发获取导航列表的action

import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore =useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>

<template>
  <div>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
 <LayoutFixed/>
  </div>
  
</template>
