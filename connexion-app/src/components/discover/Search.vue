<template>
    <div class="container post-card">
        <div class="d-flex" style="flex-direction: column">
            <h2>Users</h2>
            <Account></Account>
            <Account></Account>
            <Account></Account>
            <Account></Account>
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
    }
}
</script>