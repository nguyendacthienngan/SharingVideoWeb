<template>
    <div class="video-editing bottom-border right-border">
      <SideBarEditing></SideBarEditing>
      <div id="" class="container">

        <VideoSection></VideoSection>
        <div class="d-none d-md-block">
          <VideoPlayer></VideoPlayer>

        </div>
      </div>
    </div>
    
    
</template>

<script>
import VideoPlayer from './VideoPlayer.vue'
import VideoSection from './VideoSection.vue'
import SideBarEditing from '../common/SideBarEditing.vue'

export default {
  components: {
    VideoPlayer,
    SideBarEditing,
    VideoSection,
  }
}
</script>

<style>

</style>

<style src="../../assets/styles/video-editing.css"></style>