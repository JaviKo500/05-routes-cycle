import AboutPage from '@/modules/pokemon/pages/AboutPage'
import ListPage from '@/modules/pokemon/pages/ListPage'
import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
import NotPageFound from '@/modules/shared/pages/NotPageFound'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: ListPage },
    { path: '/about', component: AboutPage },
    { path: '/id', component: PokemonPage },
    { path: '/:pathMatch(.*)*', component: NotPageFound }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})



export default router;
