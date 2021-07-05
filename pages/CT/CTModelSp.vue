<!--
 * @Author: Zhang ShiWei
 * @Date: 2021-04-16 13:58:25
 * @LastEditTime: 2021-05-26 16:55:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\CT\CTModelSp.vue
 * @FileName: 模型设定
-->
<template>
  <div class="xw_main">
    <el-row :gutter="7" style="min-width: 1405px;">
      <el-col :span="23">
        <div class="xw_formAllName">成品信息</div>
        <el-row :gutter="7">
          <el-col :span="4">
            <el-form ref="form" label-position="right" label-width="100px">
              <el-form-item label="厚度(mm)">
                <el-input disabled/>
              </el-form-item>
              <el-form-item label="宽度(mm)">
                <el-input disabled/>
              </el-form-item>
              <el-form-item label="终轧温度(℃)">
                <el-input disabled/>
              </el-form-item>
              <el-form-item label="层冷温度(℃)">
                <el-input disabled/>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="5">
            <el-form ref="form" label-position="right" label-width="110px">
              <el-form-item label="一加速(mps)">
                <el-input disabled/>
              </el-form-item>
              <el-form-item label="宽度(mps)">
                <el-input disabled/>
              </el-form-item>
              <el-form-item label="最大速度(mps)">
                <el-input disabled/>
              </el-form-item>
              <el-form-item label="出口速度(mps)">
                <el-input disabled/>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="5">
            <el-form ref="form" label-position="right" label-width="120px">
              <el-form-item label="头部不冷长度(m)">
                <el-input disabled style="width: 45%;"/>
                <el-input style="width: 45%;"/>
              </el-form-item>
              <el-form-item label="尾部不冷长度(m)">
                <el-input disabled style="width: 45%;"/>
                <el-input style="width: 45%;"/>
              </el-form-item>
              <el-form-item label="阀门开启位置(m)">
                <el-input disabled style="width: 45%;"/>
                <el-input style="width: 45%;"/>
              </el-form-item>
              <el-form-item label="目标温度修正(℃)">
                <el-input disabled style="width: 45%;"/>
                <el-input style="width: 45%;"/>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="5">
            <el-form ref="form" label-position="right" label-width="100px">
              <el-form-item label="层冷温度(℃)">
                <el-input disabled style="width: 45%;"/>
                <el-input style="width: 50%;"/>
              </el-form-item>
              <el-form-item label="冷却方向">
                <el-input disabled style="width: 45%;"/>
                <el-select v-model="value" style="width: 50%;">
                  <el-option label="test" value="a"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="稀疏模式">
                <el-input disabled style="width: 45%;"/>
                <el-select v-model="value" style="width: 50%;">
                  <el-option label="test" value="a"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="头尾处理">
                <el-input disabled style="width: 45%;"/>
                <el-select v-model="value" style="width: 50%;">
                  <el-option label="test" value="a"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="5">
            <el-form ref="form" label-position="right" label-width="120px">
              <el-form-item label="头部微冷长度(m)">
                <el-input disabled style="width: 45%;"/>
                <el-input style="width: 45%;"/>
              </el-form-item>
              <el-form-item label="头部微冷温度(℃)">
                <el-input disabled style="width: 45%;"/>
                <el-input style="width: 45%;"/>
              </el-form-item>
              <el-form-item label="尾部微冷长度(m)">
                <el-input disabled style="width: 45%;"/>
                <el-input style="width: 45%;"/>
              </el-form-item>
              <el-form-item label="尾部微冷温度(℃)">
                <el-input disabled style="width: 45%;"/>
                <el-input style="width: 45%;"/>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="1" style="padding-top: 37px;">
        <div>
          <el-button type="primary" size="mini">计算</el-button>
        </div>
        <div>
          <el-button type="primary" size="mini">保存</el-button>
        </div>
        <div>
          <el-button type="danger" size="mini">重置</el-button>
        </div>
      </el-col>
    </el-row>
    <el-divider/>
    <el-row>
      <div class="xw_titleName">当前轧制信息</div>
      <el-col :span="24">
        <div class="solid bg-gray xw_marginTB CTanimate">
          <!-- 精轧出口温度, 快冷开阀数 -->
          <div class="FMOutTemp">
            <p>精轧出口温度 <span class="color-blue">848℃</span></p>
            <p>快冷开阀数 <span class="color-blue">上0下0</span></p>
          </div>
          <!-- 快冷出口温度, 微调开阀数 -->
          <div class="coolOutTemp">
            <p>快冷出口温度 <span class="color-blue">848℃</span></p>
            <p>微调开阀数 <span class="color-blue">上0下0</span></p>
          </div>
          <!-- 精调开阀数 -->
          <div class="valveNum">
            <p>精调开阀数 <span class="color-blue">上0下0</span></p>
          </div>
          <!-- 层冷出口温度 -->
          <div class="CTOutTemp">
            <p>层冷出口温度 <span class="color-blue">上0下0</span></p>
          </div>
          <!-- 阀门状态 -->
          <div class="valveState">
            <span class="margin-right-8">阀门状态</span>
            <span class="margin-right-8">阀门状态</span>
            <span class="margin-right-8">阀门状态</span>
          </div>
          <!-- 钢卷号信息 -->
          <div class="CTRollInfo">
            钢卷号 <span class="color-blue margin-right-15">1551460320010</span> 板坯号 <span class="color-blue margin-right-15">1551460320010</span> 材质 <span class="color-blue">345</span>
          </div>
          <!-- 1组阀门 -->
          <div class="valve1">
            <div class="margin-bottom-8">
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
            <div>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
          </div>
          <!-- 2组阀门 -->
          <div class="valve2">
            <div class="margin-bottom-8">
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
            <div>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
          </div>
          <!-- 3组阀门 -->
          <div class="valve3">
            <div class="margin-bottom-8">
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
            <div>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
          </div>
          <!-- 4组阀门 -->
          <div class="valve4">
            <div class="margin-bottom-8">
              <i class="el-icon-help color-red"></i>
              <i class="el-icon-help color-red"></i>
              <i class="el-icon-help color-red"></i>
              <i class="el-icon-help color-red"></i>
            </div>
            <div>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
          </div>
          <!-- 5组阀门 -->
          <div class="valve5">
            <div class="margin-bottom-8">
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
            <div>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
          </div>
          <!-- 6组阀门 -->
          <div class="valve6">
            <div class="margin-bottom-8">
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
            <div>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
          </div>
          <!-- 7组阀门 -->
          <div class="valve7">
            <div class="margin-bottom-8">
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
            <div>
              <i class="el-icon-help color-green"></i>
              <i class="el-icon-help color-green"></i>
              <i class="el-icon-help color-green"></i>
              <i class="el-icon-help color-green"></i>
            </div>
          </div>
          <!-- 8组阀门 -->
          <div class="valve8">
            <div class="margin-bottom-8">
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
            <div>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
              <i class="el-icon-help color-blue"></i>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="7">
      <el-col :span="12">
        <HmiEcharts
          :title="leftEcharts.title"
          :series="leftEcharts.series"
          :tooltip="ecahrtsOption.tooltip"
          :legend="ecahrtsOption.legend"
          :grid="ecahrtsOption.grid"
          :x-axis="ecahrtsOption.xAxis"
          :y-axis="ecahrtsOption.yAxis"
          :_height="'350px'"/>
      </el-col>
      <el-col :span="12">
        <HmiEcharts
          :title="rightEcharts.title"
          :series="rightEcharts.series"
          :tooltip="ecahrtsOption.tooltip"
          :legend="ecahrtsOption.legend"
          :grid="ecahrtsOption.grid"
          :x-axis="ecahrtsOption.xAxis"
          :y-axis="ecahrtsOption.yAxis"
          :_height="'350px'"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CTModelSp',
  data() {
    return {
      ecahrtsOption: {
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
            bottom: 15,
            containLabel: true
          }
        ],
        legend: {
          top: 30
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
      leftEcharts: {
        title: {
          text: '轧机出口/卷取速度实时曲线',
          top: 10
        },
        series: [
          {
            name: '轧机出口速度',
            type: 'line',
            symbol: 'none',
            data: []
          },
          {
            name: '卷取速度',
            type: 'line',
            symbol: 'none',
            data: []
          }
        ]
      },
      rightEcharts: {
        title: {
          text: '终轧/卷取温度实时曲线',
          top: 10
        },
        series: [
          {
            name: '终轧温度',
            type: 'line',
            symbol: 'none',
            data: []
          },
          {
            name: '卷取温度',
            type: 'line',
            symbol: 'none',
            data: []
          }
        ]
      },
      coilId: '', //钢卷号输入
      dataInfo: {
        grade: 'aaa'
      }, //form绑定基本信息
      value: ''
    }
  },
  watch: {},
  created() {},
  mounted() {
    let vm = this
    this.leftEcharts.series.map(function(itemC, indexC) {
      itemC.data = vm.makeLine(indexC)
    })
    this.rightEcharts.series.map(function(itemC, indexC) {
      itemC.data = vm.makeLine(indexC)
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
.CTanimate {
  background-image: url(./assets/img/CT.png);
  background-repeat: no-repeat;
  background-size: 90%;
  background-origin: content-box;
  background-position-x: 40%;
  background-position-y: 80%;
  width: 100%;
  height: 329px;
  font-size: 14px;
  font-weight: 400;
  font-family: PingFang SC, Ping;
  position: relative;
  .CTRollInfo {
    position: absolute;
    width: 100%;
    bottom: 10%;
    text-align: center;
  }
  .valveState {
    position: absolute;
    text-align: center;
    width: 100%;
    bottom: 20%;
    span::before {
      width: 10px;
      height: 10px;
      background: #97bb4a;
      content: '';
      display: inline-block;
      margin-right: 8px;
    }
    span:first-child::before {
      background: #2f7aeb;
    }
    span:last-child::before {
      background: #e54845;
    }
  }
  .FMOutTemp {
    position: absolute;
    top: 10%;
    left: 16%;
    text-align: right;
  }
  .coolOutTemp {
    position: absolute;
    top: 10%;
    left: 28%;
    text-align: right;
  }
  .valveNum {
    position: absolute;
    top: 10%;
    right: 38%;
    text-align: right;
  }
  .CTOutTemp {
    position: absolute;
    top: 10%;
    right: 25%;
    text-align: right;
  }
  .valve1 {
    position: absolute;
    top: 44%;
    left: 18%;
  }
  .valve2 {
    position: absolute;
    top: 44%;
    left: 24%;
  }
  .valve3 {
    position: absolute;
    top: 44%;
    left: 30%;
  }
  .valve4 {
    position: absolute;
    top: 44%;
    left: 35%;
  }
  .valve5 {
    position: absolute;
    top: 44%;
    left: 40%;
  }
  .valve6 {
    position: absolute;
    top: 44%;
    left: 45%;
  }
  .valve7 {
    position: absolute;
    top: 44%;
    left: 55%;
  }
  .valve8 {
    position: absolute;
    top: 44%;
    left: 60%;
  }
}
</style>
