<template>
     <div class="hashtag_discover">
         <div class="bg-white non-border">
            <div class="d-flex">
                <img src="../../assets/images/Hashtag_Big.svg" width="80px" height="90px" class="m-r-10">
                <div class="container">
                    <div class="row" style="position: relative">
                        <div class="col-11"  style="position: relative">
                            <h3 style="margin-bottom: 0"><b>#nanno</b></h3>
                            <p style="margin-bottom: 0">375.6k views</p> 
                            <p>Biến hình cùng hashtag #nanno thành nanno trong “Girl from nowhere” nào!</p>
                        </div>
                        <div class="col-1">
                            
                        </div>
                         <button class="btn btn-danger btn-see-more" >
                            See more
                        </button>
                        
                    </div>
                </div>
                
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    props: ['hashtag_name', 'hashtag_icon']
}
</script>
<style>
.hashtag_discover{
}
.btn-see-more{
    position: absolute;
    right: 0px;
    top: 12px;
}

@media only screen and (max-width: 576px) {
    .btn-see-more{
        position: relative !important;
    }
}
.btn-see-more{
    background-color: white !important;
    color: red !important;
    border-radius: 50px !important;
    padding-top: 2px !important; 
    padding-bottom: 2px !important;
    font-weight: 600 !important;
}
</style>