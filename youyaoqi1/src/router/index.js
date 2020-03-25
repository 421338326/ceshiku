import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tongyong from '../views/tongyong.vue'
import yuedu from '../views/yuedu.vue'
import mine from '../views/mine.vue'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/yuedu',
    name: 'yuedu',
    component: yuedu
  },
  {
    path: '/mine',
    name: '/mine',
    component: mine
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
