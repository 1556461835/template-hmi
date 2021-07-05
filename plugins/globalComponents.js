/*
 * @Author: your name
 * @Date: 2021-04-14 14:35:39
 * @LastEditTime: 2021-05-13 17:04:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\plugins\glablComponents.js
 */
import Vue from 'vue'

import HmiTable from '@/components/HmiTable.vue'
import HmiEcharts from '@/components/HmiEcharts.vue'

Vue.component(HmiTable)

Vue.component(HmiEcharts)

// const files = require.context('../config', true, /\.js$/)
// files.keys().forEach((item) => {
//   let str = item.split('/')
//   let fileName = str[str.length - 1].slice(0, -3)
//   for (const v in files(item)) {
//     Vue.prototype['$' + fileName + v] = files(item)[v]
//   }
// })
