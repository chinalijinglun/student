<template>
  <div class="finish">
    <div class="mid-tit">
      <div class="tit-lef">我完成的作业</div>
    </div>

    <div class="mid" v-for="item in homework">
      <div class="course-details">
        <div class="top-review">
          <div class="course-tit">
            <div class="les-name">
              <img src="../../assets/dian_01.png" alt="">
              {{item.question_name}}
            </div>
            <div class="times">
              <span>{{item.created_at}}</span>
            </div>
          </div>
          <div class="contains" v-html="item.student_evaluation">

          </div>
          <div class="down">

            <template v-if="item.answer_attachment_url == 'string'">
            <div class="box">
              <img src="../../assets/fujian.png" alt="">
              <div class="wenzi">
                <a :href="item.answer_attachment_url">
                <p>Alex and I practiced writing </p>
                <p class="download">下载附件</p>
                </a>
              </div>
            </div>
            </template>

            <template v-if="item.answer_attachment_url != 'string'">
            <div class="box" v-for="fujian in item.answer_attachment_url">
              <img src="../../assets/fujian.png" alt="">
              <div class="wenzi">
                <a :href="fujian.url">
                <p>Alex and I practiced writing </p>
                <p class="download">下载附件</p>
                </a>
              </div>
            </div>

              <!--<div class="box" v-for="fujian in JSON.parse(item.answer_attachment_url)">-->
                <!--{{fujian}}-->
              <!--<img src="../../assets/fujian.png" alt="">-->
              <!--<div class="wenzi">-->
              <!--<a :href="fujian.url">-->
              <!--<p>Alex and I practiced writing </p>-->
              <!--<p class="download">下载附件</p>-->
              <!--</a>-->
              <!--</div>-->
              <!--</div>-->
            </template>
          </div>

        </div>

        <div class="course-main">
          <div class="mid-tit">
            <div class="tit-lef">老师点评</div>
          </div>
          <div class="course-tit colo">
            <div class="les-name">
              <img :src="item.teacher_avatar" alt="" class="teacherHead">
              {{item.teacher_name}}
            </div>

            <div class="times">
              <span>Homework</span>
            </div>
          </div>
          <div class="course-main colors">
            <div class="contains" v-html="realEvlution(item.teacher_evaluation)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 1\去获取作业内容
   * 2、去获取老师点评，study_schedule
   */
  export default {
    data() {
      return {
        homework: []
      }
    },
    created() {
      this.getHomework();
    },
    methods: {
      backRouter() {
        this.$router.go(-1);
//            this.$router.back()
      },
      getHomework() {
        const that = this;
        this.baseAxios1.post('/student/my_homework', {
          'study_schedule_id': (this.$route.query.schedul).toString(),
          'page_no': 1,
          'page_limit': 10
        }).then(function (data) {
          that.homework = data.data.objects;
        })
      },
      realEvlution(val){
        if(val!=null){
          var val1 = JSON.parse(val);
          return val1.lesson_objective
        }else{
         return ""
        }
      }

    }
  }
</script>

<style scoped>
  .teacherHead{
    height: 30px;
    width: 30px;
  }
  .finish {
    width: 800px;
    float: right;
    background: #fff;
  }

  .tab {
    width: 740px;
    height: 50px;
    margin: 26px 30px 20px;
    background: #FAFAFA;
    border: 1px solid #DCDCDC;
  }

  .completed, .finishs {
    font-size: 16px;
    color: #666666;
    line-height: 50px;
    float: left;
    text-align: center;
    width: 150px;
    height: 50px;
  }

  .mid {
    width: 740px;
    background: #fff;
    overflow: hidden;
    padding: 0 30px;
    padding-bottom: 20px;
  }

  .course-details {
    width: 100%;
  }

  .course-tit {
    width: 100%;
    overflow: hidden;
    height: 60px;
  }

  .times {
    float: right;
    overflow: hidden;
    padding-right: 20px;
  }

  .times img {
    margin: 20px;
    float: left;

  }

  .times span {
    font-size: 14px;
    color: #666666;
    line-height: 60px;
    float: left;
  }

  .course-main {
    overflow: hidden;
    width: 100%;
  }

  .detail-les {
    padding-bottom: 27px;
    overflow: hidden;
    margin: 0 auto;
    max-width: 320px;
  }

  .detail-les li {
    height: 40px;
    margin-top: 20px;
    line-height: 40px;
  }

  .les-name {
    float: left;
    line-height: 60px;
    padding-left: 30px;
    font-size: 14px;
    color: #333333;
  }

  .check-homework {
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    font-size: 14px;
    color: #333333;
    margin-top: 24px;
    cursor: pointer;
    float: left;
    margin-right: 20px;
  }

  .check-homework img {
    float: left;
    margin: 10px 10px 10px 17px;
  }

  .mid-tit {
    height: 65px;
    width: 740px;
    margin: 0 30px;
  }

  .tit-lef {
    float: left;
    height: 65px;
    line-height: 65px;
    font-size: 18px;
    color: #333333;
  }

  .more {
    float: right;
    height: 65px;
    line-height: 65px;
    cursor: pointer;
    font-size: 14px;
    color: #333333;
  }

  .more img {
    float: left;
    margin: 22px;
  }

  .process {
    margin: 0 30px;
    font-size: 14px;
    color: #333333;
    margin-bottom: 20px;
    line-height: 30px;
  }

  .process .state {
    font-size: 14px;
    color: #999999;
  }

  .process img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
  }

  .contains {
    width: 714px;
    margin: 19px 11px 35px 15px;
    font-size: 14px;
    color: #666666;
    line-height: 27px;
  }

  .box {
    overflow: hidden;
    width: 242px;
    margin-left: 50px;
    float: left;
  }

  .box img {
    float: left;
    margin-right: 13px;
  }

  .box p {
    font-size: 14px;
    color: #666666;
  }

  .box p.download {
    font-size: 14px;
    color: #FF8200;
  }

  .down {
    overflow: hidden;
  }

  .colo {
    background: #FFECA7;
  }

  .colors {
    background: #FFFBED;
  }

  .center {
    text-align: center;
    background: #FF8200;
    color: #fff;
  }
</style>
