<template>
    <nav id="sidebar" class="">
        <SideBarDetail filename="Logo.png"></SideBarDetail>
        <SideBarDetail filename="Add-Icon.png" text="Create"></SideBarDetail>
        <SideBarDetail filename="Folder-Icon.png" text="My Media"></SideBarDetail>
        <SideBarDetail filename="Record-Icon.png" text="Record"></SideBarDetail>
        <SideBarDetail filename="Filter-Icon.png" text="Filter"></SideBarDetail>
        <div id="menuToggle" class="text-center align-self-center">
          <span></span>
          <span></span>
          <span></span>
        </div>
    </nav>
</template>

<script>
import SideBarDetail from './SideBarDetail.vue'
export default {
  components: {
    SideBarDetail
  }
}
</script>
<style src="../assets/styles/sidebar.css">
</style>