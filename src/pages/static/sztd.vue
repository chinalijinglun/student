<template>
  <!-- 首页 -->
  <div class="index">
    <img src="@/assets/sztd/sztdtop.png" alt="" class="why-img">
    <div class="xbfzr">
      <img src="@/assets/sztd/sztdxue.png" alt="" class="why-img" style="width: 993px;height: 193px;margin-left: 200px;">
      <swiper :options="swiperOption" @slideChange="changeSwiperIndex" ref="mySwiper">
        <swiper-slide><img src="@/assets/sztd/yy.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/sztd/sx.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/sztd/shkx.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/sztd/kx.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/sztd/sjyy.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/sztd/xyzd.png" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <img src="@/assets/sztd/sztdjsfc.png" alt="" class="why-img">
      <div class="jsfc">
        <div class="jsfc-main">
          <div class="jsfc-main-header">
            <ul>
              <li v-for="(item, index) in subject" @click="addClass(index)" :class="{ active:index==current}">
                {{item}}
              </li>
            </ul>
          </div>
          <div class="jsfc-main-contain">
            <ul class="flex" v-if="current == 0">
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic1.png" alt="" class="">
                </span>
                <span class="name">
                  Kelsey Brazil
                </span>
                <span class="introduce">
                  英国名校硕士</br>
                    AP认证教师
                </span>
              </li>
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic2.png" alt="" class="">
                </span>
                <span class="name">
                  Mark Robertson
                </span>
                <span class="introduce">
                  11年教龄</br>
                    教育学、文学硕士
                </span>
              </li>
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic3.png" alt="" class="">
                </span>
                <span class="name">
                  Jacqueline Zimmer
                </span>
                <span class="introduce">
                  12年教龄</br>
博士学位</br>
善于引导和培养学生批判性思维
                </span>
              </li>
            </ul>
            <ul class="flex" v-if="current == 1">
            <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic22.png" alt="" class="">
                </span>
              <span class="name">
                  Patrcia Stuhl
                </span>
              <span class="introduce">
                  18年教龄 教育学硕士</br>
                获得终身教学职位
                </span>
            </li>
            <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic21.png" alt="" class="">
                </span>
              <span class="name">
                  Brad Hallam
                </span>
              <span class="introduce">
                  16年教龄</br>
                教育学硕士
                </span>
            </li>
            <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic23.png" alt="" class="">
                </span>
              <span class="name">
                  William Altig
                </span>
              <span class="introduce">
                  18年教龄</br>
                休斯顿大学教育学硕士</br>
                波特兰州大学经济学学士
                </span>
            </li>
          </ul>
            <ul class="flex" v-if="current == 2">
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic31.png" alt="" class="">
                </span>
                <span class="name">
                  Stephen Giannotti
                </span>
                <span class="introduce">
                  特许学校老师</br>
美国佛吉尼亚大学教育学硕士
                </span>
              </li>
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic32.png" alt="" class="">
                </span>
                <span class="name">
                  Jennifer Reid
                </span>
                <span class="introduce">
                  21年教龄</br>
教育学硕士</br>
教师培训师
                </span>
              </li>
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic33.png" alt="" class="">
                </span>
                <span class="name">
                  Peter Farber
                </span>
                <span class="introduce">
                  22年教龄</br>
国际学校校长
                </span>
              </li>
            </ul>
            <ul class="flex" v-if="current == 3">
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic41.png" alt="" class="">
                </span>
                <span class="name">
                  Trent Baldwin
                </span>
                <span class="introduce">
                  AP认证教师</br>
根据学生的学习情况</br>
有计划性地进行辅导提分
                </span>
              </li>
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic42.png" alt="" class="">
                </span>
                <span class="name">
                  Rebekah Cordeiro
                </span>
                <span class="introduce">
                  教育学硕士</br>
美国科学、化学教师协会成员</br>
                </span>
              </li>
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic43.png" alt="" class="">
                </span>
                <span class="name">
                  Donna Davis
                </span>
                <span class="introduce">
                  10年教龄 </br>
教育学硕士
                </span>
              </li>
            </ul>
            <ul class="flex" v-if="current == 4">
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic51.png" alt="" class="">
                </span>
                <span class="name">
                  Tanya Brown
                </span>
                <span class="introduce">
                  30年教龄</br>
