import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Reader from '../components/Reader.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/book/:id', component: Detail },
  { path: '/read/:bookId/:chapterId', component: Reader, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
