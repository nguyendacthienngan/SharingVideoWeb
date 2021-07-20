<template>
    <nav id="sidebar" class="">
        <SideBarDetail filename="Logo_Filled.png"></SideBarDetail>
        <div id="menuToggle" class="text-center align-self-center" >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="menu-bar" class="menu-bar">
          <SideBarDetail v-b-modal.browseFile id="create" filename="Add-Icon.svg" text="Create"></SideBarDetail>
          <browse-file/>
          <router-link to="/editing/mymedia">
            <SideBarDetail @toggle-click="greet" id="folder" filename="Folder-Icon.svg" text="My Media"></SideBarDetail>
          </router-link>
          <SideBarDetail @toggle-click="greet" id="record" filename="Record-Icon.svg" text="Record"></SideBarDetail>
          <router-link to="/editing/filter">
            <SideBarDetail @toggle-click="greet" id="filter" filename="Filter-Icon.svg" text="Filter"></SideBarDetail>
          </router-link>
        </div>
    </nav>
</template>

<script>
import BrowseFile from '../video-editing/browse-files/BrowseFile.vue'
import SideBarDetail from './SideBarDetailEditing.vue'
export default {
  components: {
    SideBarDetail,
    BrowseFile
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
      if (window.innerWidth > 768 && menubarElement.style.display == "none")
        menubarElement.style.display = "block"
      else if (window.innerWidth <= 768 )
      {
        menubarElement.style.display = "none"
      }
    }
    function menuToggle(){
      if (window.innerWidth <= 768)
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
<style src="../../assets/styles/sidebar-editing.css">
</style>