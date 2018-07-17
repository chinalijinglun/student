<template>
  <div class="report">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="课程名">
        <el-input v-model="formInline.user" placeholder="课程名"></el-input>
      </el-form-item>
      <el-form-item label="上课时间">
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="教师名">
        <el-input v-model="formInline.user" placeholder="课程名"></el-input>
      </el-form-item>
      <el-form-item label="课程状态">
        <el-select v-model="formInline.region" placeholder="所有状态">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="forms">
      <div class="ji" v-for="item in lessons">
        <div class="title">
          <div class="lef-esl">{{item.course_name}}</div>
          <div class="teacger">
            <img :src="item.teacher_avatar" alt="">
            {{item.nickname}}
          </div>
        </div>
        <div class="lists" v-for="les in item.xiaoke">
          <div class="list">
            <div class="list-lef">
              <div class='list-lef-top'>
                <img src="../../assets/dian_01.png" alt="">
                {{les.name}}
              </div>
              <div class="btm">
                {{les.start}}---{{les.end}}
              </div>
            </div>
            <div class="list-rig">
              <img src="../../assets/chengzhang_h.png" alt="">
              <router-link :to="{path:'/report/reportDetail',query:{id:les.id}}">查看报告</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lessons:[],
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    created(){
      this.getCourse();
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      getCourse(){
        const that = this;
        this.baseAxios1.post('/student/my_course',{
          "page_limit": 1000,
          "page_no": 1,
        }).then((data)=>{
          const data1 = data.data.objects;
          console.log(data1)
//          const lessonss = data1
//          data1.map((val,index)=>{
//            this.baseAxios1.post('/student/schedule',{
//              "course_schedule_id": (val.id).toString(),
//              "page_limit": 1000,
//              "page_no": 1
//            }).then((data)=>{
////              console.log(lessonss[index].xiaoke = (data.data.objects))
//              lessonss[index].xiaoke = data.data.objects;
//              that.lessons = lessonss;
//            })
//          })

        })
      },
      getSchdul(id){
        const that = this;
        this.baseAxios1.post('/student/report_card',{
          "course_id": "1",
          "page_limit": 1000,
          "page_no": 1
        }).then((data)=>{
          console.log(data)
        })
      },
      test1(){
        this.baseAxios1.post('/student/schedule',{
          "course_schedule_id": '32',
          "page_limit": 1000,
          "page_no": 1
        }).then((data)=>{
          console.log(data)
        })
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
    width: 120px;
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
