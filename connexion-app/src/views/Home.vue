<template>
  <div class="">
     <NavBar></NavBar>
     <div class="container">
         <br>
         <br>
         <br>
         <br>
         <div class="row">
           <div class="col-md-3">
              <SideBar></SideBar>
            </div>
            <div class="col-md-8">
               <Post></Post>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue'
import SideBar from '../components/common/SideBarHome.vue'
import Post from '../components/home/Post.vue'
export default {
    components:{
       NavBar,
       SideBar,
       Post
    }
}
</script>

<style>
</style>