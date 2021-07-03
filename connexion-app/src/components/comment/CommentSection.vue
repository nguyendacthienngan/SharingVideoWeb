<template>
    <div>
        <div class="card-body">
        <div class="list-comments">
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
            <Comment name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></Comment>
        
            </div>
        </div>
        <div class="comment-section container"  style="position: relative">
            <div class="row" style="position: relative">
                <div class="col-10">
                    <form class="d-flex form-control input-container comment-bar" v-on:click="isHidden = !isHidden">
                        <span class="fa fa-at icon"  width="20px" height="20px" v-on:click="isHidden = !isHidden" style="cursor:pointer">

                        </span>
                        <!-- <img src="../../assets/images/Search-Icon.svg" class="icon" width="20px" height="20px"> -->
                        <input id="search_in_navbar" class="" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </div>
                <div class="col-2">
                    <span class=" row align-items-center post-button h-100" style="cursor:pointer">
                        <b class="col">Post</b>
                    </span>
                </div>
                <div v-if="!isHidden" class="tag-people-component">
                    <div class="d-flex list-users">
                        <div class="d-flex">
                            <img src="../../assets/images/Account.png" width="41px" height="41px">
                            <p><b>User</b> username</p>
                        </div>
                        <div class="d-flex">
                            <img src="../../assets/images/Account.png" width="41px" height="41px">
                            <p><b>User</b> username</p>
                        </div>
                        <div class="d-flex">
                            <img src="../../assets/images/Account.png" width="41px" height="41px">
                            <p><b>User</b> username</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <br>

        </div>
    </div>
    
</template>
<style src="../../assets/styles/comment-section.css"></style>
<style src="../../assets/styles/comment-bar.css"></style>
<script>
// import CommentBar from '../common/CommentBar.vue'
import Comment from '../comment/Comment.vue'
export default {
    components: {
        // CommentBar,
        Comment
    },
    data: function(){
       return {
           isHidden: true
        }
    }
}
</script>