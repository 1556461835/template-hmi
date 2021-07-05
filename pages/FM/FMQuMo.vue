<!--
 * @Author: Zhang ShiWei
 * @Date: 2021-04-15 13:58:25
 * @LastEditTime: 2021-05-22 17:33:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\FM\FMQuMo.vue
 * @FileName: 质量监控
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
    <div class="layout-webkitScrollbar" style="height: calc(100vh - 175px);overflow-y: auto;">
      <!-- form内容 -->
      <el-row :gutter="7">
        <el-col :span="24">
          <el-col :span="4">
            <div class="xw_formAllName">厚度</div>
            <el-form label-width="100px">
              <el-form-item label="合格率(%)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="公差值(mm)">
                <el-input style="width: 45%;" disabled/>
                <el-input style="width: 45%;" disabled/>
              </el-form-item>
              <el-form-item label="设定值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="平均值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最大值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最小值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="4">
            <div class="xw_formAllName">宽度</div>
            <el-form label-width="100px">
              <el-form-item label="合格率(%)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="公差值(mm)">
                <el-input style="width: 45%;" disabled/>
                <el-input style="width: 45%;" disabled/>
              </el-form-item>
              <el-form-item label="设定值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="平均值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最大值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最小值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="4">
            <div class="xw_formAllName">终轧温度</div>
            <el-form label-width="100px">
              <el-form-item label="合格率(%)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="公差值(mm)">
                <el-input style="width: 45%;" disabled/>
                <el-input style="width: 45%;" disabled/>
              </el-form-item>
              <el-form-item label="设定值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="平均值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最大值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最小值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="4">
            <div class="xw_formAllName">层冷温度</div>
            <el-form label-width="100px">
              <el-form-item label="合格率(%)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="公差值(mm)">
                <el-input style="width: 45%;" disabled/>
                <el-input style="width: 45%;" disabled/>
              </el-form-item>
              <el-form-item label="设定值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="平均值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最大值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最小值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="4">
            <div class="xw_formAllName">凸度</div>
            <el-form label-width="100px">
              <el-form-item label="合格率(%)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="公差值(mm)">
                <el-input style="width: 45%;" disabled/>
                <el-input style="width: 45%;" disabled/>
              </el-form-item>
              <el-form-item label="设定值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="平均值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最大值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最小值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="4">
            <div class="xw_formAllName">平直度</div>
            <el-form label-width="100px">
              <el-form-item label="合格率(%)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="公差值(mm)">
                <el-input style="width: 45%;" disabled/>
                <el-input style="width: 45%;" disabled/>
              </el-form-item>
              <el-form-item label="设定值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="平均值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最大值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
              <el-form-item label="最小值(mm)">
                <el-input style="width: 94%" disabled/>
              </el-form-item>
            </el-form>
          </el-col>
        </el-col>
      </el-row>
      <!-- echarts图表 -->
      <el-row style="height: 100%">
        <el-col :span="8" style="height: calc((100% - 230px)/2);">
          <HmiEcharts
            :title="thickness.title"
            :series="thickness.series"
            :tooltip="ecahrtsOption.sameOp.tooltip"
            :grid="ecahrtsOption.sameOp.grid"
            :data-zoom="ecahrtsOption.sameOp.dataZoom"
            :x-axis="ecahrtsOption.sameOp.xAxis"
            :y-axis="ecahrtsOption.sameOp.yAxis"
            :_height="'100%'"/>
        </el-col>
        <el-col :span="8" style="height: calc((100% - 230px)/2);">
          <HmiEcharts
            :title="widthCurve.title"
            :series="widthCurve.series"
            :tooltip="ecahrtsOption.sameOp.tooltip"
            :grid="ecahrtsOption.sameOp.grid"
            :data-zoom="ecahrtsOption.sameOp.dataZoom"
            :x-axis="ecahrtsOption.sameOp.xAxis"
            :y-axis="ecahrtsOption.sameOp.yAxis"
            :_height="'100%'"/>
        </el-col>
        <el-col :span="8" style="height: calc((100% - 230px)/2);">
          <HmiEcharts
            :title="lastTemp.title"
            :series="lastTemp.series"
            :tooltip="ecahrtsOption.sameOp.tooltip"
            :grid="ecahrtsOption.sameOp.grid"
            :data-zoom="ecahrtsOption.sameOp.dataZoom"
            :x-axis="ecahrtsOption.sameOp.xAxis"
            :y-axis="ecahrtsOption.sameOp.yAxis"
            :_height="'100%'"/>
        </el-col>
        <el-col :span="8" style="height: calc((100% - 230px)/2);">
          <HmiEcharts
            :title="CTTemp.title"
            :series="CTTemp.series"
            :tooltip="ecahrtsOption.sameOp.tooltip"
            :grid="ecahrtsOption.sameOp.grid"
            :data-zoom="ecahrtsOption.sameOp.dataZoom"
            :x-axis="ecahrtsOption.sameOp.xAxis"
            :y-axis="ecahrtsOption.sameOp.yAxis"
            :_height="'100%'"/>
        </el-col>
        <el-col :span="8" style="height: calc((100% - 230px)/2);">
          <HmiEcharts
            :title="convexity.title"
            :series="convexity.series"
            :tooltip="ecahrtsOption.sameOp.tooltip"
            :grid="ecahrtsOption.sameOp.grid"
            :data-zoom="ecahrtsOption.sameOp.dataZoom"
            :x-axis="ecahrtsOption.sameOp.xAxis"
            :y-axis="ecahrtsOption.sameOp.yAxis"
            :_height="'100%'"/>
        </el-col>
        <el-col :span="8" style="height: calc((100% - 230px)/2);">
          <HmiEcharts
            :title="glancing.title"
            :series="glancing.series"
            :tooltip="ecahrtsOption.sameOp.tooltip"
            :grid="ecahrtsOption.sameOp.grid"
            :data-zoom="ecahrtsOption.sameOp.dataZoom"
            :x-axis="ecahrtsOption.sameOp.xAxis"
            :y-axis="ecahrtsOption.sameOp.yAxis"
            :_height="'100%'"/>
        </el-col>
      </el-row>
    </div>
    <!-- <div v-tag:tag="'FDHCurve'" data-page="FM/FMQuMo"> {{ 'FDHCurve: ' + tagsData['FDHCurve'] }}</div> -->
  </div>
