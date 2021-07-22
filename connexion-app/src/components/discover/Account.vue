<template>
    <div class="card non-border">
        <div class="card-header container bg-white non-border">
            <PostCaption :name="name" :username="username" :caption="caption"></PostCaption>
        </div>
    </div>
</template>
<script>
import PostCaption from '../home/PostCaption.vue'
export default {
    components:{
        PostCaption
    },
    props:['name', 'username', 'caption', 'bg_music']
}
</script>