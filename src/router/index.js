import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import NotFound from '@/views/NotFound'
import store from '../store'
import DetailRecord from '../views/DetailRecord'

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            layout: 'main',
            auth: true
        }
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () =>
            import ('../views/Auth.vue'),
        meta: {
            layout: 'auth'
        }
    },
    {
        path: '/planing',
        name: 'planing',
        component: () =>
            import ('../views/Planing.vue'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/history',
        name: 'history',
        component: () =>
            import ('../views/History.vue'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/record',
        name: 'record',
        component: () =>
            import ('../views/Record.vue'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/detail/:detailId',
        name: 'detail',
        component: DetailRecord,
        meta: {
            layout: 'main'
        },
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'uk-active',
    linkExactActiveClass: 'uk-active',
})

router.beforeEach((to, from, next) => {
    const requireAuth = to.meta.auth
    if (requireAuth && store.getters['auth/isAuthenticated']) {
        next()
    } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
        next('/auth?message=auth')
    } else {
        next()
    }
})

export default router