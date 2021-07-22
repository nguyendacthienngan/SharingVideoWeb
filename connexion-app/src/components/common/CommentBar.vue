<template>
    <form class="d-flex form-control input-container comment-bar">
        <span class="fa fa-at icon" width="20px" height="20px"></span>
        <!-- <img src="../../assets/images/Search-Icon.svg" class="icon" width="20px" height="20px"> -->
        <input class="search_in_navbar" type="search" placeholder="Search" aria-label="Search">
    </form>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.input-container {
    background: #C4C4C499 !important;
    border-radius: 50px !important;
    border: 1px solid transparent !important;
}
.input-container:focus {
  background-color: yellow !important;
  border: 1px solid red !important;
}

input[type="search"], input[type="text"], textarea, select { 
   outline: none;
}

  
.icon {
    color:  black;
    text-align: center;
    margin: auto;
    margin-right: 5px;
}
</style>