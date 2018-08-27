<template>
    <div class="finish">
        <div class="tab">
            <div class="completed">
              <router-link to="/homework/willCompleted">待完成作业</router-link>
            </div>
            <div class="finishs click">
              <router-link to="/homework/finish">已完成作业</router-link>
            </div>
        </div>
        <div class="mid" v-for="item in finish">
            <div class="course-details">
                <div class="course-tit">
                    <div class="les-name">
                       {{item.question_name}}
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
                            <a @click="lookHomework(item.id,item.study_schedule_id)">查看作业</a>
                        </div>
                        <div class="check-homework">
                            <img src="../../assets/xiugaizuoye.png" alt="">
                            <span @click="openAlert(item.id)">修改作业</span>
                        </div>
                        <div class="check-homework">
                            <img src="../../assets/dianping.png" alt="">
                            <span @click="lookdianping(item.id,item.study_schedule_id)">查看点评</span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <div class="homework_alert" ref="alert">
             <div class="homework_all">
                <span>
              <label for="">标题</label>
              <input type="text" v-model="fujian.title">
              </span>
               <span>
              <label for="">描述</label>
              <textarea v-model="fujian.textarea"></textarea>
              </span>
               <span>
              <label for="">附件</label>
              <input type="file" @change="updateFile">
              </span>
               <div class="btn">
                 <button @click="submitHomework">确定</button>
                 <button @click="noneAlert">取消</button>
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
   * 调homework，通过本地存个学生id，去study_schedule获取homework，1是未，2是完成
   * 查看作业是查看老师留的question_attachment_url，
   * 修改作业是重新上传自己的作业
   * 查看点评是看成长报告的详情
   *
   * 离下逻辑，想要修改，用homework put，file在onchage时就提交了
   */
  export default {
        data(){
          return{
            paginations: {
              totalPage: 10,
              page_size: 10,
            },
            finish:[],
            fujian:[],
            id:'',
            url:''
          }
        },
        created(){
          this.gethomework(1);
        },
        methods:{
          gethomework(page){
            const that = this;
              this.baseAxios1.post(`/student/my_homework`,{
                'homework_state':"1",
                "page_limit": 10,
                "page_no": page
              })
              .then((data)=>{
                const finsh = data.data.objects;
                that.finish = finsh;
//                that.paginations.totalPage = finsh.total_pages;
//                finsh.map((val)=>{
//                  if(val.homework_type == 1){
//                    that.finish.push(val);
//                  }
//                })
              })
          },
          //打开弹窗
          openAlert(id){
            const that = this;
            this.$refs.alert.style.display='block';
            that.id = id;
          },
          //关闭弹窗
          noneAlert(){
            const that = this;
            that.fujian=[];
            that.id = '';
            this.$refs.alert.style.display='none'
          },
          //上传附件e
          updateFile(e){
            const that = this,
                  file = e.target.files[0];
                  that.fujian.param = new FormData();
                  that.fujian.param.append('file',file);
                  //console.log(that.fujian.param.get('file'))
            this.baseAxios1.post('/upload',that.fujian.param).then((data)=>{
              const url = data.data[0].download_file;
                if(url){
                that.url =location.origin+url;
                this.$refs.alert.style.display='none';
                }
            })
          },
          //提交作业
          submitHomework(){
            const that = this;
            that.baseAxios.put("/api/v1/homework/"+that.id,{ //homework的id
              "answer_attachment_url": that.url, // 学生上传附件
              "answer_text":that.fujian.title,  //作业描述
              "question_name":that.fujian.textarea //标题
            }).then((data)=>{
              if(data.data.id){
                alert('提交成功')
                this.$refs.alert.style.display='none'
              }
            })
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            const that = this;
            that.finish = [];
            that.gethomework(val)
          },
          lookHomework(id,study_schedule_id){
            this.$router.push('/course/check?id='+id+"&schedul="+study_schedule_id)
            //course/check?id=62&schedul=96
          },
          lookdianping(id,study_schedule_id){
            this.$router.push('/course/review?id='+id+"&schedul="+study_schedule_id)
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
    .homework_alert{
      width: 100%;
      height: 100%;
      position: fixed;
      top:0;
      left:0;
      display: none;
      overflow: hidden;
      background-color: rgba(0,0,0,.6);
      z-index: 99;
    }
    .homework_all{
      padding: 15px;
      background-color: #FFFFFF;
      width: 480px;
      height: 320px;
      position: absolute;
      top:50%;
      left: 50%;
      margin-left: -255px;
      margin-top: -175px;
    }
    .homework_all span{
      width: 100%;
      display: block;
      margin: 15px 0;
    }.homework_all span label{
       margin:0 25px;
     }
    .homework_all span input[type='text']{
      width: 70%;
      border-radius: 3px;
      border:1px solid #bbbbbb;
      height: 35px;
    }
    .homework_all span textarea{
      width: 335px;
      border-radius: 3px;
      border:1px solid #bbbbbb;
      height: 135px;
      vertical-align: text-top;
    }
    .btn{
      text-align: center;
    }
    .btn button{
      width: 40px;
      height: 25px;
      margin-right: 10px;
    }
</style>
