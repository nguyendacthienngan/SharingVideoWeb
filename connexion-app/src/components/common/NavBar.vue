<template>
  <header class="blog-header">
    <div class="container">
        <div class="row  justify-content-between align-items-center">
          <div class="col-4 pt-1 order-md-1 order-1">
            <router-link to="/" id="navbar-brand" class="navbar-brand">
              <img src="../../assets/images/Logo_With_Name.svg" width="116px" height="50px">
            </router-link>
          </div>
          <div class="col-md-4 order-md-2 order-4 d-none d-md-block">
            <SearchBar></SearchBar>
            
          </div>
          <div class="col-4 d-flex justify-content-end order-2 d-md-none">
            <button v-on:click="toggle" class="d-md-none menu-toggle">
              <span class="fa fa-bars d-md-none"></span>
            </button>
          </div>
          <div class="col-md-4 d-flex  order-md-3 order-3 nav-bar-buttons-container">
            
            <div id="nav-bar-buttons" class="nav-bar-buttons">
              <router-link to="/editing">
                <svg width="39" height="31" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.494 10.3358C30.6916 3.15523 23.4095 -1.20452 16.2289 0.597963C10.6175 2.00661 6.54299 6.85647 6.12318 12.6267C2.13883 13.2838 -0.558497 17.0463 0.0985656 21.0307C0.682664 24.5728 3.7519 27.1668 7.34179 27.1526H13.4349V24.7154H7.34179C4.64972 24.7154 2.46733 22.533 2.46733 19.8409C2.46733 17.1488 4.64972 14.9664 7.34179 14.9664C8.01485 14.9664 8.56041 14.4209 8.56041 13.7478C8.55432 7.69061 13.4598 2.77533 19.517 2.76931C24.7604 2.76405 29.2741 6.47093 30.2883 11.6152C30.3885 12.1289 30.8053 12.5213 31.3242 12.5901C34.6557 13.0646 36.9718 16.1499 36.4974 19.4813C36.0714 22.4729 33.5172 24.7003 30.4955 24.7154H25.621V27.1526H30.4955C35.2067 27.1384 39.0142 23.3076 38.9999 18.5965C38.988 14.6748 36.3037 11.2664 32.494 10.3358Z" fill="black"/>
                  <path d="M18.6628 15.3199L13.7883 20.1944L15.5066 21.9126L18.3094 19.122V30.8085H20.7466V19.122L23.5373 21.9126L25.2555 20.1944L20.381 15.3199C19.9057 14.8474 19.1381 14.8474 18.6628 15.3199Z" fill="black"/>
                </svg>
              </router-link>
              <a class="text-muted" href="#">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M27.293 17.4557V14.2773C27.293 9.64073 24.2111 5.71087 19.9884 4.4273V2.98828C19.9884 1.34054 18.6478 0 17.0001 0C15.3523 0 14.0118 1.34054 14.0118 2.98828V4.4273C9.78902 5.71087 6.70711 9.64066 6.70711 14.2773V17.4557C6.70711 21.5285 5.15466 25.3904 2.33578 28.3301C2.05953 28.6182 1.98191 29.0432 2.13849 29.4103C2.29508 29.7774 2.65566 30.0156 3.05477 30.0156H12.1198C12.5825 32.2862 14.5949 34 17.0001 34C19.4053 34 21.4176 32.2862 21.8803 30.0156H30.9454C31.3445 30.0156 31.705 29.7774 31.8616 29.4103C32.0182 29.0432 31.9406 28.6182 31.6644 28.3301C28.8455 25.3904 27.293 21.5284 27.293 17.4557ZM16.004 2.98828C16.004 2.43904 16.4508 1.99219 17.0001 1.99219C17.5493 1.99219 17.9962 2.43904 17.9962 2.98828V4.03272C17.6683 4.00111 17.3361 3.98438 17.0001 3.98438C16.6641 3.98438 16.3318 4.00111 16.004 4.03272V2.98828ZM17.0001 32.0078C15.7015 32.0078 14.5943 31.175 14.1831 30.0156H19.817C19.4058 31.175 18.2987 32.0078 17.0001 32.0078ZM5.20168 28.0234C7.47018 24.9826 8.6993 21.3026 8.6993 17.4557V14.2773C8.6993 9.70029 12.423 5.97656 17.0001 5.97656C21.5771 5.97656 25.3009 9.70029 25.3009 14.2773V17.4557C25.3009 21.3026 26.53 24.9826 28.7985 28.0234H5.20168Z" fill="black"/>
                  <path d="M29.9492 14.2773C29.9492 14.8275 30.3952 15.2734 30.9453 15.2734C31.4954 15.2734 31.9414 14.8275 31.9414 14.2773C31.9414 10.2863 30.3872 6.53418 27.5652 3.71211C27.1762 3.32317 26.5455 3.3231 26.1565 3.71211C25.7675 4.10112 25.7675 4.73178 26.1565 5.12079C28.6023 7.56659 29.9492 10.8184 29.9492 14.2773Z" fill="black"/>
                  <path d="M3.05469 15.2735C3.6048 15.2735 4.05078 14.8275 4.05078 14.2774C4.05078 10.8186 5.39777 7.56671 7.84351 5.1209C8.23252 4.73189 8.23252 4.10123 7.84351 3.71223C7.45457 3.32322 6.82384 3.32322 6.43483 3.71223C3.61277 6.53429 2.05859 10.2864 2.05859 14.2774C2.05859 14.8275 2.50458 15.2735 3.05469 15.2735Z" fill="black"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="34" height="34" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
              <a class="text-muted" href="#">
                <img src="../../assets/images/Account.png" width="41px" height="41px">
              </a>
            </div>
           
          </div>
        </div>
    </div>
  </header>
</template>
<style src="../../assets/styles/navbar.css"></style>
<script>
import SearchBar from '../common/SearchBar.vue'
export default {
  data(){
    return{
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
      suggestedAccounts: [
                {
                  id: "1",
                  name: "INTO1–刘宇",
                  username: "@into1_liuyu_",
                  caption: "Super Cool",
                  avatar_img: "Liuyu.png",
                  bg_music: "Crazy Frog"
               },
               {
                  id: "2",
                  name: "INTO1-周柯宇",
                  username: "@into1_daniel",
                  caption: "Daniel 周柯宇",
                  avatar_img: "ZhouKeYu.png",
                  bg_music: "Crazy Frog"
               },
               {
                   id: "3",
                   name: "INTO1–林墨",
                   username: "@into1_linmo_",
                   caption: "Phi thường hoàn mỹ",
                   avatar_img: "Momo.png",
                   bg_music: "Crazy Frog"
               }
      ]
    }
  },
  components: {
    SearchBar
  },
  methods:{
    toggle: function (event) {
      // alert("Hello")
      var navbarButtons = document.getElementById('nav-bar-buttons')
      if (window.innerWidth <= 768)
      {
        if (navbarButtons.style.display == "block")
          navbarButtons.style.display = "none"
        else 
          navbarButtons.style.display = "block"
      }
      else
        navbarButtons.style.display = "block"
    }
  },
  mounted(){
    window.addEventListener('resize', resizeDetected);
    var navBarButtons = document.getElementById('nav-bar-buttons')
    function resizeDetected(){
      if (window.innerWidth > 768)
        navBarButtons.style.display = "block"
      else 
      {
        navBarButtons.style.display = "none"
      }
    }
  }
}
</script>