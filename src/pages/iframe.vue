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
          url:""
        }
      },
      created() {
this.livePreview_doc()
      },
      methods: {
        livePreview_doc(){
          const that = this;
          this.baseAxios1.post('/live/preview_doc',{
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
      }
    }
</script>
<style scoped>
  .iframe{
    margin-bottom: -180px;
  }
</style>
