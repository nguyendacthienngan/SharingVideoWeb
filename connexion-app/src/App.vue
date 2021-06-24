<template>
  <div id="video-editing">
      <VideoEditing></VideoEditing>
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

<style src="./assets/styles/main.css"></style>
<style>
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
   url(./assets/fonts/Montserrat-Regular.ttf) format("truetype");
}
body{
  font-family: "Montserrat", Helvetica, Arial;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
@import'~bootstrap/dist/css/bootstrap.css'

</style>
