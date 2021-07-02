<template>
    <form class="d-flex form-control input-container">
        <img src="../../assets/images/Search-Icon.svg" class="icon" width="20px" height="20px">
        <input id="search_in_navbar" class="" type="search" placeholder="Search" aria-label="Search">
    </form>
</template>

<style scoped>
#search_in_navbar{
    /* border-radius: 30px; */
    color: transparent;
    border: 1px solid transparent;
    background: #E7ECF0 !important;
    width: 100%;
}
.input-container {
    background: #E7ECF0 !important;
    border-radius: 50px !important;
    border: 1px solid transparent !important;
  }
  
  .icon {
    color:  #828282;
    text-align: center;
    margin: auto;
    margin-right: 5px;
  }
</style>