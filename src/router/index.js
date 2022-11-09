import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Area from '../components/Area.vue'
import Article from '../components/Article.vue'
import Edit from '../components/Edit.vue'
import Center from '../components/Center.vue'

import Particle from '../center/Particle.vue'
import Pattention from '../center/Pattention.vue'
import Pcollection from '../center/Pcollection.vue'
import Pdata from '../center/Pdata.vue'
import Information from '../components/Information.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/Information',
        component: Information,
    },
    {
        path: '/area/:id',
        component: Area,
    },
    {
        path: '/article/:id',
        component: Article,
    },
    {
        path: '/edit',
        component: Edit,
    },
    {
        path:'/center',
        component: Center,
        children: [
            {
                path: '',
                component: Particle,
            },
            {
                path: 'attention',
                component: Pattention,
            },
            {
                path: 'collection',
                component: Pcollection,
            },
            {
                path: 'data',
                component: Pdata,
            },
        ]
    }

]

const router = new createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router