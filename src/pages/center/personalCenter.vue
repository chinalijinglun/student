<template>
  <div class="personal">
    <div class="top">
      <div class="top-lef">
        <img :src="avatar" alt="">
      </div>
      <div class="top-rig">
        <div class="student-mess">
          <div class="bans">
            <div class="names">{{userName}}</div>
            <img src="../../assets/bianji.png" alt="">
          </div>
          <div class="student-num">
            <span class="student-id">学生ID：{{id}}</span>
            <span class="student-age">年龄：{{age}}岁</span>
          </div>
        </div>
        <div class="rest">
          <img src="../../assets/jian.png" alt="">
          <span class="rest-time">剩余课时：<span class="rest-course">128</span> 节</span>
          <span class="course-detail">课时详情</span>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-tit">
        <div class="tit-lef">即将开课</div>
        <div class="more">更多 >></div>
      </div>
      <div class="course-details" v-for="item in subject">
        <div class="course-tit">
          <div class="eslji">
            {{item.course_name}}
          </div>
          <div class="times">
            <img src="../../assets/time.png" alt="">
            <span>{{item.created_at}}</span>
          </div>
        </div>
        <div class="course-main">
          <div class="lesson">
            <div class="lesson-name">
              {{item.course_desc}}
            </div>
            <div class="teacher">
              <img :src="subject[0]?subject[0].assist_teacher.avatar:''" alt="">
              <span>{{item.primary_teacher.nickname}}</span>
            </div>
          </div>
          <ul class="detail-les">
            <li>
              <div class="les-lef">
                <img src="../../assets/dian_01.png" alt="">
                <span>Exploring Space and Astronomy</span>
              </div>
              <div class="les-rig">
                <img src="../../assets/yulan.png" alt="">
                <span>预览课件</span>
              </div>
            </li>
            <li>
              <div class="les-lef">
                <img src="../../assets/dian_01.png" alt="">
                <span>Exploring Space and Astronomy</span>
              </div>
              <div class="les-rig">
                <img src="../../assets/yulan.png" alt="">
                <span>预览课件</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-tit">
        <div class="tit-lef">待完成的作业</div>
        <div class="more">更多 >></div>
      </div>
      <div class="course-details" v-for="item in subject">
        <div class="course-tit">
          <div class="les-name">
            {{item.course_name}}
          </div>

          <div class="times">
            <img src="../../assets/time.png" alt="">
            <span>{{item.created_at}}</span>
          </div>
        </div>
        <div class="course-main">

          <ul class="detail-les">

            <div class="check-homework">
              <img src="../../assets/chakanzuoye.png" alt="">
              查看作业
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * homework_type,1：教师留作业，2：学生完成作业
   * study_state'学习状态，1：进行中，2：已经学完'
   * 待完成的任务：
   * 1、课件没找到
   * 2、homework找代做的。
   * 时间
   * 1、个人中心缺个剩余课时
   * 2、
   */
  export default {
    created() {
      this.getUserName();
      this.getCourseDetail();
      this.willHomework();
    },
    data() {
      return {
        userName: "",
        id: "",
        age: "",
        avatar: "",
        schedule: [],//课程id
        subject: [],//课程
      }
    },
    methods: {
      //获取用户信息
      getUserName() {
        const that = this;
        this.baseAxios.get('/api/v1/student/' + localStorage.getItem('id'))
          .then(function (data) {
            const dataUser = data.data;
            that.userName = dataUser.username;
            that.id = dataUser.id;
            that.avatar = dataUser.avatar;
          })
      }
      ,
      //获取课程内容
      getCourseDetail() {
        const that = this;
        const filter =[{'name':'student_id','op':'eq','val':localStorage.getItem('id')}];
        this.baseAxios.get('api/v1/study_schedule', {params:{q:JSON.stringify({filters:filter})}})
          .then(function (data) {
//            console.log(data)
//            const studeyState = data.data.objects;
//            studeyState.map(function (value, key) {
//              if (value.study_state == 2) {
//                that.schedule.push(value);
//              }
//            });
//            //通过获取到的学习中状态的id，去获取课程
//            for (let i = 0; i < that.schedule.length; i++) {
//              that.getCourseName(that.schedule[i].id)
//            }

          })
      },
      //根据课程内容id查对应课程名称
      getCourseName(id) {
        var that = this;
        this.baseAxios.get('api/v1/course/' + id)
          .then(function (data) {
            const Course = data.data;
            that.subject.push(Course);
          })
      },
      //根据study_schedule的homework放进和course一样的id
      changeId() {
        const that = this,
          schedule = this.schedule,
          subject = this.subject;
          //循环开始
          setTimeout(function () {
            for (let i = 0; i < schedule.length; i++) {
              for(let j = 0 ; j<subject.length;j++){
                if(schedule[i].id == subject[j].id){
                  subject[j].homeworks = schedule[i].homeworks;
//                  this.homeworks = schedule[i].homeworks;
                }
              }
            }
          },500);
      },
      //待做的作业
      willHomework(){
        const that =this;
        this.baseAxios1.post('/student/my_homework',{
//          "homework_state": "0",
          "page_limit": 10,
          "page_no": 1
        }).then((data)=>{
          console.log(data)
        })
      }
    }
  }
