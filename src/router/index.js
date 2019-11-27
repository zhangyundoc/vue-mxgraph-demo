import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('../views/mxGraph/index.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
