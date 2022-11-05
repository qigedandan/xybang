import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import login from '../components/login.vue'
import Home from '../components/Home.vue'
import Area from '../components/Area.vue'
import Article from '../components/Article.vue'
import Edit from '../components/Edit.vue'

const routes = [
    {
        path: '/a',
        component: HelloWorld,
    },
    {
        path: '/b',
        component: login,
    },
    {
        path: '/',
        component: Home,
    },
    
    {
        path: '/area/:id',
        component: Area,
    },
    {
        path: '/article',
        component: Article,
    },
    {
        path: '/edit',
        component: Edit,
    }

]

const router = new createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router