大学教师</br>
                </span>
              </li>
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic52.png" alt="" class="">
                </span>
                <span class="name">
                  Ernesto Carassai
                </span>
                <span class="introduce">
                  近20年教龄</br>
累积语言教学7000小时</br>
成功教授全球超过1200名学生
                </span>
              </li>
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic53.png" alt="" class="">
                </span>
                <span class="name">
                  Tatyana Davtyan
                </span>
                <span class="introduce">
                  10年教龄</br>
大学英语，法语教师
                </span>
              </li>
            </ul>
            <ul class="flex" v-if="current == 5">
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic61.png" alt="" class="">
                </span>
                <span class="name">
                  Kristin Espinar
                </span>
                <span class="introduce">
                  10年教龄</br>
英语语言认证委员会官方评审</br>
美国教育考试服务中心托福阅卷老师
                </span>
              </li>
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic62.png" alt="" class="">
                </span>
                <span class="name">
                  Dr. Murray Fortner
                </span>
                <span class="introduce">
                  30年教龄 博士学位 </br>
大学教授、系主任 </br>
出版众多学术文章、协助出版教科书
                </span>
              </li>
              <li>
                <span class="pic">
                  <img src="@/assets/sztd/pic63.png" alt="" class="">
                </span>
                <span class="name">
                  Sarah White
                </span>
                <span class="introduce">
                  35年教龄</br>
大学老师</br>
圣地亚哥州大学课程设计与教育硕士
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/sztd/footers.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        subject:[
          '英语',
          '数学',
          '社会科学',
          '科学',
          '世界语言',
          '学业指导',
        ],
        actIndex:'0',
        current:'0',
        swiperOption: {
          direction: 'vertical',
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
              if(index == 0){
                return '<span class="' + className + '">' + '<span class="langeage">英语</span><span class="cricle"></span>' +
                  '</span>';
              }
              if(index == 1){
                return '<span class="' + className + '">' + '<span class="langeage">数学</span><span class="cricle"></span>' + '</span>';
              }
              if(index == 2){
                return '<span class="' + className + '">' + '<span class="langeage">社会科学</span><span class="cricle"></span>' + '</span>';
              }
              if(index == 3){
                return '<span class="' + className + '">' + '<span class="langeage">科学</span><span class="cricle"></span>' + '</span>';
              }
              if(index == 4){
                return '<span class="' + className + '">' + '<span class="langeage">世界语言</span><span class="cricle"></span>' + '</span>';
              }
              if(index == 5){
                return '<span class="' + className + '">' + '<span class="langeage">学业指导</span><span class="cricle"></span>' + '</span>';
              }
            }
          }
        }
      }
    },
    created(){
    },
    methods:{
      changeSwiperIndex(){
        const that = this;
        that.actIndex = this.$refs.mySwiper.swiper.activeIndex;
      },
      addClass:function(index){
        this.current = index;
        console.log(this.current)
      }
    }
  }
</script>

<style scoped>
  ul{
    list-style: none;
  }
  .swiper-container {
    height: 900px;
    width: 100%;
  }
  .index {
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
  }
  .index>img,.why-img{
    display: block;
    width: 100vw;
    height: auto;
  }
  .jsfc{
    width: 100%;
    background: #F0F5FA;
  }
  .jsfc-main{
    width: 1400px;
    height: 700px;
    margin: 0 auto;
  }
  .jsfc-main-header{
    overflow: hidden;
  }
  .jsfc-main-header>ul>li{
    float: left;
    width: 200px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background: #0B6F97;
    border-radius: 49px;
    margin: 0 16px;
    font-size: 30px;
    color: #FFFFFF;
  }
  li.active{
    background: #FF8200!important;
  }
  .jsfc-main-contain{
    width: 100%;
    height: 572px;
  }
  .flex{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 572px;
  }
  .flex li{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 0 50px;
  }
  .flex li>span{
    display: block;
    text-align: center;
  }
  .pic{
    width: 261px;
    height: 261px;
    border-radius: 100%;
    margin: 100px 55px 0 55px;
  }
  .name{
    margin: 10px 0;
    font-size: 36px;
    color: #333333;
  }
  .introduce{
    font-size: 24px;
    color: #666666;
    line-height: 45px;
  }
</style>
