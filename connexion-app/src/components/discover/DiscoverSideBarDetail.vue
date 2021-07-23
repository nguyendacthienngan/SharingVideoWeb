<template>
    <router-link :to="'/trending/'+this.id">
        <div class="discover-tag">
            <span v-if="icon=='fa-hashtag'" class="fa fa-hashtag"></span>
            <span v-if="icon=='fa-search'" class="fa fa-search"></span>
            <span v-if="icon=='fa-music'" class="fa fa-music"></span>
            {{name}}
        </div>
    </router-link>
    
</template>

<script>
export default {
    props:['id','name','icon']
}
</script>
