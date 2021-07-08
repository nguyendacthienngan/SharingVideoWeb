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
                <div class="col-10">
                    <form class="d-flex" @submit="onFormSubmit">
                        <span class="fa fa-at icon"  width="20px" height="20px" style="cursor:pointer">

                        </span>
                        <!-- <img src="../../assets/images/Search-Icon.svg" class="icon" width="20px" height="20px"> -->
                        <div class="d-flex form-control input-container comment-bar mr-3">
                            <input 
                                @input="onCommentChange" 
                                v-model="currentComment" 
                                id="search_in_navbar" 
                                type="search" 
                                placeholder="Comment" 
                                aria-label="Comment"
                                autocomplete="off">
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
                            v-for="u in suggestedUsernames.all" 
                            :key="u.id" 
                            class="d-flex"
                            :class="[u.selected ? 'user-selected' : '']"
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
            if(this.currentComment === "" || !this.isSendComment)  return
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
            this.$nextTick(() => this.scrollToEnd())
        },
        onCommentChange(e) {
            const val = e.target.value
            if(val){
                if(val[val.length-1] === "@")   {
                    this.isHidden = false
                    this.generateSuggestedUsernames(val)
                    return
                }
                for(let u of this.allUsernames){
                    const tempVal = "@" + val.split("@")[1]
                    if(u.username.includes(tempVal)){
                        this.isHidden = false
                        this.generateSuggestedUsernames(tempVal)
                        return
                    }
                }
            }
            this.isHidden = true
        },
        generateSuggestedUsernames(tagUsername) {
            this.suggestedUsernames.current = 0
            this.suggestedUsernames.all = this.allUsernames.filter(u => u.username.includes(tagUsername))
            if(this.suggestedUsernames.all.length === 0)  this.suggestedUsernames.all = this.allUsernames
            this.suggestedUsernames.all = this.suggestedUsernames.all.slice(0, 3).map((u, i) => {
                u.selected = i===0
                return u
            })
        },
        onSelectAnotherUsername(e) {
            if(e.key === "Enter") {
                if(this.suggestedUsernames.all[this.suggestedUsernames.current] && this.currentComment.indexOf("@") === this.currentComment.length - 1) {
                    this.currentComment = this.currentComment.split("@")[0] + "@" + this.suggestedUsernames.all[this.suggestedUsernames.current].username.slice(1)
                    this.isSendComment = false
                }
                if(this.isHidden)    this.isSendComment = true
                else    this.isSendComment = false

                this.isHidden = true
                return
            }


            if(e.key === "ArrowUp") this.suggestedUsernames.current --
            if(e.key === "ArrowDown") this.suggestedUsernames.current ++

            if(this.suggestedUsernames.current < 0) this.suggestedUsernames.current=2
            if(this.suggestedUsernames.current > 2) this.suggestedUsernames.current=0
            
            this.suggestedUsernames.all = this.suggestedUsernames.all.map((u, i) => {
                u.selected = i===this.suggestedUsernames.current
                return u
            })
        }
    },
    mounted() {
        window.addEventListener('keydown', this.onSelectAnotherUsername)

        //scrol to bottom at first render
        this.$nextTick(() => this.scrollToEnd())
    },
    data: function(){
       return {
           isHidden: true,
           isSendComment: false,
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
           ],
           suggestedUsernames: {
               all: [],
               current: 0,
           }
        }
    }
}
</script>