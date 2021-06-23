<template>
    <button type="button" class="btn btn-outline-danger">{{text}}</button>

</template>
<script>
export default {
  props: ['text']
}
</script>
<style scoped>
    .btn-outline-danger{
        border-radius: 20px;
        padding-right: 20px;
        padding-left: 20px;
    }
</style>