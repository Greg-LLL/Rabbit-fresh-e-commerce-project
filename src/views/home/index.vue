<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />

        <!-- 轮播图 -->
        <HomeBanner/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from "@/views/home/components/home-category.vue"
import HomeBanner from './components/home-banner.vue'
export default {
  name: 'HomePage',
  components:{
    HomeCategory,
    HomeBanner,
  }

}
</script>

<style lang="less" scoped>
.container{
    color: @xtxColor;
}
</style>>


