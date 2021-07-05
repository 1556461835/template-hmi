<!--
 * @Author: Zhang ShiWei
 * @Date: 
 * @LastEditTime: 2021/4/22 10:38
 * @LastEditors: Zhang ShiWei
 * @Description: 
 * @FilePath: echarts
 * @FileName: echarts.vue
-->
<template>
  <div class="xw_main">
    <el-row>
      <el-col v-for="(item, index) in ecahrtsOption.unlikeOp" :key="'th'+index" :span="12">
        <HmiEcharts
          :title="item.title"
          :series="item.series"
          :tooltip="ecahrtsOption.sameOp.tooltip"
          :legend="ecahrtsOption.sameOp.legend"
          :grid="ecahrtsOption.sameOp.grid"
          :data-zoom="ecahrtsOption.sameOp.dataZoom"
          :x-axis="ecahrtsOption.sameOp.xAxis"
          :y-axis="ecahrtsOption.sameOp.yAxis"
          :_height="'350px'"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Echarts',
  components: {},
  data() {
    return {
      ecahrtsOption: {
        sameOp: {
          xAxis: [
            {
              type: 'value'
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
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
          }
        },
        unlikeOp: [
          {
            title: {
              text: 'test1'
            },
            series: [
              {
                name: 'F1',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F2',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F3',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F4',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F5',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F6',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F7',
                type: 'line',
                symbol: 'none',
                data: []
              }
            ]
          },
          {
            title: {
              text: 'test2'
            },
            series: [
              {
                name: 'F1',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F2',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F3',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F4',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F5',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F6',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F7',
                type: 'line',
                symbol: 'none',
                data: []
              }
            ]
          },
          {
            title: {
              text: 'test3'
            },
            series: [
              {
                name: 'F1',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F2',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F3',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F4',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F5',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F6',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F7',
                type: 'line',
                symbol: 'none',
                data: []
              }
            ]
          },
          {
            title: {
              text: 'test4'
            },
            series: [
              {
                name: 'F1',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F2',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F3',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F4',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F5',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F6',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'F7',
                type: 'line',
                symbol: 'none',
                data: []
              }
            ]
          }
        ]
      }
    }
  },
  watch: {},
  created() {},
  mounted() {
    let vm = this
    this.ecahrtsOption.unlikeOp.map(function(item, index) {
      item.series.map(function(itemC, indexC) {
        itemC.data = vm.makeLine(indexC)
      })
    })
  },
  methods: {
    makeLine(inv) {
      let data = []
      for (var i = 0; i < 100; i++) {
        data.push([i, Math.random() + inv])
      }
      return data
    }
  }
}
</script>

<style scoped lang="scss">
</style>
