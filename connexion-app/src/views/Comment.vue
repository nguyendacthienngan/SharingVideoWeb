<template>
    <div class="row comment-view">
        <div class="col-md-6 order-2 order-md-1 left-video">
            <router-link to="/" class="d-none d-sm-block">
                 <span class="fa fa-times fa-2x exit-button"></span>
            </router-link>
            <img src="../assets/images/sample/Image_2.png" class="w-100">
            <div class="d-sm-none container">
                <CommentSection></CommentSection>
                <br>
            </div>
        </div>
        <div class="col-md-6 order-1 order-md-2 right-post">
            <div class="container">
                <div class="card non-border">
                    <div class="card-header container bg-white ">
                        <PostCaption name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></PostCaption>
                        <router-link to="/" class="d-sm-none">
                            <span class="fa fa-times fa-2x exit-button"></span>
                        </router-link>
                        <br>
                    </div>
                    <div class="card non-border">
                        <div class="card-header container bg-white">
                            <div class="row">
                                <div class="col text-center">
                                    <img src="../assets/images/Like-Icon.svg" width="48px" height="48px">
                                    5555
                                </div>
                                <div class="col text-center">
                                    <img src="../assets/images/Comment-Icon.svg" width="48px" height="48px">
                                    5555
                                </div>
                                <div class="col text-center">
                                    <img src="../assets/images/Share-Icon.svg" width="48px" height="48px">
                                    5555
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-none d-sm-block">
                        <CommentSection></CommentSection>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>
<script>
import PostCaption from '../components/home/PostCaption.vue'
import CommentSection from '../components/comment/CommentSection.vue'
export default {
    components: {
        PostCaption,
        CommentSection
    },
}
</script>
<style src="../assets/styles/comment.css">
</style>
<style src="../assets/styles/comment-view.css">

</style>