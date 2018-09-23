<template>
  <div class="report">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="课程包名称">
        <el-input v-model="formInline.courseBigName" placeholder="课程包名称"></el-input>
      </el-form-item>
      <el-date-picker
        v-model="formInline.value6"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-form-item label="课程名" style="margin-right: 30px">
        <el-input v-model="formInline.courseName" placeholder="课程名"></el-input>
      </el-form-item>
      <el-form-item label="教师名">
        <el-input v-model="formInline.teacherName" placeholder="教师名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchResult">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="forms">
      <!--<div class="ji" v-for="item in course">-->
        <!--<div class="title">-->
          <!--<div class="lef-esl">{{item.course_name}}</div>-->
          <!--<div class="teacger">-->
            <!--<img :src="item.teacher_avatar" alt="">-->
            <!--{{item.teacher_name}}-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="lists">-->
          <!--&lt;!&ndash;no是课程，summary是总结，achievement是成绩单&ndash;&gt;-->
          <!--<template v-if="item.result_type == 'SUMMARY'">-->
            <!--<div class="list">-->
              <!--<div class="list-lef">-->
                <!--<div class='list-lef-top'>-->
                  <!--<img src="../../assets/dian_01.png" alt="">-->
                  <!--课程总结-->
                <!--</div>-->
                <!--<div class="btm">-->
                  <!--时间-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="list-rig">-->
                <!--<img src="../../assets/chengzhang_h.png" alt="">-->
                <!--<router-link :to="{path:'/report/reportDetail',query:{studyresultId:item.id}}">查看课程总结</router-link>-->
              <!--</div>-->
            <!--</div>-->
          <!--</template>-->
          <!--<template v-else-if="item.result_type == 'NO'">-->
            <!--<div class="list">-->
              <!--<div class="list-lef">-->
                <!--<div class='list-lef-top'>-->
                  <!--<img src="../../assets/dian_01.png" alt="">-->
                  <!--{{item.class_name}}-->
                <!--</div>-->
                <!--<div class="btm">-->
                  <!--&lt;!&ndash;{{xiaoke.start}}&#45;&#45;{{xiaoke.end}}&ndash;&gt;-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="list-rig">-->
                <!--<img src="../../assets/chengzhang_h.png" alt="">-->
                <!--<router-link :to="{path:'/report/reportDetail',query:{studyscheduleId:item.id}}">查看课节报告</router-link>-->
              <!--</div>-->
            <!--</div>-->
          <!--</template>-->
          <!--<template v-else-if="item.result_type == 'ACHIEVEMENT'">-->
            <!--<div class="list">-->
              <!--<div class="list-lef">-->
                <!--<div class='list-lef-top'>-->
                  <!--<img src="../../assets/dian_01.png" alt="">-->
                  <!--成绩单-->
                <!--</div>-->
                <!--<div class="btm">-->
                  <!--时间-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="list-rig">-->
                <!--<img src="../../assets/chengzhang_h.png" alt="">-->
                <!--<router-link :to="item.report_card_url ? item.report_card_url:''">查看成绩单</router-link>-->
              <!--</div>-->
            <!--</div>-->
          <!--</template>-->
        <!--</div>-->
      <!--</div>-->
      <div class="ji" v-for="item in dest">
        <div class="title">
          <div class="lef-esl">{{item.course_name}}</div>
          <div class="teacger">
            <img :src="item.teacher_avatar" alt="">
            {{item.teacher_name}}
          </div>
        </div>
        <div class="lists" v-for="item2 in item.data">
          <!--no是课程，summary是总结，achievement是成绩单-->
          <template v-if="item2.result_type == 'SUMMARY'">
            <div class="list">
              <div class="list-lef">
                <div class='list-lef-top'>
                  <img src="../../assets/dian_01.png" alt="">
                  课程总结
                </div>
                <div class="btm">
                  {{ftmTime(item2.start)}} -- {{ftmTime(item2.end)}}
                </div>
              </div>
              <div class="list-rig">
                <img src="../../assets/chengzhang_h.png" alt="">
                <router-link :to="{path:'/report/reportDetail',query:{studyresultId:item2.id}}">查看课程总结</router-link>
              </div>
            </div>
          </template>
          <template v-else-if="item2.result_type == 'NO'">
            <div class="list">
              <div class="list-lef">
                <div class='list-lef-top'>
                  <img src="../../assets/dian_01.png" alt="">
                  {{item2.class_name}}
                </div>
                <div class="btm">
                  <!--{{xiaoke.start}}&#45;&#45;{{xiaoke.end}}-->
                </div>
              </div>
              <div class="list-rig">
                <img src="../../assets/chengzhang_h.png" alt="">
                <router-link :to="{path:'/report/reportDetail',query:{studyscheduleId:item2.id}}">查看课节报告</router-link>
              </div>
            </div>
          </template>
          <template v-else-if="item2.result_type == 'ACHIEVEMENT'">
            <div class="list">
              <div class="list-lef">
                <div class='list-lef-top'>
                  <img src="../../assets/dian_01.png" alt="">
                  成绩单
                </div>
                <!--<div class="btm">-->
                  <!--时间-->
                <!--</div>-->
              </div>
              <div class="list-rig" @click="fmtUrl(item2.report_card_url)">
                <img src="../../assets/chengzhang_h.png" alt="">
                <!--<router-link :to="item2.report_card_url ? item2.report_card_url:''">查看成绩单</router-link>-->
                查看成绩单
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 1、现获取my_course的课程，
   * 2、通过course的id去查询/student/schedule，然后通过返回的id去查study_schedule评价
   */
  export default {
    data() {
      return {
        lessons: [],
        formInline: {
          courseBigName: '',
          courseName: '',
          teacherName:"",
          value6:''
        },
        course: [],
        dest:[]
      }
    },
    created() {
//      this.getCourse();
      this.test1({
        'page_no': 1,
        'page_limit': 1000
      });
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      //获取课程
      getCourse() {
        const that = this;
//        this.baseAxios1.post('/student/report_card',{
        this.baseAxios1.post('/student/my_course', {
          "page_limit": 20,
          "page_no": 1,
        }).then(function (data) {
          const course1 = data.data.objects;

          course1.map(function (val, index) {
            const scheduleId = val.id;
            that.baseAxios1.post('/student/schedule', {
              'course_schedule_id': scheduleId,
              "page_limit": 1000,
              "page_no": 1,
            }).then(function (data) {
//              console.log(data)
              that.course[index].xiaoke = data.data.objects;
            })
          })
          that.course = course1;
          console.log(that.course)

        })
      },
      test1(data){
        const that = this;
        this.baseAxios1.post('/student/growth_report', data)
          .then(function (data) {
            that.course = data.data.objects;
            var arr = data.data.objects;

            var map = {},
              dest = [];
            for(var i = 0; i < arr.length; i++){
              var ai = arr[i];
              if(!map[ai.course_name]){
                dest.push({
//                  id: ai.id,
                  course_name: ai.course_name,
                  course_name_zh:ai.course_name_zh,
                  teacher_name:ai.teacher_name,
                  class_name:ai.class_name,
                  data: [ai]
                });
                map[ai.course_name] = ai;
              }else{
                for(var j = 0; j < dest.length; j++){
                  var dj = dest[j];
                  if(dj.course_name == ai.course_name){
                    dj.data.push(ai);
                    break;
                  }
                }
              }
            }

            that.dest= dest;
            console.log(that.dest)

          })
      },
      searchResult(){
        const that = this;
        const searchData = {
          "page_limit": 100,
          "page_no": 1,
        };
        searchData.class_name = that.formInline.courseBigName; //课程名称
        searchData.teacher_name = that.formInline.courseName;//教师名称
        searchData.course_name = that.formInline.teacherName; //课程包名
        searchData.class_at = that.formInline.value6[0];
//        console.log(searchData);
        that.test1(searchData)
//        this.baseAxios1.post('/student/growth_report',searchData).then(function (data) {
//          console.log(data)
//        })
      },
      fmtUrl(data){
        const that = this;
        const url = JSON.parse(data);
        window.location.href=this.devUrl+url.url;
//        that.$router.push(this.devUrl+url.url);
//        console.log(url)
      },
      ftmTime(time){
        var fullTime = time.indexOf('T'),
            timeNum = time.slice(0,fullTime);
        return timeNum;
      }
    }
  }
