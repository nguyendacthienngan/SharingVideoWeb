<template>
    <div v-if="isHidden" class="container vertical-center text-center">
        <p>Add media to get started</p>
        
    </div>
    <div v-else class="container">
      <div  class="display-inline align-center">
        <video  id="video-drag" alt="" class="img"/>
        <!-- <br>
        <br>
        <button class="btn" @click="removeFile">REMOVE</button> -->
      </div>
      
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      isHidden: true
    }
  },
}
</script>

<style scoped>
.container {
  position: relative;
}

.vertical-center {
  margin: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>