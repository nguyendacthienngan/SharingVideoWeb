<template>
    <div class="row">
        <div class="col-md-2">
          <SideBar></SideBar>
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-4 container content">
              
                <!-- <VideoFilter></VideoFilter> -->
            </div>
            <div class="col-md-8 text-center h-100">
              <video width="320" height="240" controls class="video">
                <source src="../assets/videos/Lofi_Lovely.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div>
            <VideoPlayer></VideoPlayer>
          </div>
        </div>
       
    </div>
    
</template>

<script>
import VideoPlayer from './VideoPlayer.vue'
import SideBar from './SideBar/SideBar.vue'
export default {
  components: {
    VideoPlayer,
    SideBar,
  }
}
</script>

<style>
  .content{
    border: 1px solid black;
  }
</style>