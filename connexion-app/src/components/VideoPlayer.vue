<template>
    <div class="top-border container">
        <br>
        <div class="row">
            <div class="col-lg  align-self-center trim">
                <div class="col-lg">
                    <div id="scissors">
                        <img src="../assets/images/scissors.svg"  height="25px" />
                        <span class="p-2"></span>
                        <span>Trim</span>
                    </div>
                </div>
            </div>
            <div class="container col-lg">
                <div class="row">
                    <img id="quickRestart" src="../assets/images/quick-restart.svg" class="rotate180 video-player col row justify-content-center align-self-center"  width="30px" height="30px">
                    <img id="rewind" src="../assets/images/rewind-button.svg" class="video-player col row justify-content-center align-self-center"  width="30px" height="30px">
                    <img id='btnPlayPause' src="../assets/images/play-button-arrowhead.svg" class="video-player col row justify-content-center align-self-center" width="50px" height="50px">
                    <img id='btnPause' src="../assets/images/pause.svg" class="video-player col row justify-content-center align-self-center" width="50px" height="50px">
                    <img id='forward' src="../assets/images/forward-button.svg" class="video-player col row justify-content-center align-self-center" width="30px" height="30px">
                    <img id='skipTrack' src="../assets/images/skip-track.svg" class="video-player col row justify-content-center align-self-center" width="30px" height="30px">
                
                </div>
            </div>
           <div class="col-lg row justify-content-center align-self-center">
               <span id="current-time">00:00:00</span>/
               <span id="duration">00:00:00</span>
            </div>
        </div>
        
        <div id='timeline' class="timeline slidecontainer">
            <Timeline></Timeline>
            <!-- <progress id='progress-bar' min='0' max='100' value='0'>0% played</progress> -->
            <form class="">
                <input type="range" min="0" max="100" value="0" class="slider resize-drag" id='progress-bar'>
            </form>
        </div>
    </div>
</template>
<script>
import interact from 'interactjs'
import Timeline from './Timeline.vue'
export default {
  components: {
    Timeline
  },
  mounted() {
    interact('.resize-drag')
        .resizable({
            // resize from all edges and corners
            edges: { left: true, right: true, bottom: false, top: false },

            listeners: {
            move (event) {
                var target = event.target
                var x = (parseFloat(target.getAttribute('data-x')) || 0)
                var y = (parseFloat(target.getAttribute('data-y')) || 0)

                // update the element's style
                target.style.width = event.rect.width + 'px'
                target.style.height = event.rect.height + 'px'

                // translate when resizing from top or left edges
                x += event.deltaRect.left
                y += event.deltaRect.top

                target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

                target.setAttribute('data-x', x)
                target.setAttribute('data-y', y)
                target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
            }
        },
        modifiers: [
            // keep the edges inside the parent
            interact.modifiers.restrictEdges({
                outer: 'parent'
        }),

        // minimum size
        interact.modifiers.restrictSize({
            min: { width: 100, height: 50 }
        })
        ],

        inertia: true
        })
        .draggable({
            listeners: { move: window.dragMoveListener },
            inertia: true,
            modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ]
        })
  }
}
</script>
<style src="../assets/styles/timeline.css">
  
</style>