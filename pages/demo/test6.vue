<!--
 * @Author: your name
 * @Date: 2021-06-21 12:42:12
 * @LastEditTime: 2021-06-22 11:51:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTLCode\pages\demo\test6.vue
-->
<template>
    <div>
        <div class='f1' style="height: 120px">
            <el-row :gutter="10">
                <el-col :span="6"><div class="f1" style="height:30px; margin-left:5px; text-align: center">A13</div></el-col>
                <el-col :span="6"><div class="f1" style="height:30px; text-align: center">抛丸机</div></el-col>
                <el-col :span="6"><div class="f1" style="height:30px; text-align: center">A21</div></el-col>
                <el-col :span="6"><div class="f1" style="height:30px; margin-right:5px; text-align: center">A22</div></el-col>
            </el-row>
            <div style="height:77px; border: 1px solid black;" ></div>
        </div>

        <div style="margin-top:20px">
            <el-row :gutter="3">
                <el-col :span="6" class="col1">
                    <div style="border: 0.5px solid black; height: 400px">
                        <img src="../../assets/img/avatar.png" alt="识别图像" class="img1"/>
                    </div>
                </el-col>
                <el-col :span="18" class="col1">
                    <el-row :gutter="3">
                        <el-col :span="8">
                            <div class="f2">
                                <div style="text-align: center; color:green">识别信息</div>
                                <el-row gutter="2">
                                    <el-col :span="18">
                                        <el-form ref="form1" :model="form1" label-width="70px">
                                            <el-form-item label="时 间： ">
                                                <el-input v-model="form1.time"></el-input>
                                            </el-form-item>
                                            <el-form-item label="识别号： ">
                                                <el-input v-model="form1.OCRID"></el-input>
                                            </el-form-item>
                                            <el-form-item label="钢板号： ">
                                                <el-input v-model="form1.PlateID"></el-input>
                                            </el-form-item>
                                            <el-form-item label="录入号： ">
                                                <el-input v-model="form1.inputID"></el-input>
                                            </el-form-item>
                                        </el-form>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="f3"></div>
                                        <div class="f3"><el-button type="info" size="mini">复制</el-button></div>
                                        <div class="f3"><el-button type="info" size="mini">0</el-button></div>
                                        <div class="f3"><el-button type="info" size="mini">确定</el-button></div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="f2">
                                <div style="text-align: center; color:green">钢板修正</div>
                                <el-row gutter="2">
                                    <el-col :span="18">
                                        <el-form ref="form2" :model="form2" label-width="70px">
                                            <el-form-item label="钢板号： ">
                                                <el-input v-model="form2.PlateID"></el-input>
                                            </el-form-item>
                                            <el-form-item label="更改为： ">
                                                <el-input v-model="form2.change"></el-input>
                                            </el-form-item>
                                            <el-form-item label="垛位号： ">
                                                <el-input v-model="form2.position"></el-input>
                                            </el-form-item>
                                        </el-form>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="f3"><el-button type="info" size="mini">复制</el-button></div>
                                    </el-col>
                                <div style="height: 95px"></div>
                                </el-row>
                                <el-row gutter="2">
                                    <el-col :span="7" :offset="3"><el-button type="info" size="mini">返库</el-button></el-col>
                                    <el-col :span="7"><el-button type="info" size="mini">更改</el-button></el-col>
                                    <el-col :span="7"><el-button type="info" size="mini">下线</el-button></el-col>
                                </el-row>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="f2">
                                <div style="text-align: center; color:green">钢板修正</div>
                                    <el-form ref="form3" :model="form3" label-width="70px">
                                        <el-form-item label="数量： " style="width: 250px; margin-top: 10px; margin-bottom: 20px">
                                            <el-input v-model="form3.count"><template slot="append">块</template></el-input>
                                        </el-form-item>
                                        <el-form-item label="重量： " style="width: 250px; margin-top: 10px">
                                            <el-input v-model="form3.weight"><template slot="append">t</template></el-input>
                                        </el-form-item>
                                    </el-form>
                            </div>
                        </el-col>
                    </el-row>
                    <el-table :data="tableData1" stripe border style="width: 100%" height="250">
                        <el-table-column
                            prop="number"
                            label="序号"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="PlateID"
                            label="钢板号"
                            width="180"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="StandradID"
                            label="标准号"
                            width="180"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="code"
                            label="代码"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="THK"
                            label="厚度"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="width"
                            label="宽度"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="length"
                            label="长度"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="factory"
                            label="工厂"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="接收时间"
                            width="200"
                            align="center">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top:20px">
            <el-row :gutter="2">
                <el-col :span="5" class="col2">
                    <img src="../../assets/img/avatar.png"/>
                </el-col>
                <el-col :span="19" class="col2">
                    <el-table :data="tableData2" stripe border style="width: 100%" height="360">
                        <el-table-column
                            prop="number"
                            label="序号"
                            width="50">
                        </el-table-column>
                        <el-table-column
                            prop="PlateID"
                            label="钢板号"
                            width="160">
                        </el-table-column>
                        <el-table-column
                            prop="StandradID"
                            label="标准号"
                            width="160">
                        </el-table-column>
                        <el-table-column
                            prop="THK"
                            label="厚度"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            prop="width"
                            label="宽度"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            prop="length"
                            label="长度"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            prop="weight"
                            label="重量"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            prop="flowdirection"
                            label="流向"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            prop="stockposition"
                            label="库位"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            prop="code"
                            label="代码"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            prop="factory"
                            label="工厂"
                            width="50">
                        </el-table-column>
                        <el-table-column
                            prop="time"
                            label="上线时间">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </div>
    </div>

    
</template>

<script>
export default {
  data() {
    return {
      form1: {
        time: '',
        OCRID: '',
        PlateID: '',
        input: ''
      },
      form2: {
        PlateID: '',
        change: '',
        position: ''
      },
      form3: {
        count: '',
        weight: ''
      },
      tableData1: [
        {
          number: '1',
          PlateID: '',
          StandardID: '',
          code: '',
          THK: '',
          width: '',
          length: '',
          factory: '',
          time: ''
        },
        {
          number: '2',
          PlateID: '',
          StandardID: '',
          code: '',
          THK: '',
          width: '',
          length: '',
          factory: '',
          time: ''
        },
        {
          number: '3',
          PlateID: '',
          StandardID: '',
          code: '',
          THK: '',
          width: '',
          length: '',
          factory: '',
          time: ''
        },
        {
          number: '4',
          PlateID: '',
          StandardID: '',
          code: '',
          THK: '',
          width: '',
          length: '',
          factory: '',
          time: ''
        }
      ]
    }
  },
  methods: {}
}
</script>

<style>
.f1 {
  border: 1px solid black;
  margin-top: 10px;
}

.f2 {
  border: 0.5px solid black;
  height: 150px;
}

.f3 {
  height: 30px;
}

.col1 {
  height: 400px;
}

.col2 {
  height: 360px;
}

.img1 {
  object-fit: contain;
}
</style>
