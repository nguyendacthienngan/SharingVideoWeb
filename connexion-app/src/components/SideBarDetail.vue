<template >
    <div v-if="filename !=='Logo.png'" class="text-center nav-component p-30">
        <div id="logo">
            <img :src="require(`../assets/images/${filename}`)" width="41px" height="41px" />
        </div>
        <div class="">
           {{text}}
        </div>
    </div>
    <div v-else class="text-center nav-component p-20">
        <div id="logo">
            <img :src="require(`../assets/images/${filename}`)" width="80px" height="83px" />
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
    .nav-component{
        border-bottom: 1px solid rgba(196, 196, 196,60);
        border-right: 1px solid rgba(196, 196, 196,60);
    }
    .p-30{
        padding: 30px;
    }
    .p-20{
        padding: 30px;
    }
</style>