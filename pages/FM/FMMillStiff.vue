<!--
 * @Author: Zhang ShiWei
 * @Date: 2021-04-15 13:58:25
 * @LastEditTime: 2021-06-17 09:59:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\FM\FMMillStiff.vue
 * @FileName: 轧机刚度
-->
<template>
  <div class="xw_main">
    <el-tabs v-model="tabAct" type="border-card">
      <el-tab-pane v-for="(item, index) in tabData" :key="'tabAct'+index" :label="item" :name="item"/>
    </el-tabs>
    <el-row class="xw_marginTB">
      <el-col :span="20">
        <el-form ref="form" :inline="true" label-position="right">
          <el-form-item label="压下间距(mm)" label-width="110px">
            <el-input v-model="RECStretchParam.LenStrews" style="width: 100px;" disabled />
          </el-form-item>
          <el-form-item label="轧制力下限(ton)" label-width="120px">
            <el-input v-model="RECStretchParam.MinForce" style="width: 100px;" disabled />
          </el-form-item>
          <el-form-item label="轧辊直径(mm) 工作辊" label-width="150px">
            <el-input v-model="RECStretchParam.WRDia" style="width: 100px;" disabled />
          </el-form-item>
          <el-form-item label="辊颈直径(mm) 工作辊" label-width="150px">
            <el-input v-model="RECStretchParam.WRNeck" style="width: 100px;" disabled />
          </el-form-item>
          <el-form-item label="辊身长度(mm) 工作辊" label-width="150px">
            <el-input v-model="RECStretchParam.WRLen" style="width: 100px;" disabled />
          </el-form-item>
        </el-form>
        <el-form ref="form" :inline="true" label-position="right">
          <el-form-item label="弯辊间距(mm)" label-width="110px">
            <el-input v-model="RECStretchParam.LenBendForce" style="width: 100px;" disabled />
          </el-form-item>
          <el-form-item label="轧制力上限(ton)" label-width="120px">
            <el-input v-model="RECStretchParam.MaxForce" style="width: 100px;" disabled />
          </el-form-item>
          <el-form-item label="支撑辊" label-width="150px">
            <el-input v-model="RECStretchParam.BRDia" style="width: 100px;" disabled />
          </el-form-item>
          <el-form-item label="支撑辊" label-width="150px">
            <el-input v-model="RECStretchParam.BRNeck" style="width: 100px;" disabled />
          </el-form-item>
          <el-form-item label="支撑辊" label-width="150px">
            <el-input v-model="RECStretchParam.BRLen" style="width: 100px;" disabled />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4">
        <el-form>
          <el-form-item>
            <el-button type="primary" size="mini">确定</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" size="mini">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-divider/>
    <el-row :gutter="7">
      <el-col v-for="(item, index) in ecahrtsOption.unlikeOp" :key="'op'+index" :span="12">
        <HmiEcharts
          :title="item.title"
          :series="item.series"
          :tooltip="ecahrtsOption.sameOp.tooltip"
          :legend="ecahrtsOption.sameOp.legend"
          :grid="ecahrtsOption.sameOp.grid"
          :x-axis="ecahrtsOption.sameOp.xAxis"
          :y-axis="ecahrtsOption.sameOp.yAxis"
          :_height="'300px'"/>
      </el-col>
      <el-col :span="24" class="xw_marginTB">
        <div class="xw_formAllName">刚度测试结果</div>
        <el-form :inline="true" label-width="160px">
          <el-form-item label="刚度(OS，ton/mm)">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
          <el-form-item label="刚度(OS，ton/mm)">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
          <el-form-item label="刚度(OS，ton/mm)">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="24" class="xw_marginTB">
        <div class="xw_formAllName">AGC刚度分段系数</div>
        <el-form :inline="true" label-width="180px">
          <el-form-item label="段1(0~500)(ton/mm)">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
          <el-form-item label="段2(500~1000)(ton/mm)">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
          <el-form-item label="段3(1000~1500)(ton/mm)" label-width="190px">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
          <el-form-item label="段4(1500~)(ton/mm)">
            <el-input style="width: 100px;" disabled/>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-divider/>
    <el-row class="xw_marginTB">
      <el-col :span="24" class="xw_textAlignCenter">
        <el-button type="primary" size="mini">刚度测试</el-button>
        <el-button type="primary" size="mini">数据处理</el-button>
        <el-button type="danger" size="mini">曲线恢复</el-button>
        <el-button type="info" size="mini">结果保存</el-button>
      </el-col>
    </el-row>
    <el-row class="xw_marginTB">
      <el-col :span="24" class="xw_marginTB">
        <div class="xw_formAllName">刚度测试操作要点</div>
        <el-form>
          <el-form-item label="1.刚度测试在现场具备条件后选择按钮进行测试。"/>
          <el-form-item label="2.测试参数要和刚度测试时的轧辊参数保持一致。"/>
          <el-form-item label="3.数据处理功能用于计算刚度的系数和弹跳曲线。"/>
          <el-form-item label="4.刚度测试结果确认后，再将处理数据进行保存。"/>
          <el-form-item label="5.曲线恢复功能用于刚度数据被破坏后进行恢复。"/>
          <el-form-item label="6.刚度测试需要重复做两次，两次结果相差小于25ton/mm，测试成功。"/>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'FMMillStiff',
  data() {
    return {
      tabData: ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7'],
      tabAct: 'F1',
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
              top: 50,
              bottom: 15,
              containLabel: true
            }
          ],
          legend: {
            top: '20'
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
              text: '弹跳曲线(单侧)',
              top: 0
            },
            series: [
              {
                name: 'DS',
                type: 'line',
                symbol: 'none',
                data: []
              },
              {
                name: 'OS',
                type: 'line',
                symbol: 'none',
                data: []
              }
            ]
          },
          {
            title: {
              text: '弹跳曲线(双侧)',
              top: 0
            },
            series: [
              {
                type: 'line',
                symbol: 'none',
                data: []
              }
            ]
          }
        ]
      },
      RECStretchParam: {}
    }
  },
  watch: {
    tabAct: function(newVal, oldVal) {}
  },
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
