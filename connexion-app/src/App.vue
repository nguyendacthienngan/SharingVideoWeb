<template>
  <div id="app">
    <!-- <div id="main">
      <NavBar></NavBar>
      <Main></Main>
    </div> -->
    <div id="video-editing">
      <VideoEditing></VideoEditing>
    </div>
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue'
// import Main from './components/Main.vue'
import VideoEditing from './components/VideoEditing.vue'

export default {
  name: 'App',
  components: {
    // NavBar,
    // Main,
    VideoEditing
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import'~bootstrap/dist/css/bootstrap.css'

</style>
