import Vue from 'vue'
import VueRouter from 'vue-router'
import Editing from './views/Editing.vue'
import Home from './views/Home.vue'
import Comment from './views/Comment.vue'
import Search from './components/discover/Search.vue'
import Posts from './components/home/Posts.vue'
import Trending from './components/discover/Trending.vue'
import UploadVideo from './views/UploadVideo.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '/', 
            component: Home,
            redirect: '/post',
            children: [
                {path: '/search', component: Search },
                {path: '/post', component: Posts },
                {path: '/trending', component: Trending}
            ]
        },
        {path: '/editing', component: Editing},
        {path: '/comment', component: Comment},
        {path: '/upload', component: UploadVideo}
    ]
})