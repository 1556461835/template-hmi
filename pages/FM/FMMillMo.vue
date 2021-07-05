<!--
 * @Author: Zhang ShiWei
 * @Date: 2021-04-16 09:58:25
 * @LastEditTime: 2021-05-14 14:58:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\FM\FMMillMo.vue
 * @FileName: 轧制监控
-->
<template>
  <div class="xw_main">
    <el-row :gutter="7">
      <el-col :span="12">
        <el-form :inline="true">
          <el-form-item label="钢卷号">
            <el-input v-model="coilId"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini">上一卷</el-button>
            <el-button type="primary" size="mini">当前卷</el-button>
            <el-button type="primary" size="mini">下一卷</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-form :inline="true">
          <el-form-item label="钢种">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
          <el-form-item label="宽度(mm)">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
          <el-form-item label="厚度(mm)">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
          <el-form-item label="轧制时间">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-divider/>
    <div  class="layout-webkitScrollbar" style="height: calc(100vh - 175px);">
      <!-- 轧机辊缝 -->
      <el-row :gutter="2">
        <div class="xw_titleName">&nbsp;轧机辊缝</div>
        <el-divider/>
        <el-col :span="12">
          <HmiTable
            ref="leftTable"
            :table-head="false"
            :table-foot="false"
            :is-pagination-show="false"
            :table-data="tableData[0]"
            :index-type="'index'">
            <template slot="TableBody">
              <el-table-column prop="coilId" label="机架"></el-table-column>
              <el-table-column prop="coilId" label="设定值"></el-table-column>
              <el-table-column prop="coilId" label="平均值"></el-table-column>
              <el-table-column prop="coilId" label="头部实测值"></el-table-column>
              <el-table-column prop="coilId" label="最小值"></el-table-column>
              <el-table-column prop="coilId" label="最小值位置"></el-table-column>
              <el-table-column prop="coilId" label="最大值"></el-table-column>
              <el-table-column prop="coilId" label="最大值位置"></el-table-column>
            </template>
          </HmiTable>
        </el-col>
        <el-col :span="12">
          <HmiEcharts
            :series="ecahrtsOption.unlikeOp[0].series"
            :tooltip="ecahrtsOption.sameOp.tooltip"
            :legend="ecahrtsOption.sameOp.legend"
            :grid="ecahrtsOption.sameOp.grid"
            :data-zoom="ecahrtsOption.sameOp.dataZoom"
            :x-axis="ecahrtsOption.sameOp.xAxis"
            :y-axis="ecahrtsOption.sameOp.yAxis"
            :_height="'250px'"/>
        </el-col>
      </el-row>
      <!-- 轧机速度 -->
      <el-row :gutter="2">
        <div class="xw_titleName">&nbsp;轧机速度</div>
        <el-divider/>
        <el-col :span="12">
          <HmiTable
            ref="leftTable"
            :table-head="false"
            :table-foot="false"
            :is-pagination-show="false"
            :table-data="tableData[0]"
            :index-type="'index'">
            <template slot="TableBody">
              <el-table-column prop="coilId" label="机架"></el-table-column>
              <el-table-column prop="coilId" label="设定值"></el-table-column>
              <el-table-column prop="coilId" label="平均值"></el-table-column>
              <el-table-column prop="coilId" label="头部实测值"></el-table-column>
              <el-table-column prop="coilId" label="最小值"></el-table-column>
              <el-table-column prop="coilId" label="最小值位置"></el-table-column>
              <el-table-column prop="coilId" label="最大值"></el-table-column>
              <el-table-column prop="coilId" label="最大值位置"></el-table-column>
            </template>
          </HmiTable>
        </el-col>
        <el-col :span="12">
          <HmiEcharts
            :series="ecahrtsOption.unlikeOp[0].series"
            :tooltip="ecahrtsOption.sameOp.tooltip"
            :legend="ecahrtsOption.sameOp.legend"
            :grid="ecahrtsOption.sameOp.grid"
            :data-zoom="ecahrtsOption.sameOp.dataZoom"
            :x-axis="ecahrtsOption.sameOp.xAxis"
            :y-axis="ecahrtsOption.sameOp.yAxis"
            :_height="'250px'"/>
        </el-col>
      </el-row>
      <!-- 活套张力 -->
      <el-row :gutter="2">
        <div class="xw_titleName">&nbsp;活套张力</div>
        <el-divider/>
        <el-col :span="12">
          <HmiTable
            ref="leftTable"
            :table-head="false"
            :table-foot="false"
            :is-pagination-show="false"
            :table-data="tableData[0]"
            :index-type="'index'">
            <template slot="TableBody">
              <el-table-column prop="coilId" label="机架"></el-table-column>
              <el-table-column prop="coilId" label="设定值"></el-table-column>
              <el-table-column prop="coilId" label="平均值"></el-table-column>
              <el-table-column prop="coilId" label="头部实测值"></el-table-column>
              <el-table-column prop="coilId" label="最小值"></el-table-column>
              <el-table-column prop="coilId" label="最小值位置"></el-table-column>
              <el-table-column prop="coilId" label="最大值"></el-table-column>
              <el-table-column prop="coilId" label="最大值位置"></el-table-column>
            </template>
          </HmiTable>
        </el-col>
        <el-col :span="12">
          <HmiEcharts
            :series="ecahrtsOption.unlikeOp[0].series"
            :tooltip="ecahrtsOption.sameOp.tooltip"
            :legend="ecahrtsOption.sameOp.legend"
            :grid="ecahrtsOption.sameOp.grid"
            :data-zoom="ecahrtsOption.sameOp.dataZoom"
            :x-axis="ecahrtsOption.sameOp.xAxis"
            :y-axis="ecahrtsOption.sameOp.yAxis"
            :_height="'250px'"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FMMillMo',
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
              top: 10,
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
      },
      coilId: '', //钢卷号输入
      dataInfo: {
        grade: 'aaa'
      }, //form绑定基本信息
      tableData: [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}]
      ]
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
