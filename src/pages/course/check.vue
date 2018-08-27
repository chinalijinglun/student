<template>
    <div class="finish">
        <div class="mid-tit">
            <div class="tit-lef">{{teacher.name}}</div>
        </div>
        <div class="process">
            <span>
                <img :src="teacher.teacher_avatar" alt="">
               {{teacher.teacher_name}}
            </span>
            <span class="state">{{teacher.created_at}}</span>
        </div>

        <div class="mid">

            <div class="course-details">
                <div class="course-tit">
                    <div class="les-name">
                        <img src="../../assets/dian_01.png" alt="">
                          {{homework.homework_type == 1 ? homework.question_name : homework.answer_text}}
                    </div>

                    <div class="times">
                        <span>Homework</span>
                    </div>
                </div>
                <div class="course-main">
                    <div class="contains"
                         v-html="homework.homework_type == 1 ? homework.question_text : homework.answer_text">
                      <!--{{homework.question_text}}-->
                    </div>
                    <div class="down">
                        <div class="box" v-for="item in homewordList">
                            <img src="../../assets/fujian.png" alt="">
                            <div class="wenzi">
                                <p>{{item.name}}</p>
                                <p class="download">
                                  <a :href="item.url">
                                    下载附件
                                  </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <ul class="detail-les">

                        <div class="check-homework" @click="showBgF">
                            <img src="../../assets/chakanzuoye.png" alt="">
                            写作业
                        </div>
                        <div class="check-homework" @click="backRouter">
                            <img src="../../assets/fanhui.png" alt="">
                            返回
                        </div>
                    </ul>
                </div>
            </div>
        </div>
      <div class="bg" v-show="showBg">
      <div class="alert">
        <div class="alert_title">写作业</div>
        <div class="alert_biaoti">
          <span class="alert_biaoti_head">标题</span>
          <span class="alert_biaoti_input">
            <input type="text" placeholder="请输入标题" v-model="title">
          </span>
        </div>
        <div class="alert_biaoti">
          <span class="alert_biaoti_head">描述</span>
          <span class="alert_content">
            <vue-editor v-model="content"></vue-editor>
          </span>
        </div>
        <div class="alert_biaoti">
          <span class="alert_biaoti_head">附件</span>
          <span>
            <input ref="input1" type="file" value="上传" multiple @change="updateFile">
          </span>
        </div>
        <div class="submit">
          <span @click="writeHomework">提交</span>
          <span @click="showBgF">取消</span>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
    export default {
      data(){
        return{
          showBg:false,
          content: '请输入内容',
          title:'',
          id:this.$route.query.id,
          schedul:this.$route.query.schedul,
          homework:{},
          teacher:{},
          files:[],
          btnStatue:true,
          homewordList:[]
        }
      },
      created(){
        this.getDetailHomework();
        this.getTeacher();
      },
      components: {
        VueEditor
      },
      methods: {
        getDetailHomework(){
          const that = this;
          this.baseAxios.get('/api/v1/homework/'+that.id).then(function (data) {
            that.homework = data.data;
          })
        },
        backRouter(){
          this.$router.go(-1);
        },
        getTeacher(){
          const that =this;
          this.baseAxios1.post('/student/my_homework',{
            "study_schedule_id":that.schedul,
            "page_limit":1,
            "page_no":1
          }).then(function (data) {
            that.teacher = data.data.objects[0];
            that.homewordList = JSON.parse(that.teacher.question_attachment_url);
          })
        },
        showBgF(){
          this.showBg =!this.showBg;
          this.content = '';
          this.title = '';
          this.$refs.input1.value = ''
        },
        writeHomework(){
          const that = this;
          if(that.id && that.schedul){
            that.writeHomework1()
          }else{
//            that.writeHomework2()
            alert('缺少参数')
          }
        },
        writeHomework1(){
          console.log(1)
          const that = this;
          const sendObj = {
            "homework_id":that.id,
            "study_schedule_id": that.schedul,//课节id
          };
          if(that.files != ''){
            sendObj.attachment = JSON.stringify(that.files)//附件
          }
          if(that.content != ''){
            sendObj.desc = that.content
          }
          if(that.title != ''){
            sendObj.title = that.title
          }
          if(that.btnStatue){
            this.baseAxios1.post('/student/write_homework',sendObj).then(function (data) {
              if(data.status == 200){
                that.showBg =!that.showBg;
                that.open2('提交成功');
              }else{
                that.open4('提交失败');
              }
            })
          }else{
            that.open4('文件上传中');
          }

        },
        writeHomework2(){
          console.log(2)
          const that = this;
          const sendObj = {
          };
          if(that.files != ''){
            sendObj.answer_attachment_url = JSON.stringify(that.files)//附件
          }
          if(that.content != ''){
            sendObj.answer_text = that.content
          }
          if(that.title != ''){
            sendObj.question_name = that.title
          }
          that.baseAxios.put("/api/v1/homework/"+that.id,sendObj).then((data)=>{
            if(data.data.id){
              that.showBg =!that.showBg;
              that.open2('提交成功');
            }
          })
        },
        //上传附件e
        updateFile(e){
          const that = this,
          file = e.target.files;
          that.btnStatue = false;
          const fujian = new FormData();
          for(var i = 0; i<file.length;i++){
            fujian.append('file', file[i]);
          }
          this.baseAxios1.post('/upload',fujian).then((data)=>{
            if(data.status == 200){
              that.files = data.data;
              that.btnStatue = true;
              that.open2('文件上传成功');
            }else{
              that.open4('文件上传失败');
            }
          })
        },
        open2(msg) {
          this.$message({
            message: msg,
            type: 'success'
          });
        },
        open4(msg) {
          this.$message.error(msg);
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
        float: right;
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
        margin-bottom: 10px;
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
    .bg{
      position: fixed;
      top:0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background: rgba(43,43,43,0.98);
    }
  .alert{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -400px;
    margin-top: -300px;
    width: 800px;
    height: 600px;
    border-radius: 10px;
    background: #fff;
  }
  .alert_title{
    margin-left: 55px;
    height: 86px;
    line-height: 86px;
    font-size: 22px;
    color: #333333;
    border-bottom: 1px solid #E8E8E8;
  }
  .alert_biaoti{
    margin: 20px 0;
  }
  .alert_title::after{
    content: '';
    display: block;
    width: 67px;
    border-bottom: 2px solid #FF8200;
    margin-top: -4px;
  }
  .alert_biaoti span{
    display: inline-block;
    font-size: 16px;
    color: #333333;
  }
  .alert_biaoti_head{
    width: 105px;
    text-align: center;
  }
  .alert_biaoti_input input{
    width: 630px;
    height: 52px;
    padding-left: 10px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    outline: none;
  }
  .alert_content{
    width: 640px;
    vertical-align: text-top;
  }
  .submit{
    padding-left: 300px;
  }
  .submit span{
    display: inline-block;
    width: 120px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
  }
  .submit span:first-child{
    background: #FF8200;
    color: #FFFFFF;
    margin-right: 30px;
  }
  .submit span:last-child{
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    color: #333333;
  }
</style>
