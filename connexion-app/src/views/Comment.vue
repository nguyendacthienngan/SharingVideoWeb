<template>
    <div class="row comment-view">
        <div class="col-md-6 order-2 order-md-1 left-video">
            <router-link to="/" class="d-none d-sm-block">
                 <span class="fa fa-times fa-2x exit-button"></span>
            </router-link>
            <img src="../assets/images/sample/Image_2.png" class="w-100">
            <div class="d-sm-none container">
                <CommentSection></CommentSection>
                <br>
            </div>
        </div>
        <div class="col-md-6 order-1 order-md-2 right-post">
            <div class="container">
                <div class="card non-border">
                    <div class="card-header container bg-white ">
                        <PostCaption name="INTO1–刘宇" username="@into1_liuyu_" caption="Relatively cool" bg_music="Crazy Frog"></PostCaption>
                        <router-link to="/" class="d-sm-none">
                            <span class="fa fa-times fa-2x exit-button"></span>
                        </router-link>
                        <br>
                    </div>
                    <div class="card non-border">
                        <div class="card-header container bg-white">
                            <div class="row">
                                <div class="col text-center">
                                    <span class="liked-text">
                                        +1
                                    </span>
                                    <svg id="like-button" class="button" @click="likeFunction"  width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.9">
                                        <circle cx="24" cy="24" r="24" fill="#F1F1F2"/>
                                        <g filter="url(#filter0_d)">
                                        <path d="M22.2155 36.1996C22.9842 36.7484 24.0158 36.7484 24.7845 36.1996C28.6266 33.4568 32.3058 30.3014 34.851 26.2634C36.1261 24.2405 36.6605 22.6045 36.8707 21.2667C36.9556 20.7957 37 20.3097 37 19.8129C37 15.498 33.6512 12 29.5203 12C27.0516 12 24.8622 13.2493 23.5 15.1756C22.1378 13.2493 19.9484 12 17.4797 12C13.3488 12 10 15.498 10 19.8129C10 20.3097 10.0444 20.7957 10.1292 21.2667C10.3395 22.6045 10.8739 24.2405 12.149 26.2634C14.6942 30.3014 18.3734 33.4568 22.2155 36.1996Z" fill="black"/>
                                        <path d="M22.2155 32.9155C22.9842 33.4643 24.0158 33.4643 24.7845 32.9155C29.0141 30.6338 30.5352 29.8732 34.851 26.2634C36.1261 24.2405 36.6605 22.6045 36.8707 21.2667C36.9556 20.7957 37 20.3097 37 19.8129C37 15.498 33.6512 12 29.5203 12C27.0516 12 24.8622 13.2493 23.5 15.1756C22.1378 13.2493 19.9484 12 17.4797 12C13.3488 12 10 15.498 10 19.8129C10 20.3097 10.0444 20.7957 10.1292 21.2667C10.3395 22.6045 10.8739 24.2405 12.149 26.2634C16.8451 29.8732 18.3662 30.6338 22.2155 32.9155Z" fill="black"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d" x="6" y="8.33" width="35" height="32.6112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dy="0.33"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                        </filter>
                                        </defs>
                                    </svg>
                                    <!-- <img id="like-button" class="button" @click="likeFunction" src="../assets/images/Like-Icon.svg" width="48px" height="48px"> -->
                                    <span class="numbers">{{likes}}</span>
                                </div>
                                <div class="col text-center">
                                    <svg id="comment-button" class="button" @click="commentFunction" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.9">
                                        <circle cx="24" cy="24" r="24" fill="#F1F1F2"/>
                                        <g filter="url(#filter0_d)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7501 33.3695C24.6669 33.3708 24.5835 33.3714 24.5 33.3714C17.0442 33.3714 11 28.3634 11 22.1857C11 16.008 17.0442 11 24.5 11C31.9558 11 38 16.008 38 22.1857C38 23.7481 37.6134 25.2356 36.9152 26.5863C35.9784 28.4958 34.5325 30.1999 32.9641 31.67C30.5745 33.91 27.8095 35.6008 25.8406 36.5538C25.3198 36.8059 24.7501 36.4112 24.7501 35.8615V33.3695ZM19.8714 22.7643C19.8714 23.8294 19.008 24.6929 17.9429 24.6929C16.8777 24.6929 16.0143 23.8294 16.0143 22.7643C16.0143 21.6992 16.8777 20.8357 17.9429 20.8357C19.008 20.8357 19.8714 21.6992 19.8714 22.7643ZM24.5 24.6929C25.5651 24.6929 26.4286 23.8294 26.4286 22.7643C26.4286 21.6992 25.5651 20.8357 24.5 20.8357C23.4349 20.8357 22.5714 21.6992 22.5714 22.7643C22.5714 23.8294 23.4349 24.6929 24.5 24.6929ZM32.9857 22.7643C32.9857 23.8294 32.1223 24.6929 31.0571 24.6929C29.992 24.6929 29.1286 23.8294 29.1286 22.7643C29.1286 21.6992 29.992 20.8357 31.0571 20.8357C32.1223 20.8357 32.9857 21.6992 32.9857 22.7643Z" fill="black"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 33.3714C31.9558 33.3714 38 28.3634 38 22.1857C38 16.008 31.9558 11 24.5 11C17.0442 11 11 16.008 11 22.1857C11 28.3634 17.0442 33.3714 24.5 33.3714ZM17.9429 24.6929C19.008 24.6929 19.8714 23.8294 19.8714 22.7643C19.8714 21.6992 19.008 20.8357 17.9429 20.8357C16.8777 20.8357 16.0143 21.6992 16.0143 22.7643C16.0143 23.8294 16.8777 24.6929 17.9429 24.6929ZM26.4286 22.7643C26.4286 23.8294 25.5651 24.6929 24.5 24.6929C23.4349 24.6929 22.5714 23.8294 22.5714 22.7643C22.5714 21.6992 23.4349 20.8357 24.5 20.8357C25.5651 20.8357 26.4286 21.6992 26.4286 22.7643ZM31.0571 24.6929C32.1223 24.6929 32.9857 23.8294 32.9857 22.7643C32.9857 21.6992 32.1223 20.8357 31.0571 20.8357C29.992 20.8357 29.1286 21.6992 29.1286 22.7643C29.1286 23.8294 29.992 24.6929 31.0571 24.6929Z" fill="black"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d" x="7" y="7.33" width="35" height="33.6316" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dy="0.33"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                        </filter>
                                        </defs>
                                    </svg>

                                    <!-- <img id="comment-button" class="button" @click="commentFunction" src="../assets/images/Comment-Icon.svg" width="48px" height="48px"> -->
                                    <span class="numbers">{{comments}}</span>
                                </div>
                                <div class="col text-center">
                                    <svg class="button" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="24" fill="#F1F1F2"/>
                                        <path d="M35.7677 24.7806C36.0704 24.5203 36.0784 24.0705 35.7852 23.8006L26.4289 15.1897C25.9819 14.7784 25.2352 15.08 25.2352 15.6719V19.2665C21.7379 19.215 19.1104 20.086 17.1578 21.4209C15.1746 22.7765 13.9111 24.5944 13.1324 26.3564C12.3545 28.1168 12.0547 29.8341 12.007 31.0116C11.9835 31.5922 12.0198 32.0715 12.1072 32.3643C12.1295 32.4391 12.1597 32.5177 12.2031 32.5871C12.2413 32.6482 12.322 32.7547 12.4688 32.7991C12.6454 32.8526 12.7952 32.784 12.8821 32.713C12.9605 32.6489 13.0132 32.5662 13.0497 32.4968L13.0543 32.488L13.058 32.4797L13.0584 32.4789L13.0593 32.477L13.0665 32.4621C13.0734 32.4479 13.0847 32.4255 13.1007 32.3956C13.1327 32.3359 13.1834 32.2463 13.2556 32.1335C13.3999 31.9077 13.6297 31.5889 13.9663 31.2284C14.6386 30.5082 15.739 29.6189 17.4432 28.9698C18.4132 28.6003 20.0301 28.4322 21.6154 28.4049C23.1282 28.379 24.5391 28.482 25.2352 28.6282V32.3281C25.2352 32.9092 25.9585 33.2153 26.4114 32.8258L35.7677 24.7806Z" fill="black"/>
                                    </svg>

                                    <!-- <img class="button" src="../assets/images/Share-Icon.svg" width="48px" height="48px"> -->
                                    <span class="numbers">5555</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-none d-sm-block">
                        <CommentSection></CommentSection>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>
