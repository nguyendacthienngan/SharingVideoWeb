<template>
    <div class="video-editing bottom-border right-border">
      <SideBar></SideBar>
      <div id="" class="container">

        <VideoSection></VideoSection>
        <div id="player-in-large-screen">
          <VideoPlayer></VideoPlayer>

        </div>
      </div>
    </div>
    
    
</template>

<script>
import VideoPlayer from './VideoPlayer.vue'
import VideoSection from './VideoSection.vue'
import SideBar from '../common/SideBar.vue'

export default {
  components: {
    VideoPlayer,
    SideBar,
    VideoSection,
  }
}
</script>

<style>

</style>

<style src="../../assets/styles/video-editing.css"></style>