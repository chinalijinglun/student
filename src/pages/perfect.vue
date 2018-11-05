<template>
<!-- 完善信息 -->
    <div class="perfect">
        <div class="chenggong">
            <img src="../assets/chenggong.png" alt="">
        </div>
        <div class="base-mess">
            <div class="title">基本信息</div>
            <div class="student-mess">
                <div class="name">
                    <span>*</span>学生姓名
                </div>
                <div>
                    <input type="text" class="inps" v-model="name">
                </div>
            </div>
            <div class="gender">
                <div class="name">
                    <span>*</span>Gender
                </div>
                <div class="radio">
                    <span class="checked"><input type="radio" name="gender" value="男" v-model="sex"> 男</span>
                    <span><input type="radio" name="gender" value="女" v-model="sex"> 女</span>
                    <span><input type="radio" name="gender" value="保密" v-model="sex"> 保密</span>
                </div>
            </div>
            <div class="country-grade">
                <div class="country">
                    <div class="name">
                        <span>*</span>在读国家
                    </div>
                  <select name="" v-model="contury1">
                    <option v-for="(item,index) in COUNTRY_CODE" :value="item.id">{{item.name_zh}}</option>
                  </select>
                </div>
                <div class="grade">
                    <div class="name">
                        <span>*</span>所在年级
                    </div>
                    <select name="" v-model="selected">
                        <option v-for="(item,index) in subject" :value="item">{{item}}</option>
                    </select>
                </div>
            </div>
            <div class="course">
                <div class="name">
                    <span>*</span>意向学习科目
                </div>
                <!--<select name="" v-model="first">-->
                    <!--<option :value="item" v-for="item in firsts">-->
                      <!--{{item.full_name_zh}}-->
                    <!--</option>-->
                <!--</select>-->
                <!--<select name="" v-model="second">-->
                    <!--<option :value="item" v-for="item in seconds">{{item}}</option>-->
                <!--</select>-->
              <!--<select name="" v-model="thrid">-->
                <!--<option :value="item" v-for="item in thrids">{{item}}</option>-->
              <!--</select>-->
              <select name="" v-model="first" class="select">
                <option :value="item" v-for="item in test1">
                  {{item.full_name_zh}}
                </option>
              </select>
              <select name="" v-model="second" class="select">
                <option :value="item" v-for="item in seconds">
                  {{item.data[0].subject_category_zh}}
                </option>
              </select>

              <select name="" v-model="thrid" class="select">
                <option :value="item" v-for="item in thrids[0]">
                  {{item.subject_name_zh}}
                </option>
              </select>

              </div>
              <div class="parent-tele">
                  <div class="name">
                      <span>*</span>家长电话
                  </div>
                  <select name="" class="code">
                      <option :value="items.code" v-for="items in contury">{{items.name_zh}}</option>
                  </select>
                  <input type="text" class="tele" v-model="parent_mobile">
              </div>
          </div>
          <button class="btn" @click="execute">确定</button>
      </div>
  </template>

  <script>
    import {NATIONAL_CODE,COUNTRY_CODE} from '../utils/enum'
      export default {
        data(){
          return {
            name:'',
            sex:'男',
            contury1:"",
            contury:NATIONAL_CODE,
            COUNTRY_CODE:COUNTRY_CODE,
            nianji:"",
            kemu:[1,2,3],
            parent_mobile:'',
            selected:"",
            subject:[
              '1',
              "2",
              "3",
              "4",
              "5",
              "6","7",
              "8",
              "9",
              "10",
              "11",
              "12",
              '大学'
            ],
            firsts:[],
            seconds:[],
            thrids:[],
            first:"",
            second:"",
            thrid:"",
            sss:[],
            test1:[]
          }
        },
        created(){
          this.postContry();
          this.studentSubject();
        },
        methods:{
          putSubject(){
            const that = this;
            this.baseAxios1.post('/student/save_subject',{
              "subject_id":that.subjectId,
              "subject_type":2,
              "page_limit": 1,
              "page_no": 1,
            }).then(function (data) {
              console.log(data)
            })
          },
          postStudentInfo(){
            const that = this;
            const sendData = {};

            if(that.name == '' || that.sex == '' || that.contury1 == '' || that.parent_mobile == ''){
              alert('请填写必填字段');
              return false;
            }else{
              console.log(that.contury1)
              this.baseAxios.put('/api/v1/student/'+localStorage.getItem('id'),
              {
                'name':that.name,
                'gender':that.sex,
                'grade':that.selected,
                'read_city':that.contury1,
                'parent_mobile':that.parent_mobile
              }
              ).then(function (data) {
                if(data.status == 200){
                  that.open3('提交成功')
                }
              }) .catch(function (error) {
                alert(error);
              });

  //            that.postStudentInfo();
  //            setTimeout(function () {
  //              that.$router.push('/center/personal');
  //            },250)
            }

          },
          //t提交国家年级等
          postContry(){
            const that = this;
            this.baseAxios1.post('/student/subject',{
//              "student_id":localStorage.getItem('id'),
//              "type":'2',
              "page_limit": 1000,
              "page_no": 1,
            }).then(function (data) {
              that.firsts = data.data.objects;
              const arr = data.data.objects;
              var map = {},
                dest = [];
              for(var i = 0; i < arr.length; i++){
                var ai = arr[i];
                if(!map[ai.curriculum_id]){
                  dest.push({
                    curriculum_id: ai.curriculum_id,
                    name: ai.name,
                    data: [ai],
                    full_name_zh:ai.full_name_zh,
                    subject_category_zh:ai.subject_category_zh,
                    subject_name_zh:ai.subject_name_zh,
                    subject_id:ai.subject_id,
                    id:ai.id
                  });
                  map[ai.curriculum_id] = ai;
                }else{
                  for(var j = 0; j < dest.length; j++){
                    var dj = dest[j];
                    if(dj.curriculum_id == ai.curriculum_id){
                      dj.data.push(ai);
                      break;
                    }
                  }
                }
              }

              that.test1 = dest;
              console.log(dest)
            })
          },
          addSubject(){
            const that = this;
            if(this.first!= ""){
              this.baseAxios.post('/api/v1/student_subject',{
                "optional":2,
                "subject_id":that.thrid.subject_id,
                "subject_type":2,
                "student_id":localStorage.getItem('id')
              }).then(function (data) {
                console.log(data)

              }) .catch(function (error) {
                alert(error);
              });
            }else{
              return ""
            }
          },
          execute(){
            const that = this;
            if(that.name == '' || that.sex == '' || that.contury1 == '' || that.parent_mobile == ''){
              alert('请填写必填字段');
              return false;
            }else{
              that.addSubject();
              that.postStudentInfo();
//              that.putSubject();
              setTimeout(function () {
                that.$router.push('/center/personal');
              },250)
            }

          },
          studentSubject(){
            const that =this;
            const filter =[{'name':'subject_type','op':'eq','val':2}];
            this.baseAxios.get('/api/v1/student_subject',{params:{q:JSON.stringify({filters:filter})}}).then(function
              (data) {
              that.sss = data.data.objects;
            })
          },
          open3(err) {
            this.$message({
              message: err,
              type: 'warning'
            });
          }
        },
        watch:{
//          thrid:function (val) {
//            console.log(val.student_id);
//            const that = this;
//            this.baseAxios1.post('/student/subject',{
//              "page_limit": 10,
//              "page_no": 1,
//              "student_id": val.id,
//            }).then(function (data) {
//              console.log(data)
//            })
//          }
          first:function (val) {
            this.seconds = [];
            this.seconds.push(val);
            this.thrid = '';
          },
          second:function (val) {
            this.thrids = [];
            this.thrids.push(val.data);
          }
        }
      }
  </script>

  <style scoped>
      .perfect{
          width: 1000px;
          background: #fff;
          margin: 0 auto;
          height: 1053px;
      }
      .chenggong{
          padding-top: 54px;
      }
      .chenggong img{
          margin: 0 auto;
          display: block;
      }
      .title{
          font-size: 18px;
          color: #333333;
      }
      .name span{
          color: #FF4433;
      }
      .name{
          font-size: 14px;
          color: #151515;
          line-height: 16px;
          margin-top: 28px;
      }
      .inps{
          background: #FFFFFF;
          border: 1px solid #D8D8D8;
          border-radius: 3px;
          outline: none;
          margin-top: 12px;
          width: 198px;
          height: 40px;
      }
      .radio{
          margin-top: 8px;
          font-size: 14px;
          color: #666666;
      }
      .checked{
          color: #FF8200;
      }
      .radio span{
          margin-right: 79px;
      }
      .country,.grade{
          width: 198px;
          float: left;
          margin-right: 20px;
      }
      .country-grade{
          overflow: hidden;
      }
      select{
          margin-top: 12px;
          outline: none;
          width: 198px;
          height: 40px;
          background: #FFFFFF;
          border: 1px solid #D8D8D8;
          border-radius: 3px;
          margin-right: 10px;
      }
      .code{
          background: #F3F3F3;
          width: 150px;
          height: 40px;
          margin: 0;
          margin-top: 12px;
          border-radius: 0;
      }
      .tele{
          background: #FFFFFF;
          border: 1px solid #D8D8D8;
          border-radius: 3px;
          width: 278px;
          height: 40px;
          margin-top: 12px;
      }
      .btn{
          width: 150px;
          height: 40px;
          display: block;
          margin: 0 auto;
          background: #FF8200;
          border-radius: 5px;
          font-size: 14px;
          color: #FFFFFF;
          outline: none;
          margin-top: 58px;
      }
      .base-mess{
          margin-top: 79px;
          margin-left: 70px;
      }
  </style>
