<template>
  <Calendar
    mode="week"
    class="schedule"
    :startDate="startDate"
    :firstDay="1"
    :dateData="dateData.Object"
    :onMonthChange="getSchedule"
  >
    <div slot-scope="item">
      <div class="calendar-item-date" :class="{'today': isToday(item.date.full)}">
        <span class="calendar-item-date-span">{{item.date.date}}</span>
        <span>{{item.date.day | weekDay_EN}}</span>
      </div>

      <div class="agenda-container" v-for="(item, index) in item.data[0]" :key="index">
        <!--<router-link :to="{path:'/course/finished',query:{id:item.name_id}}">-->
          <div v-if="tody > item.date" style="background-color: #ff3b00" @click="test2(item.id)">
            <span class="agenda-item">{{item.title}}</span>
            <span class="time agenda-item">{{item.time}}</span>
          </div>
          <div v-else style="background-color: #F5A623;" @click="test2(item.id)">
            <span class="agenda-item">{{item.title}}</span>
            <span class="time agenda-item">{{item.time}}</span>
          </div>
        <!--</router-link>-->
      </div>

    </div>
  </Calendar>
</template>

<script>
  import $dateFmt from '../../utils/time'
    export default {
        data () {
            return {
              dateData: {},
              fcEvents : [],
              startDate: new Date(),
              tody:$dateFmt(new Date()),
              data11:[{title:'123',time:new Date()}]
            }
        },
      filters: {
        weekDay_EN(weekNum) {
          return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][weekNum]
        }
      },
      created(){
        console.log( $dateFmt(new Date()) >= "2018-08-31")
      },
      methods: {
        isToday(day) {
          return $dateFmt(new Date(day), 'yyyy-MM-dd') === $dateFmt(new Date(), 'yyyy-MM-dd');
        },
        getSchedule({startDay, endDay}) {
          this.query(new Date(startDay.full), new Date(endDay.full))
        },
        //获取课程表
        query(start, end) {
          const that = this;
          this.baseAxios1.post('/student/schedule', {
            start,
            end,
            page_no: 1,
            page_limit: 1000
          })
            .then((data) => {
              const schedules = data.data.objects;
              const ArrayData = schedules.map(item => ({
                title: item.name,
                name_id: item.course_id,
                id:item.id,
                time: $dateFmt(new Date(item.start), 'hh:mm') + '-' + $dateFmt(new Date(item.end), 'hh:mm'),
                date: $dateFmt(new Date(item.start), 'yyyy-MM-dd')
              }))
              let ObjectData = {}
              ArrayData.forEach(item => {
                if (ObjectData[item.date]) {
                  ObjectData[item.date].push({...item})
                } else {
                  ObjectData[item.date] = [{...item}]
                }
              })
              this.dateData = {
                Array: ArrayData,
                Object: ObjectData
              }
            })
        },
        test2(id) {
          const that = this;
//          that.$router.push({path: '/iframe', query: {id: id}})
          window.open(`#/iframe?id=${id}`);
        }
      }
    }
</script>

<style scoped>
    .schedule {
      width: 800px;
      min-height: 800px;
      margin-left: 20px;
      margin-bottom: 20px;
      float: left;
    }
    .schedule .vue-calendar-week-title-item {
      height: 0;
      overflow: hidden;
    }
    .schedule .calendar-item-date {
      padding: 5px;
      line-height: 20px;
      font-size: 14px;
      background: #f7f7f7;
      border-bottom: 1px #d9d9d9 solid;
      text-align: center;
      font-family: "Microsoft YaHei";
      color: #333;
    }
    .calendar-item-date .calendar-item-date-span {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      width: 20px;
      border-radius: 10px;
    }
    .calendar-item-date.today .calendar-item-date-span {
      background: #ff3b00;
      color: #fff;
    }
    .agenda-container {
      padding: 5px 2px;
    }
    .agenda-container .agenda-item {
      padding: 5px;
      /*background: #F5A623;*/
      color: #333;
      display: block;
      cursor: pointer;
      font-size: 14px;
      word-break: normal;
    }
    .agenda-container .agenda-item.time {
      font-size: 10px;
    }
</style>
