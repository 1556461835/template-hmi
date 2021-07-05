<!--
 * @Author: your name
 * @Date: 2021-06-25 09:29:46
 * @LastEditTime: 2021-06-25 16:27:23
 * @LastEditors: Please set LastEditors
 * @Description: 班组记录
 * @FilePath: \hmid:\work_project\HTLCode\pages\tearm.vue
-->
<template>
  <div class="layout-main padding16">
    <div class="flex justify-around margin-bottom-8">
      <el-date-picker v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
      </el-date-picker>
        <div style="width: 200px">
         <p class="tearm-group">班组：</p>
         <div class="tearm-group-selete">
             <el-select v-model="tearmValue"
            placeholder="请选择">
        <el-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
         </div>
        </div>
      <span>
        <el-button type="mini">查询</el-button>
        <el-button type="mini">返回</el-button>
      </span>
    </div>

    <el-row class="margin-bottom-8" :gutter="10">
        <el-col :span="6">
            <div class="tearm-border">
                <div class="tearm-title">装炉统计</div>
                <hmi-echarts 
                    :tooltip="tearmEcharts.tooltip" 
                    :x-axis="tearmEcharts.xAxis" 
                    :y-axis="tearmEcharts.yAxis" 
                    :legend="{show: false}"
                    :grid="tearmEcharts.grid"
                    :series="tearmEcharts.series"
                    _height="150px"
                    _width="100%"/>
                <hmi-echarts 
                    :tooltip="tearmEcharts.tooltip" 
                    :x-axis="tearmEcharts.xAxis" 
                    :y-axis="tearmEcharts.yAxis" 
                    :legend="{show: false}"
                    :grid="tearmEcharts.grid"
                    :series="tearmEcharts.series"
                    _height="150px"
                    _width="100%"/>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="tearm-border">
                <div class="tearm-title">出炉统计</div>
                    <hmi-echarts 
                    :tooltip="tearmEcharts.tooltip" 
                    :x-axis="tearmEcharts.xAxis" 
                    :y-axis="tearmEcharts.yAxis" 
                    :legend="{show: false}"
                    :grid="tearmEcharts.grid"
                    :series="tearmEcharts.series"
                    _width="100%"
                    _height="150px"/>
                    <hmi-echarts 
                    :tooltip="tearmEcharts.tooltip" 
                    :x-axis="tearmEcharts.xAxis" 
                    :y-axis="tearmEcharts.yAxis" 
                    :legend="{show: false}"
                    :grid="tearmEcharts.grid"
                    :series="tearmEcharts.series"
                    _width="100%"
                    _height="150px"/>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="tearm-border">
                <div class="tearm-title">1号炉按生产厂数量对比</div>
                <hmi-echarts 
                :tooltip="tearmPieEcharts.tooltip"  
                :legend="{show: false}"
                :series="tearmPieEcharts.series"
                _width="100%"
                _height="300px"/>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="tearm-border">
                <div class="tearm-title">2号炉按生产厂数量对比</div>
                <hmi-echarts 
                :tooltip="tearmPieEcharts.tooltip"  
                :legend="{show: false}"
                :series="tearmPieEcharts.series"
                _width="100%"
                _height="300px"/>
            </div>
        </el-col>
    </el-row>

    <el-row class="margin-bottom-8" :gutter="10">
        <el-col :span="8">
            <div class="tearm-border">
                <div class="tearm-title">1号炉按班数量对比</div>
                <hmi-echarts 
                :tooltip="tearmPieEcharts.tooltip"  
                :legend="{show: false}"
                :series="tearmPieEcharts.series"
                _width="100%"
                _height="300px"/>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="tearm-border">
                <div class="tearm-title">2号炉按班数量对比</div>
                <hmi-echarts 
                :tooltip="tearmPieEcharts.tooltip"  
                :legend="{show: false}"
                :series="tearmPieEcharts.series"
                _width="100%"
                _height="300px"/>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="tearm-border">
                <div class="tearm-title">水量统计</div>
                <hmi-echarts 
                :tooltip="tearmEcharts.tooltip" 
                :x-axis="tearmEcharts.xAxis" 
                :y-axis="tearmEcharts.yAxis" 
                :legend="{show: false}"
                :series="tearmEcharts.series"
                _width="100%"
                _height="300px"/>
            </div>
        </el-col>
    </el-row>

    <el-row :gutter="10">
        <el-col :span="12">
            <div class="tearm-border">
                <div class="tearm-title">燃气消耗对比</div>
                <hmi-echarts 
                :tooltip="tearmEcharts.tooltip" 
                :x-axis="tearmEcharts.xAxis" 
                :y-axis="tearmEcharts.yAxis" 
                :legend="{show: false}"
                :series="tearmEcharts.series"
                _width="100%"
                _height="300px"/>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="tearm-border">
                <div class="tearm-title">氮气消耗对比</div>
                <hmi-echarts 
                :tooltip="tearmEcharts.tooltip" 
                :x-axis="tearmEcharts.xAxis" 
                :y-axis="tearmEcharts.yAxis" 
                :legend="{show: false}"
                :series="tearmEcharts.series"
                _width="100%"
                _height="300px"/>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import HmiEcharts from '@/components/HmiEcharts'
export default {
  components: { HmiEcharts },
  data() {
    return {
      value1: '',
      options: [
        {
          label: '甲',
          value: 1
        },
        {
          label: '乙',
          value: 2
        },
        {
          label: '丙',
          value: 3
        }
      ],
      tearmValue: '',
      tearmEcharts: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: ['1号炉', '2号炉']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        grid: [
          {
            bottom: 0,
            top: 20,
            containLabel: true
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barGap: 0,
            barWidth: '10',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332]
          },
          {
            name: '',
            type: 'bar',
            barWidth: '10',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182]
          }
        ]
      },
      tearmPieEcharts: {
        series: [
          {
            name: '1号炉',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '甲' },
              { value: 735, name: '乙' },
              { value: 580, name: '丙' },
              { value: 484, name: '丁' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        tooltip: {
          trigger: 'item'
        }
      }
    }
  }
}
</script>

<style>
.tearm-title {
  height: 20px;
  font-size: 14px;
  padding-left: 20px;
  box-sizing: border-box;
}
.tearm-border {
  border: 1px solid #aab2b4;
}
.tearm-group {
  display: inline-block;
  width: 50px;
  float: left;
}
.tearm-group-selete {
  margin-left: 50px;
}
</style>
