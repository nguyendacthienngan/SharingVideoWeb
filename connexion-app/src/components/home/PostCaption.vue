<template>
    <div class="d-flex">
        <div class="avatar">
            <img src="../../assets/images/Account.png" width="41px" height="41px">
        </div>
        <div>
            <div class="row">
                <div class="col-11">
                    <b>{{name}}</b>  <span style="color: #c4c4c4">{{username}}</span> 
                    <br>
                    {{caption}}
                    <br>
                    <span class="fa fa-music m-r-10"></span> <b>{{bg_music}}</b>
                    
                </div>
                <div class="col-1">

                </div>
                <button class="btn btn-danger btn-follow" >
                    Follow
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['name', 'username', 'caption', 'bg_music', 'image']
}
</script>
<style src="../../assets/styles/post-caption.css">

</style>