<template>
    <div>
        <b-modal ref="recordVideo"  id="recordVideo" title="Record Video" hide-header hide-footer>
        <span id="toggle-btn" @click="hideModal">
            <i class="fa fa-times fa-2x exit-button "></i>
        </span>
        <div class="w-100 text-center">

            <button v-if="!isStarted" id="start-camera" class="btn btn-primary h-100" @click="recordVideo">Start Camera</button>
            
            <video id="recorded-video" autoplay="autoplay" muted >
                <source type="video/webm" />
            </video>
            
        </div>
        
        <div v-if="isStarted" class="row">
            <button class="btn btn-primary"  @click="hideModal">Cancel</button>
            <img src="../../../assets/images/recording.svg" width="60px" height="55px" @click="startRecord"/>
            <a id="download-video" download="test.webm" class="btn btn-primary">Download Video</a>
            
        </div>
        
        </b-modal>
    </div>
</template>
<style scoped>
    #toggle-btn{
        float: right;
    }
    #recorded-video{
        width: 100%    !important;
        height: auto   !important;
    }
</style>
<script>
    import $ from 'jquery'
  export default {
        data() {
            return {
                camera_stream: null,
                media_recorder: null,
                blobs_recorded: [],
                isRecording: false,
                isStarted: false
            } 
        },
        methods: {
        hideModal() {
            this.$refs['recordVideo'].hide()
            this.camera_stream.getTracks().forEach(function(track) {
                track.stop();
            });
             this.isStarted = false
        },
        async recordVideo(){
            this.isStarted = true
            let recordVideo = document.getElementById('recorded-video');
            this.camera_stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            recordVideo.srcObject = this.camera_stream;
        },
        startRecord(){
            if (this.isRecording == false)
            {
                this.isRecording = true
                // set MIME type of recording as video/webm
                this.media_recorder = new MediaRecorder(this.camera_stream, { mimeType: 'video/webm' });

                // event : new recorded video blob available 
                let vm = this;

                this.media_recorder.addEventListener('dataavailable', function(e) {
                    vm.blobs_recorded.push(e.data);
                });

                // event : recording stopped & all blobs sent
                this.media_recorder.addEventListener('stop', function() {
                    // create local object URL from the recorded video blobs
                    let video_local = URL.createObjectURL(new Blob(vm.blobs_recorded, { type: 'video/webm' }));
                    let download_link = document.querySelector("#download-video");

                    download_link.href = video_local;
                });

                // start recording with each recorded blob having 1 second video
                this.media_recorder.start(1000);
            }
            else
            {
                alert("STOPPED")
                this.media_recorder.stop(); 
                let recordVideo = document.getElementById('recorded-video');
                recordVideo.pause();
            }
        },
        stopRecord(){
            this.media_recorder.stop(); 
        }
    },
    mounted(){
        $('#recordVideo').on('hidden.bs.modal', function (e) {
            alert("Hi")
        })
    }
  }
</script>