<!--
 * @Author: Zhang ShiWei
 * @Date: 2021-04-16 13:58:25
 * @LastEditTime: 2021-05-18 10:52:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\pages\FM\FMRollCM.vue
 * @FileName: 换辊管理
-->
<template>
  <div class="xw_main">
    <el-tabs v-model="tabAct" type="border-card">
      <el-tab-pane v-for="(item, index) in tabData" :key="'tabAct'+index" :label="item" :name="item"/>
    </el-tabs>
    <el-row :gutter="10">
      <el-col :span="12">
        <!-- F1 -->
        <div class="xw_marginTB">
          <div style="font-weight: bold;">F1当前轧辊</div>
            <HmiTable
              ref="leftTable"
              :table-head="false"
              :table-foot="false"
              :is-pagination-show="false"
              :table-data="tableData[0]"
              :index-type="'index'">
              <template slot="TableBody">
                <el-table-column prop="coilId" label="名称"></el-table-column>
                <el-table-column prop="coilId" label="辊径"></el-table-column>
                <el-table-column prop="coilId" label="辊码"></el-table-column>
                <el-table-column prop="coilId" label="辊形量"></el-table-column>
                <el-table-column prop="coilId" label="材码"></el-table-column>
                <el-table-column prop="coilId" label="重量"></el-table-column>
                <el-table-column prop="coilId" label="长度"></el-table-column>
                <el-table-column prop="coilId" label="时间"></el-table-column>
              </template>
            </HmiTable>
        </div>
      </el-col>
      <el-col :span="12">
        <!-- F2 -->
        <div class="xw_marginTB">
          <div style="font-weight: bold;">F2当前轧辊</div>
            <HmiTable
              ref="leftTable"
              :table-head="false"
              :table-foot="false"
              :is-pagination-show="false"
              :table-data="tableData[1]"
              :index-type="'index'">
              <template slot="TableBody">
                <el-table-column prop="coilId" label="名称"></el-table-column>
                <el-table-column prop="coilId" label="辊径"></el-table-column>
                <el-table-column prop="coilId" label="辊码"></el-table-column>
                <el-table-column prop="coilId" label="辊形量"></el-table-column>
                <el-table-column prop="coilId" label="材码"></el-table-column>
                <el-table-column prop="coilId" label="重量"></el-table-column>
                <el-table-column prop="coilId" label="长度"></el-table-column>
                <el-table-column prop="coilId" label="时间"></el-table-column>
              </template>
            </HmiTable>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <!-- F3 -->
        <div class="xw_marginTB">
          <div style="font-weight: bold;">F3当前轧辊</div>
            <HmiTable
              ref="leftTable"
              :table-head="false"
              :table-foot="false"
              :is-pagination-show="false"
              :table-data="tableData[2]"
              :index-type="'index'">
              <template slot="TableBody">
                <el-table-column prop="coilId" label="名称"></el-table-column>
                <el-table-column prop="coilId" label="辊径"></el-table-column>
                <el-table-column prop="coilId" label="辊码"></el-table-column>
                <el-table-column prop="coilId" label="辊形量"></el-table-column>
                <el-table-column prop="coilId" label="材码"></el-table-column>
                <el-table-column prop="coilId" label="重量"></el-table-column>
                <el-table-column prop="coilId" label="长度"></el-table-column>
                <el-table-column prop="coilId" label="时间"></el-table-column>
              </template>
            </HmiTable>
        </div>
      </el-col>
      <el-col :span="12">
        <!-- F4 -->
        <div class="xw_marginTB">
          <div style="font-weight: bold;">F4当前轧辊</div>
            <HmiTable
              ref="leftTable"
              :table-head="false"
              :table-foot="false"
              :is-pagination-show="false"
              :table-data="tableData[3]"
              :index-type="'index'">
              <template slot="TableBody">
                <el-table-column prop="coilId" label="名称"></el-table-column>
                <el-table-column prop="coilId" label="辊径"></el-table-column>
                <el-table-column prop="coilId" label="辊码"></el-table-column>
                <el-table-column prop="coilId" label="辊形量"></el-table-column>
                <el-table-column prop="coilId" label="材码"></el-table-column>
                <el-table-column prop="coilId" label="重量"></el-table-column>
                <el-table-column prop="coilId" label="长度"></el-table-column>
                <el-table-column prop="coilId" label="时间"></el-table-column>
              </template>
            </HmiTable>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <!-- F5 -->
        <div class="xw_marginTB">
          <div style="font-weight: bold;">F5当前轧辊</div>
            <HmiTable
              ref="leftTable"
              :table-head="false"
              :table-foot="false"
              :is-pagination-show="false"
              :table-data="tableData[4]"
              :index-type="'index'">
              <template slot="TableBody">
                <el-table-column prop="coilId" label="名称"></el-table-column>
                <el-table-column prop="coilId" label="辊径"></el-table-column>
                <el-table-column prop="coilId" label="辊码"></el-table-column>
                <el-table-column prop="coilId" label="辊形量"></el-table-column>
                <el-table-column prop="coilId" label="材码"></el-table-column>
                <el-table-column prop="coilId" label="重量"></el-table-column>
                <el-table-column prop="coilId" label="长度"></el-table-column>
                <el-table-column prop="coilId" label="时间"></el-table-column>
              </template>
            </HmiTable>
        </div>
      </el-col>
      <el-col :span="12">
        <!-- F6 -->
        <div class="xw_marginTB">
          <div style="font-weight: bold;">F6当前轧辊</div>
            <HmiTable
              ref="leftTable"
              :table-head="false"
              :table-foot="false"
              :is-pagination-show="false"
              :table-data="tableData[5]"
              :index-type="'index'">
              <template slot="TableBody">
                <el-table-column prop="coilId" label="名称"></el-table-column>
                <el-table-column prop="coilId" label="辊径"></el-table-column>
                <el-table-column prop="coilId" label="辊码"></el-table-column>
                <el-table-column prop="coilId" label="辊形量"></el-table-column>
                <el-table-column prop="coilId" label="材码"></el-table-column>
                <el-table-column prop="coilId" label="重量"></el-table-column>
                <el-table-column prop="coilId" label="长度"></el-table-column>
                <el-table-column prop="coilId" label="时间"></el-table-column>
              </template>
            </HmiTable>
        </div>
      </el-col>
    </el-row>
    <!-- F7 -->
    <div class="xw_marginTB" style="width: 50%">
      <div style="font-weight: bold;">F7当前轧辊</div>
        <HmiTable
          ref="leftTable"
          :table-head="false"
          :table-foot="false"
          :is-pagination-show="false"
          :table-data="tableDataF7"
          :index-type="'index'">
          <template slot="TableBody">
            <el-table-column prop="coilId" label="名称"></el-table-column>
            <el-table-column prop="coilId" label="辊径"></el-table-column>
            <el-table-column prop="coilId" label="辊码"></el-table-column>
            <el-table-column prop="coilId" label="辊形量"></el-table-column>
            <el-table-column prop="coilId" label="材码"></el-table-column>
            <el-table-column prop="coilId" label="重量"></el-table-column>
            <el-table-column prop="coilId" label="长度"></el-table-column>
            <el-table-column prop="coilId" label="时间"></el-table-column>
          </template>
        </HmiTable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FMRollCM',
  data() {
    return {
      tabData: ['当前轧辊', '下次轧辊'],
      tabAct: '当前轧辊',
      tableData: [
        [{}, {}, {}, {}],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}],
        [{}, {}, {}, {}]
      ],
      tableDataF7: [{}, {}, {}, {}]
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
