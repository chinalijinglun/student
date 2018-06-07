<template>
    <div class="aside">
        <div class="select-bar">
            <ul class="bars">
                <li class="active">
                    <img class="imgs" src="@/assets/kechengbiao_h.png" alt="">
                    <span>课程表</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/yuxi_h.png" alt="">
                    <span>课前预习</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/zuoye_h.png" alt="">
                    <span>课后作业</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/kecheng_h.png" alt="">
                    <span>我的课程</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/dingdan_h.png" alt="">
                    <span>我的订单</span>
                </li>
                <li class="active">
                    <img class="imgs" src="@/assets/chengzhang_h.png" alt="">
                    <span>成长报告</span>
                </li>
            </ul>
        </div>
        <div class="wenti">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'asides'
    }
</script>

<style scoped>
    .aside{
        width: 180px;
        float: left;
    }
    .select-bar{
        width: 100%;
        height: 390px;
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
    .imgs{
        float: left;
        margin: 20px;
    }
    .wenti{
        width: 180px;
        height: 102px;
        background: url('../assets/wenti.png');
        margin-top: 20px;
    }
</style>