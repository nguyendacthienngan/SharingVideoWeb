<template>
    <div>
        

        <b-modal ref="recordVideo"  id="recordVideo" title="Record Video" >
             <b-button id="show-btn" @click="showModal">Open Modal</b-button>
        <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button>
        <button id="start-camera" @click="recordVideo">Start Camera</button>
            <video id="recorded-video" width="320" height="240" autoplay="autoplay" >
                <source type="video/webm"/>
            </video>
            <button id="start-record" @click="startRecord">Start Recording</button>
            <button id="stop-record" @click="stopRecord">Stop Recording</button>

            <a id="download-video" download="test.webm">Download Video</a>

        </b-modal>
    </div>
</template>

<script>
import $ from 'jquery';
  export default {
        data() {
            return {
                camera_stream: null,
                media_recorder: null,
                blobs_recorded: []
            } 
        },
        methods: {
        showModal() {
            this.$refs['recordVideo'].show()
        },
        hideModal() {
            this.$refs['recordVideo'].hide()
        },
        toggleModal() {
            // We pass the ID of the button that we want to return focus to
            // when the modal has hidden
            this.$refs['recordVideo'].toggle('#recordVideo')
        },
        async recordVideo(){
            
            let recordVideo = document.getElementById('recorded-video');
            this.camera_stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            recordVideo.srcObject = this.camera_stream;
        },
        startRecord(){
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
        },
        stopRecord(){
            this.media_recorder.stop(); 
        }
    },

  }
</script>