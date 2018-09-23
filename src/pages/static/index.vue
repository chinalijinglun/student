<template>
  <!-- 首页 -->
  <div class="index">
    <img src="@/assets/index/1.jpg" alt="" class="why-img">
    <div class="second commond">
      <div class="tu11"><img src="@/assets/index/tu11.png" alt=""></div>
      <div class="bule_img">
        <div class="psin psin1" @mouseenter="enters(1)" @mouseleave="outs">
          <span class="psin-img"><img :src="Hoverindex == 1 ?require('../../assets/index/tu10_hover.png') : require('../../assets/index/tu10.png')" alt=""></span>
          <span class="psin-font">高素质</span>
        </div>
        <div class="psin psin2" @mouseenter="enters(2)" @mouseleave="outs">
          <span class="psin-img"><img :src="Hoverindex == 2 ?require('../../assets/index/frond_hover.png') : require('../../assets/index/frond.png')" alt=""></span>
          <span>最前沿</span>
        </div>
        <div class="psin psin3" @mouseenter="enters(3)" @mouseleave="outs">
          <span class="psin-img"><img :src="Hoverindex == 3 ?require('../../assets/index/evelution_hover.png') : require('../../assets/index/evelution.png')" alt=""></span>
          <span>强能力</span></div>

        <div v-if="Hoverindex == 1 || Hoverindex == ''" class="psin-content" style="display: block">
          <h1>什么样的人<br/>
            能成为美国在职教师</h1>
          <div class="seniority">
            <!--<img src="@/assets/index/tu7.png" alt="">-->
            获得美国学校教师资格需要
          </div>
          <div class="crilie">专业课程</div>
          <div class="crilie">专业考试</div>
          <div class="crilie">职业道德
            培训</div>
          <div class="crilie">1年实习</div>
          <div class="crilie">教学法
            考试</div>
          <div class="crilie">多次评估</div>
        </div>
        <div v-else-if="Hoverindex == 2" class="psin-content">
          <h1>什么样的人<br/>
            能成为美国在职教师1</h1>
          <div class="seniority">
            <!--<img src="@/assets/index/tu7.png" alt="">-->
            获得美国学校教师资格需要1
          </div>
          <div class="crilie">专业课程1</div>
          <div class="crilie">专业考试1</div>
          <div class="crilie">职业道德1
            培训</div>
          <div class="crilie">1年实习1</div>
          <div class="crilie">教学法1
            考试</div>
          <div class="crilie">多次评估1</div>
        </div>
        <div v-else-if="Hoverindex == 3" class="psin-content">
          <h1>什么样的人<br/>
            能成为美国在职教师2</h1>
          <div class="seniority">
            <!--<img src="@/assets/index/tu7.png" alt="">-->
            获得美国学校教师资格需要2
          </div>
          <div class="crilie">专业课程2</div>
          <div class="crilie">专业考试2</div>
          <div class="crilie">职业道德2
            培训</div>
          <div class="crilie">1年实习1</div>
          <div class="crilie">教学法1
            考试</div>
          <div class="crilie">多次评估1</div>
        </div>
      </div>
    </div>
    <!--<div class="commond third">-->

    <!--</div>-->
    <!--<img src="@/assets/index/2.jpg" alt="" class="more-png">-->
    <img src="@/assets/index/3.jpg" alt="" class="tu11-png" style="margin-top: 100px;">
    <img src="@/assets/index/5.jpg" alt="" class="tu11-png">
    <div>
      <vue-accordion :items="items" :styles="styles"></vue-accordion>
    </div>
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

  export default {
    data() {
      return {
        Hoverindex:'',
        div: {
          height: 532,
          center: true,

        },
        panel: {
          border: 0,
          padding: 0
        },
        texts: {
          font: 24,
          margin: 0,

        },
        titles: {
          font: 36,
          color: 'white'
        },
        items: [
          {
            title: '高、本衔接课程',
            text: '接轨美高、美本课程内容，提前适应美国上课方式、掌握美国课程学习方法、建立美国课程学习思维，奠定知识基础，赴美后快速融入',
            url: '#',
            image: require('@/assets/tu12.png')
          },
          {
            title: '学科同步课程',
            text: '对标美高教学大纲，帮助学生查漏补缺、领跑课轻松获得高GPA',
            url: '#',
            image: require('@/assets/tu13.png')
          },
          {
            title: 'AP课程',
            text: '对标美国College Board教学大纲和考试重点，助力5分，冲刺名校',
            url: '#',
            image: require('@/assets/tu14.png')
          },
          {
            title: '学分双认证课程',
            text: '获得：学分+学籍+学历，不出国门拿美国高中毕业证',
            url: '#',
            image: require('@/assets/tu15.png')
          }
        ]
      }
    },
    computed: {
      styles() {
        return {
          div: {
            maxWidth: "100%",
            height: this.div.height + 'px',
            margin: this.div.center ? '0 auto' : '0',
          },
          li: {
            borderColor: '#FFF',
            borderStyle: 'solid',
            borderWidth: this.panel.border + 'px',
            padding: this.panel.padding + 'px',
            backgroundSize: 'cover',
          },
          h2: {
            fontSize: this.titles.font + 'px',
            color: this.titles.color,
            marginTop: '50px',
            opacity: '1'
          },
          p: {
            fontSize: this.texts.font + 'px',
            marginTop: this.texts.margin + 'px',
            whiteSpace: 'pre-wrap',

          }
        }
      },
    },
    created() {

    },
    methods: {
      enters(ind){
        const that = this;
        that.Hoverindex = ind;
        console.log()
      },
      outs(){
        const that = this;
        that.Hoverindex = '';
        console.log(that.Hoverindex)
      }
    },
//    components:{
//      vueAccordion
//    }
  }
