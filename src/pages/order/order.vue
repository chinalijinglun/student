<template>
  <div class="order">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="订单编号">
        <el-input v-model="formInline.teachername" placeholder="课程名"></el-input>
      </el-form-item>
      <el-form-item label="下单时间">
        <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="课程名称">
        <el-input v-model="formInline.classname" placeholder="课程名"></el-input>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-select v-model="value" placeholder="所有状态" @change="changeStatue">
          <el-option
            v-for="statue in region"
            :key="statue.id"
            :label="statue.name"
            :value="statue.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="tables">
      <div class="table-tit">
        <ul>
          <li class="courses">课程名称</li>
          <li class="jie">课节数</li>
          <li class="stat">状态</li>
          <li class="tea">教师</li>
          <li class="price">价格</li>
        </ul>
      </div>
      <div class="orders" v-for="item in order">
        <div class="this-tit">
          <div class="order-num">
            订单编号：{{item.id}}
          </div>
          <div class="order-time">
            下单时间：{{item.created_at}}
          </div>
        </div>
        <ul>
          <li class="courses lef">{{item.course_name}}</li>
          <li class="jie">{{item.classes_number}}</li>
          <li class="stat" v-text="returnPayment(item.payment_state)">

          </li>
          <li class="tea">{{item.teacher_name?item.teacher_name:" "}}</li>
          <li class="price">￥ {{item.amount}}</li>
        </ul>
      </div>
      <div class="pagin">
        <el-pagination background layout="prev, pager, next" :page-size="paginations.page_size" :total="paginations.totalPage" @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 完事 6月27日16：50
   *
   COMMON :普通订单
   GIVE :赠送订单
   COMPENSATE :补偿订单
   FREE :免费订单
   REFUND:退款订单
   AUDITIONS:试听
   COMMON = 1
   GIVE = 2
   COMPENSATE = 3
   FREE = 4
   REFUND = 5
   AUDITIONS = 6


   PAY：下订单
   PAID :已经付款
   CANCEL : 取消
   APPLY_REFUND:申请退款
   CHECK_PASSED 审核通过
   CHECK_DENY 审核驳回
   REFUND :退款
   USED :已经使
   PAY = 1
   PAID =2
   CANCEL =3
   APPLY_REFUND = 4
   CHECK_PASSED = 5
   CHECK_DENY = 6
   REFUND =7
   USED=8
   */
  export default {
    data() {
      return {
        value:"",
        time:"",
        paginations: {
          totalPage: 10,
          page_size: 10,
        },
        region:[
          {
            id:0,
            name:'所有状态'
          },{
            id: 1,
            name:'待付款'
          },{
            id:2,
            name:'已付款'
          },{
            id:3,
            name:'订单取消'
          },{
            id:4,
            name:'退款中'
          },{
            id:5,
            name:'已退款'
          }],
        formInline: {
          classname: '',
          teachername:'',
          regions:'',
          course_name:""
        },
        order:[],//订单
      }
    },
    created(){
      this.getOrder(1);
    },
    methods: {
      changeStatue(val){
        this.formInline.regions = val;
      },
      //订单
      getOrder(page){
        const that = this;
        this.baseAxios1.post('/student/my_order',{
          "page_limit": 10,
          "page_no": page
        }).then((data)=>{
          that.order = data.data.objects;
        })
      },
      //点击查询
      onSubmit() {
        const that = this;
        const bbb={
          "page_limit": 10,
          "page_no": 1,
        };
        if(that.formInline.teachername!= ''){
          bbb.order_id =that.formInline.teachername
        }
        if(that.formInline.classname != ''){
          bbb.course_name =that.formInline.classname
        }
        if(that.time[0] != undefined){
          bbb.created_at_start =that.time[0]
        }
        if(that.time[1] != undefined){
          bbb.created_at_end =that.time[1]
        }
        if(that.formInline.regions != ''){
          bbb.payment_state = that.formInline.regions
        }

        console.log(bbb)
//        {
//          'course_name':that.formInline.classname,
//          'created_at_start':that.time[0],
//          'created_at_end':that.time[1],
//          'payment_state':that.formInline.regions,
//          "page_limit": 10,
//          "page_no": 1,
//        }
        this.baseAxios1.post('/student/my_order',bbb)
          .then(function (data) {
            that.order = data.data.objects;
          })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        const that = this;
        that.getOrder(val)
      },
      returnPayment(id){
        if(id === 1){
          return '下订单'
        }else if( id === 2){
          return '已经付款'
        }else if(id === 3){
          return '取消'
        }else if(id ===4 ){
          return '申请退款'
        }else if(id ===5){
          return '审核通过'
        }else if(id ===6){
          return '审核驳回'
        }else if(id ===7){
          return '退款'
        }else if(id ===8){
          return '已经使用'
        }
      }
    }
  }
</script>

<style scoped>
  ul, li {
    list-style: none;
  }

  .order {
    float: right;
    width: 800px;
  }

  .demo-form-inline {
    padding: 30px;
  }

  .demo-form-inline button {
    background: #FF8200;
    border: none;
  }

  .tables {
    width: 800px;
    background: #fff;
    padding: 10px 0;
  }

  .table-tit {
    width: 780px;
    margin: 0 10px 10px;
    height: 38px;
    line-height: 38px;
    background: #f5f5f5;
    border: 1px solid #E8E8E8;
  }

  .table-tit ul {
    overflow: hidden;
  }

  .table-tit ul li {
    float: left;
    font-size: 12px;
    color: #333333;
    text-align: center;
  }

  .courses {
    width: 346px;
  }

  .jie {
    width: 106px;
  }

  .stat {
    width: 109px;
  }

  .tea {
    width: 101px;
  }

  .price {
    width: 106px;
  }

  .orders {
    background: #FFFFFF;
    border: 1px solid #BFBFBF;
    width: 780px;
    height: 100px;
    margin: 10px;
  }

  .this-tit {
    overflow: hidden;
    width: 100%;
    height: 46px;
    background: #F5F5F5;

  }

  .order-num {
    float: left;
    line-height: 46px;
    margin-left: 15px;
    font-size: 12px;
    color: #333333;
  }

  .order-time {
    font-size: 12px;
    color: #333333;
    float: right;
    margin-right: 20px;
    line-height: 46px;
  }

  .orders ul li {
    float: left;
    font-size: 12px;
    color: #333333;
    text-align: center;
    height: 53px;
    line-height: 53px;
  }

  .orders .ul {
    overflow: hidden;
  }
</style>
