<template>
    <div class="finish">
        <div class="tab">
            <div class="completed click">
                待完成作业
            </div>
            <div class="finishs">
                已完成作业
            </div>
        </div>
        <div class="mid">
            <div class="course-details">
                <div class="course-tit">
                    <div class="les-name">
                        Lesson 1 Exploring Space and Astronomy
                    </div>

                    <div class="times">
                        <img src="../../assets/time.png" alt="">
                        <span>2018-06-08  13：00-13：50</span>
                    </div>
                </div>
                <div class="course-main">

                    <ul class="detail-les">

                        <div class="check-homework">
                            <img src="../../assets/chakanzuoye.png" alt="">
                            查看作业
                        </div>
                        <div class="check-homework">
                            <img src="../../assets/xiugaizuoye.png" alt="">
                            修改作业
                        </div>
                        <div class="check-homework">
                            <img src="../../assets/dianping.png" alt="">
                            查看点评
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  /**
   * 调homework，通过本地存个学生id，去study_schedule获取homework，1是未，2是完成
   */
  export default {
        data(){
          return{
            finish:[]
          }
        },
        created(){
          this.gethomework();
        },
        methods:{
          getHomeworkFinsh(){
            const that = this;
            this.baseAxios.get('/api/v1/study_schedule',{params:{q:JSON.stringify({id:1})}})
              .then(function (data) {
                const homeFinsh = data.data;
//                homeFinsh.objects.map((value)=>console.log(value))
                homeFinsh.objects.map((value)=>
                  value.homeworks.map((vvv)=>{
                    if(vvv.homework_type == 2){
                      that.finish.push(vvv)
                    }}
                  )
                )
              })
          },
          gethomework(){
            const that = this;
            const filter =[{'name':'id','op':'eq','val':1}];
            this.baseAxios.get('/api/v1/course',{params:{q:JSON.stringify({filters:filter})}})
              .then((data)=>{
              console.log(data)
              })
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
</style>
