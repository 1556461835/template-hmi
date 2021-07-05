<!--
 * @Author: your name
 * @Date: 2021-06-18 16:27:35
 * @LastEditTime: 2021-06-19 16:28:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTLCode\pages\demo\test5.vue
-->
<template>
  <div class="f1">
    <div class="f1">
        <div class="f1">
            <el-row :gutter="20" type="flex" justify="space-between">
                    <el-col :span="12">
                        <el-form ref="form" :model="form" label-width="60px">
                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <el-form-item label="产线">
                                        <el-input v-model="form.line"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="辊号">
                                        <el-input v-model="form.id"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </el-col>
                    <!-- <el-col :span="6"><div></div></el-col> -->
                    <el-col :span="6">
                        <!-- <el-form-item> -->
                            <el-button type="info" size="mini">查询</el-button>
                        <!-- </el-form-item> -->
                        <!-- <el-form-item> -->
                            <el-button type="info" size="mini">重置</el-button>
                        <!-- </el-form-item> -->
                    </el-col>
            </el-row>
        </div>

        <el-table :data="tableData1" border style="width: 100%">
            <el-table-column
                prop="line"
                label="产线">
            </el-table-column>
            <el-table-column
                prop="id"
                label="辊号">
            </el-table-column>
            <el-table-column
                prop="type"
                label="轧辊类型">
            </el-table-column>
            <el-table-column
                prop="range"
                label="机架范围">
            </el-table-column>
            <el-table-column
                prop="time"
                label="工作辊补油周期跟踪次数">
            </el-table-column>
            <el-table-column
                prop="operation"
                label="操作">
                <template slot-scope="scope">
                    <el-button type="info" size="mini" @click="handleGet(scope.row)">补油</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            layout="->,prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>

    <div class="f1">
        <div class="f1">
            <el-table :data="tableData2" border style="width: 100%">
                <el-table-column
                    prop="id"
                    label="辊号">
                </el-table-column>
                <el-table-column
                    prop="range"
                    label="机架范围">
                </el-table-column>
                <el-table-column
                    prop="time"
                    label="补油时间">
                </el-table-column>
                <el-table-column
                    prop="class"
                    label="班组">
                </el-table-column>
                <el-table-column
                    prop="operater"
                    label="操作人">
                </el-table-column>
            </el-table>

            <el-pagination
                layout="->,prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>

    
  <el-dialog title="轴承座补油" :visible.sync="dialogFormVisible" width="30%">
    <el-form :model="form2" label-width="80px" style="width: 300px">
        <el-form-item label="补油时间" >
            <el-date-picker v-model="form2.value1" type="date"></el-date-picker>
        </el-form-item>
        <el-form-item label="班组" >
            <el-select v-model="form2.value2" >
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="操作人">
            <el-input v-model="form2.value3"></el-input>
        </el-form-item>

        <div>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
        </div>

    </el-form>
 </el-dialog>
  </div>



</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        line: '',
        id: ''
      },
      tableData1: [
        {
          line: '',
          id: '',
          type: '',
          range: '',
          time: '',
          operation: ''
        }
      ],
      tableData2: [
        {
          id: '1',
          range: '',
          time: '',
          class: '',
          operater: ''
        }
      ],

      options: [
        {
          value: '选项一',
          label: '甲班'
        },
        {
          value: '选项二',
          label: '乙班'
        }
      ],
      form2: {}
    }
  },
  methods: {
    handleGet(row) {
      console.log(row)
      this.dialogFormVisible = true
    }
  }
}
</script>

<style>
.f1 {
  border: 1px solid #000;
  border-radius: 6px;
  padding: 8px;
  margin: 10px;
}
</style>
