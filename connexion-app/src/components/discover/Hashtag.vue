<template>
     <div class="discover-tag">
        <span class="fa fa-hashtag"></span>
        {{ hashtag_name }}
    </div>
</template>
<script>
export default {
    props: ['hashtag_name', 'hashtag_icon']
}
</script>
<style>
.discover-tag{
    border-radius: 50px;
    border: 1px solid #c4c4c499;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    margin-right: 5px;
}
</style>