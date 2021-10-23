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
    path: '/videoView/:id',
    name: 'Video view',
    meta: {
      showHeader: true,

    },

    component: () => import('../views/VideoView.vue')
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
  },

  {
    path: '/videos',
    name: 'Video',
    meta: {
      showHeader: true
    },

    component: () => import('../views/Videos.vue')
  },

  //user routes
  {
    path: '/userVideos',
    name: 'Video',
    meta: {
      showHeader: false,
      userDash: true,
    },

    component: () => import('../views/user/UserVideos.vue')
  },


  {
    path: '/watchHistory',
    name: 'watch',
    meta: {
      showHeader: false,
      userDash: true,
    },
    component: () => import('../views/user/WatchHistory.vue')
  },
  {
    path: '/userChannels',
    name: 'user channels',
    meta: {
      showHeader: false,
      userDash: true,
    },

    component: () => import('../views/user/UserChannels.vue')
  },

  {
    path: '/userProfile',
    name: 'user profile',
    meta: {
      showHeader: false,
      userDash: true,
    },
    component: () => import('../views/user/UserProfile.vue')
  },

  //creator route

  {
    path: '/content',
    name: 'content',
    meta: {
      showHeader: false,
      creatorDash: true,
    },
    component: () => import('../views/content/Content.vue')
  },





]

const router = new VueRouter({
  routes
})

export default router
