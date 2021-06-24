<template>
    <div class="video-editing">
      <SideBar></SideBar>
      <div id="" class="container">
        <VideoFilter></VideoFilter>
        <VideoPlayer></VideoPlayer>
      </div>
    </div>
    
    
</template>

<script>
import VideoPlayer from './VideoPlayer.vue'
import VideoFilter from './VideoFilter.vue'
import SideBar from './SideBar.vue'

export default {
  components: {
    VideoPlayer,
    SideBar,
    VideoFilter,
  }
}
</script>

<style>

</style>

<style src="../assets/styles/video-editing.css"></style>