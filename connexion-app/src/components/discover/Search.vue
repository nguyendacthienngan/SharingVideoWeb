<template>
    <div class="container post-card">
        <div class="d-flex" style="flex-direction: column">
            <h2>Users</h2>
            <Account 
                v-for="a in this.searchResult"
                :key="a.id" :name="a.name" 
                :username="a.username" 
                :caption="a.caption" 
                :bg_music="a.bg_music"
                :avatar_img="a.avatar_img"
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
            id: this.$route.params.id, //this is the id from the browser,
            searchResult: []
        }
    },
    methods: {
        search(){
            let allUsers = this.$parent.$data.allUsers;
            if(this.id)
            {
                let user = allUsers[this.id - 1]
                let username = user.username
                this.searchResult = allUsers.filter(u => u.username.includes(username)) 
                if ( this.searchResult.length == 0)
                    this.searchResult = allUsers
            }
            else 
                this.searchResult = allUsers
           
        }
    },
    mounted(){
        this.$nextTick(() =>{
           this.search()
        })
    }
}
</script>