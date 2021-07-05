<!--
 * @Author: your name
 * @Date: 2021-04-07 13:58:25
 * @LastEditTime: 2021-05-27 15:29:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\index.vue
-->

<!-- 视图层 -->
<template>
  <div>
    <!-- step 1  -->
    <div
      v-tag:tag="'FceStartPos'"
      data-page="demo/test2">
      {{ 'FceStartPos: ' + tagsData['FceStartPos'] }}
    </div>

    <!-- step 2 -->
    <div
      v-tag:tag="'AutoCharge'"
      data-page="demo/test2">
      {{ 'AutoCharge: ' + tagsData['AutoCharge'] }}
    </div>

    <!-- step 3 -->
    <el-input :value="tagsData['FceStartPos']"/>


    <el-input-number v-model="FceStartPos" controls-position="right" :min="1" :max="1000"></el-input-number>

    <el-button 
      v-command="'/demo/apisample/setTags'"
      type="primary"
      @click="testSetTags">设置tag1</el-button>

    <el-input v-model="msgBody" type='area'></el-input>

    <el-button type="primary" @click="testSendMsg">测试消息</el-button> 

    <div
      v-tag:tag="'RECByPass4'"
      data-page="demo/test2">
      RECByPass4:
      <el-table :data="tagsData.RECByPass4" height="300px">
        <el-table-column prop="Id" label="Id"></el-table-column>
        <el-table-column prop="Ingot_No" label="Ingot_No"></el-table-column>
        <el-table-column prop="Ingot_Wet" label="Ingot_Wet"></el-table-column>
        <el-table-column prop="Ingot_Wid" label="Ingot_Wid"></el-table-column>
        <el-table-column prop="Qualified_Flag" label="Qualified_Flag"></el-table-column>
        <el-table-column prop="Material_No" label="Material_No"></el-table-column>
        <el-table-column prop="SteelGrade" label="SteelGrade"></el-table-column>
        <el-table-column prop="CreateTime" label="CreateTime"></el-table-column>
      </el-table>
      <!-- step 4 -->
      <!-- {{ 'RECByPass4: ' + tagsData['RECByPass4'] }} -->
      <!-- step 5 -->
      <!-- <div v-for="(item, idx) in tagsData['RECByPass4']" v-bind:key="idx">
        {{ item['Bypass_Num'] + ':' +  item['Qualified_Flag']}}
      </div> -->
    </div>

    <div>
      <span v-tag:tag="'VAR1'" data-page="demo/test2">VAR1: {{tagsData.VAR1}}<el-input v-model="VAR1" @change="handleChange1"></el-input></span>
      +
      <span v-tag:tag="'VAR2'" data-page="demo/test2">VAR1: {{tagsData.VAR2}}<el-input v-model="VAR2"></el-input></span>
      =
      <span v-tag:tag="'SUM'" data-page="demo/test2">{{tagsData.SUM}}</span>
    </div>

    <div>
      <HmiEcharts
          :series="sameOp.series"
          :tooltip="sameOp.tooltip"
          :legend="sameOp.legend"
          :grid="sameOp.grid"
          :data-zoom="sameOp.dataZoom"
          :x-axis="sameOp.xAxis"
          :y-axis="sameOp.yAxis"
          :_height="'350px'"/>
    </div>

    <!-- test1 -->
    <div v-tag:tag="'MRollerMax'" data-page="demo/test2">
      MRollerMax变量: {{tagsData.MRollerMax}}
    </div>

    <!-- 输入框 v-model.number-->
    <el-input v-model="MRollerMax"></el-input>

    <el-button type="primary" @click="changeVal">修改MRollerMax变量</el-button> 
  </div>
</template>

<!-- 业务逻辑层 -->
<script>
import { getHmiData, sendMsg, setTags } from '@/lib/GetData'

export default {
  data() {
    return {
      tagsData: {},
      FceStartPos: 0,
      msgBody: '',
      VAR1: 0,
      VAR2: 0,
      SUM: 0,
      sameOp: {
        xAxis: [{}],
        yAxis: [{}],
        grid: [
          {
            bottom: 45,
            containLabel: true
          }
        ],
        legend: {
          orient: 'vertical',
          left: 'right',
          top: 'center'
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            height: 15, //这里可以设置dataZoom的尺寸
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }
        ],
        tooltip: {
          trigger: 'axis'
        },
        series: [
          {
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
              [14.0, 7.66],
              [13.4, 6.81],
              [10.0, 6.33],
              [14.0, 8.96],
              [12.5, 6.82],
              [9.15, 7.2],
              [11.5, 7.2],
              [3.03, 4.23],
              [12.2, 7.83],
              [2.02, 4.47],
              [1.05, 3.33],
              [4.05, 4.96],
              [6.03, 7.24],
              [12.0, 6.26],
              [12.0, 8.84],
              [7.08, 5.82],
              [5.02, 5.68]
            ],
            type: 'scatter'
          }
        ]
      },
      MRollerMax: 0
    }
  },

  created() {},
  async mounted() {
    var that = this
    /**
     * page 当前页面唯一标识， data =>{} 正确回调， error => {} 错误回调， 1000：读取频率
     */

    /**
     * getHmiData('test', successFunc, errorFunc, 5000)
     *
     * successFunc(data) {
     *   that.tagsData = data
     * },
     * errorFunc(error) {
     *   console.log(error)
     * }
     */
    getHmiData(
      'demo/test2',
      (data) => {
        // data['FceStartPos'] *= 3

        that.tagsData = data
      },
      (error) => {
        console.log(error)
      },
      2000
    )
  },
  destroyed() {},
  methods: {
    sayHello() {
      console.log('Hello World')
    },

    testSetTags() {
      var data = {
        FceStartPos: this.FceStartPos
      }
      setTags(data)
    },

    async testSendMsg() {
      let data = [
        [
          {
            a: 1,
            b: 2,
            c: 3,
            e: 4
          },
          {
            a: 1,
            b: 2,
            c: 3,
            e: 4
          }
        ],
        [
          {
            c: 1,
            d: 2
          }
        ]
      ]

      // sendMsg(data, msgId, sendTo, waitReply, timeout)
      var result = await sendMsg(data, 1234, 'MTK')
      console.log(result)
      result.results[0][0]['a'] // 内容
      result.code // 状态
      this.msgBody = JSON.stringify(result)
    },

    handleChange1() {
      var data = {
        VAR1: this.VAR1
      }
      console.log('================', data)
      setTags(data)
    },
    changeVal() {
      // let data = {
      //   MRollerMax: Number(this.MRollerMax)
      // }
      let data = {
        MRollerMax: this.MRollerMax * 1
      }
      console.log('=============', data)
      setTags(data)
    }
  }
}
</script>

<!-- 样式 -->
<style lang="scss">
.nowRollInfo {
  width: 519px;
  height: 270px;
  border-radius: 5px;
}
.L-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #cccdd4;
}
.L-table th {
  color: #fff;
  font-weight: 700;
  background-color: #409eff;
  height: 32px;
  text-align: center;
}
.L-table td {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.75);
  padding: 4px;
}
.L-table th,
.L-table td {
  width: 192px;
  border: 1px solid #cccdd4;
  font-size: 14px;
  text-align: center;
  font-family: PingFang SC, PingFang SC-Bold;
}
.position-Line {
  position: relative;
  .position-Line-width {
    position: absolute;
    width: 1px;
    height: 16px;
    top: 4px;
    transform: rotateZ(20deg);
    background-color: rgba(0, 0, 0, 0.75);
    left: 50%;
  }
}
.btns {
  text-align: center;
}
</style>
