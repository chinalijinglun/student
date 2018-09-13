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
                    <option v-for="(item,index) in contury" :value="item">{{item}}</option>
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
                <select name="" v-model="first">
                <option :value="item" v-for="item in firsts">
                {{item.full_name_zh}}
                </option>
                </select>

                <select name="" v-model="second">
                <option :value="item" v-for="item in seconds">{{item}}</option>
                </select>

                <select name="" v-model="thrid">
                <option :value="item" v-for="item in thrids">{{item}}</option>
                </select>
              </div>
              <div class="parent-tele">
                  <div class="name">
                      <span>*</span>家长电话
                  </div>
                  <select name="" class="code">
                      <option value="">+86</option>
                  </select>
                  <input type="text" class="tele" v-model="parent_mobile">
              </div>
          </div>
          <button class="btn" @click="execute">确定</button>
      </div>
  </template>

  <script>
      export default {
        data(){
          return {
            name:'',
            sex:'男',
            contury1:"",
            contury:[
              '中国',
              '美国',
              '加拿大',
              '澳大利亚',
              '其他'
            ],
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
              "12"
            ],
            firsts:[],
            seconds:[],
            thrids:[],
            first:"",
            second:"",
            thrid:"",
            sss:[]
          }
        },
        created(){
          this.postContry();
          this.studentSubject();
        },
        methods:{
          postStudentInfo(){
            const that = this;
            const sendData = {};

            if(that.name == '' || that.sex == '' || that.contury1 == '' || that.parent_mobile == ''){
              alert('请填写必填字段');
              return false;
            }else{
              this.baseAxios.put('/api/v1/student/1',
              {
                'name':that.name,
                'gender':that.sex,
                'read_country':that.contury1,
                'parent_mobile':that.parent_mobile
              }
              ).then(function (data) {
                console.log(data)
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
              "page_limit": 1000,
              "page_no": 1,
            }).then(function (data) {
              console.log(data)
              that.firsts = data.data.objects;
            })
          },
          addSubject(){
            const that = this;
            if(this.first!= ""){
              this.baseAxios.put('/api/v1/student_subject/'+this.first.id,{
                "subject_name":that.thrid,
                "subject_type":1
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
            this.seconds.push(val.subject_category_zh);
            this.thrid = '';
            console.log(this.first)

          },
          second:function (val) {
            this.thrids = [];
            this.thrids.push(this.first.subject_name?this.first.subject_name:this.first.subject_name_zh)
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
