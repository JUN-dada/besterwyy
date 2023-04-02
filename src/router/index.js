import VueRouter from "vue-router";
import principalpage from "@/components/pages/principalpage.vue";
import homepage from "@/components/homepage.vue";
import singlistpage from "@/components/pages/singlistpage.vue";
import newsingall from "@/components/pages/newsingall.vue";
import login from "@/components/login.vue";
import userhome from "@/components/pages/userhome.vue";
import artistdetails from "@/components/pages/artistdetails.vue";
import allbumnew from "@/components/pages/hotartists.vue";
import hotartists from "@/components/pages/hotartists.vue";

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
                component: singlistpage
            },
            {
                path: '/homepage/newsingall',
                name: 'newsingall',
                component: newsingall
            },
            {
                path:'/homepage/userhome',
                name:'userhome',
                component: userhome
            },
            {
                path: '/homepage/artistdetails',
                name: 'artistdetails',
                component:artistdetails
            },
            {
                path: '/homepage/hotartists',
                name: 'hotartists',
                component: hotartists
            }
        ]
    }
]

const router = new VueRouter({
    routes
});


export default router
