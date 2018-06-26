<template>
    <div class="will-completed">
        <div class="tab">
            <div class="completed click">
              <router-link to="/homework/willCompleted">待完成作业</router-link>
            </div>
            <div class="finish">
                <router-link to="/homework/finish">已完成作业</router-link>
            </div>
        </div>
        <div class="mid" v-for="item in finish">
            <div class="course-details">
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
                          <a :href="item.question_attachment_url">查看作业</a>
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
  export default {
    data(){
      return{
        paginations: {
          totalPage: 10,
          page_size: 10,
        },
        finish:[]
      }
    },
    created(){
      this.gethomework(1);
    },
    methods:{
      gethomework(page){
        const that = this;
        this.baseAxios1.post('/student/my_homework',{
          "page_limit": 10,
          "page_no": page
        })
          .then((data)=>{
            const finsh = data.data.objects;
            finsh.map((val)=>{
              //查找未完成为1的
              if(val.homework_type == 1){
                that.finish.push(val);
                console.log(that.finish)
              }
            })
          })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        const that = this;
        that.finish = [];
        that.gethomework(val)
      }
    }
  }
</script>

<style scoped>
    .will-completed{
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
    .completed,.finish{
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
        margin: 0 auto;
        font-size: 14px;
        color: #333333;
        margin-top: 24px;
        cursor: pointer;
    }
    .check-homework img{
        float: left;
        margin: 10px 10px 10px 17px;
    }
</style>
