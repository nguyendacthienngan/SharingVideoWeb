<template>
    <nav id="sidebar" class="">
        <SideBarDetail filename="Logo.png"></SideBarDetail>
        <div id="menuToggle" class="text-center align-self-center" onClick="menuToggle();">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="menu-bar" class="menu-bar">
          <SideBarDetail filename="Add-Icon.png" text="Create"></SideBarDetail>
          <SideBarDetail filename="Folder-Icon.png" text="My Media"></SideBarDetail>
          <SideBarDetail filename="Record-Icon.png" text="Record"></SideBarDetail>
          <SideBarDetail filename="Filter-Icon.png" text="Filter"></SideBarDetail>
        </div>
        
        
    </nav>
</template>

<script>
import SideBarDetail from './SideBarDetail.vue'
export default {
  components: {
    SideBarDetail
  },
  mounted(){
    var menuToggleElement = document.getElementById('menuToggle')
    var menubarElement = document.getElementById('menu-bar')
    menuToggleElement.addEventListener('click',menuToggle)
    function menuToggle(){
      if (menubarElement.style.display == "none")
        menubarElement.style.display = "block"
      else 
        menubarElement.style.display = "none"
    }
    
  }
}
</script>
<style src="../assets/styles/sidebar.css">
</style>