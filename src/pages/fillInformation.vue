<template>
    <div class="fill-information">
        <div class="title">
            基本信息
        </div>
        <div class="picture">
            <div class="pic-title">
                <span class="xing">*</span>当前头像
            </div>
            <div class="pic">
                <div class="img">
                    <img :src="devUrl+avatar" alt="">
                </div>
                <div class="img" @click="runUpload">
                    <img :src="devUrl+avatar" alt="">
                    <div class="make" >编辑头像</div>
                  <input type="file" ref="input1" value="上传" @change="uploadImg" style="display: none">
                </div>
            </div>
        </div>
        <div class="student">
            <div class="zh-name">
                <div class="zhname"><span class="xing">*</span>学生姓名（中文）</div>
                <input type="text" class="inps" v-model="chinaName">
            </div>
            <div class="zh-name">
                <div class="zhname">学生姓名（英文）</div>
                <input type="text" class="inps" v-model="englishName">
            </div>
        </div>
        <div class="sex">
            <div class="sex-tit">
                <span class="xing">*</span>性别
            </div>
          <el-radio v-model="gender" label="男">男</el-radio>
          <el-radio v-model="gender" label="女">女</el-radio>
          <el-radio v-model="gender" label="保密">保密</el-radio>
        </div>
        <div class="birth">
            <div class="births">
                <span class="xing">*</span>出生年月日
            </div>
          <el-date-picker
            v-model="birth"
            type="date"
            placeholder="出生年月日">
          </el-date-picker>
        </div>
        <div class="place">
            <div class="country">
                <div class="births">
                    <span class="xing">*</span>在读国家
                </div>

              <select class="select" name="" v-model="c1" @change="getSelected1()" ref="cc1">
                <option v-for="(item,index) in COUNTRY_CODE" :value="item.id">{{ item.name_zh }}</option>
              </select>
            </div>
            <div class="area">
                <div class="births">
                    <span class="xing">*</span>在读地区
                </div>
                <select class="select" name="" v-model="c2" @change="getSelected2()">
                    <option v-for="(item,index) in country_seond" :value="item.id">{{ item.name_zh }}</option>
                </select>
            </div>
            <div class="city">
                <div class="births">
                    <span class="xing">*</span>在读城市
                </div>
              <select class="select" name="" v-model="c3">
                <option v-for="(item,index) in country_third" :value="item.id">{{ item.name_zh }}</option>
              </select>
            </div>
        </div>
        <div class="school">
            <div class="births">
                <span class="xing">*</span>所在学校
            </div>
            <input type="text" class="inp" v-model="read_school">
        </div>
        <div class="grade">
            <div class="births">
                <span class="xing">*</span>所在年级
            </div>
          <!--<input type="text" class="inp" v-model="grade">-->
          <select name="" v-model="grade" class="select">
            <option :value="item" v-for="item in subject">
              {{item}}
            </option>
          </select>
        </div>
        <div class="aim">
            <div class="births">
                <span class="xing">*</span>意向学习科目
            </div>
            <div class="checks">
                <!--<span><input type="checkbox" name="" id="">&nbsp;&nbsp;U.S. History 美国历史</span>-->
                <!--<span><input type="checkbox" name="" id="">&nbsp;&nbsp;World History 世界历史</span>-->
                <!--<span><input type="checkbox" name="" id="">&nbsp;&nbsp;Geography and World Cultures 地理和世界文化</span>-->
                <!--<span><input type="checkbox" name="" id="">&nbsp;&nbsp;Biology 生物</span>-->
                <!--<span><input type="checkbox" name="" id="">&nbsp;&nbsp;Mathematics III 数学3</span>-->
                <!--<span><input type="checkbox" name="" id="">&nbsp;&nbsp;其他 <input type="text" class="inps"></span>-->



              <!--<select name="" v-model="first" class="select">-->
                <!--<option :value="item" v-for="item in firsts">-->
                  <!--{{item.full_name_zh}}-->
                <!--</option>-->
              <!--</select>-->

              <!--<select name="" v-model="second" class="select">-->
                <!--<option :value="item" v-for="item in seconds">{{item}}</option>-->
              <!--</select>-->

              <!--<select name="" v-model="thrid" class="select">-->
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
        </div>
        <div class="school">
            <div class="births">
                学习目标
            </div>
            <input type="text" class="inp" v-model="learning_goals_zh">
        </div>
        <div class="school">
            <div class="births">
                兴趣爱好
            </div>
            <input type="text" class="inp" v-model="interest_zh">
        </div>
        <div class="school">
            <div class="births">
                所获奖项
            </div>
            <input type="text" class="inp" v-model="award_zh">
        </div>
        <div class="sex">
            <div class="sex-tit">
                是否意向出国留学
            </div>
          <el-radio v-model="go_abroad" label="是">是</el-radio>
          <el-radio v-model="go_abroad" label="否">否</el-radio>
        </div>
        <div class="place width200">
            <div class="country">
                <div class="births">
                    预计出国留学时间
                </div>
              <!--<input type="text" class="inp" v-model="go_abroad_at">-->
              <el-date-picker
                v-model="go_abroad_at"
                type="year"
                placeholder="预计出国留学时间"
                class="cgsj"
              >
              </el-date-picker>
            </div>
            <div class="area">
                <div class="births">
                    预计出国留学国家
                </div>
              <!--<input type="text" class="inp" v-model="go_abroad_country">-->
              <select class="select" name="" id="aaa" v-model="go_abroad_country" @change="getSelected3()">
                <option v-for="(item,index) in COUNTRY_CODE" :value="item.id">{{ item.name_zh }}</option>
              </select>
            </div>
            <div class="city">
                <div class="births">
                    期望出国就读地区
                </div>
              <!--<input type="text" class="inp" v-model="go_abroad_province">-->
              <select class="select" name="" v-model="go_abroad_province">
                <option v-for="(item,index) in COUNTRY_CODE1" :value="item.id">{{ item.name_zh }}</option>
              </select>
            </div>
        </div>
        <div class="school">
            <div class="births">
                海外经历
            </div>
            <input type="text" class="inp" v-model="overseas_zh">
        </div>
        <div class="school">
            <div class="births">
                英语学习经历
            </div>
            <input type="text" class="inp" v-model="english_zh">
        </div>
        <div class="school">
            <div class="births">
                标化考试成绩
            </div>
            <input type="text" class="inp" v-model="exam_results_zh">
        </div>
        <div class="student">
            <div class="zh-name">
                <div class="zhname">家长姓名</div>
                <input type="text" class="inps" v-model="parent">
            </div>
            <div class="zh-name">
                <div class="zhname"><span class="xing">*</span>家长称谓</div>
                <input type="text" class="inps" v-model="parent_role">
            </div>
        </div>
        <div class="school">
            <div class="births">
                <span class="xing">*</span>家长电话
            </div>
            <div class="parent">
                <select v-model="nation">
                    <option :value="item.code" v-for="item in NATIONAL_CODE">{{item.name_zh}}  {{item.code}}</option>
                </select>
                <input type="text" class="tel" v-model="parent_mobile">
            </div>
        </div>
        <div class="school">
            <div class="births">
                家长邮箱
            </div>
            <input type="text" class="inp" v-model="parent_email">
        </div>
        <button @click="putPersonal">保存</button>
    </div>
