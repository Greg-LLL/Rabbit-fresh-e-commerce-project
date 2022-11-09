<template>
  
  
  <!-- 顶部通栏 -->
  <AppTopnav />
  <!-- 头部组件 -->
  <AppHeader/>
  <!-- 内容容器 -->
  <div class="main">
      <router-view/>
  </div>
  <!-- 底部组件 -->
  <AppFooter />
</template>

<script>
import AppTopnav from "@/components/app-topnav.vue"
import AppHeader from '@/components/app-header.vue'
import AppFooter from "@/components/app-footer.vue"
import { useStore } from 'vuex'
export default {
  name: 'LayoutView',
  components:{
    AppTopnav,
    AppHeader,
    AppFooter
    },
  setup(){
    // 获取下分类数据
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>

</style>>
