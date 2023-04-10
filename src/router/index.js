import VueRouter from "vue-router";
import principalpage from "@/components/pages/principalpage.vue";
import homepage from "@/components/homepage.vue";
import login from "@/components/login.vue";

let getcooike;
const routes = [
    {
        path: '/login',
        name:'login',
        component: login,
    },
    {
        path: '/',
        redirect:'/login',
    },
    {
        path: '/homepage',
        name: 'homepage',
        component: homepage,
        children: [
            {
                path: '',
                name: 'PrincipalPage',
                component: principalpage,
            },
            {
                path: '/homepage/singlistpage',
                name: 'singlistpage',
                component: () => import('@/components/pages/singlistpage.vue')
            },
            {
                path:'/homepage/userhome',
                name:'userhome',
                component: ()=>import('@/components/pages/userhome.vue')
            },
            {
                path: '/homepage/artistdetails',
                name: 'artistdetails',
                component:()=>import('@/components/pages/artistdetails.vue')
            },
            {
                path: '/homepage/hotartists',
                name: 'hotartists',
                component: () => import('@/components/pages/hotartists.vue')
            },
            {
                path: '/homepage/search',
                name: 'search',
                component: ()=>import('@/components/pages/search.vue')
            },
            {
                path:'/homepage/userhome',
                name: "userhome",
                component: ()=>import('@/components/pages/userhome.vue')
            },
            {
                path:'/homepage/songpages',
                name: "songpages",
                component: ()=>import('@/components/pages/songpages.vue')
            }
        ]
    },

]

const router = new VueRouter({
    routes,

});




export default router
