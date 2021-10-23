import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      showHeader: true
    },
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
    path: '/videos',
    name: 'Video',
    meta: {
      showHeader: true
    },

    component: () => import('../views/Videos.vue')
  },

  {
    path: '/userVideos',
    name: 'Video',
    meta: {
      showHeader: false,
      userDash: true,
    },

    component: () => import('../views/UserVideos.vue')
  },



  {
    path: '/videoView/:id',
    name: 'Video view',
    meta: {
      showHeader: true,

    },

    component: () => import('../views/VideoView.vue')
  },

  {
    path: '/userChannels',
    name: 'user channels',
    meta: {
      showHeader: false,
      userDash: true,
    },

    component: () => import('../views/UserChannels.vue')
  },

  {
    path: '/login',
    name: 'login',
    meta: {
      showHeader: false
    },

    component: () => import('../views/Login.vue')
  },


  {
    path: '/dashboard',
    name: 'User dashboard',
    meta: {
      showHeader: false,
      userDash: true,

    },

    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      showHeader: false
    },

    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
