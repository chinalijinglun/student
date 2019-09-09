<template>
  <div class="timetable">
    <el-form :inline="true" :model="search" class="demo-form-inline">
      <el-form-item label="课程名">
        <el-input v-model="search.couusename" placeholder="课程名"></el-input>
      </el-form-item>
      <el-form-item label="上课时间">
        <el-date-picker
          v-model="search.time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="教师名">
        <el-input v-model="search.teachername" placeholder="教师名"></el-input>
      </el-form-item>
      <el-select v-model="search.value" placeholder="课程状态" @change="changeStatue">
        <el-option
          v-for="statue in search.region"
          :key="statue.id"
          :label="statue.name"
          :value="statue.id"
        >
        </el-option>
      </el-select>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="forms" v-for="item in course">
      <div class="forms-tit">
        <div class="text">
          {{item.course_name}}
        </div>
        <div class="runing">
          <div class="running-bons">
            {{item.finish}}/{{item.classes_number}}
          </div>
          <div class="run-state">
            {{times>item.end ?'已结课':'进行中'}}
          </div>
        </div>
      </div>
      <div class="forms-contain">
        <div class="lef">
          <img class="time" src="../../assets/time.png" alt="">
          <span class="time-de" v-if="item.start === null"></span>
          <span class="time-de" v-else>{{formatTime(item.start)}}---{{formatTime(item.end)}}</span>
          <div class="teache">
            <!--<img :src="item.teacher_avatar" alt="">-->
            <span>{{item.teacher_name}}</span>
          </div>
        </div>
        <div class="rig">
          <img src="../../assets/chakanzuoye.png" alt="">
          <span>
            <router-link :to="{ path:'/course/finished', query: { id: item.course_id} }">
            查看详情
            </router-link>
          </span>
        </div>
      </div>
    </div>
    <div class="pagin">
      <el-pagination background layout="prev, pager, next" :page-size="paginations.page_size" :total="paginations.totalPage" @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import fmtDate from '../../utils/time';

  export default {
    created() {
      this.getCourse(1);
    },
    data() {
      return {
        times:fmtDate(new Date()),
        course:[],
        paginations: {
          totalPage:0,
          page_size: 10,
        },
        search: {
          value:"",
          couusename: '',
          time:"",
          teachername:'',
          region:[{
            id: '0',
            name:'全部课程'
          },{
            id: '1',
            name:'已结课'
          },{
            id:'2',
            name:'进行中'
          }]
        }
      }
    },
    methods: {
      changeStatue(val){
        this.search.value = val;
      },
      methsObj(page){
        const that = this;
        const bbb={
          "page_limit": 10,
          "page_no": page,
        };
        if(that.search.couusename != ''){
          bbb.course_name =that.search.couusename
        }
        if(that.search.teachername != ''){
          bbb.teacher_name =that.search.teachername
        }
        if(that.search.value != ''){
          bbb.course_status =that.search.value
        }
        if(that.search.time[0] != ''){
          bbb.course_time =that.search.time[0]
        }
        return bbb;

      },
      onSubmit() {
        const that = this;
        this.baseAxios1.post('/student/my_course', that.methsObj(1))
          .then((data) => {
          console.log(data)
            that.paginations.totalPage = data.data.num_results;
            that.course = data.data.objects;
          })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        const that = this;
        that.getCourse(val)
      },
      //格式化时间
      formatTime(time){
        if(time == null){
          return "";
        }else{
          var findT = time.indexOf('T');
          return time.slice(0,findT);
        }
      },
      //获取课表
      getCourse(page) {
        const that = this;
        this.baseAxios1.post('/student/my_course', that.methsObj(page))
          .then((data) => {
            that.paginations.totalPage = data.data.num_results;
            that.course = data.data.objects;
          })
      }
    }
  }
</script>

<style scoped>
  .timetable {
    width: 800px;
    float: right;
    background: #fff;
    padding-bottom: 20px;
  }

  .demo-form-inline {
    padding: 30px;
  }

  .demo-form-inline button {
    background: #FF8200;
    border: none;
  }

  .forms-tit {
    width: 740px;
    height: 60px;
    background: #FFECA7;
    overflow: hidden;
  }

  .forms {
    width: 740px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .text {
    float: left;
    font-size: 14px;
    color: #333333;
    line-height: 60px;
    margin-left: 23px;
  }

  .runing {
    float: right;
    overflow: hidden;
  }

  .running-bons {
    line-height: 60px;
    font-size: 14px;
    color: #333333;
    float: left;
    margin-right: 17px;

  }

  .run-state {
    width: 80px;
    height: 40px;
    float: right;
    margin: 10px 20px;
    font-size: 14px;
    line-height: 40px;
    color: #FF8200;
    background: #FFFFFF;
    border-radius: 5px;
    text-align: center;
  }

  .forms-contain {
    background: #FFFBED;
    overflow: hidden;
  }

  .lef {
    float: left;
    overflow: hidden;
  }

  .time {
    float: left;
    margin: 31px 13px 32px 23px;
  }

  .time-de {
    float: left;
    line-height: 83px;
    font-size: 14px;
    color: #333333;
  }

  .teache {
    float: left;
    overflow: hidden;
    margin-left: 15px;
  }

  .teache img {
    width: 30px;
    height: 30px;
    float: left;
    margin: 24px 10px 28px 0;
    border-radius: 50%;
  }

  .teache span {
    font-size: 14px;
    color: #333333;
    line-height: 83px;
  }

  .rig {
    width: 140px;
    height: 40px;
    line-height: 40px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    float: right;
    margin: 20px;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
  }

  .rig img {
    float: left;
    margin: 10px 10px 10px 17px;

  }
</style>
