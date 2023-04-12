import VueRouter from "vue-router";
import principalpage from "@/components/pages/principalpage.vue";
import homepage from "@/components/homepage.vue";
import login from "@/components/login.vue";

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
            },
            {
                path:'/homepage/hottopic',
                name: "listennumb",
                component: ()=>import('@/components/pages/hottopic.vue')
            },
            {
                path:'/homepage/buyzhuanji',
                name: "buyzhuanji",
                component: ()=>import('@/components/pages/buyzhuanji.vue')
            },
            {
                path:'/homepage/zhuanjipage',
                name: "zhuanjipage",
                component: ()=>import('@/components/pages/zhuanjipage.vue')
            }
        ]
    },

]

const router = new VueRouter({
    routes,

});

// router.beforeEach((to, from, next) => {
//   if(localStorage.getItem('usermasg')!==null && localStorage.getItem('usermasgcookie')!==null) {
//
//   }
//   else {
//       to.path === '/login';
//   }
// })


export default router
