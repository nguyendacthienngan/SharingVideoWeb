<template>
  <div class="drop  drag-component" 
    :class="getClasses" 
    @dragover.prevent="dragOver" 
    @dragleave.prevent="dragLeave"
    @drop.prevent="drop($event) " >

        <img :src="imageSource" v-if="imageSource" />
        <h1 v-if="wrongFile">Wrong file type</h1>
        <div v-if="!imageSource && !isDragging && !wrongFile" class="text-center padding-50" >
            <img src="../../assets/images/Folder_Black.png" width="90px" height="90px" style="max-width: 90px">
            <br>
            <p class="padding-20">Drag and drop files from your computer, or <b>browse files</b></p>
        </div>

  </div>
</template>



<script>
export default {
  name: 'DropAnImage',
  data(){
    return{
      isDragging:false,
      wrongFile:false,
      imageSource:null
    }
  },
  computed:{
    getClasses(){
      return {isDragging: this.isDragging}
    }
  },
  methods:{
    dragOver(){
      this.isDragging = true
    },
    dragLeave(){
      this.isDragging = false
    },
    drop(e){
      let files = e.dataTransfer.files
      this.wrongFile = false
      // allows only 1 file
      if (files.length === 1) {
        let file = files[0]
        // allows image only
        if (file.type.indexOf('image/') >= 0) {
          var reader = new FileReader()
          reader.onload = f => {
            this.imageSource = f.target.result
            this.isDragging = false
          }
          reader.readAsDataURL(file)
        }else{
          this.wrongFile = true
          this.imageSource = null
          this.isDragging = false
        }
      }
    },
    onRequestUploadFiles(){
      
    }
  }
}
</script>



<style scoped>
.drag-component{
    background: rgba(196, 196, 196, 0.2);
    border: 1px dashed rgba(0, 0, 0, 0.6) !important;
    box-sizing: border-box;
    border-radius: 10px;
    
}
.padding-20{
    padding-top: 20px;
    max-width: 250px;
}
.padding-50{
    padding-top: 50px;
    padding-bottom: 50px;
}
.drop{
  width: 100%;
  height: 100%;
  background-color: #eee;
  border:10px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transition: background-color .2s ease-in-out;
  font-family: sans-serif;
}
.isDragging{
  background-color: #999;
  border-color: #fff;
}
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>