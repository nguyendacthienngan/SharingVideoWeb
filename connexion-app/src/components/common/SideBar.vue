<template>
    <nav id="sidebar" class="" onresize="resizeDetected()">
        <SideBarDetail filename="Logo.png"></SideBarDetail>
        <div id="menuToggle" class="text-center align-self-center" onClick="menuToggle();">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="menu-bar" class="menu-bar">
          <SideBarDetail @toggle-click="greet" id="create" filename="Add-Icon.svg" text="Create"></SideBarDetail>
          <SideBarDetail @toggle-click="greet" id="folder" filename="Folder-Icon.svg" text="My Media"></SideBarDetail>
          <SideBarDetail @toggle-click="greet" id="record" filename="Record-Icon.svg" text="Record"></SideBarDetail>
          <SideBarDetail @toggle-click="greet" id="filter" filename="Filter-Icon.svg" text="Filter"></SideBarDetail>
        </div>
    </nav>
</template>

<script>
import SideBarDetail from '../common/SideBarDetail.vue'
export default {
  components: {
    SideBarDetail
  },
  methods: {
    greet: function (event) {
      
    }
  },
  mounted(){
    var menuToggleElement = document.getElementById('menuToggle')
    var menubarElement = document.getElementById('menu-bar')
    menuToggleElement.addEventListener('click',menuToggle)
    window.addEventListener('resize', resizeDetected);
    function resizeDetected(){
      if (window.screen.availWidth > 576 && menubarElement.style.display == "none")
        menubarElement.style.display = "block"
      else if (window.screen.availWidth <= 576 )
      {
        menubarElement.style.display = "none"
      }
    }
    function menuToggle(){
      if (window.screen.availWidth <= 576)
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
<style src="../../assets/styles/sidebar.css">
</style>