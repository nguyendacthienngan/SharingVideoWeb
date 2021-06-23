<template>
    <div class="pattern">
        <video width="320" height="240"  class="video" id="video-element" ref='video' muted>
            <source src="../assets/videos/Lofi_Lovely.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>

        <!-- <div id='controls'>
			<button id='btnReplay' ref='btnReplay' class='replay' title='replay' accesskey="R">Replay</button>	
			<button id='btnPlayPause' ref='btnPlayPause' class='play' title='play' accesskey="P" >Play</button>
			<button id='btnStop' ref='btnStop' class='stop' title='stop' accesskey="X">Stop</button>
            <button id='btnMute' ref='btnMute' class='mute' title='mute'>Mute</button>	
        </div> -->
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {

        mounted() {
            var player       = document.getElementById('video-element');
            var btnPlayPause = document.getElementById('btnPlayPause');
            var btnPause = document.getElementById('btnPause');
            var progressBar = document.getElementById('progress-bar');
            var currentTime = document.getElementById('current-time')
            var duration = document.getElementById('duration')
            // Show loading animation.
            
            function onClicked(){
                if (player.paused || player.ended){
                    var playPromise = player.play();
                
                    if (playPromise !== undefined) {
                        playPromise.then(_ => {
                            player.muted = false
                            changeButtonType(btnPlayPause, btnPause)
                        })
                        .catch(error => {
                            alert(error)
                        });
                    }
                } 
                else 
                {
                    var pausePromise = player.pause();
                    changeButtonType(btnPause, btnPlayPause);
                
                    if (pausePromise !== undefined) {
                        pausePromise.then(_ => {
                            player.muted = true
                        })
                        .catch(error => {
                            alert(error)
                        });
                    }
                }
            }
            function changeButtonType(buttonToHide, buttonToShow) {
                buttonToHide.style.display = "none";
                buttonToShow.style.display = "block"
            }

            btnPlayPause.addEventListener("click", onClicked)
            btnPause.addEventListener("click", onClicked)

            player.addEventListener('ended', function() { this.pause(); }, false);	

            // Add a listener for the timeupdate event so we can update the progress bar

            player.addEventListener('timeupdate', updateProgressBar, false);

            progressBar.addEventListener("click", seek);

            function seek(e) {
                var percent = e.offsetX / this.offsetWidth;
                player.currentTime = percent * player.duration;
                e.target.value = Math.floor(percent / 100);
                e.target.innerHTML = progressBar.value + '% played';
            }
            // Update the progress bar
            function updateProgressBar() {
                updateCurrentTimeText()
               
                // Work out how much of the media has played via the duration and currentTime parameters
                var percentage = Math.floor((100 / player.duration) * player.currentTime);
                // Update the progress bar's value
                progressBar.value = percentage;
                // Update the progress bar's text (for browsers that don't support the progress element)
                progressBar.innerHTML = percentage + '% played';
            }
            function updateCurrentTimeText(){
               
                var totalCurrentTime =  Math.floor(player.currentTime) // seconds
                var totalDurationTime =  Math.floor(player.duration) // seconds
                
                var sCurrentTime = convertSecondsToHMS(totalCurrentTime)
                var sDurationTime = convertSecondsToHMS(totalDurationTime)

                currentTime.innerHTML = sCurrentTime
                duration.innerHTML = sDurationTime
            }
            function convertSecondsToHMS(secs)
            {
                
                var hourCurrentTime = 0, minCurrentTime = 0, secondCurrentTime = 0

                hourCurrentTime =  Math.floor(secs/3600)
                minCurrentTime =  Math.floor((secs - hourCurrentTime*3600)/60)
                secondCurrentTime = (secs - hourCurrentTime*3600 - minCurrentTime*60)
                
                if (hourCurrentTime   < 10) {hourCurrentTime   = "0"+hourCurrentTime;}
                if (minCurrentTime < 10) {minCurrentTime = "0"+minCurrentTime;}
                if (secondCurrentTime < 10) {secondCurrentTime = "0"+secondCurrentTime;}

                return hourCurrentTime + ":" + minCurrentTime + ":" + secondCurrentTime
            }
        }
    }
</script>
<style>
    .video {
        overflow: hidden;
        z-index: 1;
    }
</style>