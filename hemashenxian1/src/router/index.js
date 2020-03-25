import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import car from '../views/car.vue'
import fenlei from '../views/fenlei.vue'
import mine from '../views/mine.vue'
import shouye from '../views/shouye.vue'
import tongyong from '../views/tongyong.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/car',
    name: 'car',
    component: car
  },
  {
    path: '/fenlei',
    name: 'fenlei',
    component: fenlei
  },
  {
    path: '/mine',
    name: 'mine',
    component:mine
  },
  {
    path: '/shouye',
    name: 'shouye',
    component: shouye
  },
  {
    path: '/tongyong/:id',
    name: 'tongyong',
    component: tongyong
  },
]

const router = new VueRouter({
  routes
})

export default router
