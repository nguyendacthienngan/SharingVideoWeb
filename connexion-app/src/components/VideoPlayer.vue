<template>
    <div class="top-border container">
        <br>
        <div class="row video-controls">
            <div class="col-md row align-self-center">
                <div class="col-md">
                    <div id="scissors">
                        <img src="../assets/images/scissors.svg"  height="25px" />
                        <span class="p-2"></span>
                        <span>Trim</span>
                    </div>
                </div>
            </div>
            <div class="container row h-100 col-md ">
                <img id="quickRestart" src="../assets/images/quick-restart.svg" class="rotate180 video-player col row justify-content-center align-self-center"  width="30px" height="30px">
                <img id="rewind" src="../assets/images/rewind-button.svg" class="video-player col row justify-content-center align-self-center"  width="30px" height="30px">
                <img id='btnPlayPause' src="../assets/images/play-button-arrowhead.svg" class="video-player col row justify-content-center align-self-center" width="50px" height="50px">
                <img id='btnPause' src="../assets/images/pause.svg" class="video-player col row justify-content-center align-self-center" width="50px" height="50px">
                <img id='forward' src="../assets/images/forward-button.svg" class="video-player col row justify-content-center align-self-center" width="30px" height="30px">
                <img id='skipTrack' src="../assets/images/skip-track.svg" class="video-player col row justify-content-center align-self-center" width="30px" height="30px">
            </div>
           <div class="col-md row justify-content-center align-self-center">
               <span id="current-time">00:00:00</span>/
               <span id="duration">00:00:00</span>
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