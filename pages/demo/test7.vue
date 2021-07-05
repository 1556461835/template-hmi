<!--
 * @Author: your name
 * @Date: 2021-06-23 08:56:31
 * @LastEditTime: 2021-06-23 16:54:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTLCode\pages\demo\test7.vue
-->
<template>
  <div>
      <el-row>
          <el-col span="1"><div style="width: 100%; height: 24px"></div></el-col>
          <el-col span="8">
            <el-date-picker
                v-model="datevalue"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                >
            </el-date-picker>
          </el-col>
          <el-col span="9">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="班">
                    <el-select v-model="formInline.class" placeholder="班">
                        <el-option label="白班" value="day"></el-option>
                        <el-option label="夜班" value="night"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="组">
                    <el-select v-model="formInline.group" placeholder="组">
                        <el-option label="甲组" value="jia"></el-option>
                        <el-option label="乙组" value="yi"></el-option>
                        <el-option label="丙组" value="bing"></el-option>
                        <el-option label="丁组" value="ding"></el-option>
                    </el-select>
                </el-form-item>
                </el-form>
          </el-col>
          <el-col span="6">
              <el-button type="primary" size="small">查询</el-button>
              <el-button type="primary" size="small">今天</el-button>
              <el-button type="primary" size="small">导出</el-button>
          </el-col>
      </el-row>

      <div style="margin-top: 30px">
          <el-row gutter="180">
            <el-col :span="4">
              <div>
              <hmi-echarts :title="title_jia" :series="class_jia" :legend="legend1"/>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
              <hmi-echarts :title="title_yi" :series="class_yi" :legend="legend1"/>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
              <hmi-echarts :title="title_bing" :series="class_bing" :legend="legend1"/>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
              <hmi-echarts :title="title_ding" :series="class_ding" :legend="legend1"/>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
              <hmi-echarts :title="title_total" :series="class_total" :legend="legend1"/>
              </div>
            </el-col>
          </el-row>
      </div>

      <el-table :data="record" style="width: 100%; height: 400px" stripe border 
      :row-style="{height:'40px'}"  :header-row-style="{height:'40px'}"  :cell-style="{padding:'2px'}">
        <el-table-column
          prop="number"
          label="序号"
          align="center">
        </el-table-column>
        <el-table-column
          prop="ID"
          label="板坯号"
          align="center">
        </el-table-column>
        <el-table-column
          prop="TEMP"
          label="板坯温度"
          align="center">
        </el-table-column>
        <el-table-column
          prop="time"
          label="记录时间"
          align="center"
          width="800px">
        </el-table-column>
        <el-table-column
          prop="class"
          label="班次"
          align="center">
        </el-table-column>
        <el-table-column
          prop="group"
          label="班别"
          align="center">
        </el-table-column>
      </el-table>


  </div>
</template>

<script>
import { time } from 'echarts'
import HmiEcharts from '../../components/HmiEcharts.vue'
export default {
  components: {
    HmiEcharts
  },
  data() {
    HmiEcharts
    return {
      formInline: {
        class: '',
        group: ''
      },
      title_jia: {
        text: '甲班',
        left: 'center'
      },
      title_yi: {
        text: '乙班',
        left: 'center'
      },
      title_bing: {
        text: '丙班',
        left: 'center'
      },
      title_ding: {
        text: '丁班',
        left: 'center'
      },
      title_total: {
        text: '总计',
        left: 'center'
      },

      legend1: {
        show: false
      },
      class_jia: [
        {
          type: 'pie',
          radius: ['0%', '70%'],
          avoidLabelOverlap: false,
          label: {
            position: 'inner',
            formatter: '{b}' + '\n' + '{d}%' + '\n' + '({c})',
            fontSize: 16
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '24',
              formatter: '{b}' + '\n' + '{d}%' + '\n' + '({c})',
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)' //鼠标悬停后的阴影
            }
          },

          labelLine: {
            show: false
          },
          data: []
        }
      ],
      class_yi: [
        {
          type: 'pie',
          radius: ['0%', '70%'],
          avoidLabelOverlap: false,
          label: {
            position: 'inner',
            formatter: '{b}' + '\n' + '{d}%' + '\n' + '({c})',
            fontSize: 16
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '24',
              formatter: '{b}' + '\n' + '{d}%' + '\n' + '({c})',
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)' //鼠标悬停后的阴影
            }
          },

          labelLine: {
            show: false
          },
          data: []
        }
      ],
      class_bing: [
        {
          type: 'pie',
          radius: ['0%', '70%'],
          avoidLabelOverlap: false,
          label: {
            position: 'inner',
            formatter: '{b}' + '\n' + '{d}%' + '\n' + '({c})',
            fontSize: 16
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '24',
              formatter: '{b}' + '\n' + '{d}%' + '\n' + '({c})',
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)' //鼠标悬停后的阴影
            }
          },

          labelLine: {
            show: false
          },
          data: [
            {
              value: 126,
              name: '热装'
            },
            {
              value: 15,
              name: '冷装'
            }
          ]
        }
      ],
      class_ding: [
        {
          type: 'pie',
          radius: ['0%', '70%'],
          avoidLabelOverlap: false,
          label: {
            position: 'inner',
            formatter: '{b}' + '\n' + '{d}%' + '\n' + '({c})',
            fontSize: 16
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '24',
              formatter: '{b}' + '\n' + '{d}%' + '\n' + '({c})',
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)' //鼠标悬停后的阴影
            }
          },

          labelLine: {
            show: false
          },
          data: [
            {
              value: 35,
              name: '热装'
            },
            {
              value: 30,
              name: '冷装'
            }
          ]
        }
      ],
      class_total: [
        {
          type: 'pie',
          radius: ['0%', '70%'],
          avoidLabelOverlap: false,
          label: {
            position: 'inner',
            formatter: '{b}' + '\n' + '{d}%' + '\n' + '({c})',
            fontSize: 16
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '24',
              formatter: '{b}' + '\n' + '{d}%' + '\n' + '({c})',
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)' //鼠标悬停后的阴影
            }
          },

          labelLine: {
            show: false
          },
          data: [
            {
              value: 161,
              name: '热装'
            },
            {
              value: 75,
              name: '冷装'
            }
          ]
        }
      ],
      record: [
        {
          number: '',
          ID: '',
          TEMP: '',
          time: '',
          class: '',
          group: ''
        },
        {
          number: '',
          ID: '',
          TEMP: '',
          time: '',
          class: '',
          group: ''
        },
        {
          number: '',
          ID: '',
          TEMP: '',
          time: '',
          class: '',
          group: ''
        }
      ]
    }
  }
}
</script>

<style>
.el-date-editor .el-range-separator {
  line-height: 18px;
}
</style>
