<template>
    <div class="container">
        <br>
        <div class="d-none d-lg-block">
            {{title}}
        </div>
        <Account 
            v-for="a in this.suggestedAccounts"
            :key="a.id" :name="a.name" 
            :username="a.username" 
            :avatar_img="a.avatar_img"
        ></Account>
        
    </div>
</template>
<script>
import Account from '../home/Account.vue'
export default {
    props:['title','suggestedAccounts'],
    components: {
        Account
    }
}
</script>