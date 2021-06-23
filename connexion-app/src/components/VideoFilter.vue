<template>
  <div class="row container">
    <div class="col-md-4 container right-border">
      <input type="checkbox" name="filter" id="pattern" checked /> 
      <label for="pattern">Pattern</label>

      <input type="radio" name="filter" id="none" /> 
      <label for="none">None</label>

      <input type="radio" name="filter" id="grayscale"  /> 
      <label for="grayscale">Grayscale</label>

      <input type="radio" name="filter" id="sepia" /> 
      <label for="sepia">Sepia</label>

      <input type="radio" name="filter" id="contrast" /> 
      <label for="contrast">Contrast</label>

      <input type="radio" name="filter" id="hue-rotate" /> 
      <label for="hue-rotate">Hue rotate</label>

      <input type="radio" name="filter" id="blur" /> 
      <label for="blur">Blur</label>

      <input type="radio" name="filter" id="tint" /> 
      <label for="tint">Tint</label>

      <input type="radio" name="filter" id="inkwell" /> 
      <label for="inkwell">Ink well</label>

      <input type="radio" name="filter" id="invert" /> 
      <label for="invert">Invert</label>

      <input type="radio" name="filter" id="opacity" /> 
      <label for="opacity">Opacity</label>

      <input type="radio" name="filter" id="brightness" /> 
      <label for="brightness">Brightness</label>

      <input type="radio" name="filter" id="combo" checked /> 
      <label for="combo">Combo</label>
      <!-- <Video></Video> -->
    </div>
    <div class="col-md-8 text-center">
      <Video></Video>
    </div>
  </div>
    
</template>

<script>
import Video from './Video.vue'
export default {
  components: {
    Video
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
