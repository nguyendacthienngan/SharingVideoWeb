<template>
    <div class="d-flex">
      <nav id="sidebar">
        <SideBarDetail filename="Logo.png"></SideBarDetail>
        <SideBarDetail filename="Add-Icon.png" text="Create"></SideBarDetail>
        <SideBarDetail filename="Folder-Icon.png" text="My Media"></SideBarDetail>
        <SideBarDetail filename="Record-Icon.png" text="Record"></SideBarDetail>
        <SideBarDetail filename="Filter-Icon.png" text="Filter"></SideBarDetail>
      </nav>
      <div id="" class="container">
        <VideoFilter></VideoFilter>
        <VideoPlayer></VideoPlayer>
      </div>
    </div>
    
    
</template>

<script>
import VideoPlayer from './VideoPlayer.vue'
import VideoFilter from './VideoFilter.vue'
// import SideBar from './SideBar.vue'
import SideBarDetail from './SideBarDetail.vue'

export default {
  components: {
    VideoPlayer,
    // SideBar,
    VideoFilter,
    SideBarDetail
  }
}
</script>

<style>

</style>

<style src="../assets/styles/video-editing.css"></style>