<template>
    <div class="content">
        <br>
        <div class="row video-controls">
            <div class="col-md row">
            </div>
            <div class="container row h-100 col-md ">
                <img id="quick-restart" src="../assets/images/quick-restart.svg" class="rotate180 video-player col-md row justify-content-center align-self-center"  width="30px" height="30px">
                <img id="quick-restart" src="../assets/images/rewind-button.svg" class="video-player col-md row justify-content-center align-self-center"  width="30px" height="30px">
                <img id='btnPlayPause' src="../assets/images/play-button-arrowhead.svg" class="video-player col-md row justify-content-center align-self-center" width="50px" height="50px">
                <img id='btnPause' src="../assets/images/pause.svg" class="video-player col-md row justify-content-center align-self-center" width="50px" height="50px">
                <img src="../assets/images/forward-button.svg" class="video-player col-md row justify-content-center align-self-center" width="30px" height="30px">
                <img src="../assets/images/skip-track.svg" class="video-player col-md row justify-content-center align-self-center" width="30px" height="30px">
                
            </div>
            
           
           <div class="col-md row justify-content-center align-self-center">
               00:00:00 / 00:00:00
            </div>
        </div>
        
        <div id='timeline' class="timeline slidecontainer">
            <Timeline></Timeline>
            <!-- <progress id='progress-bar' min='0' max='100' value='0'>0% played</progress> -->
            <input type="range" min="1" max="100" value="50" class="slider" id='progress-bar' style="">
        </div>
    </div>
</template>
<script>
import Timeline from './Timeline.vue'
export default {
  components: {
    Timeline
  }
}
</script>
<style src="../assets/styles/timeline.css">
  
</style>