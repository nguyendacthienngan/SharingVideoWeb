<template>
    <div class="container post-card">
        <div class="d-flex" style="flex-direction: column">
            <h2>Users</h2>
            <Account 
                v-for="a in this.searchResult"
                :key="a.id" :name="a.name" 
                :username="a.username" 
                :caption="a.caption" 
                :bg_music="a.bg_music"
                :avatar_img="a.avatar_img"
            >
                
            </Account>
        </div>
        <DiscoveryHashtag title="Discovery"></DiscoveryHashtag>
        <div class="card-body">
            <Post></Post>
        </div>

        <DiscoveryHashtag title="Discovery"></DiscoveryHashtag>
        <div class="card-body">
            <Post></Post>
        </div>
    </div>
    
</template>
<script>
import Account from './Account.vue'
import Post from '../home/Post.vue'
import DiscoveryHashtag from './DiscoveryHashtag.vue'
export default {
    components: {
        Account,
        Post,
        DiscoveryHashtag
    },
    watch: {
        '$route.params.id':{
            handler: function(search) {
                this.id = this.$route.params.id;
                this.search()
            },
            deep: true,
            immediate: true
        }
    },
    data(){
        return{
            id: this.$route.params.id, //this is the id from the browser,
            searchResult: [],
            allUsers:[
        {
                  id: "1",
                  name: "Nguyễn Đắc Thiên Ngân",
                  username: "@ndt_ngan",
                  caption: "Heo Bối is my full name",
                  avatar_img: "woman (1).png",
                  bg_music: "Crazy Frog"
               },
               {
                  id: "2",
                  name: "Nguyễn Lê Bách",
                  username: "@nl_bach",
                  caption: "Bách bạch bạch bạch",
                  avatar_img: "hipster.png",
                  bg_music: "Crazy Frog"
               },
               {
                   id: "3",
                   name: "Chung Thái Dung",
                   username: "@ct_dung",
                   caption: "Solo không?",
                   avatar_img: "woman (4).png",
                   bg_music: "Crazy Frog"
               },
               {
                   id: "4",
                   name: "Tân Hữu Toàn",
                   username: "@th_toan",
                   caption: "Hả gì, ai biết gì đâu",
                   avatar_img: "man.png",
                   bg_music: "Crazy Frog"
               },
               {
                   id: "5",
                   name: "Nguyễn Chí Thành",
                   username: "@nc_thanh",
                   caption: "Hé lô cả nhà iu",
                   avatar_img: "man (1).png",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "6",
                   name: "Phạm Ngọc Thịnh",
                   username: "@pn_thinh",
                   caption: ".",
                   avatar_img: "man (3).png",
                   bg_music: "Crazy Cat"
               },
               {
                   id: "7",
                   name: "Nguyễn Nhật Long",
                   username: "@nn_long",
                   caption: "Mình độc thân",
                   avatar_img: "man (4).png",
                   bg_music: "Crazy Bear"
               },
               {
                   id: "8",
                   name: "Ung Bảo Tiên",
                   username: "@ub_tien",
                   caption: "Tiên Bảo Bảo",
                   avatar_img: "woman.png",
                   bg_music: "Crazy Plant"
               },
               {
                   id: "9",
                   name: "Trương Minh Hiếu",
                   username: "@tm_hieu",
                   caption: "Finn Trương",
                   avatar_img: "hipster.png",
                   bg_music: "Crazy Plant"
               },
               {
                   id: "10",
                   name: "Trần Phương Duy",
                   username: "@tp_duy",
                   caption: "Hiện đang làm việc tại Thegioididong",
                   avatar_img: "man (3).png",
                   bg_music: "Crazy Plant"
               },
               {
                   id: "11",
                   name: "Đinh Ngọc Uyên Phương",
                   username: "@dnu_phuong",
                   caption: "Thèm bún bò",
                   avatar_img: "woman (2).png",
                   bg_music: "Crazy Plant"
               },
               {
                   id: "12",
                   name: "Nguyễn Thị Quỳnh Ngân",
                   username: "@ntq_ngan",
                   caption: "Đặc Đặc, mama ai ni",
                   avatar_img: "woman (3).png",
                   bg_music: "Crazy Plant"
               }
            ],
        }
    },
    methods: {
        search(){
            let allUsers = this.allUsers;
            if(this.id)
            {
                let user = allUsers[this.id - 1]
                if(user)
                {
                    let username = user.username
                    this.searchResult = allUsers.filter(u => u.username.includes(username)) 
                    if (this.searchResult.length == 0)
                        this.searchResult = allUsers
                }
               
            }
            else 
                this.searchResult = allUsers
        }
    },
    mounted(){
        this.$nextTick(() =>{
           this.search()
        })
        window.addEventListener("beforeunload", function(event) { 
            this.search()
        });
    }
}
</script>