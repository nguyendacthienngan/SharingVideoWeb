<template>
  <div>
        <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
/* total width */
body::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
}

/* background of the scrollbar except button or resizer */
body::-webkit-scrollbar-track {
    background-color: #fff;
}

/* scrollbar itself */
body::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
}

/* set button(top and bottom of the scrollbar) */
body::-webkit-scrollbar-button {
    display:none;
}
@import'~bootstrap/dist/css/bootstrap.css'

</style>
