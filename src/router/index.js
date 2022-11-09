import { createRouter, createWebHashHistory } from 'vue-router'
import TopCategory from '@/views/category'
import SubCategory from '@/views/category/sub'
const Layout = () => import('@/views/LayoutView')
const Home = () => import('@/views/home')

// 路由规则
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path:'/category:id',
        component:TopCategory
      },
      {
        path:'/category/sub:id',
        component:SubCategory
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
