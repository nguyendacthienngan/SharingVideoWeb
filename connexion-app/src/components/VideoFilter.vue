<template>
  <div class="row">
    <div class="col-md-6 right-border filters order-2 order-md-1">
      <Filters></Filters>
    </div>
    <div class="col-md-6 text-center order-1 order-md-2 video-embded-component" >
      <div class="row headline-video ">
       
        <div class="col-md">
          <div class="input-group video-title">
            <input type="text" class="form-control" placeholder="Project Name" aria-label="Project Name" aria-describedby="basic-addon1">
          </div>
        </div>
         <div class="col-md">
          
        </div>
        <div class="col-md row justify-content-end">
          <Button text='Export'></Button>
        </div>
      </div>
      <div class="container">
        <Video></Video>

      </div>
    </div>
  </div>
    
</template>

<script>
import Video from './Video.vue'
import Button from './Button.vue'
import Filters from './Filters.vue'
export default {
  components: {
    Video,
    Button,
    Filters
  },
  mounted(){
       var player = document.getElementById('video-element');
       var grayScale = document.getElementById('grayscale');
       var sepia = document.getElementById('sepia');
       var contrast = document.getElementById('contrast');
       var hueRotate = document.getElementById('hue-rotate');
       var blur = document.getElementById('blur');
       var tint = document.getElementById('tint');
       var inkwell = document.getElementById('inkwell');
       var invert = document.getElementById('invert');
       var opacity = document.getElementById('opacity');
       var brightness = document.getElementById('brightness');
       var combo = document.getElementById('combo');

       grayScale.addEventListener("click", filterGrayScale)
       sepia.addEventListener("click", filterSepia)
       contrast.addEventListener("click", filterContrast)
       hueRotate.addEventListener("click", filterHueRotate)
       blur.addEventListener("click", filterBlur)
       tint.addEventListener("click", filterTint)
       inkwell.addEventListener("click", filterInkWell)
       invert.addEventListener("click", filterInvert)
       opacity.addEventListener("click", filterOpacity)
       brightness.addEventListener("click", filterBrightness)
       combo.addEventListener("click", filterCombo)

       function filterGrayScale(){
           player.style.filter = "grayscale(1)";
       }
       function filterSepia(){
           player.style.filter = "sepia(1)";
       }
       function filterContrast(){
           player.style.filter = "contrast(3)";
       }
       function filterHueRotate(){
           player.style.filter = "hue-rotate(90deg)";
       }
       function filterBlur(){
           player.style.filter = "blur(5px)";
       }
       function filterTint(){
           player.style.filter = "sepia(1) hue-rotate(200deg)";
       }
       function filterInkWell(){
           player.style.filter = "grayscale(1) brightness(0.45) contrast(1.05)";
       }
       function filterInvert(){
           player.style.filter = "invert(.8)";
       }
       function filterOpacity(){
           player.style.filter = "opacity(.5)";
       }
       function filterBrightness(){
           player.style.filter = "brightness(.5)";
       }
       function filterCombo(){
           player.style.filter = "contrast(1.4) saturate(1.8) sepia(.6)";
       }
  }
}
</script>

<style src="../assets/styles/video-filter.css"></style>
