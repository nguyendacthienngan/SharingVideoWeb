<template>
    <div>
        <form class="d-flex form-control input-container "  @submit="onFormSubmit">
            <img src="../../assets/images/Search-Icon.svg" class="icon" width="20px" height="20px">
            <input 
                @input="onSearchChange" 
                v-model="currentComment" 
                id="search_in_navbar" 
                class="" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                autocomplete="off">
        </form>
        <div v-if="!isHidden" class="tag-people-component autocomplete">
            <div class="d-flex list-users">
                <div 
                    v-for="u in suggestedUsernames.all" 
                    :key="u.id" 
                    class="d-flex"
                    :class="[u.selected ? 'user-selected' : '']"
                    @click="onUserSelected(u)"
                >
                    <p class="h-100" style="transform: translateY(+20%)">{{ u.username }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style  src="../../assets/styles/search-bar.css"></style>
<script>
export default {
    components: {
        
    },
    methods:{
        onFormSubmit(e) {   
            if(this.currentComment === "" || !this.isSendComment)  return
            this.$router.push('/search')
            //create new comment and clear input after that
            // const newComment = {
            //     id: this.allComments.length,
            //     name: "INT01–刘宇",
            //     username: "@into1_liuyu_",
            //     caption: this.currentComment,
            //     bg_music: "Crazy Frog"
            // }
            // this.allComments.push(newComment)
            // this.currentComment = ""
            
            // //scrol to bottom after submitting comment
            // this.$nextTick(() => {
            //     this.scrollToEnd()
            // })
        },
        onUserSelected(user) {
            this.currentComment += user.username
            this.isHidden = !this.isHidden
            // this.moveViewportToCavetPos()
        },
        onSearchChange(e) {
            const val = e.target.value
            if(val){
                // if(val[val.length-1] === "@")   {
                //     this.isHidden = false
                //     this.generateSuggestedUsernames(val)
                //     return
                // }
                for(let u of this.allUsernames){
                    const tempVal = val
                    if(u.username.includes(tempVal)){
                        this.isHidden = false
                        this.generateSuggestedUsernames(tempVal)
                        return
                    }
                }
            }
            this.isHidden = true
        },
        generateSuggestedUsernames(inputUsername) {
            this.suggestedUsernames.current = 0
            this.suggestedUsernames.all = this.allUsernames.filter(u => u.username.includes(inputUsername))
            if(this.suggestedUsernames.all.length === 0)  this.suggestedUsernames.all = this.allUsernames
            this.suggestedUsernames.all = this.suggestedUsernames.all.slice(0, 3).map((u, i) => {
                u.selected = i===0
                return u
            })
            
        },
        onSelectAnotherUsername(e) {
            if(e.key === "Enter") {
                if(this.suggestedUsernames.all[this.suggestedUsernames.current]) {
                    this.currentComment =  this.suggestedUsernames.all[this.suggestedUsernames.current].username
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
        // this.$nextTick(() => this.scrollToEnd())
    },
    data: function(){
    return {
           isHidden: true,
           isSendComment: false,
           currentComment: "",
           allUsernames: [
               { id: 1, username: "ndt_ngan" },
               { id: 2, username: "nl_bach" },
               { id: 3, username: "ct_dung" },
               { id: 4, username: "th_toan" },
               { id: 5, username: "nc_thanh" },
               { id: 6, username: "pn_thinh" },
               { id: 7, username: "nn_long" },
               { id: 8, username: "ub_tien" },
               { id: 9, username: "tm_hieu" },
               { id: 10, username: "tp_duy" },
               { id: 11, username: "dnu_phuong" },
               { id: 12, username: "ntq_ngan" },
           ],
           suggestedUsernames: {
               all: [],
               current: 0,
           }
        }
    }
}
</script>
