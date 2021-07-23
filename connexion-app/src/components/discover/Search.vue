<template>
    <div class="container post-card">
        <div class="d-flex" style="flex-direction: column">
            <h2>Users</h2>
            <Account 
                v-for="a in this.$parent.$data.allUsers"
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
            
        }
    }
}
</script>