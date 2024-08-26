import { createRouter, createWebHashHistory } from 'vue-router'
import Entry from '../views/Entry.vue'

const routes = [
  {
    path: '/',
    name: 'entry',
    component: Entry
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
