<!--
 * @Author: your name
 * @Date: 2021-05-27 15:31:01
 * @LastEditTime: 2021-06-10 15:41:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\demo\test3.vue
-->
<template>
  <div>
      <!-- v-tag:tag: + 变量名 -->
      <!-- data-page: 画面名 -->
      <!-- <div v-tag:tag="'MRollerMax'" data-page="demo/test3">
        MRollerMax变量: {{tagsData.MRollerMax}}
      </div>
      <div v-tag:tag="'MRollerOP'" data-page="demo/test3">
        MRollerOP变量: {{tagsData.MRollerOP}}
      </div>
      <div v-tag:tag="'MRollerSpeed'" data-page="demo/test3">
        MRollerSpeed变量: {{tagsData.MRollerSpeed}}
      </div> -->

      <el-button @click="handelChange">传递消息</el-button>

      MRollerMax:<el-input v-model="form.MRollerMax"></el-input>
       MRollerOP: <el-input v-model="form.MRollerOP"></el-input>
      MRollerSpeed:<el-input v-model="form.MRollerSpeed"></el-input>
      <el-button @click="handelMRollerMaxChange" >修改MRollerMax变量值</el-button>

      <div v-tag:tag="'RECTestCenView'" data-page="demo/test3"></div>

      <!-- <div v-tag:tag="'RECFlatView'" data-page="demo/test3"></div> -->

      <!-- <div v-tag:tag="'shuntAuto'" data-page="demo/test3"></div> -->

  </div>
</template>

<script>
// getHmiData: 获取变量
// sendMsg: 发送消息
// setTags 修改变量
import { getHmiData, sendMsg, setTags } from '@/lib/GetData'
export default {
  data() {
    return {
      tagsData: {},
      value: 0,
      value2: 0,
      value3: 0,
      msgBody: null,
      form: {
        MRollerMax: 0,
        MRollerOP: 0,
        MRollerSpeed: 0
      }
    }
  },
  mounted() {
    getHmiData(
      'demo/test3',
      (data) => {
        this.tagsData = data
      },
      (err) => {
        console.log(err)
      },
      2000
    )
  },
  // 方法区
  methods: {
    //   async + await 同时出现
    async handelChange() {
      let data = [
        [
          {
            c: 1,
            d: 2,
            a: 333
          }
        ]
      ]

      // sendMsg(data, msgId, sendTo, waitReply, timeout)
      var result = await sendMsg(data, 1234, 'MTK')
      console.log(result)
      result.results[0][0]['a'] // 内容
      result.code // 状态
      this.msgBody = JSON.stringify(result)
      //   JSON.stringify() 将json格式转换成字符
    },
    // 修改变量的值
    handelMRollerMaxChange() {
      // double, long
      // Number() 将字符串转换为数值
      let data = {
        MRollerMax: Number(this.form.MRollerMax),
        MRollerOP: Number(this.form.MRollerOP),
        MRollerSpeed: Number(this.form.MRollerSpeed)
      }
      setTags(data)
    }
  }
}
</script>

<style>
</style>
