import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Settings from '../views/sys/Settings.vue'
import Roles from '../views/sys/Roles.vue'
import Lists from '../views/sys/Lists.vue'
import Dictionaries from '../views/sys/Dictionaries.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/userCenter',
        name: 'UserCenter',
        component: () => import('../views/UserCenter.vue')
      },
      {
        path: 'sys/settings',
        name: 'Settings',
        component: Settings
      },
      {
        path: 'sys/roles',
        name: 'Roles',
        component: Roles
      },
      {
        path: 'sys/lists',
        name: 'Lists',
        component: Lists
      },
      {
        path: 'sys/dictionaries',
        name: 'Dictionaries',
        component: Dictionaries
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
