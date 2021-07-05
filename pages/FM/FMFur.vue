<!--
 * @Author: Zhang ShiWei
 * @Date: 2021-04-16 13:58:25
 * @LastEditTime: 2021-05-18 10:36:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\FM\FMFur.vue
 * @FileName: 炉内数据
-->
<template>
  <div class="xw_main">
    <el-tabs v-model="tabAct" type="border-card">
      <el-tab-pane v-for="(item, index) in tabData" :key="'tabAct'+index" :label="item" :name="item"/>
    </el-tabs>
    <div class="xw_marginTB">
      <HmiTable
          ref="leftTable"
          :table-head="false"
          :table-data="tableData"
          :table-height="'calc(100vh - 220px)'"
          :index-type="'index'">
        <template slot="TableBody">
          <el-table-column prop="coilId" label="钢卷号"></el-table-column>
          <el-table-column prop="coilId" label="板坯号"></el-table-column>
          <el-table-column prop="coilId" label="钢种"></el-table-column>
          <el-table-column prop="coilId" label="板坯宽度"></el-table-column>
          <el-table-column prop="coilId" label="板坯厚度"></el-table-column>
          <el-table-column prop="coilId" label="板坯长度"></el-table-column>
          <el-table-column prop="coilId" label="产品宽度"></el-table-column>
          <el-table-column prop="coilId" label="产品厚度"></el-table-column>
          <el-table-column prop="coilId" label="目标宽度"></el-table-column>
          <el-table-column prop="coilId" label="目标厚度"></el-table-column>
          <el-table-column prop="coilId" label="炉时"></el-table-column>
          <el-table-column prop="coilId" label="装炉时刻"></el-table-column>
        </template>
      </HmiTable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FMFur',
  data() {
    return {
      tabAct: '1#炉',
      tabData: ['1#炉', '2#炉'],
      tableData: [{}, {}, {}, {}]
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
