<template>
    <div class="side-bar-home ">
        <div class="filter-buttons container">
            <div class="filter-button-component d-none d-lg-block">
                <img src="../../assets/images/Home-Icon.svg" class="m-r-15">
                <b>For you</b>
            </div>
            <div class="filter-button-component d-none d-lg-block">
                <img src="../../assets/images/Users-Icon.svg" class="m-r-15" width="26px" height="26px">
                <b>Following</b>
            </div>
            <div class="filter-button-component d-md-none">
                <img src="../../assets/images/Home-Icon.svg" class="m-r-15">
            </div>
            <div class="filter-button-component d-md-none">
                <img src="../../assets/images/Users-Icon.svg" class="m-r-15" width="26px" height="26px">
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