<template >
    <div v-if="filename !=='Logo.png'" class="text-center nav-component hide-for-small-screen align-self-center">
        <div >
            <img :src="require(`../assets/images/${filename}`)" width="41px" height="41px" />
        </div>
        <div class="">
           {{text}}
        </div>
    </div>
    <div v-else class="text-center nav-component align-self-center">
        <div >
            <img :src="require(`../assets/images/${filename}`)" width="80px" height="83px" id="logo"/>
        </div>
        <div class="">
           {{text}}
        </div>
    </div>
</template>
<script>
export default {
    props: ['filename', 'text', 'is_active']

}
</script>
<style>
    
</style>