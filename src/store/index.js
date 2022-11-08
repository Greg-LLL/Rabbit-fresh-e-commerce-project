import { createStore } from 'vuex'
// 引入持久化插件
import createPersistedstate from 'vuex-persistedstate'

import cat from './modules/cat'
import category from './modules/category'
import user from './modules/user'

export default createStore({
  modules: {
    cat,
    category,
    user
  },
  // 配置插件
  plugins: [createPersistedstate({
    // 本地存储的名字
    key: 'eRabbit-client-pc-124-store',
    // 指定需要存储的模块
    paths: ['user', 'cart']
  })]
})
