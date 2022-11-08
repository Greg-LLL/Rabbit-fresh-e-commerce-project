<template>
  <AppTopnav />
  <!-- 顶部通栏 -->
  <nav>顶部通栏</nav>
  <!-- 头部组件 -->
  <header>头部组件</header>
  <!-- 内容容器 -->
  <div class="main">
      <router-view/>
  </div>
  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>

<script>
import AppTopnav from "@/components/app-topnav.vue"
export default {
  name: 'LayoutView',
  components:{AppTopnav}
}
</script>

<style lang="less" scoped>

</style>>
