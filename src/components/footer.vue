<template>
    <div class="footers">
        <div class="center">
            <span><router-link to="/gywm">关于我们</router-link></span>
            <span>|</span>
            <span><router-link to="/lxwm">联系我们</router-link></span>
            <span>|</span>
            <span><a href="https://company.zhaopin.com/CZ266702180.htm">加入我们</a></span>
            <div class="right">
                京ICP备15062105号-1     京公网安备 11010802020457号
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .footers{
        width: 100%;
        height: 55px;
        background: #06060B;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .center{
        width: 1400px;
        margin: 0 auto;
        height: 55px;
        line-height: 55px;
    }
    .center span{
        margin-right: 10px;
        font-size: 14px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .right{
        float: right;
        font-size: 14px;
        color: #FFFFFF;
    }
</style>
