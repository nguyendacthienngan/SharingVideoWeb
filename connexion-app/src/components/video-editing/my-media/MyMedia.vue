<template>
    
    <div class="container h-100">
      <div  id="text-empty" class="h-100 text-center" style="transform: translateY(+50%)">
        <p>Add media to get started</p>
      </div>
      <div  class="display-inline align-center">
        <video  id="video-drag" alt="" class="img" src=""/>
      </div>
      
    </div>
</template>

<script>
import $ from 'jquery';
export default {
  mounted(){
    $("#video-drag").on("loadstart", function() {
      if ($("#video-drag").attr('src').length != 0)
      {
        $('#text-empty').hide()
      }
        
    });
  }
}
</script>

<style scoped>
.container {
  position: relative;
}

.vertical-center {
  margin: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>