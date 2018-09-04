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
                    <img :src="avatar" alt="">
                </div>
                <div class="img" @click="runUpload">
                    <img :src="avatar" alt="">
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
          <el-radio v-model="gender" label="未知">未知</el-radio>
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
                    <span class="xing">*</span>国家
                </div>
                <select class="select" name="" v-model="c1" @change="getSelected()">
                  <option v-for="(item,index) in country" :value="item.id">{{ item.name_zh }}</option>
                </select>
            </div>
            <!--<div class="area">-->
                <!--<div class="births">-->
                    <!--<span class="xing">*</span>地区-->
                <!--</div>-->
                <!--<select class="select" name="" id="">-->
                    <!--<option value=""></option>-->
                <!--</select>-->
            <!--</div>-->
            <div class="city">
                <div class="births">
                    <span class="xing">*</span>城市
                </div>
              <select class="select" name="" v-model="c2">
                <option v-for="(item,index) in country_seond" :value="item.id">{{ item.name_zh }}</option>
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
          <input type="text" class="inp" v-model="grade">
        </div>
        <div class="aim">
            <div class="births">
                <span class="xing">*</span>意向学习科目
            </div>
            <div class="checks">
                <span><input type="checkbox" name="" id="">&nbsp;&nbsp;U.S. History 美国历史</span>
                <span><input type="checkbox" name="" id="">&nbsp;&nbsp;World History 世界历史</span>
                <span><input type="checkbox" name="" id="">&nbsp;&nbsp;Geography and World Cultures 地理和世界文化</span>
                <span><input type="checkbox" name="" id="">&nbsp;&nbsp;Biology 生物</span>
                <span><input type="checkbox" name="" id="">&nbsp;&nbsp;Mathematics III 数学3</span>
                <span><input type="checkbox" name="" id="">&nbsp;&nbsp;其他 <input type="text" class="inps"></span>
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
              <input type="text" class="inp" v-model="go_abroad_at">
            </div>
            <div class="area">
                <div class="births">
                    预计出国留学国家
                </div>
              <input type="text" class="inp" v-model="go_abroad_country">
            </div>
            <div class="city">
                <div class="births">
                    期望出国就读地区
                </div>
              <input type="text" class="inp" v-model="go_abroad_province">
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
                <select>
                    <option value="">+86</option>
                </select>
                <input type="text" class="tel" v-model="parent_mobile">
            </div>
        </div>
        <div class="school">
            <div class="births">
                家长邮箱
            </div>
            <input type="text" class="inp">
        </div>
        <button @click="putPersonal">保存</button>
    </div>
</template>

<script>
    export default {
        data(){
          return{
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
            allcountry:[]
          }
        }
      ,created(){
        this.getPersonal();
        this.getCountry();
      },
      methods:{
        getPersonal(){
          const that = this;
          this.baseAxios.get('/api/v1/student/'+localStorage.getItem('id')).then(function (data) {
            that.avatar = window.location.origin+ data.data.avatar;
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
            "go_abroad_province":that.go_abroad_province

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
                that.avatar = window.location.origin+data.data[0].download_file;
                that.$message({
                  message: msg,
                  type: '上传成功'
                });
              }else{
                that.$message.error('上传失败');
              }
            })
        },
        runUpload(){
          this.$refs.input1.click();
        },
        getCountry(){
          const that = this;
          this.baseAxios.get('/api/v1/region?page=1&results_per_page=10000').then(function (data) {
//            that.country
            const allcountry = data.data.objects;
            that.allcountry = allcountry;
            allcountry.map((item,index)=>{
              if(item.level == 2){
                that.country.push(item)
              }
            })
          })
        },
        getSelected(){
//          console.log(this.c1);
          const that = this;
          that.allcountry.map((item,index)=>{
            if(item.pid == this.c1){
//              console.log(item)
              that.country_seond.push(item)
            }
          })
        }
      }
    }
</script>

<style scoped>
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
        background: #F3F3F3;
        border: none;
        width: 150px;
        height: 38px;
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
