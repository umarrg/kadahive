import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/index";
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    requiresAuth: false,
    meta: {
      showHeader: true
    },
  },
  {
    path: '/videoView/:id',
    name: 'Video view',
    requiresAuth: false,
    meta: {
      showHeader: true,

    },

    component: () => import('../views/VideoView.vue')
  },



  {
    path: '/login',
    name: 'login',
    meta: {
      showHeader: false,
      requiresAuth: false,
    },

    component: () => import('../views/Login.vue')
  },


  {
    path: '/dashboard',
    name: 'User dashboard',
    meta: {
      showHeader: false,
      userDash: true,
      requiresAuth: false,

    },

    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      showHeader: false,
      requiresAuth: false,
    },

    component: () => import('../views/Register.vue')
  },

  {
    path: '/videos',
    name: 'Video',
    meta: {
      showHeader: true,
      requiresAuth: false,
    },

    component: () => import('../views/Videos.vue')
  },

  {
    path: '/wallet',
    name: 'Wallet',
    meta: {
      showHeader: true,
      userDash: true,
      requiresAuth: false,
    },

    component: () => import('../views/wallet.vue')
  },

  //user routes
  {
    path: '/userVideos',
    name: 'Video',
    meta: {
      showHeader: false,
      userDash: true,
      requiresAuth: true,
    },

    component: () => import('../views/user/UserVideos.vue')
  },


  {
    path: '/watchHistory',
    name: 'watch',
    meta: {
      showHeader: false,
      userDash: true,
      requiresAuth: true,
    },
    component: () => import('../views/user/WatchHistory.vue')
  },
  {
    path: '/userChannels',
    name: 'user channels',
    meta: {
      showHeader: false,
      userDash: true,
      requiresAuth: true,
    },

    component: () => import('../views/user/UserChannels.vue')
  },

  {
    path: '/userProfile',
    name: 'user profile',
    meta: {
      showHeader: false,
      userDash: true,
      requiresAuth: true,
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
      requiresAuth: true,
    },
    component: () => import('../views/content/Content.vue')
  },

  {
    path: '/creatorProfile',
    name: 'creator profile',
    meta: {
      showHeader: false,
      creatorDash: true,
      requiresAuth: true,
    },
    component: () => import('../views/user/UserProfile.vue')
  },



]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !store.state.user) {
    next("/login");
  } else {
    next();
  }
});

export default router
