<template>
  <div class="row container">
    <div class="col-md-4 container">
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
  }
}
document.ontouchstart = function(){ document.getElementById('wp').play(); }
</script>

<style src="../assets/styles/video-filter.css"></style>
