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
        <div class="comment-section container">
            <div class="row">
                <div class="col-10">
                    <CommentBar></CommentBar>
                </div>
                <div class="col-2">
                    <span class=" row align-items-center post-button h-100">
                        <b class="col">Post</b>
                    </span>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style >
.list-comments{
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 360px;
}
.post-button{
    color: #FF0000;
    margin: auto;
}
/* SCROLL BAR */
/* total width */
.list-comments::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
}

/* background of the scrollbar except button or resizer */
.list-comments::-webkit-scrollbar-track {
    background-color: #fff;
}

/* scrollbar itself */
.list-comments::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
}

/* set button(top and bottom of the scrollbar) */
.list-comments::-webkit-scrollbar-button {
    display:none;
}


.filters::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
}

/* background of the scrollbar except button or resizer */
.list-comments::-webkit-scrollbar-track {
    background-color: #fff;
}

/* scrollbar itself */
.list-comments::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
}

/* set button(top and bottom of the scrollbar) */
.list-comments::-webkit-scrollbar-button {
    display:none;
}
</style>
<script>
import CommentBar from '../common/CommentBar.vue'
import Comment from '../comment/Comment.vue'
export default {
    components: {
        CommentBar,
        Comment

    },
    setup() {
        
    },
}
</script>