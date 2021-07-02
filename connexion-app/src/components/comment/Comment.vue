<template>
    <div class="">
        <div class="d-flex">
            <div class="avatar">
                <img src="../../assets/images/Account.png" width="41px" height="41px">
                <br>
                <div class="text-center">
                    <img src="../../assets/images/CheckBox-Icon.svg">
                </div>
            </div>
            <div>
                <div class="row">
                    <div class="col-11">
                        <b>{{name}}</b> <span style="color: #c4c4c4">{{username}}</span> 
                        <br>
                        {{caption}}
                        <br>
                    </div>
                    <div class="col-1">
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
    
</template>

<script>
export default {
    props:['name', 'username', 'caption', 'image']
}
</script>
<style src="../../assets/styles/post-caption.css">

</style>
