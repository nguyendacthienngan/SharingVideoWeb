<template>
    <div>
           <h2>{{title}}</h2>
            <Hashtag></Hashtag>
    </div>
</template>
<script>
import Hashtag from './Hashtag.vue'

export default {
    components: {
        Hashtag
    },
    props: ['title']
}
</script>