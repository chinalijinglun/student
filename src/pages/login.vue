<template>
    <div class="login" ref="mainText">
        <div class="login-box">
            <div class="title">
                登录
            </div>
            <div class="inps">
                <input type="text" class="" v-model="mobile_no" placeholder="请输入注册手机号码">
                <input type="password" v-model="passwd" placeholder="请输入登录密码">
            </div>
            <div class="remember-num">
                <input type="checkbox" class="check" @click="autoLogin" v-model="auto">
                <div class="text">
                    <span>下次自动登录</span>
                    <span class="forget">
                      <router-link :to="{ path:'/usePhone', query: { forget:  1} }">
                      忘记密码？
                      </router-link>
                    </span>
                </div>
            </div>
            <button class="btn" @click="login">登录</button>
            <div class="regist-now">
              <router-link to="/usePhone">
                立即注册，免费领取试听课
                <img src="../assets/jian.png" alt="">
              </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mobile_no: '',
                passwd: '',
                auto:""
            }

        },
      created(){
          this.create();
          this.$nextTick(()=>{
            console.log(this.$refs.mainText.style.height = document.documentElement.clientHeight - 195+'px');
          })
      },
        methods:{
          login(){
               var that = this;
                //验证手机格式是否正确
//               var filter1  = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
               //验证邮箱格式是否正确
//               var filter2  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//                if (filter1.test(that.mobile_no)||filter2.test(that.mobile_no)){
                     if(that.passwd){
                         this.baseAxios2.post('auth/login',{
                            "password": that.passwd,
                            "username": that.mobile_no,
                            "usertype": "Student"
                         })
                         .then(function(res){
                            //  存储token
//                           console.log(res)
                           if(res.status == 200){
                             localStorage.clear();
                             localStorage.setItem('Authorization',res.data.Authorization);
                             localStorage.setItem('id',res.data.id);
                             if(that.auto == '2'){
                               localStorage.setItem('username',that.mobile_no);
                               localStorage.setItem('password',that.passwd);
                             }
//                             setTimeout(function () {
                               that.$router.push('/center/personal');
//                             },200)
//                            that.$router.push({ path: '/center/personal'})
                           }
                           else{
                             localStorage.clear();
                             alert('账号或密码错误，请重新输入')
                           }

                         })
                         .catch(function(res){
                            alert('账号或密码错误，请重新输入')
                         })
                     }
//                }else{
//                    alert('您的邮件或者手机号码格式不正确');
//                    return false;
//                }
            },
          autoLogin(){
              const that = this;
              localStorage.setItem('username',that.mobile_no);
              localStorage.setItem('password',that.passwd);

              that.auto='2'
          },
          create(){
            const that=this;
            if(localStorage.getItem('username')){
              that.mobile_no = localStorage.getItem('username')
            }
            if(localStorage.getItem('password')){
              that.passwd = localStorage.getItem('password')
            }
          }
        }
    }
</script>

<style scoped>
    .login{
        min-height: 600px;
        background: url('../assets/bj01.jpg') no-repeat;
        position: relative;
        background-size: cover;
    }
    .login-box{
        width: 370px;
        height: 450px;
        background: #FFFFFF;
        border-radius: 10px;
        position: absolute;
        top: 75px;
        right: 150px;
    }
    .title{
        height: 80px;
        font-size: 22px;
        color: #333333;
        line-height: 80px;
        text-indent: 32px;
        border-bottom: 3px solid #FF8200;
    }
    .inps input{
        width: 300px;
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        display: block;
        margin: 0 auto;
        margin-top: 21px;
        text-indent: 18px;
        outline: none;
    }
    .inps{
        padding-top: 18px;
    }
    .text{
        font-size: 14px;
        color: #666666;
        float: left;
        width: 277px;
    }
    .check{
        float: left;
        width: 14px;
        height: 14px;
        margin-top: 2px;
        margin-right: 8px;
    }
    .remember-num{
        width: 300px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 14px;
        /* cursor: pointer; */
    }
    .forget{
        float: right;
        cursor: pointer;
    }
    .btn{
        background: #FF8200;
        border-radius: 5px;
        width: 300px;
        height: 52px;
        outline: none;
        font-size: 18px;
        color: #FFFFFF;
        margin: 30px 34px 0 36px;
    }
    .regist-now{
        font-size: 14px;
        color: #FF8200;
        text-align: center;
        margin-top: 30px;
        cursor: pointer;
    }
</style>
