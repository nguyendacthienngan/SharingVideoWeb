<template>
    <form class="d-flex form-control input-container">
        <img src="../../assets/images/Search-Icon.svg" class="icon" width="20px" height="20px">
        <input id="search_in_navbar" class="" type="search" placeholder="Search" aria-label="Search">
    </form>
</template>

<style scoped>

.input-container {
    background: #E7ECF0 !important;
    border-radius: 50px !important;
    border: 1px solid transparent !important;
}
.input-container:focus {
  background-color: yellow !important;
  border: 1px solid red !important;
}
#search_in_navbar{
    /* border-radius: 30px; */
    color: #828282;
    border: 1px solid #E7ECF0;
    background: #E7ECF0 !important;
    width: 100%;
}

input[type="search"], input[type="text"], textarea, select { 
   outline: none;
}

  
.icon {
    color:  #828282;
    text-align: center;
    margin: auto;
    margin-right: 5px;
}
</style>