<!--
 * @Author: your name
 * @Date: 2021-06-23 14:56:13
 * @LastEditTime: 2021-06-24 15:40:33
 * @LastEditors: Please set LastEditors
 * @Description: 1#炉
 * @FilePath: \hmid:\work_project\HTLCode\pages\demo\teat1lu.vue
-->
<template>
  <div class="layout-main padding16">
      <div class="margin-bottom-16">
        <div class="stove1-value bg-white">
          <div class="stove1-value-long">入炉辊道</div>
          <div>1段</div>
          <div>2段</div>
          <div>3段</div>
          <div>4段</div>
          <div>5段</div>
          <div>6段</div>
          <div>7段</div>
          <div>8段</div>
          <div>9段</div>
          <div>10段</div>
          <div class="stove1-value-long">出炉辊道</div>
        </div>
        <div class="stove1-value bg-green">
          <div class="stove1-value-long">Up实测值</div>
          <div>917</div>
          <div>910</div>
          <div>907</div>
          <div>908</div>
          <div>912</div>
          <div>913</div>
          <div>912</div>
          <div>912</div>
          <div>909</div>
          <div>909</div>
          <div class="stove1-value-long">Up实测值</div>
        </div>
        <div class="stove1-value bg-gray">
          <div class="stove1-value-long">Up设定值</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div class="stove1-value-long">Up设定值</div>
        </div>

        <!-- 板坯 -->
        <div class="stove1-rollInfo">
            <div class="stove1-rollInfo-block bg-green">
                <div>2030906</div>
                <div>7110302</div>
            </div>
            <div class="stove1-rollInfo-block bg-red">
                <div>2030906</div>
                <div>7110302</div>
            </div>
            <div class="stove1-rollInfo-block bg-red">
                <div>2030906</div>
                <div>7110302</div>
            </div>
        </div>

        <div class="stove1-value bg-green">
          <div class="stove1-value-long">Dn实测值</div>
          <div>917</div>
          <div>918</div>
          <div>909</div>
          <div>905</div>
          <div>910</div>
          <div>911</div>
          <div>911</div>
          <div>903</div>
          <div>911</div>
          <div>909</div>
          <div class="stove1-value-long">Dn实测值</div>
        </div>
        <div class="stove1-value bg-gray">
          <div class="stove1-value-long">Dn设定值</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div>910</div>
          <div class="stove1-value-long">Dn设定值</div>
        </div>
      </div>

      <!-- 炉前识别图像+热处理计划 -->
      <div class="flex margin-bottom-16">
          <div class="frame">
              <el-image
                style="width: 500px; height: 418px"
                :src="url"
                fit="fill">
              </el-image>
              <div class="frame-title">热处理图像</div>
          </div>
          <div class="flex justify-between" style="flex: 1;margin-left: 10px">
            <!-- 热处理计划 -->
              <div class="frame" style="width: 75%">
                <div class="frame-title">热处理计划</div>
                  <div class="flex margin-bottom-4">
                      <!-- 识别信息 -->
                      <div class="shibieInfo">
                        <div class="margin-bottom-16">
                          <p class="color-green block-title">识别信息</p>
                          <div class="text-xs info-form textAlign-between">
                              <label class="info-form-label textAlign-between-title">时间</label>：
                              <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                              <button type="button">手动确认</button>
                          </div>
                          <div class="text-xs info-form textAlign-between">
                              <label class="info-form-label textAlign-between-title">识别号</label>：
                              <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                              <button type="button">确认切换</button>
                          </div>
                          <div class="text-xs info-form textAlign-between">
                              <label class="info-form-label textAlign-between-title">钢板号</label>：
                              <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                          </div>
                          <div class="text-xs info-form textAlign-between">
                              <label class="info-form-label textAlign-between-title">录入号</label>：
                              <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                              <button type="button">下次确认</button>
                          </div>
                        </div>
                        <div>
                          <div class="text-xs info-form">
                              <label class="info-form-label">钢卷号</label>：
                              <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                              <button type="button">返库</button>
                          </div>
                          <div class="text-xs info-form">
                              <el-checkbox v-model="checked">空炉炉温设定</el-checkbox>
                              <div class="info-form-input" style="width:90px"><el-input v-model="value1" type="text" disabled></el-input></div>
                              ℃
                              <button type="button">确定</button>
                          </div>
                        </div>
                      </div>
                      <!-- 工艺参数 -->
                      <div class="gongyi-params">
                        <p class="block-title color-green">工艺参数</p>
                        <el-form label-width="120px" :model="formLabelAlign">
                          <el-row :gutter="10">
                            <el-col :span="12">
                                <el-form-item label="钢卷号">
                                  <el-input v-model="formLabelAlign.type"></el-input>
                                </el-form-item>
                                <el-form-item label="厚度(mm)">
                                  <el-input v-model="formLabelAlign.type" type="number"></el-input>
                                </el-form-item>
                                <el-form-item label="宽度(mm)">
                                  <el-input v-model="formLabelAlign.type" type="number"></el-input>
                                </el-form-item>
                                <el-form-item label="长度(mm)">
                                  <el-input v-model="formLabelAlign.type" type="number"></el-input>
                                </el-form-item>
                                <el-form-item label="工艺模式">
                                  <el-input v-model="formLabelAlign.type"></el-input>
                                </el-form-item>
                                <el-form-item label="保留时间(min)">
                                  <el-input v-model="formLabelAlign.type" type="number"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="钢种">
                                  <el-input v-model="formLabelAlign.type"></el-input>
                                </el-form-item>
                                <el-form-item label="侧厚值(mm)">
                                  <el-input v-model="formLabelAlign.type"></el-input>
                                </el-form-item>
                                <el-form-item label="测宽值(mm)">
                                  <el-input v-model="formLabelAlign.type"></el-input>
                                </el-form-item>
                                <el-form-item label="测长值(mm)">
                                  <el-input v-model="formLabelAlign.type"></el-input>
                                </el-form-item>
                                <el-form-item label="加热温度(℃)">
                                  <el-input v-model="formLabelAlign.type"></el-input>
                                </el-form-item>
                                <el-form-item label="加热速率(min/mm)" label-width="136px">
                                  <el-input v-model="formLabelAlign.type"></el-input>
                                </el-form-item>
                            </el-col>
                          </el-row>
                        </el-form>
                        <div style="text-align:center;"><el-button size="mini" type="info">确认修改</el-button></div>
                      </div>
                  </div>
                  <div>
                    <el-table :data="tableData" border height="160px">
                      <el-table-column label="钢板号" align="center" prop="name"></el-table-column>
                      <el-table-column label="钢种" align="center" prop="name"></el-table-column>
                      <el-table-column label="厚度" align="center" prop="name"></el-table-column>
                      <el-table-column label="宽度" align="center" prop="name"></el-table-column>
                      <el-table-column label="长度" align="center" prop="name"></el-table-column>
                      <el-table-column label="重量" align="center" prop="name"></el-table-column>
                      <el-table-column label="模式" align="center" prop="name"></el-table-column>
                      <el-table-column label="状态" align="center" prop="name"></el-table-column>
                    </el-table>
                  </div>
              </div>
              <div>
                <!-- 换工艺提醒 -->
                <div class="block-solid margin-bottom-16">
                  <p class="block-title color-green">换工艺提醒</p>
                  <div class="text-xs info-form">
                      <label class="info-form-label" style="width: 84px;text-align: right">钢种</label>：
                      <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                       <el-checkbox v-model="checked"></el-checkbox>
                  </div>
                  <div class="text-xs info-form">
                      <label class="info-form-label" style="width: 84px;text-align: right">工艺</label>：
                      <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                       <el-checkbox v-model="checked"></el-checkbox>
                  </div>
                  <div class="text-xs info-form">
                      <label class="info-form-label" style="width: 84px;text-align: right">厚度(mm)</label>：
                      <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                       <el-checkbox v-model="checked"></el-checkbox>
                  </div>
                  <div class="text-xs info-form">
                      <label class="info-form-label" style="width: 84px;text-align: right">温度(℃)</label>：
                      <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                       <el-checkbox v-model="checked"></el-checkbox>
                  </div>
                  <div class="text-xs info-form">
                      <label class="info-form-label" style="width: 84px;text-align: right">保温(min)</label>：
                      <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                       <el-checkbox v-model="checked"></el-checkbox>
                  </div>
                  <div class="text-xs info-form">
                      <label class="info-form-label" style="width: 84px;text-align: right">速率(min/mm)</label>：
                      <div class="info-form-input"><el-input v-model="value1" type="text"></el-input></div>
                       <el-checkbox v-model="checked"></el-checkbox>
                  </div>
                </div>
                <!-- 班组统计 -->
                <div class="block-solid ">
                  <p class="block-title color-green">班组统计</p>
                  <el-form :model="formLabelAlign" label-width="100px" label-position="right">
                    <el-form-item label="装炉数量(块):" style="margin-bottom: 4px">
                      <el-input v-model="formLabelAlign.type" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="装炉重量(t):" style="margin-bottom: 4px">
                      <el-input v-model="formLabelAlign.type" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="出炉数量(块):" style="margin-bottom: 4px">
                      <el-input v-model="formLabelAlign.type" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="出炉重量(t):" style="margin-bottom: 4px">
                      <el-input v-model="formLabelAlign.type" type="number"></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
          </div>
      </div>

      <el-row :gutter="10" style="margin: 0;">
          <el-col :span="16">
            <div class="frame">
              <div class="frame-title">炉内钢板数据</div>
              <el-table height="300px">
                <el-table-column label="序号" width="50px" align="center"></el-table-column>
                <el-table-column label="钢板号" align="center"></el-table-column>
                <el-table-column label="钢种" align="center"></el-table-column>
                <el-table-column label="工艺" width="50px" align="center"></el-table-column>
                <el-table-column label="厚度" align="center"></el-table-column>
                <el-table-column label="宽度" align="center"></el-table-column>
                <el-table-column label="长度" align="center"></el-table-column>
                <el-table-column label="保温时间" align="center" width="60px"></el-table-column>
                <el-table-column label="加热速率" align="center" width="60px"></el-table-column>
                <el-table-column label="头部表温" align="center" width="60px"></el-table-column>
                <el-table-column label="中部表温" align="center" width="60px"></el-table-column>
                <el-table-column label="尾部表温" align="center" width="60px"></el-table-column>
                <el-table-column label="头部芯温" align="center" width="60px"></el-table-column>
                <el-table-column label="中部芯温" align="center" width="60px"></el-table-column>
                <el-table-column label="尾部芯温" align="center" width="60px"></el-table-column>
                <el-table-column label="在炉时间" align="center" width="60px"></el-table-column>
                <el-table-column label="已保温" align="center" width="60px"></el-table-column>
                <el-table-column label="剩余时间" align="center" width="60px"></el-table-column>
              </el-table>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="frame">
              <div class="frame-title">钢板温度曲线</div>
              <hmi-echarts :series="temp.series" :yAxis="temp.yAxis" :xAxis="temp.xAxis" _height="300px" _width="100%"/>
            </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import HmiEcharts from '@/components/HmiEcharts'
