<template>
  <div class="finish">
    <div class="mid-tit">
      <div class="tit-lef">{{course.courseName}}</div>
      <div class="more">
        <img src="../../assets/fanhui.png" alt="">
        <router-link to="/timetable/timetable">返回</router-link>
      </div>
    </div>
    <div class="process">
      <span>教师：{{course.teacherName}}</span>
      <span class="state"> 进度：{{course.finish}}/{{course.ifinish}}</span>
    </div>
    <div class="tab">
      <div class="completed click">
          已约课程
      </div>
      <div class="finishs">
        <router-link :to="{ path:'/course/finished', query: { 'id': id }}">
        已上课程
        </router-link>
      </div>
    </div>
    <div class="mid">

      <div class="course-details" v-for="item in fenye[index]">
        <div class="course-tit">
          <div class="les-name">
            {{item.name}}
          </div>

          <div class="times">
            <img src="../../assets/time.png" alt="">
            <span>{{guyuTime(fmtTime1(item.start),fmtTime1(item.end))}}</span>
          </div>
        </div>
        <div class="course-main">

          <ul class="detail-les">

            <div class="check-homework" @click="test2(item.id,item.start)">
              <img src="../../assets/chakanzuoye.png" alt="">
              进入教室
            </div>
            <div class="check-homework" @click="previewCourse(item.id)">
              <img src="../../assets/huifang.png" alt="">
              预览课件
            </div>
          </ul>
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
  /**
   * 代做：1预览课件，需要调多倍api
   *
   */
  import fmtDate from '../../utils/time';
  import { fmtTime,fmtTime1} from '../../utils/time';
  export default {
    data(){
      return {
        id:this.$route.query.id,
        paginations: {
          totalPage:0,
          page_size: 10,
        },
        course:{
          teacherName:"",
          courseName:"",
          finish:'',
          ifinish:''
        },
        finish:[],
        fenye:[],
        roomId:'',
        study_schedule_id:"",
        index:'0' //分页的
      }
    },
    created(){
      this.getIdData();
      this.getNameother();
    },
    mounted(){

    },
    methods:{
      fmtTime,
      fmtTime1,
      guyuTime(start,end){
        var year = start.slice(0,start.indexOf('T'));
        var mouth = start.slice(start.indexOf('T')+1,start.indexOf('T')+6);
        var hour = end.slice(end.indexOf('T')+1,end.indexOf('T')+6);

        return year+" "+mouth+"-"+hour;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        const that = this;
        that.index = val - 1;
      },
      //获取数据
      getIdData(){
        const that = this;
        this.baseAxios1.post('/student/schedule',{
          "course_id": that.id,
          "page_limit": 1000,
          "page_no": 1
        }).then((data)=>{
          const overDate = data.data.objects;
           const bbb = overDate.sort(function (a,b) {
              return a.start > b.start;
            });

//          console.log(bbb)
          bbb.map((val)=>{
            if(fmtDate(new Date())< val.end){
              that.finish.push(val);
              that.paginations.totalPage = that.finish.length;

            }
          })
          that.fenye = that.sliceArray(that.finish,10);
        })
      },
      //获取教师名字和其他
      getNameother(){
        const that= this;
        this.baseAxios1.post('/student/my_course',{
          "course_id": that.id,
          "page_limit": 1,
          "page_no": 1
        }).then((data)=>{
          const data1 = data.data.objects;
          data1.map(function (val) {
              that.course.teacherName = val.teacher_name;
              that.course.courseName = val.course_name;
              that.course.ifinish = val.classes_number;
              that.course.finish = val.finish;
          })
        })
      },
      //分割数组
      sliceArray(array, size) {
        var result = [];
        for (var x = 0; x < Math.ceil(array.length / size); x++) {
          var start = x * size;
          var end = start + size;
          result.push(array.slice(start, end));
        }
        return result;
      }
      //进入教室获取教师地址
      ,test2(id,time){
        const that = this;

        const date = new Date();
        const nowTime = moment(date).add(15, 'm').format();
        const backTime = moment(time).subtract(15, 'm').format();

        if(nowTime >= backTime){
          window.open(`#/iframe?id=${id}`);
        }else{
          this.open3('请在课程开始前15分钟进入教师')
        }
      },
      //预览课件
      previewCourse(id){
        const that = this;
        this.baseAxios1.post('/student/get_preview_doc',{
          "page_limit": 10,
          "page_no": 1,
          "study_schedule_id": id
        })
          .then(function (data) {
            const ware_id = data.data.objects;
            if(ware_id.length!=0){
              ware_id.map(function (val,index) {
//                that.$router.push({path:'/iframe',query:{ware_uid:val.ware_uid}})
                window.open(`#/iframe?ware_uid=${val.ware_uid}`);
              })
            }else{
              alert('暂无课件')
            }
          })
      },
      open3(err) {
        this.$message({
          message: err,
          type: 'warning'
        });
      },
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "getIdData",

    }
  }
</script>

<style scoped>
  .finish{
    width: 800px;
    float: right;
    background: #fff;
  }
  .tab{
    width: 740px;
    height: 50px;
    margin: 26px 30px 20px;
    background: #FAFAFA;
    border: 1px solid #DCDCDC;
  }
  .completed,.finishs{
    font-size: 16px;
    color: #666666;
    line-height: 50px;
    float: left;
    text-align: center;
    width: 150px;
    height: 50px;
  }
  .click{
    border-top: 2px solid #FF8200;
    font-size: 16px;
    color: #FF8200;
    background: #fff;
  }
  .mid{
    width: 740px;
    background: #fff;
    overflow: hidden;
    padding: 0 30px;
    padding-bottom: 20px;
  }

  .course-details{
    width: 100%;
  }
  .course-tit{
    width: 100%;
    overflow: hidden;
    background: #FFECA7;
    height: 60px;
  }
  .times{
    float: right;
    overflow: hidden;
    padding-right: 20px;
  }
  .times img{
    margin: 20px;
    float: left;

  }
  .times span{
    font-size: 14px;
    color: #666666;
    line-height: 60px;
    float: left;
  }
  .course-main{
    overflow: hidden;
    background: #FFFBED;
    width: 100%;
  }
  .detail-les{
    padding-bottom: 27px;
    overflow: hidden;
    margin: 0 auto;
    max-width: 426px;
  }
  .detail-les li{
    height: 40px;
    margin-top: 20px;
    line-height: 40px;
  }
  .les-name{
    float: left;
    line-height: 60px;
    padding-left: 30px;
    font-size: 14px;
    color: #333333;
  }
  .check-homework{
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    margin: 0 40px;
    font-size: 14px;
    color: #333333;
    margin-top: 24px;
    cursor: pointer;
    float: left;
  }
  .check-homework img{
    float: left;
    margin: 10px 10px 10px 17px;
  }
  .mid-tit{
    height: 65px;
    width: 740px;
    margin: 0 30px;
  }
  .tit-lef{
    float: left;
    height: 65px;
    line-height: 65px;
    font-size: 18px;
    color: #333333;
  }
  .more{
    float: right;
    height: 65px;
    line-height: 65px;
    cursor: pointer;
    font-size: 14px;
    color: #333333;
  }
  .more img{
    float: left;
    margin: 22px;
  }
  .process{
    margin: 0 30px;
    font-size: 14px;
    color: #333333;
  }
  .process .state{
    margin-left: 100px;
  }
</style>
