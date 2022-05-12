import { createRouter, createWebHashHistory } from 'vue-router'
import ColoursView from '../views/ColoursView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ColoursView,
        },
        {
            path: '/fonts',
            name: 'fonts',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/FontView.vue'),
        },
        {
            path: '/form-elements',
            name: 'form-elements',
            component: () => import('../views/FormElementsView.vue'),
        },
        {
            path: '/buttons',
            name: 'buttons',
            component: () => import('../views/ButtonView.vue'),
        },
        {
            path: '/headings',
            name: 'headings',
            component: () => import('../views/HeadingView.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/DashboardView.vue'),
        },
    ],
})

export default router
