<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />

        <!-- 轮播图 -->
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from "@/views/home/components/home-category.vue"
export default {
  name: 'HomePage',
  components:{
    HomeCategory,
  }

}
</script>

<style lang="less" scoped>
.container{
    height: 800px;
    .hoverShadow;
    color: @xtxColor;
}
</style>>