</template>

<script>
  import {NATIONAL_CODE,COUNTRY_CODE} from '../utils/enum'
    export default {
        data(){
          return{
            nation:'',
            chinaName:"",
            englishName:"",
            gender:'',
            birth:'',
            read_school:'',
            grade:'',
            learning_goals_zh:"",
            interest_zh:'',
            award_zh:'',
            go_abroad:"",
            overseas_zh:"",
            english_zh:"",
            exam_results_zh:"",
            parent:"",
            parent_role:"",
            parent_mobile:'',
            parent_email:"",
            avatar:"",
            go_abroad_at:'',
            go_abroad_country:'',
            go_abroad_province:'',
            c1:"",
            c2:'',
            c3:"",
            country:[],//yiji
            country_seond:[],//erji
            country_third:[],
            allcountry:[],
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
              "大学"
            ],
            NATIONAL_CODE:NATIONAL_CODE,
            COUNTRY_CODE:COUNTRY_CODE,
            COUNTRY_CODE1:[],
            firsts:[],
            seconds:[],
            thrids:[],
            first:"",
            second:"",
            thrid:"",
            test1:[]
          }
        }
      ,created(){
        this.getPersonal();
//        this.getCountry();
        this.postContry();
      },
      methods:{
        getPersonal(){
          const that = this;
          this.baseAxios.get('/api/v1/student/'+localStorage.getItem('id')).then(function (data) {
//            that.avatar = window.location.origin+ data.data.avatar;
            const persol = data.data;
            that.avatar = persol.avatar;
            that.chinaName = persol.name;
            that.englishName = persol.first_name;
            that.gender = persol.gender;
            that.birth = persol.birth;
            that.c1 = persol.read_country;
            that.c2 = persol.read_province;
            that.c3 = persol.read_city;
            that.read_school = persol.read_school;
            that.grade = persol.grade;

            that.learning_goals_zh= persol.learning_goals_zh;
            that.interest_zh = persol.interest_zh;
            that.award_zh = persol.award_zh;
            that.go_abroad = persol.go_abroad;
            that.go_abroad_at = persol.go_abroad_at;
            that.go_abroad_country = persol.go_abroad_country;
            that.go_abroad_province = persol.go_abroad_province;
            that.overseas_zh = persol.overseas_zh;
            that.english_zh = persol.english_zh;
            that.exam_results_zh = persol.exam_results_zh;
            that.parent = persol.parent;
            that.parent_role = persol.parent_role;
            that.parent_mobile = persol.parent_mobile;
            that.parent_email = persol.parent_email;
            that.nation = persol.nation;
            console.log(persol.read_country)
          })
        },
        putPersonal(){
          const that =this;
          this.baseAxios.put('/api/v1/student/'+localStorage.getItem('id'),{
            "name":that.chinaName,
            "first_name":that.englishName,
            "gender":that.gender,
            "birth":that.birth,
            "read_school":that.read_school,
            "grade":that.grade,
            "learning_goals_zh":that.learning_goals_zh,
            "interest_zh":that.interest_zh,
            "award_zh":that.award_zh,
            "go_abroad":that.go_abroad,
            "overseas_zh":that.overseas_zh,
            "english_zh":that.english_zh,
            "exam_results_zh":that.exam_results_zh,
            "parent":that.parent,
            "parent_role":that.parent_role,
            "parent_mobile":that.parent_mobile,
            "parent_email":that.parent_email,
            "avatar":that.avatar,
            "go_abroad_at":that.go_abroad_at,
            "go_abroad_country":that.go_abroad_country,
            "go_abroad_province":that.go_abroad_province,
            "nation":that.nation,
            'read_city':that.c1,
            "read_country":that.c2,
            "read_province":that.c3
          }).then(function (data) {
            console.log(data)
          })
        },
        uploadImg(e){
            const that = this,
              file = e.target.files[0];
            that.avatar = new FormData();
            that.avatar.append('file',file);
            this.baseAxios1.post('/upload',that.avatar).then((data)=>{
              if(data.status == 200){
                that.avatar = '';
//                that.avatar = window.location.origin+data.data[0].download_file;
                that.avatar = data.data[0].download_file;
                that.$message({
                  message: '图片上传成功',
                  type: 'success'
                });
              }else{
                that.$message.error('上传失败');
              }
            })
        },
        runUpload(){
          this.$refs.input1.click();
        },
//        getCountry(){
//          const that = this;
//          this.baseAxios.get('/api/v1/region?page=1&results_per_page=99999',{
//            page:"1",
//            pagelimt:"1000000"
//          }).then(function (data) {
//  console.log(data)
//            const allcountry = data.data.objects;
//            that.allcountry = allcountry;
//            allcountry.map((item,index)=>{
//              if(item.level == 2){
//                that.country.push(item)
//              }
//            })
//          })
//        },
        getSelected1(){
//          console.log(this.$refs.cc1[this.$refs.cc1.selectedIndex].text)
          this.country_seond =[];
          this.COUNTRY_CODE.map((item)=>{
            if(item.pid == this.c1){
              this.country_seond.push(item);
              this.country_third=[]
            }
          })
        },
        getSelected2(){
          this.country_third=[];
          this.COUNTRY_CODE.map((item)=>{
            if(item.pid == this.c2){
              this.country_third.push(item)
            }
          })
        },
        getSelected3(){
          this.COUNTRY_CODE1=[];
          this.COUNTRY_CODE.map((item)=>{
            if(item.pid == this.go_abroad_country){
              this.COUNTRY_CODE1.push(item)
            }
          })
        },
        postContry(){
          const that = this;
          this.baseAxios1.post('/student/subject',{
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
            console.log(that.test1)
          })
        },
      },
      watch:{
        first:function (val) {
          this.seconds = [];
          this.seconds.push(val);
          this.thrid = '';
        },
        second:function (val) {
          this.thrids = [];
          this.thrids.push(val.data);
        },
        go_abroad_country:function (val) {
          this.getSelected3();
        },
        c1:function (val) {
          this.getSelected1();
        },
        c2:function (val) {
          this.getSelected2();
        }
      }
    }
