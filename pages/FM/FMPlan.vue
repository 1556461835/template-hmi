<!--
 * @Author: Zhang ShiWei
 * @Date: 2021-04-15 13:58:25
 * @LastEditTime: 2021-05-14 15:04:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\FM\FMPlan.vue
 * @FileName: 轧制计划
-->
<template>
    <div class="xw_main">
      <HmiTable
        ref="leftTable"
        :table-data="tableData"
        :table-height="'calc(100vh - 210px)'"
        :index-type="'index'">
        <template slot="TableHead">
          <el-form
            :inline="true"
            @submit.native.prevent>
            <el-form-item label="数据来源">
              <el-checkbox-group v-model="queryConditions.dataSource">
                <el-checkbox label="轧制计划"/>
                <el-checkbox label="模轧计划"/>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="钢卷号">
              <el-input v-model="queryConditions.coilId"/>
            </el-form-item>
            <el-form-item>
              <el-button size="mini">查询</el-button>
              <el-button size="mini">精轧预设定查看</el-button>
            </el-form-item>
          </el-form>
        </template>
        <template slot="TableBody">
          <el-table-column prop="coilId" label="钢卷号"></el-table-column>
          <el-table-column prop="coilId" label="板坯号"></el-table-column>
          <el-table-column prop="coilId" label="炉号"></el-table-column>
          <el-table-column prop="coilId" label="钢种"></el-table-column>
          <el-table-column prop="coilId" label="代码"></el-table-column>
          <el-table-column prop="coilId" label="成品厚度"></el-table-column>
          <el-table-column prop="coilId" label="板坯厚度"></el-table-column>
          <el-table-column prop="coilId" label="板坯宽度"></el-table-column>
          <el-table-column prop="coilId" label="板坯长度"></el-table-column>
          <el-table-column prop="coilId" label="板坯重量"></el-table-column>
          <el-table-column prop="coilId" label="FDT"></el-table-column>
          <el-table-column prop="coilId" label="CT"></el-table-column>
          <el-table-column prop="coilId" label="凸度"></el-table-column>
          <el-table-column prop="coilId" label="平坦度"></el-table-column>
          <el-table-column prop="coilId" label="备注"></el-table-column>
        </template>
      </HmiTable>
    </div>
</template>

<script>
export default {
  name: 'FMPlan',
  data() {
    return {
      queryConditions: {
        dataSource: ['轧制计划'],
        coilId: ''
      }, //查询条件
      tableData: [{}, {}, {}, {}, {}, {}, {}] //表格数据
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
</style>
