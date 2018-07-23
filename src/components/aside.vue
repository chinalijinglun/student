<template>
    <div class="aside">
        <div class="select-bar">
            <ul class="bars">
                <li class="active" v-for="(items, index) in bars">
                  <router-link :to=items.path>
                    <img class="imgs center" :src=items.img alt="">
                    <span>{{items.name}}</span>
                  </router-link>
                </li>
            </ul>
        </div>
        <div class="wenti">
          <router-link to="/report/question">
          <img src="../assets/wenti.png" alt="" class="img">
          </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'asides',
        data(){
            return{
                bars:[{
                    name: '个人中心',
                    img: require('@/assets/me01.png'),
                    path: '/center/personal'
                },{
                    name: '课程表',
                    img: require('@/assets/kechengbiao_h.png'),
                    path: '/schedule/schedule'
                },{
                    name: '课前预习',
                    img: require('@/assets/yuxi_h.png'),
                    path: '/preview/preview'
                },{
                    name: '课后作业',
                    img: require('@/assets/zuoye_h.png'),
                    path: '/homework/willCompleted'
                },{
                    name: '我的课程',
                    img: require('@/assets/kecheng_h.png'),
                    path: '/timetable/timetable'
                },{
                    name: '我的订单',
                    img: require('@/assets/dingdan_h.png'),
                    path: '/order/order'
                },{
                    name: '成长报告',
                    img: require('@/assets/chengzhang_h.png'),
                    path: '/report/report'
                }]
            }
        },
        watch:{

        },
        created(){

        },
        methods:{
//            activity(){
//                var arr = ['me01.png','kechengbiao_h.png','yuxi_h.png','zuoye_h.png','kecheng_h.png','dingdan_h.png','chengzhang_h.png']
//                var arr2 = ['me02.png','kechengbiao_r.png','yuxi_r.png','zuoye_r.png','kecheng_r.png','dingdan_r.png','chengzhang_r.png']
//            }
        }
    }
</script>

<style scoped>
    .aside{
        width: 180px;
        float: left;
    }
    .select-bar{
        width: 100%;
        height: 450px;
        background: #fff;
    }
    .bars{
        padding-top: 10px;
    }
    .bars li{
        height: 60px;
        font-size: 16px;
        color: #333333;
        line-height: 60px;
        cursor: pointer;
    }
    .bars li a{
      color: #333333;
      text-decoration: none;
    }
    .imgs{
        float: left;
        margin: 20px;
    }
    .wenti{
      width: 180px;
      height: 102px;
      margin-top: 20px;
    }
    .wenti img{
        width: 180px;
        height: 102px;
    }
</style>
