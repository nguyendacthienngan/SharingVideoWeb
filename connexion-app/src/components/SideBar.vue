<template>
    <nav id="sidebar" class="" onresize="resizeDetected()">
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
    var body = document.getElementsByTagName("BODY")[0]
    var menuToggleElement = document.getElementById('menuToggle')
    var menubarElement = document.getElementById('menu-bar')
    menuToggleElement.addEventListener('click',menuToggle)
    body.addEventListener('onresize', resizeDetected)
    function resizeDetected(){
      alert("ALO")
      if (window.screen.availWidth > 568)
        menubarElement.style.display = "block"
    }
    function menuToggle(){
      if (window.screen.availWidth <= 568)
      {
        if (menubarElement.style.display == "block")
          menubarElement.style.display = "none"
        else 
          menubarElement.style.display = "block"
      }
    }

    
  }
}
</script>
<style src="../assets/styles/sidebar.css">
</style>