<!--
 * @Author: your name
 * @Date: 2021-06-18 14:47:15
 * @LastEditTime: 2021-06-19 09:43:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTLCode\pages\demo\test4.vue
-->
<template>
  <div>
        <el-row :gutter="10">
            <el-col :span="12">
                <div class="f1">
                    <el-form ref="form" :model="form" label-width="60px">
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="辊号">
                                    <el-input v-model="form.id1"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item label="类型">
                                    <el-input v-model="form.type1"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item>
                                    <el-button type="info" size="mini">查询</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="供应商">
                                    <el-input v-model="form.supplier1"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item label="材质">
                                    <el-input v-model="form.material1"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item>
                                    <el-button type="info" size="mini">重置</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>

                <div class="f2">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column
                            prop="id"
                            label="辊号">
                        </el-table-column>
                        <el-table-column
                            prop="type"
                            label="类型">
                        </el-table-column>
                        <el-table-column
                            prop="supplier"
                            label="供货商">
                        </el-table-column>
                        <el-table-column
                            prop="material"
                            label="材质">
                        </el-table-column>
                        <el-table-column
                            prop="diam"
                            label="辊径">
                        </el-table-column>
                        <el-table-column
                            prop="operate"
                            label="操作">
                            <template slot-scope="scope">
                                <el-button type="info" size="mini" @click="handleClick(scope.row)">报废</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>

            <el-col :span="12">
                <div class="f1">
                    <el-form ref="form" :model="form" label-width="60px">
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="辊号">
                                    <el-input v-model="form.id2"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item label="类型">
                                    <el-input v-model="form.type2"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item>
                                    <el-button type="info" size="mini">查询</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="供应商">
                                    <el-input v-model="form.supplier2"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item label="材质">
                                    <el-input v-model="form.material2"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="8">
                                <el-form-item>
                                    <el-button type="info" size="mini">重置</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>

                <div class="f2">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column
                            prop="id"
                            label="辊号">
                        </el-table-column>
                        <el-table-column
                            prop="type"
                            label="类型">
                        </el-table-column>
                        <el-table-column
                            prop="supplier"
                            label="供货商">
                        </el-table-column>
                        <el-table-column
                            prop="material"
                            label="材质">
                        </el-table-column>
                        <el-table-column
                            prop="diam"
                            label="辊径">
                        </el-table-column>
                        <el-table-column
                            prop="operate"
                            label="操作">
                            <template slot-scope="scope">
                                <el-button type="info" size="mini" @click="handleClick(scope.row)">报废</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },

      tableData: [
        {
          id: '',
          type: '',
          supplier: '',
          material: '',
          diam: '',
          operation: ''
        },
        {
          id: '',
          type: '',
          supplier: '',
          material: '',
          diam: '',
          operation: ''
        }
      ]
    }
  },

  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleClick(row) {
      console.log(row)
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

.f2 {
  margin: 10px;
}
</style>
