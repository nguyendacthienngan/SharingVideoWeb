import Vue from 'vue'
import VueRouter from 'vue-router'
import Editing from './views/Editing.vue'
import Home from './views/Home.vue'
import Comment from './views/Comment.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/editing', component: Editing},
        {path: '/comment', component: Comment}
    ]
})