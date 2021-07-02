import Vue from 'vue'
import VueRouter from 'vue-router'
import Editing from './views/Editing.vue'
import Home from './views/Home.vue'
import Comment from './views/Comment.vue'
import Search from './components/discover/Search.vue'
import Post from './components/home/Post.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '/', 
            component: Home,
            redirect: '/post',
            children: [
                {path: '/search', component: Search },
                {path: '/post', component: Post },
            ]
        },
        {path: '/editing', component: Editing},
        {path: '/comment', component: Comment}
    ]
})