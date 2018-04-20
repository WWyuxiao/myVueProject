import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'

// 定义路由插件
Vue.use(VueRouter)

// 定义ajax获取数据的插件Resource
Vue.use(VueResource)

const routes = [
  { path: '/goods',
    component: goods
  },
  { path: '/ratings',
    component: ratings
  },
  { path: '/seller',
    component: seller
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: routes
})
export default router
