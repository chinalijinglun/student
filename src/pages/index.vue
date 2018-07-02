<template>
<!-- 首页 -->
    <div class="index">
        <div class="top-img">
            <img src="@/assets/bg_01.png" alt="">
        </div>
        <div class="why">
            <img src="@/assets/why.png" alt="" class="why-img">
            <img src="@/assets/more.png" alt="" class="more-png">
            <img src="@/assets/tu11.png" alt="" class="tu11-png">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .index{
        width: 1920px;
        margin: 0 auto; 
        background-color: #fff;       
    }
    .top-img{
        margin-top: -90px;
    }
    .why{
        position: relative;
        z-index: 1;
        width: 100%;
        height: 1048px;
    }
    .why-img{
        position: absolute;
        top: -80px;
        left: 260px;
    }
    .more-png{
        position: absolute;
        left: 774px;
        top: -95px;
        cursor: pointer;
    }
    .tu11-png{
        position: absolute;
        left: 284px;
        top: 97px;
    }
</style>