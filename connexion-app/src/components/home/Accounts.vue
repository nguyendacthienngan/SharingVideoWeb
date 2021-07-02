<template>
    <div class="container">
                <br>
                <div class="d-none d-lg-block">
                {{title}}

                </div>
                <Account></Account>
                <Account></Account>
                <Account></Account>
                <Account></Account>
                
            </div>
</template>
<script>
import Account from '../home/Account.vue'
export default {
    props:['title'],
    components: {
        Account
    }
}
</script>