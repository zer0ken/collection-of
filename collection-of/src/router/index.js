import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: HomeView
}, {
    path: '/topic/:topic',
    component: () => import( '../views/TopicView.vue')
}]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router