</template>

<script>
import { getHmiData, setTags, sendMsg } from '@/lib/GetData'

export default {
  name: 'FMQuMo',
  data() {
    return {
      thickness: {
        title: {
          text: '厚度曲线',
          top: 20
        },
        series: [
          {
            type: 'line',
            symbol: 'none',
            data: []
          }
        ]
      },
      widthCurve: {
        title: {
          text: '宽度曲线',
          top: 20
        },
        series: [
          {
            type: 'line',
            symbol: 'none',
            data: []
          }
        ]
      },
      lastTemp: {
        title: {
          text: '终轧温度曲线',
          top: 20
        },
        series: [
          {
            type: 'line',
            symbol: 'none',
            data: []
          }
        ]
      },
      CTTemp: {
        title: {
          text: '层冷温度曲线',
          top: 20
        },
        series: [
          {
            type: 'line',
            symbol: 'none',
            data: []
          }
        ]
      },
      convexity: {
        title: {
          text: '凸度曲线',
          top: 20
        },
        series: [
          {
            type: 'line',
            symbol: 'none',
            data: []
          }
        ]
      },
      glancing: {
        title: {
          text: '平直度曲线',
          top: 20
        },
        series: [
          {
            type: 'line',
            symbol: 'none',
            data: []
          }
        ]
      },
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
          legend: [],
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
        }
      },
      coilId: '', //钢卷号输入
      dataInfo: {
        grade: 'aaa'
      }, //form绑定基本信息
      tagsData: []
    }
  },
  watch: {},
  created() {},
  mounted() {
    let vm = this
    // getHmiData(
    //   'FM/FMQuMo',
    //   (data) => {
    //     console.log('返回值===', data)
    //     vm.tagsData = data
    //   },
    //   (error) => {
    //     console.log(error)
    //   },
    //   5000
    // )
    this.thickness.series[0].data = vm.makeLine(1)
    this.widthCurve.series[0].data = vm.makeLine(2)
    this.lastTemp.series[0].data = vm.makeLine(3)
    this.CTTemp.series[0].data = vm.makeLine(4)
    this.convexity.series[0].data = vm.makeLine(5)
    this.glancing.series[0].data = vm.makeLine(6)
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
