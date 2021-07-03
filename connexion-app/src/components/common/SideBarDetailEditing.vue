<template >
    <div v-if="filename !=='Logo.png'" class="text-center nav-component hide-for-small-screen align-self-center" :id="id" @click="$emit('toggle-click', 0)">
        <div v-b-modal.modal-1 v-if="filename == 'Add-Icon.svg'">
            <svg width="41" height="41" viewBox="0 0 71 71" fill="white" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35.5" cy="35.5" r="34.75" stroke="black" stroke-width="1.5"/>
                <line x1="17" y1="35" x2="54" y2="35" stroke="black" stroke-width="4"/>
                <line x1="36" y1="20" x2="36" y2="51" stroke="black" stroke-width="4"/>
            </svg>
            <b-modal id="modal-1" title="BootstrapVue">
                <DropAnImage />
                <!-- <p class="my-4">Hello from modal!</p> -->
            </b-modal>
        </div>
        
        <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
        
        <div v-if="filename == 'Filter-Icon.svg'">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="41" height="41" viewBox="0 0 296 296">
                <image x="41" y="47" width="210" height="198" xlink:href="data:img/png;base64,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"/>
            </svg>
        </div>
        <div v-if="filename == 'Folder-Icon.svg'">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="41" height="41" viewBox="0 0 250 250">
                <image y="22" width="250" height="206" xlink:href="data:img/png;base64,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"/>
            </svg>
        </div>
        <div v-if="filename == 'Record-Icon.svg'">
            <svg width="41" height="41" viewBox="0 0 74 71" fill="white" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="16.75" width="53.5" height="38.5" rx="9.25" stroke="black" stroke-width="1.5"/>
                <path d="M70.75 51.4459L56.0358 36L70.75 20.5541L70.75 51.4459Z" stroke="black" stroke-width="1.5"/>
            </svg>
        </div>
        <div class="">
           {{text}}
        </div>

    </div>
    <div v-else class="text-center nav-component align-self-center" id="logo">
        <router-link to="/">
            <img :src="require(`../../assets/images/${filename}`)" width="80px" height="83px" id="logo-img"/>
        </router-link>
        <div class="">
           {{text}}
        </div>
    </div>
    
</template>
<script>
import DropAnImage from './DropAnImage.vue'
export default {
    components:{
        DropAnImage
    },
    props: ['filename', 'text', 'is_active', 'id']

}
</script>
<style>
    .hide-for-small-screen:hover{
        background-color: black;
        fill: white;
        color: white;
        stroke: white;
    }
    .hide-for-small-screen div svg:hover{
        fill: white;
        color: white;
        stroke: white;
    }
    .nav-component{
        cursor: pointer;
    }
</style>