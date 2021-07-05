/*
* @Description: 系统设置-重点设备管理
* @version: 1.0
* @Company: nercar
* @Author: wangHongFei
* @Date: 2019-12-04 17:44:36
* @LastEditors: OBKorol
* @LastEditTime: 2019-12-04 17:44:36
*/
<template>
  <div>
    <div style="border:1px solid #ebeef5;padding:5px;background-color:#fff">
      <el-row :gutter="20">
        <el-col :span="6">
          <!-- style="text-align:right;" -->
          <el-input
            v-model="searchInput"
            placeholder="请输入内容"
            class="input-with-select"
            @change="handleChangeName">
            <el-button
              slot="append"
              :loading="searchLoading"
              icon="el-icon-search"/>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-select
            v-model="plantId"
            placeholder="请选择"
            @change="handleChange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value" />
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-button
            style="float:right"
            type="primary"
            round
            @click="saveInformation()">添加设备</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        :index="formatterTableDataIndex"
        type="index"
        width="50" />
      <el-table-column
        prop="device"
        label="设备名称" />
      <el-table-column
        label="型号"
        prop="model"/>
      <el-table-column
        label="工序"
        prop="procedure"/>
      <el-table-column
        label="级别"
        prop="level"/>
      <el-table-column
        label="备用状态"
        prop="status"/>
      <el-table-column
        label="介质"
        prop="energyMedia"/>
      <el-table-column
        label="类型"
        prop="type"/>
      <el-table-column
        label="点名"
        prop="rollCall"/>
      <el-table-column
        label="单位"
        prop="unit"/>
      <el-table-column
        label="描述"
        prop="describe"/>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button-group>
            <el-button
              type="success"
              size="mini"
              @click="editInformation(scope.row)">编辑</el-button>
            <el-button
              type="warning"
              size="mini"
              @click="deleteInformation(scope.row)">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div style="text-align:center;border:1px solid #ebeef5;background-color: #fff">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="pageSizeList"
        :page-size="pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
    <!-- 添加设备 -->
    <el-dialog
      :visible.sync="saveDialogVisible"
      width="50%"
      title="添加设备信息">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="ruleValidation"
        label-width="100px"
        label-position="top">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="设备名称"
              prop="device">
              <el-input v-model="ruleForm.device" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="型号"
              prop="model">
              <el-input v-model="ruleForm.model" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="工序"
              prop="procedure">
              <el-input v-model="ruleForm.procedure" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="产线"
              prop="plantId">
              <el-select
                v-model="ruleForm.plantId"
                placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="备用"
              prop="status">
              <el-select
                v-model="ruleForm.status"
                placeholder="请选择">
                <el-option
                  v-for="item in status"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="标煤单位转换系数"
              prop="coalFactor">
              <el-input v-model.number="ruleForm.coalFactor"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="类型"
              prop="type">
              <el-select
                v-model="ruleForm.type"
                placeholder="请选择">
                <el-option
                  v-for="item in type"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8" >
            <el-form-item
              label="级别"
              prop="level">
              <el-input v-model.number="ruleForm.level"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="单位系数"
              prop="factor">
              <el-input v-model.number="ruleForm.factor"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><el-form-item
            label="点名"
            prop="rollCall">
            <el-input v-model="ruleForm.rollCall"/>
          </el-form-item></el-col>
          <el-col :span="8">
            <el-form-item
              label="单位"
              prop="unit">
              <el-input v-model="ruleForm.unit"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="介质（1水/2气/3电)"
              prop="energyMedia">
              <el-input v-model.number="ruleForm.energyMedia"/>

            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-show="false">
          <el-col
            :span="8"
            :offset="2">
            <el-form-item
              label="当前值"
              prop="value">
              <el-input v-model="ruleForm.value"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item
          label="设备描述"
          prop="describe">
          <el-input
            v-model="ruleForm.describe"
            type="textarea"
            placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer">
        <el-button
          :loading="saveLoading"
          type="primary"
          @click="saveSubmitForm()">保 存</el-button>
      </span>
    </el-dialog>
    <!-- //编辑设备 -->
    <el-dialog
      :visible.sync="editDialogVisible"
      width="50%"
      title="编辑设备信息">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="ruleValidation"
        label-width="100px"
        label-position="top">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="设备名称"
              prop="device">
              <el-input v-model="ruleForm.device" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="型号"
              prop="model">
              <el-input v-model="ruleForm.model" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="工序"
              prop="procedure">
              <el-input v-model="ruleForm.procedure" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="产线"
              prop="plantId">
              <el-select
                v-model="ruleForm.plantId"
                placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="备用"
              prop="status">
              <el-select
                v-model="ruleForm.status"
                placeholder="请选择">
                <el-option
                  v-for="item in status"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="标煤单位转换系数"
              prop="coalFactor">
              <el-input v-model.number="ruleForm.coalFactor"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="类型"
              prop="type">
              <el-select
                v-model="ruleForm.type"
                placeholder="请选择">
                <el-option
                  v-for="item in type"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="级别"
              prop="level">

              <el-input v-model.number="ruleForm.level "/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="单位系数"
              prop="factor">
              <el-input v-model.number="ruleForm.factor"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><el-form-item
            label="点名"
            prop="rollCall">
            <el-input v-model="ruleForm.rollCall"/>
          </el-form-item></el-col>
          <el-col :span="8">
            <el-form-item
              label="单位"
              prop="unit">
              <el-input v-model="ruleForm.unit"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="介质 （1水/2气/3电)"
              prop="energyMedia">
              <el-input v-model.number="ruleForm.energyMedia"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-show="false">
          <el-col
            :span="8"
            :offset="2">
            <el-form-item
              label="当前值"
              prop="value">
              <el-input v-model="ruleForm.value"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item
          label="设备描述"
          prop="describe">
          <el-input
            v-model="ruleForm.describe"
            type="textarea"
            placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer">
        <el-button
          :loading="editLoading"
          type="primary"
          @click="editSubmitForm()">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  FIND_ALL_PLANT_INFO, // 获取全部产线
  GET_IMPORTANT_EQUIPMENT, // 监测所有重点设备
  SAVE_IMPORTANT_EQUIPMENT, // 添加重点设备
  DELECT_IMPORTANT_EQUIPMENT, // 删除重点设备
  UPDATE_IMPORTANT_EQUIPMENT // 编辑重点设备
} from '@/lib/ApiURL'
import { $post, post, fixMenus, findBasicDataConfigByType } from '@/lib/Util'
export default {
  data() {
    return {
      searchInput: '', // 搜索框信息
      searchLoading: false,
      tableData: [],
      plantId: 0, //select选择器
      options: [],
      plantIdVal: '',
      status: [
        {
          value: 0,
          label: '0'
        },
        {
          value: 1,
          label: '1'
        },
        {
          value: 2,
          label: '2'
        },
        {
          value: 3,
          label: '3'
        }
      ],
      statusVal: '',
      type: [
        {
          value: 1,
          label: '单体介质'
        },
        {
          value: 2,
          label: '关键设备'
        },
        {
          value: 3,
          label: '跟踪能耗'
        }
      ],
      typeVal: '',
      total: 0, // 总条目数
      pageSize: 10, // 每页显示的条目数
      currentPage: 1, // 当前页面码
      pageSizeList: [10, 20, 30], // 每页显示的条数
      ruleValidation: {
        //验证规则
        device: [
          {
            required: true,
            message: '请输入设备名称',
            trigger: 'blur'
          }
        ],

        coalFactor: [
          {
            required: true,
            message: '标煤单位转换系数且值为数字',
            trigger: 'blur'
          }
        ],
        model: [
          {
            required: true,
            message: '请输入设备型号',
            trigger: 'blur'
          }
        ],

        procedure: [
          {
            required: true,
            message: '请输入设备工序',
            trigger: 'blur'
          }
        ],
        level: [
          {
            required: true,
            message: '必填且值在1-10字符之间',
            trigger: 'blur'
          }
        ],
        plantId: [
          {
            required: true,
            message: '请选择产线',
            trigger: 'blur'
          }
        ],
        type: [
          {
            required: true,
            message: '请选择设备类型',
            trigger: 'blur'
          }
        ],
        unit: [
          {
            required: true,
            message: '请输入单位',
            trigger: 'blur'
          }
        ],
        energyMedia: [
          {
            required: true,
            message: '请输入介质信息',
            trigger: 'blur'
          }
        ]
      },
      customSelection: '', // 搜索框选择
      saveDialogVisible: false, //添加设备弹窗
      saveLoading: false, // 添加按钮防抖
      ruleForm: {},
      editDialogVisible: false, // 编辑设备弹窗
      editLoading: false, // 编辑按钮防抖
      editruleForm: {} // 编辑窗口信息
    }
  },
  watch: {
    searchInput(curVal, oldVal) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.handleChangeName(curVal)
      }, 1000)
    }
  },
  created() {
    if (process.server) return
    this.findAllEquipment()
  },
  methods: {
    /**
     * @author: wangHongFei
     * @description: 整理index
     */
    formatterTableDataIndex(index) {
      var pageIndex = (this.currentPage - 1) * this.pageSize + index + 1
      return pageIndex
    },
    /**
     * @description: 添加设备信息按钮
     */
    saveInformation() {
      this.ruleForm = {}
      this.saveDialogVisible = true
      this.$nextTick(() => {
        this.$refs['ruleForm'].clearValidate()
      })
    },
    /**
     * @description: 编辑设备信息按钮
     */
    editInformation(row) {
      this.ruleForm = JSON.parse(JSON.stringify(row))
      this.editDialogVisible = true
      // this.$refs['ruleForm'].clearValidate()
      this.$nextTick(() => {
        this.$refs['ruleForm'].clearValidate()
      })
    },
    /**
     * @description: 查找所有产线信息
     */
    async findAllEquipment() {
      let deptId = JSON.parse(localStorage.getItem('user'))
      let data = deptId.deptId || 0
      console.debug(data)
      var info = await post(FIND_ALL_PLANT_INFO, {
        deptId: data
      })
      let result = info
      console.debug('result: ', info)
      // this.options.push(info)
      result.map((obj) => {
        this.options.push({
          value: obj.id,
          label: obj.name
        })
      })
      console.debug('this.options============', this.options)
      this.plantId = this.options[0].value
      this.findAllInformation()
    },
    /**
     * @description: 查找产线对应设备
     */
    async findAllInformation(id) {
      var info = await post(GET_IMPORTANT_EQUIPMENT, {
        plantId: this.plantId,
        start: this.currentPage - 1,
        size: this.pageSize,
        text: this.searchInput,
        orders: [['id', 'desc']]
      })
      console.log('所有项目信息：', info)
      this.tableData = info.content
      console.debug('所有表格信息：', this.tableData)
      this.total = info.totalElements
      console.debug('this.total============', this.total)
    },
    /**
     * @description: 改变selsect选择器的值
     */
    handleChange(val) {
      console.log(val)
      this.plantId = val
      this.findAllInformation()
    },
    /**
     * @description: 每页条数的改变
     */
    handleSizeChange(val) {
      this.pageSize = val
      console.debug('每页条数：', val)
      this.findAllInformation()
    },
    /**
     * @description: 当前页码的改变
     */
    handleCurrentChange(val) {
      this.currentPage = val
      this.findAllInformation()
      console.log(`当前页: ${val}`)
    },
    /**
     * @description: 搜索框查询
     */

    handleChangeName(value) {
      this.searchInput = value
      this.searchLoading = true
      this.currentPage = 1
      console.log('点击搜索')
      setTimeout(() => {
        this.findAllInformation()
      }, 1000)
    },
    searchStart() {
      this.findAllInformation()
    },
    /**
     * 添加保存设备信息
     */
    saveSubmitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          console.log('输入')
          this.saveEquipInformation()
        } else {
          this.editLoading = false
          this.$message({
            message: '请检查输入信息',
            type: 'error'
          })
          return false
        }
      })
    },
    async saveEquipInformation() {
      console.log('数据添加数据：', this.ruleForm)
      this.ruleForm.value = 0
      var info = await post(SAVE_IMPORTANT_EQUIPMENT, this.ruleForm)
      this.findAllInformation()
      this.saveDialogVisible = false
    },
    editSubmitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.editEquipInformation()
        } else {
          this.editLoading = false
          this.$message({
            message: '请检查输入信息',
            type: 'error'
          })
          return false
        }
      })
    },
    async editEquipInformation() {
      var info = await post(UPDATE_IMPORTANT_EQUIPMENT, this.ruleForm)
      this.findAllInformation()
      this.editDialogVisible = false
    },
    /**
     * @description: 删除重点设备
     */
    deleteInformation(val) {
      let data = JSON.parse(JSON.stringify(val))
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          var info = await post(DELECT_REPORT_IMPORTANT_EQUIPMENT, {
            ids: [data.id]
          })

          this.findAllInformation()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>

<style>
</style>
