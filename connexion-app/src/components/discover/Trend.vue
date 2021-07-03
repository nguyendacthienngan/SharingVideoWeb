<template>
    <div>
        <DiscoveryHashtag title="Trending"></DiscoveryHashtag>
        <div class="card-body">
            <Post></Post>
        </div>
    </div>
    
</template>

<script>
import Post from '../home/Post.vue'
import DiscoveryHashtag from './DiscoveryHashtag.vue'
export default {
    components: {
        Post,
        DiscoveryHashtag
    }
}
</script>