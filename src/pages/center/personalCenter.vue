<template>
  <div class="personal">
    <div class="top">
      <div class="top-lef">
        <template>
          <img :src="devUrl+avatar" alt="userPic">
        </template>
      </div>
      <div class="top-rig">
        <div class="student-mess">
          <div class="bans">
            <div class="names">{{userName}}</div>
            <router-link to="/fillInformation">
              <img src="../../assets/bianji.png" alt="">
            </router-link>
          </div>
          <div class="student-num">
            <span class="student-id">年级：{{grade}}</span>
          </div>
        </div>
        <div class="rest">
          <img src="../../assets/jian.png" alt="">
          <span class="rest-time">剩余课时：<span class="rest-course">{{numberAll}}</span> 节</span>
          <span class="course-detail">
            <router-link to="/timetable/timetable">课时详情</router-link>
          </span>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-tit">
        <div class="tit-lef">即将开课</div>
        <div class="more">
          <router-link to="/timetable/timetable">
            更多>>
          </router-link>
        </div>
      </div>
      <div class="course-details">
        <div class="course-tit">
          <div class="eslji">
            {{willCourse[0] ? willCourse[0].course_name :''}}
          </div>
          <div class="times">
            <img src="../../assets/time.png" alt="">
            <span>
              {{willCourse[0] ? guyuTime(fmtTime1(willCourse[0].start),fmtTime1(willCourse[0].end)) :''}}
            </span>
          </div>
        </div>
        <div class="course-main" v-for="ini in willCourse">
          <div class="lesson">
            <div class="lesson-name">
              {{ini.name}}
            </div>
            <div class="teacher">
              <!--<img :src="ini.avatar?ini.avatar:''" alt="">-->
              <span>{{ini.teacher_name}}</span>
            </div>
          </div>
          <!--<ul class="detail-les">-->
            <!--<li v-for="inii in xiaoke.kejian">-->
              <!--<div class="les-lef">-->
                <!--<img src="../../assets/dian_01.png" alt="">-->
                <!--<span>{{inii.ware_name}}</span>-->
              <!--</div>-->
              <!--<div class="les-rig">-->
                <!--<img src="../../assets/yulan.png" alt="">-->
                <!--<span @click="previewCourse(ini.id)">预览课件</span>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-tit">
        <div class="tit-lef">待完成的作业</div>
        <router-link to="/homework/willCompleted">
          <div class="more">更多 >></div>
        </router-link>
      </div>
      <div class="course-details" v-for="item in homework">
        <div class="course-tit">
          <div class="les-name">
            {{item.question_name}}
          </div>

          <div class="times">
            <img src="../../assets/time.png" alt="">
            <span>{{formatTime(item.created_at)}}</span>
          </div>
        </div>
        <div class="course-main">

          <ul class="detail-les">

            <div class="check-homework">
              <img src="../../assets/chakanzuoye.png" alt="">
              <span @click="lookHomework(item.id)">
                查看作业
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dateFmt from '../../utils/time';
  import {fmtTime, fmtTime1} from '../../utils/time'
  import store from '@/store/index';

  /**
   * homework_type,1：教师留作业，2：学生完成作业
   * study_state'学习状态，1：进行中，2：已经学完'
   * 待完成的任务：
   * 1、个人中心缺个剩余课时
   * 2、课程下面没有挂对应的课件
   */
  export default {
    created() {
      this.getUserName();
      this.getMycourse();
      this.willHomework();
      this.allTime();
      this.getNumber();
    },
    data() {
      return {
        userName: "",
        id: "",
        age: "",
        avatar: "",
        subject: [],//课程
        birth: '',
        homework: [],//作业
        numberAll: "",
        xiaoke: [],
        grade: "",
        finalTime:[],
        willCourse:[],
      }
    },
    methods: {
      fmtTime,
      fmtTime1,
      //获取用户信息
      getNumber(){
        this.baseAxios1.post('/student/schedule',{
          "page_limit": 10,
          "page_no": 1,
          'course_schedule_state':'2'
        }).then((data)=>{
          if(data.status == 200){
            this.numberAll = data.data.num_results;
          }
        })
      },
      getUserName() {
        const that = this;
        this.baseAxios1.get('/api/v1/student/' + localStorage.getItem('id'))
          .then(function (data) {
            const dataUser = data.data;
            that.userName = dataUser.name;
            that.id = dataUser.id;
            that.birth = dataUser.birth;
            that.avatar = dataUser.avatar;
            that.grade = dataUser.grade;
//            localStorage.setItem('name',dataUser.name);
            store.commit('test', dataUser.name?dataUser.name:dataUser.username)
//            const len = [];
//            dataUser.study_courses.map(function (item, index) {
//              if (item.actual_start >= dateFmt(new Date())) {
//                len.push(item);
//              }
//            })
//            that.numberAll = len.length;
//            console.log(fmtTime1(new Date()))
//            console.log(that.numberAll)
          })
      },

      //获取课程内容
      getMycourse() {
        const that = this;
        this.baseAxios1.post('/student/my_course', {
          "page_limit": 1,
          "page_no": 1,
          "course_status": "2" //没上完的课
        }).then((data) => {
          that.subject = data.data.objects;
          that.baseAxios1.post('/student/schedule', {
            course_id: data.data.objects[0].course_id,
            page_limit: 1000,
            page_no: 1
          }).then(function (data) {
            const data1 = data.data.objects;
            var date = new Date(new Date().getTime() + 7 * 24 * 3600 * 1000);
            data1.map(function (item, index) {
              if (item.start >= dateFmt(new Date) && item.start <= dateFmt(date)) {
                that.xiaoke.push(item);
                if (item != null) {
                  that.baseAxios1.post('/student/get_courseware', {
                    "page_limit": 10,
                    "page_no": 1,
                    "study_schedule_id": item.id
                  }).then(function (dataa) {
//                      that.xiaoke[item].kejian = dataa.data.objects;
                    that.xiaoke.map(function (itm, idx) {
                      itm.kejian = dataa.data.objects;
                    })
                  })
                } else {
                  return ''
                }
              }

            })
//            console.log(that.xiaoke);
            const nowTime = Date.parse(new Date());
            const number = [];
            that.xiaoke.map((val, index) => {
              number.push(Date.parse(val.start) - nowTime);
            })

            var ret = number[0];
            var distance = Math.abs(ret - 0);
            for(var i = 1; i < number.length; i++){
              var newDistance = Math.abs(number[i] - 0);
              if(newDistance < distance){
                distance = newDistance;
                ret = number[i];
              }
            }

//            console.log(number.indexOf(ret))
            that.finalTime = that.xiaoke[number.indexOf(ret)]
//            console.log(that.finalTime)

          })
        })
      },
      //待做的作业
      willHomework() {
        const that = this;
        this.baseAxios1.post('/student/my_homework', {
          "page_limit": 1,
          "page_no": 1,
          "homework_state": "0"
        }).then((data) => {
          that.homework = data.data.objects;
        })
      },
      birtht() {
        const that = this;
        const birthh = new Date().getFullYear() - new Date(that.birth).getFullYear();
        return "年龄：" + birthh + "岁"
      },
      //综合
      allTime() {
        const that = this;
        this.baseAxios1.post('/student/start_course',{
          "page_limit": 2,
          "page_no": 1,
        }).then((data)=>{
          that.willCourse = data.data.objects;
        }).catch((err)=>{
            console.log(err)
        })
      },
      previewCourse(id) {
        const that = this;
        this.baseAxios1.post('/student/get_preview_doc', {
          "page_limit": 10,
          "page_no": 1,
          "study_schedule_id": id
        })
          .then(function (data) {
            const ware_id = data.data.objects;
            if (ware_id.length != 0) {
              ware_id.map(function (val, index) {
//              that.livePreview_doc(val.ware_uid);
                that.$router.push({path: '/iframe', query: {ware_uid: val.ware_uid}})
              })
            } else {
              alert('暂无课件')
            }

          })
      },
      lookHomework(id) {
        this.$router.push('/course/check?id=' + id)
      },
      getCourseware(id) {
        ///student/get_courseware
        const that = this;
        this.baseAxios1.post('/student/get_courseware', {
          "page_limit": 10,
          "page_no": 1,
          "study_schedule_id": id
        }).then(function (data) {
          console.log(data)
        })
      },
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
    width: 108px;
    height: 108px;
    border: 4px solid #FFE178;
    border-radius: 50%;
    margin: 20px;
  }

  .top-lef img {
    width: 108px;
    height: 108px;
    border-radius: 50%;
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
    cursor: pointer;
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
