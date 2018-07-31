<template>
    <div class="report-detail">
       <template v-if="studyresultId">
         <div class="main-tit">
           <p class="firline">Lesson 64 The Wolf Within / Lesson 64 The Wolf Within</p>
           <p>成长报告</p>

         </div>
         <div class="tea">
           <div class="tilte">教师评语</div>
           <div class="teach">
             <div class="firs">
               <div class="left-fir"><span>Teacher:</span>   Robert Little</div>
               <div class="student-name"><span>Student:</span>   ALEX ren </div>
             </div>
             <div class="feedback" v-html="studyresult.evaluation">
               <!--{{}}-->
             </div>

           </div>
         </div>
         <!--<div class="tea">-->
           <!--<div class="tilte">成绩单</div>-->
           <!--<div class="teach">-->
             <!--<div class="firs">-->
               <!--<div class="left-fir"><span>Teacher:</span>   Robert Little</div>-->
               <!--<div class="student-name"><span>Student:</span>   ALEX ren </div>-->
             <!--</div>-->
             <!--<div class="feedback">-->
               <!--{{studyresult.report_card_url}}-->
             <!--</div>-->

           <!--</div>-->
         <!--</div>-->
       </template>
       <template v-else-if="studyscheduleId">
         <div class="main-tit">
           <p class="firline">{{studyschedule.name}}</p>
           <p>成长报告</p>
         </div>
         <div class="tea">
           <div class="tilte">教师评语</div>
           <div class="teach">
             <div class="firs">
               <div class="left-fir"><span>Teacher:</span>   Robert Little</div>
               <div class="student-name"><span>Student:</span>   {{studyschedule.study_courses.name}} </div>
             </div>
             <div class="feedback" v-html="studyschedule.teacher_evaluation">
               <!--{{}}-->
             </div>

           </div>
         </div>
         <!--<div class="tea">-->
           <!--<div class="tilte">成绩单</div>-->
           <!--<div class="teach">-->
             <!--<div class="firs">-->
               <!--<div class="left-fir"><span>Teacher:</span>   Robert Little</div>-->
               <!--<div class="student-name"><span>Student:</span>   ALEX ren </div>-->
             <!--</div>-->
             <!--<div class="feedback">-->
               <!--{{studyresult.report_card_url}}-->
             <!--</div>-->

           <!--</div>-->
         <!--</div>-->
       </template>
    </div>
</template>

<script>
  /**
   * 要是课程报告就去拿study——result
   * 要是小课总结就去拿study_schedule
   */
    export default {
      data() {
        return {
          studyresultId : this.$route.query.studyresultId,
          studyscheduleId : this.$route.query.studyscheduleId,
          studyresult : [],
          studyschedule: []
        }
      },
        created(){
          this.init();
        },
        methods: {
          init(){
            const that = this;
            that.studyresultId ? that.getStudyResult(): that.getDetailSchedule()
          },
          getStudyResult(){
            const that = this;
            this.baseAxios.get('/api/v1/study_result/'+that.studyresultId,{
              "page_limit": 10,
              "page_no": 1
            }).then(function (data) {
                that.studyresult = data.data;
              })
          },
          getDetailSchedule(){
            const that = this;
            this.baseAxios.get('/api/v1/study_schedule/'+that.studyscheduleId,{
              "page_limit": 10,
              "page_no": 1
            }).then(function (data) {
                that.studyschedule = data.data;
              })
          }
        }
    }
</script>

<style scoped>
    .report-detail{
        width: 800px;
        float: right;
        background: #fff;
    }
    .main-tit{
        height: 97px;
        font-size: 18px;
        color: #333333;
        line-height: 36px;
        text-align: center;
    }
    .firline{
        margin-top: 25px;
    }
    .tea{
        width: 740px;
        margin: 0 auto;
    }
    .tilte{
        width: 740px;
        height: 40px;
        background: #F6F6F6;
        font-size: 16px;
        color: #333333;
        border-left: 3px solid #FF8200;
        line-height: 40px;
        text-indent: 10px;
    }
    .teach{
        margin-top: 20px;
    }
    .firs{
        overflow: hidden;
    }
    .left-fir,.student-name{
        width: 50%;
        float: left;
        font-size: 14px;
        color: #151515;
        line-height: 35px;
    }
    .left-fir span,.student-name span{

    }
    .feedback,.suggestion{
        margin-top: 35px;
        font-size: 14px;
        color: #151515;
        line-height: 35px;
    }
</style>
