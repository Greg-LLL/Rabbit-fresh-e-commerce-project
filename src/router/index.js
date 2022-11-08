import { createRouter, createWebHashHistory } from 'vue-router'
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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
