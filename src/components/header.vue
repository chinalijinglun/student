<template>
    <div class="headers">
        <div class="header-top">
            <div class="centers">
                <div class="left">
                    <!--<span class="zh click">中文 </span> |-->
                    <!--<span class="en"> English</span>-->
                </div>
                <div class="right_01">
                    <img src="@/assets/dianhua_s.png" class="tel" alt="">
                    <span class="user">
                        <template v-if="count">
                          <span @click="account">
                              {{count}}
                          </span>
                          <span>|</span>
                          <span @click="quit">退出</span>
                        </template>
                        <template v-else>
                        <router-link to="/login">
                          <span>
                             登录
                          </span>
                          </router-link>
                          <span>|</span>
                          <router-link to="/usePhone">
                          <span>注册</span>
                        </router-link>
                        </template>
                    </span>
                    <span class="mouseenter">
                        <span class="span">关注美师在线</span>
                        <img src="@/assets/erweima.png" alt="" class="erweima">
                    </span>
                </div>
            </div>
        </div>
        <div class="header-bottom">
          <a href="/index.html">
            <template v-if="userPic">
              <img :src="'http://www.vipustutor.com/'+userPic" alt="userPic" class="logo">
            </template>
            <template v-else>
              <img src="@/assets/logo1.png" alt="" class="logo">
            </template>
          </a>
            <ul class="nav">
                <li>
                  <a href="/school.html">
                    <p>Faculty Team</p>
                    <p>师资团队</p>
                  </a>
                </li>
                <li>
                  <a href="/course.html">
                    <p>Curriculum System</p>
                    <p>课程体系</p>
                  </a>
                </li>
                <li>
                  <a href="/service.html">
                    <p>Academic Services</p>
                    <p>教学服务</p>
                  </a>
                </li>
                <!--<li class="mouserover" v-on:mouseover="mouserover()" v-on:mouseout="mouseout()">-->
                <li class="mouserover">
                  <a href="/admissions.html">
                    <p>Online Appointment</p>
                    <p>招生入学</p>
                  </a>
                </li>
                <li>
                  <a href="/about.html">
                    <p>About Us</p>
                    <p>关于我们</p>
                  </a>
                </li>
            </ul>
            <!--<div class="btn-box">-->
                <!--<template v-if="token === null">-->
                  <!--<router-link to="/login">-->
                  <!--<div class="login">-->
                      <!--登录-->
                  <!--</div></router-link>-->
                  <!--<router-link to="/usePhone">-->
                  <!--<div class="regist">-->
                      <!--注册-->
                  <!--</div>-->
                  <!--</router-link>-->
                <!--</template>-->
            <!--</div>-->
            <div class="tels" v-if="show">
                <img src="@/assets/dianhua_b.png" alt="" class="b_dianhua">
            </div>
        </div>
        <ul class="img-box" v-if="showAdmissions">
            <li>
                <img src="@/assets/zhaosheng01.png" alt="">
                <p>AP</p>
            </li>
            <li>
                <img src="@/assets/zhaosheng02.png" alt="">
                <p>提升GPA</p>
            </li>
            <li>
                <img src="@/assets/zhaosheng03.png" alt="">
                <p>衔接课程</p>
            </li>
            <li>
                <img src="@/assets/zhaosheng04.png" alt="">
                <p>中美学分双认证</p>
            </li>
        </ul>
    </div>
</template>
<script>
  import store from '@/store/index';
    export default {
        name: 'headers',
        data(){
            return{
                show: false,
                showAdmissions: false,
                name: localStorage.getItem('name'),
                token: localStorage.getItem('Authorization'),
                userPic:''
            }

        },
      created(){
          this.getUserPic();
      },
      computed: {
        count () {
          return store.state.person.name
        }
      },
        methods:{
            mouserover(){
                this.showAdmissions =true;
            },
            mouseout(){
                this.showAdmissions = false;
            },
            quit(){
              localStorage.clear();
              this.name = '';
              this.$router.push('/login');
              store.commit('test','')
            },
            account(){
              if(this.$getLocalStorage('Authorization')){
                this.$router.push('/center/personal')
              }else{
                this.open3('请登录');
                this.$router.push('/login')
              }
            },
            open3(err) {
              this.$message({
                message: err,
                type: 'warning'
              });
            },
            getUserPic(){
              const that = this;
              this.baseAxios1.post('/student/student_logo').then((data)=>{
                that.userPic = data.data.url;
              })
            }
        }
    }
