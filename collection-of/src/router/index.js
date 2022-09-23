import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopicView from '../views/TopicView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: HomeView
}, {
    path: '/:topic',
    component: TopicView
}]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router