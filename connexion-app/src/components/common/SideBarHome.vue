<template>
    <div class="side-bar-home p-l-15">
        <div class="filter-buttons">
            <div class="filter-button-component">
                <img src="../../assets/images/Home-Icon.svg" class="m-r-15">
                <b>For you</b>
            </div>
            <div class="filter-button-component">
                <img src="../../assets/images/Users-Icon.svg" class="m-r-15" width="26px" height="26px">
                <b>Following</b>
            </div>
        </div>
        <div class="suggested-accounts">
            <Accounts title="Suggested Accounts:"></Accounts>
        </div>
        <div class="top-accounts">
            <Accounts title="Your Top Accounts:"></Accounts>
        </div>
    </div>
</template>
<script>
import Accounts from '../home/Accounts.vue'
export default {
    components: {
        Accounts
    },
}
</script>

<style src="../../assets/styles/sidebar-home.css">
</style>