export default {
  components: {
    HmiEcharts
  },
  data() {
    return {
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      value1: '',
      checked: '',
      formLabelAlign: {},
      tableData: [
        { name: '张三' },
        { name: '张三' },
        { name: '张三' },
        { name: '张三' },
        { name: '张三' }
      ],
      temp: {
        yAxis: [
          {
            type: 'value'
          }
        ],
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.stove1-value {
  width: 100%;
  display: flex;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  div {
    width: 7%;
    text-align: center;
    border-left: 1px solid #dcdcdb;
    border-right: 1px solid #dcdcdb;
  }
  .stove1-value-long {
    width: 14%;
  }
}
.stove1-rollInfo {
  height: 100px;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: space-around;
  .stove1-rollInfo-block {
    padding: 6px 20px;
  }
}
.shibieInfo {
  width: 40%;
}
.info-form {
  width: 100%;
  margin-bottom: 5px;
  .info-form-label {
    display: inline-block;
    height: 24px;
    line-height: 24px;
  }
  .info-form-input {
    display: inline-block;
  }
}
.gongyi-params {
  width: 60%;
  border: 1px solid #aab2b4;
  box-sizing: border-box;
  padding: 10px;
}

// 块标题
.block-title {
  height: 30px;
  text-align: center;
}

.block-solid {
  border: 1px solid #aab2b4;
  box-sizing: border-box;
  padding: 10px 5px;
}

@media screen and (max-width: 1900px) {
  .info-form-input {
    width: 121px;
  }
}
@media screen and (min-width: 1900px) {
  .info-form-input {
    min-width: 90px;
  }
}
</style>
