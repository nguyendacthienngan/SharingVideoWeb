<template>
    <div class="p-3">
        <h4 class="title">Add Filter</h4>
        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Search">
        </div>
        <Filter></Filter>
        <div class="filter-title">
            Ocean Theme
        </div>
        <div class="filter row">
            <div id="grayscale" class="col-md">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
            <div id="sepia" class="col-md">
               <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
            <div id="hue-rotate" class="col-md">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
        </div>
        <div class="filter-title">
            Ocean Theme
        </div>
        <div class="filter row">
            <div id="tint" class="col-md">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
            <div id="inkwell" class="col-md">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
            <div id="blur" class="col-md">
               <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
        </div>
        <div class="filter-title">
            Ocean Theme
        </div>
        <div class="filter row">
             <div id="opacity" class="col-md">
               <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
            <div id="brightness" class="col-md">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
            <div id="combo" class="col-md">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
        </div>
        <div class="filter-title">
            Ocean Theme
        </div>
         <div class="filter row">
             
        </div>
        <!-- <div class="filter-title">
            Ocean Theme
        </div>
        <div class="filter row">
            
            <div id="contrast" class="col-md">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
        </div> -->
        <!-- <input type="checkbox" name="filter" id="pattern" checked /> 
        <label for="pattern">Pattern</label>

        <input type="radio" name="filter" id="none" /> 
        <label for="none">None</label> -->

       
    </div>
</template>
<script>
import Filter from './Filter.vue'
export default {
    components:{
        Filter
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
    .filters {
        overflow:scroll;
        height: 360px;
    }
    .filter-title{
        margin-bottom: 10px;
    }
    .filter{
        margin-bottom: 10px;
    }

</style>