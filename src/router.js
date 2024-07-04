import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/Home-page.vue'
import AboutPage from './components/About-page.vue'
import IndexBlue from './components/Index-blue.vue'
import IndexPink from './components/Index-pink.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/home1', component: IndexBlue },
    { path: '/home2', component: IndexPink }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router