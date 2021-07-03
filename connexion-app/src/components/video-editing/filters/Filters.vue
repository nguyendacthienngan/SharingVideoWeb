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
            <FilterDetail id="ocean4" title="Ocean Theme" filter_1="opacity" filter_2="brightness" filter_3="combo"></FilterDetail>
            
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
import FilterDetail from './FilterDetail.vue'
export default {
    components:{
        FilterDetail
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