</script>

<style scoped>
  .cgsj{
    width: 200px;
    margin-top: 10px;
  }
  input{
    outline: none;
  }
  .width200 input{
    width: 200px;
  }
    .fill-information{
        width: 1000px;
        height: 2142px;
        margin: 0 auto;
        margin-top: 25px;
        background: #ffffff;
        margin-bottom: 25px;
    }
    .title{
        font-size: 18px;
        color: #333333;
        padding: 38px 0 0 74px;
    }
    .pic-title{
        font-size: 14px;
        color: #151515;
        line-height: 16px;
        margin: 23px 0 0 74px;
    }
    .xing{
        font-size: 14px;
        color: #FF4433;
    }
    .img{
        border: 4px solid #FFDF77;
        width: 104px;
        height: 104px;
        border-radius: 50%;
        float: left;
        position: relative;
        overflow: hidden;
        margin-right: 35px;
    }
    .img img{
        width: 96px;
        height: 96px;
        border-radius: 50%;
        margin: 2px;
    }
    .pic{
        overflow: hidden;
        margin: 12px 0 0 74px;
    }
    .make{
        width: 96px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        background: rgba(51,51,51,0.61);
        font-size: 12px;
        color: #FFFFFF;
        position: absolute;
        bottom: -2px;
        left: 6px;
        cursor: pointer;
    }
    .student{
        overflow: hidden;
        margin-left: 74px;
        margin-top: 39px;
    }
    .zh-name{
        width: 198px;
        float: left;
        margin-right: 33px;
    }
    .zhname{
        font-size: 14px;
        color: #333333;
    }
    .inps{
        width: 191px;
        height: 38px;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        margin-top: 8px;
        outline: none;
        padding-left: 5px;
    }
    .sex{
        margin-top: 28px;
        margin-left: 74px;
    }
    .sex-tit{
        font-size: 14px;
        color: #151515;
        line-height: 16px;
        margin-bottom: 10px;
    }
    .sex .span{
        margin-right: 77px;
        font-size: 14px;
        color: #666666;
    }
    .birth{
        margin-top: 30px;
        margin-left: 74px;
    }
    .births{
        font-size: 14px;
        color: #151515;
        line-height: 16px;
    }
    .select{
        width: 190px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        outline: none;
        margin-top: 12px;
    }
    .country,.area,.city{
        width: 200px;
        float: left;
        margin-right: 20px;
    }
    .place,.school,.grade,.aim{
        overflow: hidden;
        margin: 30px 0 0 74px;
    }
    .inp{
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        width: 426px;
        height: 38px;
        margin-top: 10px;
    }
    .checks{
        width: 705px;
        margin-top: 14px;
    }
    .checks span{
        margin-right: 19px;
        font-size: 14px;
        color: #2A2A2A;
        line-height: 16px;
    }
    .parent{
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        margin-top: 12px;
        width: 426px;
        height: 38px;
    }
    .parent select{
      background: #ffffff;
      border: none;
      width: 150px;
      height: 37px;
      border-right: 1px solid #D8D8D8;
    }
    .parent .tel{
        width: 264px;
        height: 38px;
        border: none;
        outline: none;
    }
    button{
        display: block;
        width: 150px;
        height: 40px;
        background: #FF8200;
        border-radius: 5px;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        line-height: 40px;
        outline: none;
        margin: 0 auto;
        margin-top: 73px;
    }
</style>
