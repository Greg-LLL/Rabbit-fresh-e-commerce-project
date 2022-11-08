<template>
<div class="container">
    <!-- 修改数据，测试是否持久化 -->
    App {{$store.state.user.profile.account}}
    <button @click="$store.commit('user/setUser',{account:'zhousg'})">设置用户信息</button>
  </div>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
