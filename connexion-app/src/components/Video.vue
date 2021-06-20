<template>
    <div class="pattern">
        <!-- <video id="wp" autoplay loop playsinline muted poster="//s3-us-west-2.amazonaws.com/s.cdpn.io/68939/wppost.jpg" >
            <source src="//s3-us-west-2.amazonaws.com/s.cdpn.io/68939/vidwp.mp4" type="video/mp4">
        </video> -->
        <video width="320" height="240" controls class="video">
            <source src="../assets/videos/Lofi_Lovely.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>
    </div>
</template>
<style>
    .video {
        overflow: hidden;
        z-index: 1;
    }
</style>