</script>

<style scoped>
  .report {
    float: right;
    width: 800px;
  }

  .order {
    float: right;
    width: 800px;
  }

  .demo-form-inline {
    padding: 30px;
  }

  .demo-form-inline button {
    background: #FF8200;
    border: none;
  }

  .forms {
    width: 800px;
    background: #fff;
    padding: 26px 30px;

  }

  .ji {
    width: 740px;
    margin-bottom: 20px;
  }

  .title {
    background: #FFECA7;
    width: 740px;
    height: 60px;
    overflow: hidden;
  }

  .lef-esl {
    float: left;
    width: 170px;
    height: 40px;
    line-height: 40px;
    background: #fff;
    font-size: 14px;
    color: #FF8200;
    margin: 10px 20px;
    text-align: center;
  }

  .teacger {
    float: right;
    font-size: 14px;
    color: #333333;
    line-height: 60px;
    margin-right: 20px;
  }

  .teacger img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 15px;
    float: left;
  }

  .lists {
    background: #FFFBED;
  }

  .list {
    overflow: hidden;
    width: 740px;
    height: 90px;
    border-bottom: 1px solid #FFF0BB;
  }

  .list-lef {
    float: left
  }

  .list-lef-top {
    font-size: 14px;
    color: #FF8200;
    margin: 22px 0 10px 20px;
  }

  .btm {
    font-size: 12px;
    color: #999999;
    margin-left: 20px;
  }

  .list-rig {
    font-size: 14px;
    color: #333333;
    line-height: 40px;
    width: 140px;
    height: 40px;
    float: right;
    margin: 25px 20px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
  }

  .list-rig img {
    float: left;
    margin: 11px 10px 10px 17px;
  }
</style>
