<template>
    <div class="drop  drag-component">
        <div class="helper"></div>
        <div class="drop display-inline align-center" @dragover.prevent @drop="onDrop">
            <div class="helper"></div>
            <label v-if="!image" class="btn display-inline">
            <img src="../../../assets/images/Folder_Black.png" width="90px" height="90px" style="max-width: 90px">

            <p class="padding-20">Drag and drop files from your computer, or <b>browse files</b></p>
                <input type="file" name="image" @change="onChange">
            </label>
            <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
                <img :src="image" alt="" class="img" />
                <br>
                <br>
                <button class="btn" @click="removeFile">REMOVE</button>
            </div>
        </div>
    </div>
</template>
<style src="../../../assets/styles/browse-file.css">
</style>
<script>
export default{
    el: 'browse',
    data: function() {
      return {image: ''}
    },
    methods: {
      onDrop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        this.createFile(files[0]);
      },
      onChange(e) {
        var files = e.target.files;
        this.createFile(files[0]);
      },
      createFile(file) {
        if (!file.type.match('image.*')) {
          alert('Select an image');
          return;
        }
        var img = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = function(e) {
          vm.image = e.target.result;
        }
        reader.readAsDataURL(file);
      },
      removeFile() {
        this.image = '';
      }
    }
  };

</script>