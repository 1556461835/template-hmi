<!--
 * @Author: your name
 * @Date: 2021-06-19 17:23:15
 * @LastEditTime: 2021-07-05 09:20:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTLCode\pages\demo\test6.vue
-->
<template>
  <div>
      <hmi-echarts :x-axis="xAxis1" :y-axis="yAxis1" :series="series1"/>

      <hmi-echarts :x-axis="xAxis2" :y-axis="yAxis2" :series="series2"/>
  </div>
</template>

<script>
import HmiEcharts from '../../components/HmiEcharts.vue'
export default {
  components: {
    HmiEcharts
  },
  data() {
    return {
      xAxis1: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis1: [
        {
          type: 'value'
        }
      ],
      series1: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ],

      xAxis2: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis2: {
        type: 'value'
      },
      series2: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    }
  },
  mounted() {
    getHmiData(
      'demo/sample',
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      },
      5000
    )
  }
}
</script>

<style>
</style>
