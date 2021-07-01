<template>
    <div>
        <div class="filter-title">
            {{title}}
             <b-button
                :class="visible ? null : 'collapsed'"
                :aria-expanded="visible ? 'true' : 'false'"
                :aria-controls="id"
                @click="visible = !visible"
                id="filter-show-button" class="vertical-center"
                >
                <i class="fa fa-sort-down "></i>
            </b-button>
        </div>
        <b-collapse :id="id" v-model="visible" class="mt-2 filter row">
        <div :id="filter_1" class="col">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
            <div :id="filter_2" class="col">
               <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>
            <div :id="filter_3" class="col">
                <img src="../assets/images/sample/Filter_1.png" width="77px" height="79px">
            </div>

        </b-collapse>
        
    </div>
</template>
<script>
export default {
    data() {
      return {
        visible: true,
      }
    },
    props: ['title', 'filter_1', 'filter_2', 'filter_3', 'id']
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
    #filter-show-button{
        background-color: transparent;
        border: 1px solid transparent;
        color: black;
    }
</style>