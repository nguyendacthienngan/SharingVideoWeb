<template>
    <div class="row comment-view">
        <div class="col-md-6 order-2 order-lg-1 left-video">
            <img src="../assets/images/sample/Image_2.png" class="w-100">
            <div class="d-sm-none container">
                <CommentSection></CommentSection>
                <br>
            </div>
        </div>
        <div class="col-md-6 order-1 order-lg-2 right-post">
            <div class="container">
                <div class="card non-border">
                    <div class="card-header container bg-white ">
                        <PostCaption name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></PostCaption>
                        <br>
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