<template>
    <div class="container d-none d-lg-block">
        <br>
        Discover
        <div class="row hashtags">
            <DiscoverSideBarDetail 
                 v-for="h in hashtags" 
                :key="h.id" :name="h.name" 
                :id="h.id"
                :icon="h.icon" 
            >
            </DiscoverSideBarDetail>
        </div>
    </div>
</template>

<style src="../../assets/styles/discover.css">

</style>

<script>
import DiscoverSideBarDetail from './DiscoverSideBarDetail'
export default {
    components:{
        DiscoverSideBarDetail
    },
    data(){
       return{
         hashtags: [
             {
                 id: "1",
                 name: "Nanno",
                 icon:"fa-hashtag",
                 views: "375.6k views",
                 caption: "Biến hình cùng hashtag #nanno thành nanno trong “Girl from nowhere” nào!"
             },
             {
                 id: "2",
                 name: "loveu",
                 icon:"fa-hashtag",
                 views: "375.6k views",
                 caption: "Biến hình cùng hashtag #nanno thành nanno trong “Girl from nowhere” nào!"
             },
             {
                 id: "3",
                 name: "bts",
                 icon:"fa-search",
                 views: "375.6k views",
                 caption: "Biến hình cùng hashtag #nanno thành nanno trong “Girl from nowhere” nào!"
             },
             {
                 id: "4",
                 name: "into1",
                 icon:"fa-search",
                 views: "375.6k views",
                 caption: "Biến hình cùng hashtag #nanno thành nanno trong “Girl from nowhere” nào!"
             },
             {
                 id: "5",
                 name: "tothemoon",
                 icon:"fa-music",
                 views: "375.6k views",
                 caption: "Biến hình cùng hashtag #nanno thành nanno trong “Girl from nowhere” nào!"
             }
         ]
       }
    },
    methods:{

    },
    mounted(){
    }
}
</script>