<template>
    <div>
        <form class="d-flex form-control input-container "  @submit="onFormSubmit">
            <img src="../../assets/images/Search-Icon.svg" class="icon" width="20px" height="20px">
            <input 
                @input="onSearchChange" 
                @click="showHistory"
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
        showHistory(){
            this.suggestedUsernames.all = this.searchHistory
            this.isHidden = false;
            this.isShowHistory = true;
        },
        onFormSubmit(e) {   
            if (this.currentID >=1)
            {
                this.$router.push({
                    path: `/search/${this.currentID}`
                });
            }
            else
            this.$router.push({
                    path: `/search`
                });
           
        },
        onUserSelected(user) {
            this.currentComment += user.username
            this.isHidden = !this.isHidden
        },
        onSearchChange(e) {
            const val = e.target.value
            if(val){
                for(let u of this.allUsernames){
                    const tempVal = val
                    if(u.username.includes(tempVal)){
                        this.isHidden = false
                        this.generateSuggestedUsernames(tempVal)
                        return
                    }
                    else
                    {
                        this.currentComment = val
                        this.currentID = -1
                        this.suggestedUsernames.current = -1
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
            if(this.suggestedUsernames.current >= 0 || this.isShowHistory)
            {
                if(e.key === "Enter") {
                    if(this.suggestedUsernames.all[this.suggestedUsernames.current]) {
                        this.currentComment =  this.suggestedUsernames.all[this.suggestedUsernames.current].username
                        this.currentID =  this.suggestedUsernames.all[this.suggestedUsernames.current].id
                        this.isSendComment = false
                    }
                    else
                    {
                        this.currentComment = ""
                        this.currentID = -1
                        this.suggestedUsernames.current = -1
                    }
                        
                }
               if(this.isHidden)    this.isSendComment = true
                else    this.isSendComment = false

                this.isHidden = true
                // return
            }
            else
            {
                this.currentComment = ""
                this.currentID = -1
                this.suggestedUsernames.current = -1
            }
            if(e.key === "ArrowUp") 
            {
                this.suggestedUsernames.current --;
                this.isHidden = false
            }

            if(e.key === "ArrowDown")
            {
                this.suggestedUsernames.current ++;
                this.isHidden = false

            }

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
    },
    data: function(){
    return {
            isShowHistory:false,
           isHidden: true,
           isSendComment: false,
           currentComment: "",
           currentID: -1,
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
               current: -1,
           },
           searchHistory:[
               {id:1, username:'ndt_ngan'},
               {id:2, username:'nl_bach'},
               {id:3, username:'ct_dung'},
               {id:4, username:'nc_thanh'},
           ]
        }
    }
}
</script>
