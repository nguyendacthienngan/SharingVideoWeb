<template>
    <div>
        <div class="filter-title">
            {{title}}
        </div>
        <div class="filter row">
           <div :id="filter_1" class="col">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
            <div :id="filter_2" class="col">
               <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
            <div :id="filter_3" class="col">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'filter_1', 'filter_2', 'filter_3']
}
</script>
<style>

    .filter div{
        display:flex;
        justify-content: center;
    
    }
    @media only screen and (min-width: 576px) {
        .filter div{
        }
    }
    @media only screen and (max-width: 576px) {
        .filter div{
            margin-bottom: 20px;
            /* justify-content: left; */
        }
    }
</style>