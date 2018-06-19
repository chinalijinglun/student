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
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="img">
                    <img src="../assets/logo.png" alt="">
                    <div class="make">编辑头像</div>
                </div>
            </div>
        </div>
        <div class="student">
            <div class="zh-name">
                <div class="zhname"><span class="xing">*</span>学生姓名（中文）</div>
                <input type="text" class="inps">
            </div>
            <div class="zh-name">
                <div class="zhname">学生姓名（英文）</div>
                <input type="text" class="inps">
            </div>
        </div>
        <div class="sex">
            <div class="sex-tit">
                <span class="xing">*</span>性别
            </div>
            <span class="span"><input type="radio" name="sex"> 男</span>
            <span class="span"><input type="radio" name="sex"> 女</span>
            <span class="span"><input type="radio" name="sex"> 保密</span>
        </div>
        <div class="birth">
            <div class="births">
                <span class="xing">*</span>出生年月日
            </div>
            <select class="select" name="" id="">
                <option value=""></option>
            </select>
        </div>
        <div class="place">
            <div class="country">
                <div class="births">
                    <span class="xing">*</span>国家
                </div>
                <select class="select" name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div class="area">
                <div class="births">
                    <span class="xing">*</span>地区
                </div>
                <select class="select" name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div class="city">
                <div class="births">
                    <span class="xing">*</span>城市
                </div>
                <select class="select" name="" id="">
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div class="school">
            <div class="births">
                <span class="xing">*</span>所在学校
            </div>
            <input type="text" class="inp">
        </div>
        <div class="grade">
            <div class="births">
                <span class="xing">*</span>所在年级
            </div>
            <select class="select" name="" id="">
                <option value=""></option>
            </select>
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
            <input type="text" class="inp">
        </div>
        <div class="school">
            <div class="births">
                兴趣爱好
            </div>
            <input type="text" class="inp">
        </div>
        <div class="school">
            <div class="births">
                所获奖项
            </div>
            <input type="text" class="inp">
        </div>
        <div class="sex">
            <div class="sex-tit">
                是否意向出国留学
            </div>
            <span class="span"><input type="radio" name="go"> 是</span>
            <span class="span"><input type="radio" name="go"> 否</span>
        </div>
        <div class="place">
            <div class="country">
                <div class="births">
                    预计出国留学时间
                </div>
                <select class="select" name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div class="area">
                <div class="births">
                    预计出国留学国家
                </div>
                <select class="select" name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div class="city">
                <div class="births">
                    期望出国就读地区
                </div>
                <select class="select" name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div class="city">
                <div class="births">
                    期望出国就读地区
                </div>
                <select class="select" name="" id="">
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div class="school">
            <div class="births">
                海外经历
            </div>
            <input type="text" class="inp">
        </div>
        <div class="school">
            <div class="births">
                英语学习经历
            </div>
            <input type="text" class="inp">
        </div>
        <div class="school">
            <div class="births">
                标化考试成绩
            </div>
            <input type="text" class="inp">
        </div>
        <div class="student">
            <div class="zh-name">
                <div class="zhname">家长姓名</div>
                <input type="text" class="inps">
            </div>
            <div class="zh-name">
                <div class="zhname"><span class="xing">*</span>家长称谓</div>
                <input type="text" class="inps">
            </div>
        </div>
        <div class="school">
            <div class="births">
                <span class="xing">*</span>家长电话
            </div>
            <div class="parent">
                <select>
                    <option value=""></option>
                </select>
                <input type="text" class="tel">
            </div>
        </div>
        <div class="school">
            <div class="births">
                家长邮箱
            </div>
            <input type="text" class="inp">
        </div>
        <button>保存</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
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
        width: 196px;
        height: 38px;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        margin-top: 8px;
        outline: none;
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