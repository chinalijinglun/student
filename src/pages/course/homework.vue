<template>
    <div class="finish">
        <div class="mid-tit">
            <div class="tit-lef">
              {{homework[0]?homework[0].course_name:''}}
            </div>
            <div class="more" @click="backRouter">
                <img src="../../assets/fanhui.png" alt="">
                返回
            </div>
        </div>
        <div class="process">
            <span>
                <img :src="homework[0]?devUrl+homework[0].teacher_avatar:''" alt="">
                {{homework[0]?homework[0].teacher_name:""}}
            </span>
            <!--<span class="state">2018.04.30 13:00 - 13:50</span>-->
        </div>

        <div class="mid">
            <div v-if="homework.length == 0" style="text-align: center">
              <img src="../../assets/zanwukecheng.png" alt="">
              <div>暂无数据</div>
            </div>
            <div v-else class="course-details" v-for="item in homework">
                <div class="course-tit">
                    <div class="les-name">
                        <img src="../../assets/dian_01.png" alt="">
                         {{item.question_name}}
                    </div>

                    <div class="times">
                        <span>Homework</span>
                    </div>
                </div>
                <div class="course-main">

                    <ul class="detail-les">

                        <div class="check-homework">
                            <img src="../../assets/chakanzuoye.png" alt="">
                          <router-link :to="{path:'/course/check',query:{id:item.id,schedul:id}}">
                            查看作业
                          </router-link>
                        </div>
                        <div class="check-homework">
                          <router-link :to="{path:'/course/review',query:{id:item.id,schedul:id}}">
                            <img src="../../assets/dianping.png" alt="">
                            老师点评
                          </router-link>
                        </div>
                        <div class="check-homework" style="width:150px;">
                          <router-link :to="{path:'/course/ifinish',query:{id:item.id,schedul:id}}">
                            <img src="../../assets/wancheng.png" alt="">
                            我完成的作业
                          </router-link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            id:this.$route.query.id,
            homework:[]
          }
        },
        created(){
          this.getHomework();
          console.log(this.homework)
        },
        methods:{
          //获取小课的homework
          getHomework(){
            const that = this;
            this.baseAxios1.post('/student/my_homework',{
              "homework_state":"2",
              "study_schedule_id": this.$route.query.id,
              "page_limit": 1000,
              "page_no": 1
            })
            .then((data)=>{
              const backdata = data.data.objects;
              that.homework = backdata;
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
        max-width: 460px;
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
        margin-left: 100px;
        font-size: 14px;
        color: #999999;
    }
    .process img{
        width: 30px;height: 30px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
    }

</style>
