import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'

let  home = () => import(/* webpackChunkName: "home" */ "./home");

Vue.use(VueRouter)


const router = new VueRouter({
    routes:[{
        path: '/home', component: home
    },{
        path:'*',redirect:'/home'
    }]
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
