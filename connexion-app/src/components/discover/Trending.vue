<template>
    <div class="d-flex " style="flex-direction: column">
        <Trend></Trend>
        <Trend></Trend>
        <Trend></Trend>
    </div>
</template>

<script>
import Trend from './Trend.vue'
export default {
    components: {
        Trend,
    },
    methods:{
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    watch: {
        '$route.params.id':{
            handler: function(search) {
                this.scrollToTop()
            },
            deep: true,
            immediate: true
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.scrollToTop()
        }) 
    }
}
</script>