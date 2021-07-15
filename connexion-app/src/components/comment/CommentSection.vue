<template>
    <div>
        <div class="card-body">
            <div class="list-comments" ref="commentContainer">
                <Comment 
                    v-for="c in allComments" 
                    :key="c.id" :name="c.name" 
                    :username="c.username" 
                    :caption="c.caption" 
                    :bg_music="c.bg_music"></Comment>
            </div>
        </div>
        <div class="comment-section container"  style="position: relative">
            <div class="row" style="position: relative">
                <div class="col-10 d-flex">
                    <button width="20px" height="20px" class="icon-button" @click="showSuggestions">
                        <i class="fa fa-at"></i>
                    </button>
                    <form class="d-flex" style="flex: 1" @submit="onFormSubmit">
                        <!-- <img src="../../assets/images/Search-Icon.svg" class="icon" width="20px" height="20px"> -->
                        <div class="d-flex form-control input-container comment-bar mr-3">
                            <input 
                                ref="commentInput"
                                v-model="currentComment" 
                                id="search_in_navbar" 
                                type="search" 
                                placeholder="Comment" 
                                aria-label="Comment"
                                autocomplete="off"
                                spellcheck="false"
                            >
                        </div>
                        <span class=" row align-items-center post-button h-100" style="cursor:pointer">
                            <b class="col">Post</b>
                        </span>
                    </form>
                </div>
                <div class="col-2">
                    
                </div>
                <div v-if="!isHidden" class="tag-people-component">
                    <div class="d-flex list-users">
                        <div 
                            v-for="u in allUsernames" 
                            :key="u.id" 
                            class="d-flex"
                            :class="[u.selected ? 'user-selected' : '']"
                            @click="onUserSelected(u)"
                        >
                            <img src="../../assets/images/Account.png" width="41px" height="41px">
                            <p>{{ u.username }}</p>
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
    methods: {
        scrollToEnd() {
            const content = this.$refs.commentContainer;
            content.scrollTop = content.scrollHeight
        },
        onFormSubmit(e) {   
            if(this.currentComment === "")  return

            //create new comment and clear input after that
            const newComment = {
                id: this.allComments.length,
                name: "INT01–刘宇",
                username: "@into1_liuyu_",
                caption: this.currentComment,
                bg_music: "Crazy Frog"
            }
            this.allComments.push(newComment)
            this.currentComment = ""
            
            //scrol to bottom after submitting comment
            this.$nextTick(() => {
                this.scrollToEnd()
            })
        },
        showSuggestions() {
            this.isHidden = !this.isHidden
            this.moveViewportToCavetPos()
        },
        onUserSelected(user) {
            this.currentComment += user.username
            this.isHidden = !this.isHidden
            this.moveViewportToCavetPos()
        },
        moveViewportToCavetPos() {
            this.$nextTick(() =>{
                const commentInput = this.$refs.commentInput
                commentInput.focus()
                commentInput.selectionStart = commentInput.selectionEnd = this.currentComment.length;
            })
        }
    },
    mounted() {
        // window.addEventListener('keydown', this.onSelectAnotherUsername)

        //scrol to bottom at first render
        this.$nextTick(() => this.scrollToEnd())
    },
    data: function(){
       return {
           isHidden: true,
        //    isSendComment: false,
           currentComment: "",
           allComments: [
               {
                   id: "1",
                   name: "INTO1–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Frog"
               },
               {
                   id: "2",
                   name: "INTO1–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Dog"
               },
               {
                   id: "3",
                   name: "INTO1–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Pig"
               },
               {
                   id: "4",
                   name: "INT01–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "5",
                   name: "INT01–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "6",
                   name: "INT06–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "7",
                   name: "INT07–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Bear"
               },
               {
                   id: "INTO8–刘宇",
                   name: "INT08–刘宇",
                   username: "@into1_liuyu_",
                   caption: "Super Cool",
                   bg_music: "Crazy Plant"
               }
           ],
           allUsernames: [
               { id: 1, username: "@ndt_ngan" },
               { id: 2, username: "@nl_bach" },
               { id: 3, username: "@ct_dung" },
               { id: 4, username: "@th_toan" },
               { id: 5, username: "@nc_thanh" },
               { id: 6, username: "@pn_thinh" },
               { id: 7, username: "@nn_long" },
               { id: 8, username: "@ub_tien" },
               { id: 9, username: "@tm_hieu" },
               { id: 10, username: "@tp_duy" },
               { id: 11, username: "@dnu_phuong" },
               { id: 12, username: "@ntq_ngan" },
           ]
        }
    }
}
</script>