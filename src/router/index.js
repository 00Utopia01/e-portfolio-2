import { createRouter, createWebHashHistory } from 'vue-router'
import Entry from '../views/Entry.vue'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'entry',
    component: Entry
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
