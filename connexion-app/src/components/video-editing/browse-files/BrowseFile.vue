<template>
    <div class="drop  drag-component">
        <div class="helper"></div>
        <div class="drop display-inline align-center" @dragover.prevent @drop="onDrop">
            <div class="helper"></div>
            <label class="btn display-inline">
            <img src="../../../assets/images/Folder_Black.png" width="90px" height="90px" style="max-width: 90px">

            <p class="padding-20">Drag and drop files from your computer, or <b>browse files</b></p>
                <input type="file" name="video" @change="onChange">
            </label>
            <div class="display-inline align-center">
                <video  id="video-drag" alt="" class="img"/>
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
      return {video: ''}
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
        // if (!file.type.match('video.*')) {
        //   alert('Select an video');
        //   return;
        // }
        if (!file)
        { 
            alert("Failed to load file");
        }
        else
        {
            var reader = new FileReader();

            var vm = this;

            reader.onload = function(e) {
              // vm.video = e.target.result;

              // The file reader gives us an ArrayBuffer:
              let buffer = e.target.result;
              var uint8Array  = new Uint8Array(buffer);
              var arrayBuffer = uint8Array.buffer;
              var blob        = new Blob([arrayBuffer]);
              let url = URL.createObjectURL(blob);
              vm.video= url;

              var vid = document.getElementById('video-drag')
              vid.src = url
              vid.load()
            }
            reader.readAsArrayBuffer(file);
            // reader.readAsDataURL(file);

        }
       

      },
      removeFile() {
        this.video = '';
      }
    },
    
  };

</script>