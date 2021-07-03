<template>
    <div class="d-flex" style="flex-direction: column">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
    </div>
</template>
<script>
import Post from './Post.vue'
export default {
    components: {
        Post
    }
}
</script>