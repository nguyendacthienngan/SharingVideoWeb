<template>
    <div class="content">
        <br>
        <div class="row video-controls">
            <div class="col-md row">
            </div>
            <div class="col-md row  justify-content-center d-flex ">
                <img src="../assets/images/rewind-button.svg" class="video-player"  width="50px" height="50px">
                <img id='btnPlayPause' src="../assets/images/play-button-arrowhead.svg" class="video-player" width="50px" height="50px">
                <img id='btnPause' src="../assets/images/pause.svg" class="video-player" width="50px" height="50px">
                <img src="../assets/images/forward-button.svg" class="video-player" width="50px" height="50px">
            </div>
           
           <div class="col-md">
               00:00:00 / 00:00:00
            </div>
        </div>
        
        <div id='timeline' class="timeline slidecontainer">
            <Timeline></Timeline>
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" style="">
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