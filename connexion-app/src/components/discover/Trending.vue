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
    }
}
</script>