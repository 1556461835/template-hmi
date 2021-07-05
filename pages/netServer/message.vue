<!--
 * @Author: your name
 * @Date: 2021-05-27 09:49:28
 * @LastEditTime: 2021-06-07 14:44:04
 * @LastEditors: Please set LastEditors
 * @Description: 电文信息
 * @FilePath: \hmi\pages\netServer\message.vue
-->
<template>
  <div>
    <div class="layout-main margin-bottom-8 padding16 ">
      <el-table :data="tableData">
        <el-table-column label="" align="center" prop="field">
        </el-table-column>
        <el-table-column label="F1" align="center">
          <el-table-column label="PCS" align="center"></el-table-column>
          <el-table-column label="MAS" align="center"></el-table-column>
          <el-table-column label="L1" align="center"></el-table-column>
        </el-table-column>
        <el-table-column label="F2" align="center">
          <el-table-column label="PCS" align="center"></el-table-column>
          <el-table-column label="MAS" align="center"></el-table-column>
          <el-table-column label="L1" align="center"></el-table-column>
        </el-table-column>
        <el-table-column label="F3" align="center">
          <el-table-column label="PCS" align="center"></el-table-column>
          <el-table-column label="MAS" align="center"></el-table-column>
          <el-table-column label="L1" align="center"></el-table-column>
        </el-table-column>
        <el-table-column label="F4" align="center">
          <el-table-column label="PCS" align="center"></el-table-column>
          <el-table-column label="MAS" align="center"></el-table-column>
          <el-table-column label="L1" align="center"></el-table-column>
        </el-table-column>
        <el-table-column label="F5" align="center">
          <el-table-column label="PCS" align="center"></el-table-column>
          <el-table-column label="MAS" align="center"></el-table-column>
          <el-table-column label="L1" align="center"></el-table-column>
        </el-table-column>
        <el-table-column label="F6" align="center">
          <el-table-column label="PCS" align="center"></el-table-column>
          <el-table-column label="MAS" align="center"></el-table-column>
          <el-table-column label="L1" align="center"></el-table-column>
        </el-table-column>
        <el-table-column label="F7" align="center">
          <el-table-column label="PCS" align="center"></el-table-column>
          <el-table-column label="MAS" align="center"></el-table-column>
          <el-table-column label="L1" align="center"></el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <div class="layout-main padding16">
      <el-form :model="formData" label-position="left" label-width="50px">
        <el-row :gutter="10">
          <el-col :span="6">
            <p>带钢钢种</p>
            <el-form-item label="PCS">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="MAS">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="L1">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <p>入口温度</p>
            <el-form-item label="PCS">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="MAS">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="L1">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <p>终轧温度</p>
            <el-form-item label="PCS">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="MAS">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="L1">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <p>入口宽度</p>
            <el-form-item label="PCS">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="MAS">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="L1">
                <el-input v-model="formData.name" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { field: '入口厚度' },
        { field: '出口厚度' },
        { field: '前滞' },
        { field: '轧辊速度' },
        { field: '轧制力' },
        { field: '压下位置' }
      ],
      formData: {}
    }
  }
}
</script>

<style>
</style>
