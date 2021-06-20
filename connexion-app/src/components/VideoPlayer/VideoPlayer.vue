<template>
    <div>
        <div id=“timeline1-embed” style=“width: 100%; height: 600px;”>&nbsp;</div>


    </div>
</template>
<script>
import $ from 'jquery'
$(document).ready(function () {
    var dataObject = {
        "timeline": {
            "headline": "Sh*t People Say",
                "type": "default",
                "text": "People say stuff",
                "startDate": "2012,1,26",
                "date": [{
                "startDate": "2011,12,12",
                    "endDate": "2012,1,27",
                    "headline": "Vine",
                    "text": "<p>Vine Test</p>",
                    "asset": {
                    "media": "https://vine.co/v/b55LOA1dgJU",
                        "credit": "",
                        "caption": ""
                }
            }, {
                "startDate": "2012,1,26",
                    "endDate": "2012,1,27",
                    "headline": "Sh*t Politicians Say",
                    "text": "<p>In true political fashion, his character rattles off common jargon heard from people running for office.</p>",
                    "asset": {
                    "media": "http://youtu.be/u4XpeU9erbg",
                        "credit": "",
                        "caption": ""
                }
            }]
        }
    };

});
export default {
  name: 'VideoPlayer',
  components: {
    // NavBar,
    // Main,
  }
}
</script>
<style>
    .video-timeline{
        
    }
</style>