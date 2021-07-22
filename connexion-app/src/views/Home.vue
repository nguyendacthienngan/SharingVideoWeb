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
               <router-view></router-view>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue'
import SideBar from '../components/common/SideBarHome.vue'
export default {
    components:{
       NavBar,
       SideBar,
    },
    data(){
       return{
         allUsers: [
                {
                   id: "1",
                   name: "INTO1–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Frog"
               },
               {
                   id: "2",
                   name: "INTO1–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Dog"
               },
               {
                   id: "3",
                   name: "INTO1–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Pig"
               },
               {
                   id: "4",
                   name: "INT01–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "5",
                   name: "INT01–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "6",
                   name: "INT06–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "7",
                   name: "INT07–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Bear"
               },
               {
                   id: "INTO8–刘宇",
                   name: "INT08–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Plant"
               }
            ]
       }
    }
}
</script>

<style>
</style>