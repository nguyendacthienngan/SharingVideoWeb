<template>
    <div class="row ">
        <div class="col-md-2 sidebar h-100" >
            <SideBarDetail></SideBarDetail>
            <SideBarDetail></SideBarDetail>
            <SideBarDetail></SideBarDetail>
            <SideBarDetail></SideBarDetail>

        </div>
        <div class="col-md-10 container">
            Content
        </div>
    
    </div>
</template>

<script>
import SideBarDetail from './SideBarDetail.vue'
export default {
  components: {
    SideBarDetail
  }
}
</script>
<style>
    .sidebar{
    }
</style>