</script>

<style scoped>
  .crilie{
    width: 146px;
    height: 146px;
    border-radius: 50%;
    background: #1495C1;
    text-align: center;
    color: #ffffff;
    line-height: 146px;
    float: left;
    margin: 35px 82px;
  }
  .psin-content h1{
    color: #ffffff;
  }
  .seniority{
    background: url(../../assets/index/tu7.png) no-repeat center;
    background-size: 100%;
    width: 673px;
    height: 66px;
    text-align: center;
    margin: 0 auto;
    font-size: 24px;
    color: #fff;
    line-height: 66px;
  }
  .psin-content{
    margin-top: 160px;
    text-align: center;
  }
  .psin1{
    top:80px;
    left: -80px;
  }
  .psin2{
    right:80px;
  }
  .psin3{
    right:100px;
    bottom: 0px;
  }
  .psin {
    width: 225px;
    height: 225px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 10px solid #0B6F97;
    font-size: 48px;
    position: absolute;
  }

  .psin:hover{
    background-color: #0B6F97;
    border-color: #ffffff;
    color: #ffffff;
  }

  .psin span {
    display: block;
    text-align: center;
  }

  .psin-img {
    margin-top: 10px;
  }

  .psin-font {

  }

  .tu11 {
    width: 518px;
    height: 518px;
    border-radius: 50%;
    position: absolute;
    top: 550px;
    left: -100px;
    z-index: 2;
  }

  .bule_img {
    width: 953px;
    height: 953px;
    border-radius: 50%;
    background: #0b6f97;
    position: absolute;
    right: -100px;
    top: 150px;
  }

  .second {
    background: url(../../assets/index/why.png) no-repeat center top;
    background-size: 50%;
    position: relative;
    height: 1000px;
  }

  .third{
    background: url(../../assets/index/what.png) no-repeat center top;
    background-size: 50%;
    position: relative;
    height: 1000px;
  }

  .commond {
    width: 1200px;
    margin: 0 auto;
    min-height: 500px;
  }

  .index {
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
  }

  .index > img {
    display: block;
    width: 100vw;
    height: auto;
  }

  .sqst {
    width: 1225px;
    overflow: hidden;
    margin: 0 auto;
  }

  .sqst-left {
    width: 430px;
    font-size: 18px;
    color: #5C5D5D;
    float: left;
  }

  .sqst-left * {
    display: block;
    margin: 20px 0;
  }

  .sqst-left input {
    border: 0;
    border-bottom: 1px solid #000;
    outline: none;
    width: 300px;
  }

  .sqst-rigth {
    width: 795px;
    float: left;
  }

  .sqst-rigth img {
    width: 100%;
  }

  .btn {
    width: 275px;
  }

  .sqst-text {
    background: #FFFFFF;
    border: 1px solid #9B9B9B;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 130px;
  }
</style>
