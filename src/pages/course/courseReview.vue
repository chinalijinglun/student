<template>
    <div class="course-review">
        <div class="teacher top">
            <div class="name">
                教师评分
            </div>
            <div class="xin">
              <el-rate v-model="value1" show-score text-color="#ff9900" score-template="{value}">
              </el-rate>
            </div>
        </div>
        <div class="teacher">
            <div class="name">
                课程评分
            </div>
            <div class="xin">
              <el-rate v-model="value2" show-score text-color="#ff9900" score-template="{value}">
              </el-rate>
            </div>
        </div>
        <div class="teacher">
            <div class="name">
                意见内容
            </div>
            <div class="text">
                <textarea name="" id="" cols="30" v-model="opinion" rows="10" placeholder="请输入意见的内容"></textarea>
            </div>
        </div>
        <ul class="detail-les">
            <div class="check-homework center" @click="putEvaluation">
                提交
            </div>
            <div class="check-homework" @click="cancel">
                取消
            </div>
        </ul>
    </div>
</template>

<script>
  /**
   * 完成 7月19日
   */
    export default {
        created(){
        },
        data(){
            return{
              value1:0,
              value2:0,
              id:this.$route.query.id,
              opinion:'' //意见
            }
        },
        methods:{
          putEvaluation(){
            const that = this;
            this.baseAxios.put('/api/v1/study_schedule/'+that.id,{
              'student_evaluation':'123',
              'teacher_score':this.value1,
              'student_score':this.value2,
              'teacher_result':this.opinion,
            }).then(function (data) {
              if(data.status == 200){
                that.open3()
              }else{
                that.open6()
              }

            })
          },
          cancel(){
            const that = this;
            that.value1 = 0;
            that.value2 = 0;
            that.opinion = ''
          },
          open3() {
            this.$notify({
              title: '成功',
              message: '您已成功提交。',
              type: 'success'
            });
          },
          open6() {
            this.$notify.error({
              title: '错误',
              message: '抱歉，提交未成功'
            });
          }
        }

    }
</script>

<style scoped>
    .course-review{
        width: 800px;
        height: 818px;
        float: right;
        background: #ffffff;
    }
    .teacher{
        overflow: hidden;
        margin-bottom: 19px;
    }
    .name{
        float: left;
        text-align: right;
        width: 117px;
        font-size: 14px;
        color: #333333;
        margin-right: 20px;
    }
    ul,li{
        list-style: none;
    }
    li{
        float: left;
        margin-right: 7px;
    }
    .top{
        margin-top: 62px;
    }
    .text textarea{
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        width: 550px;
        height: 140px;
        outline: none;
    }
    .detail-les{
        padding-bottom: 27px;
        overflow: hidden;
        margin: 0 auto;
        max-width: 320px;
    }
    .les-name{
        float: left;
        line-height: 60px;
        padding-left: 30px;
        font-size: 14px;
        color: #333333;
    }
    .check-homework{
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        width: 120px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        font-size: 14px;
        color: #333333;
        margin-top: 24px;
        cursor: pointer;
        float: left;
        margin-right: 20px;
        text-align: center;
    }
    .check-homework img{
        float: left;
        margin: 10px 10px 10px 17px;
    }
    .center{
        text-align: center;
        background: #FF8200;
        color: #fff;
    }
</style>
