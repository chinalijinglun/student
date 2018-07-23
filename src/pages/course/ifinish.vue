<template>
    <div class="finish">
        <div class="mid-tit">
            <div class="tit-lef">我完成的作业</div>
        </div>


        <div class="mid" v-for="item in homeworkFinish">
          <div class="process">
            <span class="state">{{item.created_at}}</span>
          </div>
            <div class="course-details">
                <div class="course-tit">
                    <div class="les-name">
                        <img src="../../assets/dian_01.png" alt="">
                          {{item.question_name}}
                    </div>
                </div>
                <div class="course-main">
                    <div class="contains">
                        {{item.answer_text}}
                    </div>
                    <div class="down">
                      <template v-if="item.answer_attachment_url == 'string'">
                        <div class="box box1">
                          <img src="../../assets/fujian.png" alt="">
                          <div class="wenzi">
                            <a :href="item.answer_attachment_url">
                            <p>Alex and I practiced writing </p>
                            <p class="download">下载附件</p>
                            </a>
                          </div>
                        </div>
                      </template>

                      <template v-if="item.answer_attachment_url != 'string'">
                        <div class="box box2" v-for="fujian in item.answer_attachment_url">
                          <img src="../../assets/fujian.png" alt="">
                          <div class="wenzi">
                            <a :href="fujian.url">
                            <p>Alex and I practiced writing </p>
                            <p class="download">下载附件</p>
                            </a>
                          </div>
                        </div>
                      </template>

                    </div>
                    <ul class="detail-les">

                        <div class="check-homework">
                            <img src="../../assets/xiugaizuoye.png" alt="">
                            修改作业
                        </div>
                        <div class="check-homework" @click="backRouter">
                            <img src="../../assets/fanhui.png" alt="">
                            返回
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  /**
   * 获取完成的作业，请求my_homework接口，传递homework_state为1，然后，传递课程计划id
   */

    export default {
        created(){
          this.getFinish();
        },
        data(){
            return{
              homeworkFinish:[]
            }
        },
        methods:{
          getFinish(){
            const that = this;
            this.baseAxios1.post('/student/my_homework',{
              'homework_state':'1',
              'study_schedule_id':(this.$route.query.schedul).toString(),
              'page_no':1,
              'page_limit':10
            }).then(function (data) {
              that.homeworkFinish = data.data.objects;
//              console.log(typeof(data.data.objects[0].homework_type))
            })
          },
          backRouter(){
            this.$router.go(-1);
//            this.$router.back()
          }
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
        max-width: 320px;
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
        float: left;
        margin-right: 20px;
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
        margin-bottom: 20px;
        line-height: 30px;
    }
    .process .state{
        font-size: 14px;
        color: #999999;
    }
    .process img{
        width: 30px;height: 30px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
    }
    .contains{
        width: 714px;
        margin: 19px 11px 35px 15px;
        font-size: 14px;
        color: #666666;
        line-height: 27px;
    }
    .box{
        overflow: hidden;
        width: 242px;
        margin-left: 50px;
        float: left;
    }
    .box img{
        float: left;
        margin-right:13px;
    }
    .box p{
        font-size: 14px;
        color: #666666;
    }
    .box p.download{
        font-size: 14px;
        color: #FF8200;
    }
    .down{
        overflow: hidden;
    }
</style>
