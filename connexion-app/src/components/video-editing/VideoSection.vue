<template>
  <div class="row ">
    <div class="col-md-5 right-border filters order-2 order-md-1 ">
      <router-view></router-view>
    </div>
    <div class="col-md-7 text-center order-1 order-md-2 video-embded-component ">
      <div class="row headline-video ">
        <div class="col-6 ">
          <div class="input-group video-title">
            <input type="text" class="form-control" placeholder="Project Name" aria-label="Project Name" aria-describedby="basic-addon1">
          </div>
        </div>
         <div class="col">
        </div>
        <div id="export" class="col-2 row justify-content-end m-r-15">
          <router-link to="/upload">
            <Button text='Export'></Button>
          </router-link>
        </div>
      </div>
      <div class="container">
        <Video></Video>
        <div class="d-md-none">
        <!-- <div id="player-in-small-screen"> -->
          <VideoPlayer></VideoPlayer>
        </div>

      </div>
    </div>
  </div>
    
</template>

<script>
import Video from './Video.vue'
import Button from '../common/Button.vue'
import VideoPlayer from './VideoPlayer.vue'
export default {
  components: {
    Video,
    Button,
    VideoPlayer
  },
  mounted(){
      
  }
}
</script>

<style src="../../assets/styles/video-filter.css"></style>
