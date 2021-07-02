<template>
  <div class="">
     <NavBar></NavBar>
     <div class="container">
         <br>
         <br>
         <br>
         <br>
         <div class="d-flex">
           <div class="">
              <SideBar></SideBar>
            </div>
            <div class="">
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