<template>
  <!-- 首页 -->
  <div class="index">
      <img src="@/assets/index/1.jpg" alt="" class="why-img">
      <img src="@/assets/index/2.jpg" alt="" class="more-png">
      <img src="@/assets/index/3.jpg" alt="" class="tu11-png">
      <img src="@/assets/index/4.jpg" alt="" class="tu11-png">
      <img src="@/assets/index/5.jpg" alt="" class="tu11-png">
      <img src="@/assets/index/6.jpg" alt="" class="tu11-png">
     <div class="sqst">
       <div class="sqst-left">
          姓名：
         <input type="text">
         联系方式
         <input type="text">
         简单介绍一下自己让我们更加了解你~
         <textarea class="sqst-text"></textarea>
         什么是你最想了解的，让我们更好为你的到来做准备~
         <textarea class="sqst-text"></textarea>
         <img src="@/assets/zsrx/btn.jpg" alt="" class="btn">
       </div>
       <div class="sqst-rigth">
         <img src="@/assets/index/7.jpg" alt="" class="tu11-png">
       </div>
     </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .index {
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
  }
  .index>img{
    display: block;
    width: 100vw;
    height: auto;
  }
  .sqst{
    width: 1225px;
    overflow: hidden;
    margin: 0 auto;
  }
  .sqst-left{
    width: 430px;
    font-size: 18px;
    color: #5C5D5D;
    float: left;
  }
  .sqst-left *{
    display: block;
    margin: 20px 0;
  }
  .sqst-left input{
    border: 0;
    border-bottom: 1px solid #000;
    outline: none;
    width: 300px;
  }
  .sqst-rigth{
    width: 795px;
    float: left;
  }
  .sqst-rigth img{
    width: 100%;
  }
  .btn{
    width: 275px;
  }
  .sqst-text{
    background: #FFFFFF;
    border: 1px solid #9B9B9B;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height:130px;
  }
</style>
