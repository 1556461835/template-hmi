<!--
 * @Author: your name
 * @Date: 2021-04-07 13:58:25
 * @LastEditTime: 2021-05-18 10:42:08
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
      data-page="demo/sample">
      {{ 'FceStartPos: ' + tagsData['FceStartPos'] }}
    </div>

    <!-- step 2 -->
    <!-- <div
      v-tag:tag="'AutoCharge'"
      data-page="test">
      {{ 'AutoCharge: ' + tagsData['AutoCharge'] }}
    </div> -->

    <!-- step 3 -->
    <el-input :value="tagsData['FceStartPos']"/>

    <div
      v-tag:tag="'RECByPass4'"
      data-page="demo/sample">
      <!-- step 4 -->
      <!-- {{ 'RECByPass4: ' + tagsData['RECByPass4'] }} -->
      <!-- step 5 -->
      <!-- <div v-for="(item, idx) in tagsData['RECByPass4']" v-bind:key="idx">
        {{ item['Bypass_Num'] + ':' +  item['Qualified_Flag']}}
      </div> -->
    </div>


    <el-input-number v-model="FceStartPos" controls-position="right" :min="1" :max="1000"></el-input-number>

    <el-button 
      v-command="'/demo/apisample/setTags'"
      type="primary"
      @click="testSetTags">设置tag</el-button>

    <el-input v-model="msgBody" type='area'></el-input>

    <el-button type="primary" @click="testSendMsg">测试消息</el-button> 

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
      msgBody: ''
    }
  },
  created() {},
  async mounted() {
    var that = this
    /**
     * page 当前页面唯一标识， data =>{} 正确回调， error => {} 错误回调， 1000：读取频率
     */

    /**
     * getHmiData('test', successFunc, errorFunc)
     *
     * successFunc(data) {
     *   that.tagsData = data
     * },
     * errorFunc(error) {
     *   console.log(error)
     * }
     */
    getHmiData(
      'test',
      (data) => {
        data['FceStartPos'] *= 2
        that.tagsData = data
      },
      (error) => {
        console.log(error)
      },
      5000
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
      this.msgBody = JSON.stringify(result)
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
