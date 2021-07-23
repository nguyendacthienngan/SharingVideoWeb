<template>
    <div>
           <h2>{{title}}</h2>
            <Hashtag
                v-for="h in trending_result"
                :key="h.id" :name="h.name" 
                :views="h.views" 
                :caption="h.caption" 
            >

            </Hashtag>
    </div>
</template>

<script>
import Hashtag from './Hashtag.vue'
export default {
    components: {
        Hashtag
    },
    props: ['hashtag_name', 'hashtag_icon','title'],
    data(){
        return {
            id: this.$route.params.id,
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
            ],
         trending_result: []
        }
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
    methods: {
        search(){
            let hashtags = this.hashtags;
            if(this.id)
            {
                let hashtag = hashtags[this.id - 1]
                if(hashtag)
                {
                    this.trending_result = hashtags.filter(h => h.id == this.id)
                }
                else
                    this.trending_result = hashtags
            }
            else 
                this.trending_result = hashtags
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