<script>
import PostCaption from '../components/home/PostCaption.vue'
import CommentSection from '../components/comment/CommentSection.vue'
import $ from 'jquery'
export default {
    components: {
        PostCaption,
        CommentSection
    },
    data(){
        return {
            likes: 0,
            comments : 0,
        }
    },
    methods: {
        async likeFunction(){
            var element = document.getElementById("like-button");
            element.classList.add("active-button");
            this.likes = this.likes + 1;
            $( "span.liked-text" ).toggleClass( "press", 1000 );
            await new Promise(r => setTimeout(r, 1000));
            $( "span.liked-text" ).removeClass( "press");
        },
        commentFunction(){
            //comment-form
            $('#comment-form').focus()

            $('#post-button').focus()
        }
    },
    mounted(){
        $('.button').mouseenter(function(i,obj){
            ($(this)).find('circle').css("fill", "white");
            ($(this)).find('path').css("fill", "#FE2C55");
        })
        $('.button').mouseleave(function(i,obj){
            // alert("Hi")
            ($(this)).find('circle').css("fill", "#F1F1F2");
            ($(this)).find('path').css("fill", "black");
        })
        
    }
}
</script>
<style src="../assets/styles/comment.css">
</style>
<style src="../assets/styles/comment-view.css">

</style>