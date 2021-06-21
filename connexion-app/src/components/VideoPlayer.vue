<template>
    <div class="content">
        <br>
        <div class="row video-controls">
            <div class="col-md row">
            </div>
            <div class="col-md row  justify-content-center d-flex ">
                <img src="../assets/images/Previous.png" class="video-player">
                <img src="../assets/images/Player.png" class="video-player">
                <img src="../assets/images/Next.png" class="video-player">
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