<template>
  <div class="">
     <NavBar ref="navbar"></NavBar>
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
         allUsers: []
       }
    },
    methods:{
        getAllUsers()
        {
            this.allUsers = this.$refs.navbar.allUsers
        }   
    },
    mounted(){
         this.$nextTick(() => this.getAllUsers())
    }
}
</script>

<style>
</style>