</script>

<style scoped>
  .personal {
    width: 800px;
    float: right;
  }

  .top {
    width: 800px;
    height: 190px;
    background: #fff;
    overflow: hidden;
  }

  .top-lef {
    float: left;
  }

  .top-lef img {
    border: 4px solid #FFE178;
    width: 108px;
    height: 108px;
    border-radius: 50%;
    padding: 2px;
    margin: 20px;
  }

  .top-rig {
    float: left;
    width: 640px;
  }

  .bans {
    overflow: hidden;
    padding-top: 37px;
  }

  .names, .bans img {
    float: left;
  }

  .names {
    font-size: 24px;
    color: #333333;
  }

  .bans img {
    margin: 10px 10px;
  }

  .student-num {
    font-size: 14px;
    color: #333333;
    margin-top: 19px;
  }

  .student-mess {
    height: 127px;
    border-bottom: 1px solid #f5f5f5;
    width: 100%;
  }

  .rest {
    padding-top: 20px;
  }

  .rest-time {
    font-size: 14px;
    color: #333333;
  }

  .rest-course {
    color: #FF8200
  }

  .course-detail {
    font-size: 14px;
    color: #999999;
    margin-left: 20px;
    cursor: pointer;
  }

  .mid {
    width: 740px;
    margin-top: 20px;
    background: #fff;
    overflow: hidden;
    padding: 0 30px;
    padding-bottom: 38px;
  }

  .mid-tit {
    height: 65px;
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

  .course-details {
    width: 100%;
  }

  .course-tit {
    width: 100%;
    overflow: hidden;
    background: #FFECA7;
    height: 60px;
  }

  .eslji {
    float: left;
    margin: 10px 20px;
    background: #FFFFFF;
    border-radius: 5px;
    font-size: 14px;
    color: #FF8200;
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: 170px;
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
    background: #FFFBED;
    width: 100%;
  }

  .lesson {
    border-bottom: 1px solid #FFF0BB;
    overflow: hidden;
    height: 60px;
    line-height: 60px;
  }

  .lesson-name {
    padding-left: 30px;
    font-size: 14px;
    color: #333333;
    float: left;
  }

  .teacher {
    float: right;
    padding-right: 20px;

  }

  .teacher img {
    width: 30px;
    height: 30px;
    float: left;
    border-radius: 50%;
    margin: 15px;
  }

  .teacher span {
    font-size: 14px;
    color: #333333;
  }

  .detail-les {
    padding-bottom: 27px;
  }

  .detail-les li {
    height: 40px;
    margin-top: 20px;
    line-height: 40px;
  }

  .les-lef {
    float: left;
    padding-left: 30px;
  }

  .les-lef img {
    margin: 15px 12px 15px 0;
    float: left;
  }

  .les-lef span {
    font-size: 14px;
    color: #333333;
  }

  .les-rig {
    width: 120px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    float: right;
    font-size: 14px;
    color: #333333;
    margin-right: 20px;
  }

  .les-rig img {
    float: left;
    margin: 13px 11px 7px 19px;
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
  }

  .check-homework img {
    float: left;
    margin: 10px 10px 10px 17px;
  }
</style>