</script>

<style scoped>
    ul,li{
        list-style: none;
    }
    .headers{
        height: 140px;
        width: 100%;
        min-width: 1200px;
        border-bottom: 2px solid #FF8200;
        background: #ffffff;
        position: relative;
        z-index: 9;
    }
    .header-top{
        background: #F3F3F3;
        border-bottom: 1px solid #E3E3E3;
    }
    .centers{
        height: 33px;
        margin: 0 auto;
        width: 1400px;
        /* overflow: hidden; */
    }
    .left{
        font-size: 12px;
        color: #2A2A2A;
        line-height: 33px;
        cursor: pointer;
        float: left;
    }
    .left .click{
        color: #FF8200;
    }
    .right_01{
        float: right;

    }
    .right_01 img{
        margin: 7px;
    }
    .right_01 .tel{
        margin-right: 71px;
        float: left;
    }
    .right_01 .span{
        display: inline-block;
        font-size: 12px;
        color: #666666;
        line-height: 33px;
        float: right;
        cursor: pointer;
    }
    .wx_h{
        cursor: pointer;
    }
    .mouseenter{
        position: relative;
        background: url(../assets/wx_h.jpg) no-repeat center left;
        display: inline-block;
        width: 100px;
    }
    .erweima{
        position: absolute;
        left: 0;
        top: 33px;
        display: none;
        z-index: 2;
        width: 110px;
        height: 110px;
    }
    .mouseenter:hover .erweima{
        display: block;
    }
    .mouseenter:hover .span{
        color: #FF8200;
    }
    .mouseenter:hover{
        background: url(../assets/weixin.png) no-repeat center left;
    }
    .header-bottom{
        width: 1400px;
        margin: 0 auto;
        height: 104px;
        position: relative;
    }
    .logo{
        width: 242px;
        height: 71px;
        margin-top: 19px;
        float: left;
    }
    .nav{
        overflow: hidden;
        margin-left: 91px;
        margin-top: 28px;
        float: left;
    }
    .nav li{
        float: left;
        height: 56px;
        text-align: center;
        font-size: 18px;
        color: #333333;
        line-height: 28px;
        cursor: pointer;
        margin-right: 40px;
    }
    .nav li:hover{
        color: #FF8200;
    }
    .login{
        background: #FFFFFF;
        border: 1px solid #FF8200;
        border-radius: 100px;
        font-size: 14px;
        color: #FF8200;
        width: 119px;
        height: 40px;
        float: left;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        margin-right: 15px;
    }
    .regist{
       width: 119px;
        height: 40px;
        float: left;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        background: #FF8200;
        border-radius: 100px;
        font-size: 14px;
        color: #FFFFFF;
    }
    .btn-box{
        overflow: hidden;
        float: right;
        margin-top: 25px;
    }
    .img-box{
        position: absolute;
        overflow: hidden;
        width: 1920px;
    }
    .img-box li{
        float: left;
        width: 480px;
        height: 230px;
        position: relative;
        cursor: pointer;
    }
    .img-box li p{
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 480px;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        color: #FFFFFF;
    }
    .user{
        float: left;
        display: inline-block;
        line-height: 33px;
        font-size: 12px;
        color: #666666;
        margin-right: 71px;
    }
    .user span{
        margin-right: 10px;
        cursor: pointer;
    }
    .b_dianhua{
        margin: 32px 0;
        float: right;
    }
</style>
