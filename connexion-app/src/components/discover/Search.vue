<template>
    <div class="container post-card">
        <div class="d-flex" style="flex-direction: column">
            <h2>Users</h2>
            <Account 
                v-for="a in allUsers"
                :key="a.id" :name="a.name" 
                :username="a.username" 
                :caption="a.caption" 
                :bg_music="a.bg_music"
            >
                
            </Account>
        </div>
        <DiscoveryHashtag title="Discovery"></DiscoveryHashtag>
        <div class="card-body">
            <Post></Post>
        </div>

        <DiscoveryHashtag title="Discovery"></DiscoveryHashtag>
        <div class="card-body">
            <Post></Post>
        </div>
    </div>
    
</template>
<script>
import Account from './Account.vue'
import Post from '../home/Post.vue'
import DiscoveryHashtag from './DiscoveryHashtag.vue'
export default {
    components: {
        Account,
        Post,
        DiscoveryHashtag
    },
    data(){
        return{
            allUsers: [
                {
                   id: "1",
                   name: "INTO1–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Frog"
               },
               {
                   id: "2",
                   name: "INTO1–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Dog"
               },
               {
                   id: "3",
                   name: "INTO1–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Pig"
               },
               {
                   id: "4",
                   name: "INT01–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "5",
                   name: "INT01–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "6",
                   name: "INT06–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "7",
                   name: "INT07–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Bear"
               },
               {
                   id: "INTO8–刘宇",
                   name: "INT08–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Plant"
               }
            ]
        }
    }
}
</script>