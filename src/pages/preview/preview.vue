<template>
    <div class="preview">
        <div class="mid">
            <div class="mid-tit">
                <div class="tit-lef">一周内要的上课</div>
                <div class="more"></div>
            </div>
            <div class="course-details" v-for="item in course">
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
                            <img :src="item.assist_teacher?item.assist_teacher.avatar:''" alt="">
                            <span>{{item.assist_teacher?item.assist_teacher.nickname:''}}</span>
                        </div>
                    </div>
                    <ul class="detail-les" v-for="wares in item.course_wares">
                        <li>
                            <div class="les-lef">
                                <img src="../../assets/dian_01.png" alt="">
                                <span>{{wares.ware_desc}}</span>
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
      <div class="pagin">
        <el-pagination background layout="prev, pager, next" :page-size="paginations.page_size" :total="paginations.totalPage" @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
</template>

<script>
  import dataFmt from '../../utils/time';

  /**
   * 课前预习
   */
    export default {
        data(){
          return {
              course:[],//课程列表
              paginations: {
                totalPage:0,
                page_size: 2,
              },
              dateCourse:7,//几天内的课程
          }
        },
        created(){
          this.changeDate();
          this.findCourse(1);
        },
        methods: {
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            const that = this;
            that.findCourse(val)
          },
          //几天内的课程
          changeDate(){
            var that = this;
            var myDate = new Date(); //获取今天日期
            myDate.setDate(myDate.getDate() + that.dateCourse);
            that.dataCourse = dataFmt(myDate);
          },
          //查询所有课程信息
          findCourse(page){
            const that = this;
            const filter =[{'name':'id','op':'eq','val':localStorage.getItem('id')}];
//            const filter =[{'name':'created_at','op':'gt','val':dataFmt(new Date())},{'name':'created_at','op':'lt','val':that.dataCourse}];
            this.baseAxios.get(`/api/v1/course?page=${page}&results_per_page=2`,{params:{q:JSON.stringify({filters:filter})}})
              .then(function (data) {
                  that.paginations.totalPage = data.data.total_pages;
                  const course = data.data.objects;
                  course.map((value)=>{
                    if(value.created_at >dataFmt(new Date())|| value.created_at<that.changeDate()){
                      that.course.push(value);
                    }
                  })

              })
          }
        }
    }
</script>

<style scoped>
    .preview{
        width: 800px;
        float: right;
    }
    .mid{
        width: 740px;
        background: #fff;
        overflow: hidden;
        padding: 0 30px;
        padding-bottom: 38px;
    }
    .mid-tit{
        height: 65px;
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
    .course-details{
        width: 100%;
        margin-bottom: 20px;
    }
    .course-tit{
        width: 100%;
        overflow: hidden;
        background: #FFECA7;
        height: 60px;
    }
    .eslji{
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
    .lesson{
        border-bottom: 1px solid #FFF0BB;
        overflow: hidden;
        height: 60px;
        line-height: 60px;
    }
    .lesson-name{
        padding-left: 30px;
        font-size: 14px;
        color: #333333;
        float: left;
    }
    .teacher{
        float: right;
        padding-right: 20px;

    }
    .teacher img{
        width: 30px;
        height: 30px;
        float: left;
        border-radius: 50%;
        margin: 15px;
    }
    .teacher span{
        font-size: 14px;
        color: #333333;
    }
    .detail-les{
        padding-bottom: 27px;
    }
    .detail-les li{
        height: 40px;
        margin-top: 20px;
        line-height: 40px;
    }
    .les-lef{
        float: left;
        padding-left: 30px;
    }
    .les-lef img{
        margin: 15px 12px 15px 0;
        float: left;
    }
    .les-lef span{
        font-size: 14px;
        color: #333333;
    }
    .les-rig{
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
    .les-rig img{
        float: left;
        margin: 13px 11px 7px 19px;
    }
    .les-name{
        float: left;
        line-height: 60px;
        padding-left: 30px;
        font-size: 14px;
        color: #333333;
    }
</style>
