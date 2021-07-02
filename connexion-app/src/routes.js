import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './views/Editing.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About}
    ]
})