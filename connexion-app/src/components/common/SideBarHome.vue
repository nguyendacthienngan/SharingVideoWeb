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
            <div class="filter-button-component d-lg-none">
                <img src="../../assets/images/Home-Icon.svg" class="m-r-15">
            </div>
            <div class="filter-button-component d-lg-none">
                <img src="../../assets/images/Users-Icon.svg" class="m-r-15" width="26px" height="26px">
            </div>
        </div>
        <div class="suggested-accounts">
            <Accounts title="Suggested Accounts:"></Accounts>
        </div>
        <div class="discover">
            <!-- <Accounts title="Your Top Accounts:"></Accounts> -->
            <Discover></Discover>
        </div>
    </div>
</template>
<script>
import Accounts from '../home/Accounts.vue'
import Discover from '../discover/DiscoverSideBar.vue'
export default {
    components: {
        Accounts,
        Discover
    },
}
</script>

<style src="../../assets/styles/sidebar-home.css">
</style>