<template>
  <div class="iframe">
    <!--<embed width="100%" :height="frameHeight" :src="url" frameborder="0"></embed>-->
    <iframe width="100%" :height="frameHeight" :src="url" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        frameHeight: window.innerHeight - 197,
//          url:this.$route.query.url
        url: ""
      }
    },
    created() {
      this.useFunction();
    },
    methods: {
      livePreview_doc() {
        const that = this;
        this.baseAxios1.post('/live/preview_doc', {
          "username": localStorage.getItem('name'),
          "ware_uid": that.$route.query.ware_uid
        }).then(function (data) {
          that.url = data.data.ware_url;
//            that.$router.push({path:'/iframe',query:{ url : data.data.ware_url}});
//          window.location.href= data.data.ware_url;
//          window.open(data.data.ware_url)
//          var win = window.open('', '运行窗口');
//          win.document.open();
//          win.document.write(`<iframe src=${data.data.ware_url} frameborder="0"></iframe>`);
        })
      }
      //进入教室获取教师地址
      , test2(id) {
        const that = this;
        this.baseAxios1.post('/student/get_enter_room_url', {
          'study_schedule_id': id == 40 ? 41 : id
        }).then(function (data) {
          if(data!=undefined){
            if (data.status == 200) {
              that.url = data.data.url;
//            window.location.href = data.data.url;
//            window.open(data.data.url)
            }
          }else{
            alert('study schedule has locked')
          }

        })
        .catch(function (error) {
//          alert(error.response.data.error);
          that.open3(error.response.data.error)
          that.$router.go(-1);
//          console.log(that.$router.push(course/date))
//          that.$router.push('course/date')
        })
      },
      open3(err) {
        this.$message({
          message: err,
          type: 'warning'
        });
      },
      useFunction(){
        if(this.$route.query.id){
          this.test2(this.$route.query.id)
        }else{
          this.livePreview_doc();
        }
      }
    }
  }
</script>
<style scoped>
  .iframe {
    margin-bottom: -180px;
  }
</style>
