<!--
 * @Author: Zhang ShiWei
 * @Date: 
 * @LastEditTime: 2021-05-21 09:29:36
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: table
 * @FileName: table.vue
-->
<template>
  <div class="xw_main">
    <div class="xw_titleName">test1</div>
    <HmiTable
      ref="leftTable"
      :table-head="false"
      :table-foot="false"
      :table-data="tableData1"
      :index-type="'index'">
      <template slot="TableBody">
         <el-table-column prop="name" label="机架" />
         <el-table-column prop="name" label="设定值" />
         <el-table-column prop="name" label="平均值" />
         <el-table-column prop="name" label="头部实测值" />
         <el-table-column prop="name" label="最小值" />
         <el-table-column prop="name" label="最小值位置" />
         <el-table-column prop="name" label="最大值" />
         <el-table-column prop="name" label="最大值位置" />
      </template>
    </HmiTable>
    
    <div class="xw_titleName">test2</div>
    <HmiTable
      ref="leftTable"
      :table-data="tableData2"
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
         <el-table-column prop="name" label="机架" />
         <el-table-column prop="name" label="设定值" />
         <el-table-column prop="name" label="平均值" />
         <el-table-column prop="name" label="头部实测值" />
         <el-table-column prop="name" label="最小值" />
         <el-table-column prop="name" label="最小值位置" />
         <el-table-column prop="name" label="最大值" />
         <el-table-column prop="name" label="最大值位置" />
      </template>
    </HmiTable>
    
  </div>
</template>

<script>
export default {
  name: 'Table',
  components: {},
  data() {
    return {
      tableHeadInfo: [
        {
          name: 'test1',
          tableHead: false,
          tableFoot: false,
          isPagination: false,
          data: [
            {
              type: 'string',
              key: 'coilId',
              label: '机架',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '设定值',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '平均值',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '头部实测值',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '最小值',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '最小值位置',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '最大值',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '最大值位置',
              minWidth: 45
            }
          ]
        },
        {
          name: '',
          tableHead: false,
          tableFoot: false,
          isPagination: false,
          data: [
            {
              type: 'string',
              key: 'coilId',
              label: '机架',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '设定值',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '平均值',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '头部实测值',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '最小值',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '最小值位置',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '最大值',
              minWidth: 45
            },
            {
              type: 'string',
              key: 'coilId',
              label: '最大值位置',
              minWidth: 45
            }
          ]
        }
      ],
      queryConditions: {
        dataSource: ['轧制计划'],
        coilId: ''
      }, //查询条件
      tableData1: [{}, {}, {}, {}],
      tableData2: [{}, {}, {}, {}]
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
