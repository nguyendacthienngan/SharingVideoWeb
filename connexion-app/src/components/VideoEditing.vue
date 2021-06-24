<template>
    <div class="row">
        <div class="col-md-2 p-0">
          <SideBar></SideBar>
        </div>
        <div class="col-md-10 p-0">
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
    VideoFilter
  }
}
</script>

<style src="../assets/styles/video-editing.css"></style>