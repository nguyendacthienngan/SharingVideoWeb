<template>
    <div id="filters" class="p-3">
        <h4 class="title">Add Filter</h4>
        <div class="form-group has-search ">
            <input type="text" class="form-control" placeholder="Search">
            <!-- <span class="fa fa-search form-control-feedback "></span> -->
        </div>
        <div class="">
            <FilterDetail id="ocean1" title="Ocean Theme" filter_1="grayscale" filter_2="sepia" filter_3="hue-rotate"></FilterDetail>
            <FilterDetail id="ocean2" title="Ocean Theme" filter_1="tint" filter_2="inkwell" filter_3="blur"></FilterDetail>
            <FilterDetail id="ocean3" title="Ocean Theme" filter_1="opacity" filter_2="brightness" filter_3="combo"></FilterDetail>
            <FilterDetail id="ocean4" title="Ocean Theme" filter_1="contrast" filter_2="invert" filter_3="opacity"></FilterDetail>
            
        </div>
    </div>
</template>
<script>
import FilterDetail from './FilterDetail.vue'
export default {
    components:{
        FilterDetail
    },
    mounted() {
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
<style>

    .has-search .form-control{
        border-radius: 15px;
        border: 1px solid black;
    }
    .has-search{
        margin-bottom: 10px;
        margin-top: 10px;
    }
   
    @media only screen and (min-width: 576px) {
        .filters {
            overflow:scroll;
            height: 360px;
        }
    }
    
    
    .filter-title{
        margin-bottom: 10px;
    }
    .filter{
        margin-bottom: 10px;
    }

/* SCROLL BAR */
/* total width */
#filters::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
}

/* background of the scrollbar except button or resizer */
#filters::-webkit-scrollbar-track {
    background-color: #fff;
}

/* scrollbar itself */
#filters::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
}

/* set button(top and bottom of the scrollbar) */
#filters::-webkit-scrollbar-button {
    display:none;
}


.filters::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
}

/* background of the scrollbar except button or resizer */
#filters::-webkit-scrollbar-track {
    background-color: #fff;
}

/* scrollbar itself */
#filters::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
}

/* set button(top and bottom of the scrollbar) */
#filters::-webkit-scrollbar-button {
    display:none;
}
</style>