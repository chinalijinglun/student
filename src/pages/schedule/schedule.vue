<template>
    <div class="schedule">
      <full-calendar class="test-fc" :events="fcEvents"
                     first-day='1' lang="zh"
                     @eventClick="eventClick"
                     @dayClick="dayClick"
                     @moreClick="moreClick">
        <!--<template slot="fc-event-card" scope="p">-->
          <!--<p><i class="fa">sadfsd</i> {{ p.event.title }} test</p>-->
        <!--</template>-->
      </full-calendar>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              name:'Sunny!',
              fcEvents : []
            }
        },
        components : {
            'full-calendar': require('vue-fullcalendar')
        },
      created(){
          this.getSchedule();
      },
      methods: {
        eventClick(event, jsEvent, pos) {
          console.log('eventClick', event, jsEvent, pos)
        },
        dayClick(day, jsEvent) {
          console.log('dayClick', day, jsEvent)
        },
        moreClick(day, events, jsEvent) {
          console.log('moreCLick', day, events, jsEvent)
        },
        //获取课程表
        getSchedule(){
          const that =this;
          const filter =[{'name':'student_id','op':'eq','val':localStorage.getItem('id')}];
          this.baseAxios.get('/api/v1/study_schedule',{params:{q:JSON.stringify({filters:filter})}})
            .then((data)=>{
              const lesson = data.data.objects;
              lesson.map((val)=>{
              that.fcEvents.push({
                title: val.name,
                start: val.actual_start,
                cssClass : 'family'
              })
                console.log(that.fcEvents)
              })
            })
        }
      }
    }
</script>

<style scoped>
    .schedule{
        float: right;
        width: 800px;
    }
</style>
