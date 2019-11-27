import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/flow',
        children: [
            {
                path: '/flow',
                name: 'flow',
                component: () => import('../views/mxGraph/index.vue')
            }
        ]
    },
    {
        path: '/flow',
        name: 'Flow',
        component: () => import('../views/mxGraph/index.vue')
    }
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
