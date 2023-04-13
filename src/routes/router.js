import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage') 
            },
            { 
                path: 'about', 
                name: 'pokemon-about', 
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
            },
            { 
                path: 'pokemonid', 
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    console.log(route)
                    const id = Number(route.query.id);
                    return isNaN( id ) 
                        ? { id:1 } 
                        : {
                            id
                        }
                }
            },
            {
                path: '',
                redirect: {
                    name: 'pokemon-about'
                }
            },
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () => import( /* webpackChunkName: "DBZLayout" */ '@/modules/dbz/layouts/DragonBallZLayout' ),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "DBZCharacter" */ '@/modules/dbz/pages/Characters'),
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "DBZAbout" */ '@/modules/dbz/pages/About'),
            },
            {
                path: '',
                redirect: {
                    name: 'dbz-characters'
                }
            },
        ]
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NotPageFound" */ '@/modules/shared/pages/NotPageFound'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})



export default router;
