<template>
    <div class="card non-border">
        <div class="card-header container bg-white non-border">
            <AccountDetail  isPost=false :avatar_img="avatar_img" :name="name" :username="username" :caption="caption"></AccountDetail>
        </div>
    </div>
</template>
<script>
import AccountDetail from './AccountDetail.vue'
export default {
    components:{
        AccountDetail
    },
    props:['avatar_img','name', 'username', 'caption', 'bg_music']
}
</script>