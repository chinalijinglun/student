<template>
  <div class="aside">
    <div class="select-bar">
      <ul class="bars">
        <li v-for="(items, index) in bars" @click="selectStyle(index)" :key="index">
          <router-link :to="items.path" class="a_color">
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
    data() {
      return {
        bars: [{
          name: '个人中心',
          img: require('@/assets/me01.png'),
          path: '/center/personal'
        }, {
          name: '课程表',
          img: require('@/assets/kechengbiao_h.png'),
          path: '/schedule/schedule'
        }
//        , {
//          name: '课前预习',
//          img: require('@/assets/yuxi_h.png'),
//          path: '/preview/preview'
//        }
          , {
            name: '我的课程',
            img: require('@/assets/kecheng_h.png'),
            path: '/timetable/timetable'
          }, {
            name: '课后作业',
            img: require('@/assets/zuoye_h.png'),
            path: '/homework/willCompleted'
          }, {
            name: '成长报告',
            img: require('@/assets/chengzhang_h.png'),
            path: '/report/report'
          }, {
            name: '我的订单',
            img: require('@/assets/dingdan_h.png'),
            path: '/order/order'
          }]
        , num: "1"
      }
    },
    methods: {
      selectStyle(index) {
        this.num = index;
      },
    }

  }
</script>

<style scoped>
  .router-link-active {
    color: #ff3b00;
  }

  .aside {
    width: 180px;
    float: left;
  }

  .select-bar {
    width: 100%;
    height: 450px;
    background: #fff;
  }

  .bars {
    padding-top: 10px;
  }

  .bars li {
    height: 60px;
    font-size: 16px;
    color: #333333;
    line-height: 60px;
    cursor: pointer;
  }

  .bars li a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
  }

  .imgs {
    float: left;
    margin: 20px;
  }

  .wenti {
    width: 180px;
    height: 102px;
    margin-top: 20px;
  }

  .wenti img {
    width: 180px;
    height: 102px;
  }
</style>
