<template>
    <div class="d-flex" style="margin-top: 12px">
        <img :src="require(`../../assets/images/into1/${avatar_img}`)" width="51px" height="51px"  class="m-r-15" />
        <div>
        <div class="d-none d-lg-block">
            <b>{{name}} </b>
            <br>
            {{username}}
        </div>
        
        </div>
    </div>
</template>
<script>

export default {
    props:['name','username','avatar_img']
}
</script>
