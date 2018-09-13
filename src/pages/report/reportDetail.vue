<template>
    <div class="report-detail">
       <template v-if="studyresultId">
         <div class="main-tit">
           <p class="firline">{{allthings[0]?allthings[0].course_name:''}}</p>
           <p>{{allthings[0]?allthings[0].course_name_zh:''}}</p>

         </div>
         <div class="tea">
           <div class="tilte">教师评语</div>
           <div class="teach">
             <div class="firs">
               <div class="left-fir"><span>Teacher:</span>{{allthings[0]?allthings[0].teacher_name:""}}</div>
               <div class="student-name"><span>Student:</span>{{allthings[0]?allthings[0].student_name:""}}</div>
             </div>
             <!--<div class="feedback" v-html="realEvlution(studyresult.evaluation)">-->
               <!--&lt;!&ndash;{{}}&ndash;&gt;-->
             <!--</div>-->
             <div class="evaluate" v-if="toJson(studyresult.evaluation)">
               <div>
                 <h3>summary:</h3>
                 <span v-html="toJson(studyresult.evaluation).summary"></span>
               </div>
               <div>
                 <h3>grade:</h3>
                 <span v-html="toJson(studyresult.evaluation).grade"></span>
               </div>
               <div>
                 <h3>review:</h3>
                 <span v-html="toJson(studyresult.evaluation).review"></span>
               </div>
               <div>
                 <h3>comments_behavior:</h3>
                 <span v-html="toJson(studyresult.evaluation).comments_behavior"></span>
               </div>
               <div>
                 <h3>comments_homework:</h3>
                 <span v-html="toJson(studyresult.evaluation).comments_homework"></span>
               </div>
               <div>
                 <h3>suggest:</h3>
                 <span v-html="toJson(studyresult.evaluation).suggest"></span>
               </div>
               <div>
                 <h3>future_plan:</h3>
                 <span v-html="toJson(studyresult.evaluation).future_plan"></span>
               </div>
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
           <p class="firline">{{allthings[0]?allthings[0].course_name:''}}</p>
           <p>{{allthings[0]?allthings[0].course_name_zh:''}}</p>
         </div>
         <div class="tea">
           <div class="tilte">教师评语</div>
           <div class="teach">
             <div class="firs">
               <div class="left-fir"><span>Teacher:</span>{{allthings[0]?allthings[0].teacher_name:""}}</div>
               <div class="student-name"><span>Student:</span>{{allthings[0]?allthings[0].student_name:""}}</div>
             </div>
             <!--<div class="feedback" v-html="realEvlution1(studyschedule.teacher_evaluation)">-->
               <!--{{studyschedule.teacher_evaluation}}-->
             <!--</div>-->

             <!--<div v-for="(item,val) in toJson(studyschedule.teacher_evaluation)">-->
               <!--<h4>{{val}}</h4><span v-html="item"></span>-->
               <!--<div><span>lesson_objective:</span><span></span></div>-->
               <!--<div><span>completion_status:</span><span></span></div>-->
               <!--<div><span>performace:</span><span></span></div>-->
               <!--<div><span>improved:</span><span></span></div>-->
               <!--<div><span>skills:</span><span></span></div>-->
               <!--<div><span>suggest:</span><span></span></div>-->
               <!--<div><span>summary:</span><span></span></div>-->
             <!--</div>-->

             <div class="evaluate" v-if="toJson(studyschedule.teacher_evaluation)">
               <div>
                 <h3>lesson_objective:</h3>
                 <span v-html="toJson(studyschedule.teacher_evaluation).lesson_objective"></span>
               </div>
               <div>
                 <h3>completion_status:</h3>
                 <span v-html="toJson(studyschedule.teacher_evaluation).completion_status.status"></span>
                 <span v-html="toJson(studyschedule.teacher_evaluation).completion_status.text"></span>
               </div>
               <div>
                 <h3>performace:</h3>
                 overall:<span v-html="toJson(studyschedule.teacher_evaluation).performace.overall"></span><br/>
                 onTime:<span v-html="toJson(studyschedule.teacher_evaluation).performace.onTime"></span><br/>
                 missTime:<span v-html="toJson(studyschedule.teacher_evaluation).performace.missTime"></span><br/>
                 attitude:<span v-html="toJson(studyschedule.teacher_evaluation).performace.attitude"></span><br/>
                 interaction:<span v-html="toJson(studyschedule.teacher_evaluation).performace.interaction"></span>
               </div>
               <div>
                 <h3>improved:</h3><span v-html="toJson(studyschedule.teacher_evaluation).improved"></span>
               </div>
               <div>
                 <h3>suggest:</h3><span v-html="toJson(studyschedule.teacher_evaluation).suggest"></span>
               </div>
               <div>
                 <h3>skills:</h3><span v-html="toJson(studyschedule.teacher_evaluation).skills"></span>
               </div>
               <div>
                 <h3>summary:</h3><span v-html="toJson(studyschedule.teacher_evaluation).summary"></span>
               </div>
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
          studyschedule: [],
          allthings:[]
        }
      },
        created(){
          this.init();
//          this.member(160);
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
                that.member(data.data.course_id)
              })
          },
          getDetailSchedule(){
            const that = this;
            this.baseAxios.get('/api/v1/study_schedule/'+that.studyscheduleId,{
              "page_limit": 10,
              "page_no": 1
            }).then(function (data) {
                that.studyschedule = data.data;
                that.member(data.data.course_schedule.course_id);
              })
          },
          member(id){
            const that = this;
            this.baseAxios1.post('/course/member',{
              "course_id":id,
              "page_limit":1,
              "page_no":1
            }).then(function (data) {
              that.allthings = data.data.objects;
            })
          },
          realEvlution(val){
            if(val!=null){
              var val1 = JSON.parse(val);
              return val1.summary
            }else{
              return ""
            }
          },
          realEvlution1(val){
            if(val!=null){
              var val1 = JSON.parse(val);
              return val1.lesson_objective
            }else{
              return ""
            }
          },
          toJson(str){
            var _str =(new Function("","return "+ str))();
//            console.log(_str);
            return _str;
          }
        }
    }
</script>

<style scoped>
    .evaluate>div{
      margin: 10px 0;
    }
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
