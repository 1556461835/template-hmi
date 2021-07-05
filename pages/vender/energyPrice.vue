/*
 * @Description: 设备厂商平台-介质价格
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-01 17:06:57
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:14:09
 */
<template>
  <div>
    <div style="border:1px solid #ebeef5;padding:5px;background-color:#fff">
      <el-row>
        <el-col
          :span="12"
        >
          <!-- style="text-align:right;" -->
          <el-input
            v-model="searchInput"
            size="small"
            placeholder="请输入内容"
            style="width:300px;"
            class="input-with-select"
          >
            <template
              slot="prepend"
            >名称</template>
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchStart"
            />
          </el-input>
        </el-col>
        <el-col
          :span="12"
        >
          <el-button
            style="float:right"
            type="primary"
            size="small"
            round
            @click="editInformation()"
          >添加介质信息</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData"
      size="small"
      border
      style="width: 100%">
      <el-table-column
        :index="formatterTableDataIndex"
        type="index"
        width="50"/>
      <el-table-column
        :formatter="energyMediaformatter"
        prop="energyMedia"
        label="介质类型"
        width="140"
      />
      <el-table-column
        prop="price"
        label="介质价格"
        width="100"
      />
      <el-table-column
        prop="unit"
        label="介质单位"
        width="100"
      />
      <el-table-column
        prop="startDate"
        label="价格时间区间-开始"
        width="140"
      />
      <el-table-column
        prop="stopDate"
        label="价格时间区间-结束"
        width="140"
      />
      <el-table-column
        prop="createDate"
        label="创建时间"
        
      />
      <el-table-column
        prop="lastDate"
        label="最后修改时间"
        
      />
      <el-table-column
        prop="description"
        label="描述"
        width="120"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="130">
        <template slot-scope="scope">
          <el-button
            v-command="editRight"
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="editInformation(scope.row)"
          />
          <el-button
            v-command="romoveRight"
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="deleteInformation(scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align:center;border:1px solid #ebeef5;background-color: #fff">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="pageSizeList"
        :page-size="pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog
      :visible.sync="dialogVisibleMessage"
      width="50%"
      title="编辑能源介质价格信息"
    >
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="ruleValidation"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="9">
            <el-form-item
              label="介质类型"
              prop="energyMedia"
            >
              <el-select
                v-model="ruleForm.energyMedia"
                placeholder="请选择介质类型">
                <el-option
                  v-for="item in mediaTypeprovider"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="介质价格"
              prop="price"
            >
              <el-input
                v-model.number="ruleForm.price"
                type="price"
              />
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item
              label="介质单位"
              prop="unit"
            >
              <el-select
                v-model="ruleForm.unit"
                placeholder="请选择介质单位">
                <el-option
                  v-for="item in unitDataprovider"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="时间-开始"
              prop="startDate"
            >
              <el-time-select
                v-model="ruleForm.startDate"
                :picker-options="{
                  start: '00:00',
                  step: '00:05',
                  end: '24:00'
                }"
                placeholder="价格时间区间-开始"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="时间-结束"
              prop="stopDate"
            >
              <el-time-select
                v-model="ruleForm.stopDate"
                :picker-options="{
                  start: '00:00',
                  step: '00:05',
                  end: '24:00',
                  minTime: ruleForm.startDate
                }"
                placeholder="价格时间区间-结束"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="创建时间"
              prop="createDate"
            >

              <el-date-picker
                v-model="ruleForm.createDate"
                :disabled="true"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                align="right"
                type="date"
                placeholder="选择日期"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="最后修改时间"
              prop="lastDate">
              <el-input
                v-model="ruleForm.lastDate"
                :disabled="true"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item
              label="介质描述"
              prop="description">
              <el-input
                v-model="ruleForm.description"
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <!-- <el-button
          v-if = "!ruleForm.uuid"
          energyMedia="warning"
          @click="resetForm('ruleForm')"
        >重 置</el-button> -->
        <el-button
          type="primary"
          size="small"
          @click="submitForm()"
        >保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  FIND_ALL_MEDIA_PRICES, // 查询全部介质价格信息
  REMOVEL_MEDIA_PRICES, // 删除介质价格信息
  SAVE_MEDIA_PRICES, // 保存介质价格信息
  UPDATE_MEDIA_PRICES, // 更新介质价格信息
  FIND_MEDIA_PRICES_ID // 查询单个介质价格信息
} from '@/lib/ApiURL'
import { $post, fixMenus, post, findBasicDataConfigByType } from '@/lib/Util'
import moment from 'moment'
export default {
  data() {
    return {
      createDate: '', // 创建时间
      startDate: '', // 起始时间
      stopDate: '', // 结束时间
      searchSelect: '', // 搜索框选择
      searchInput: '', // 搜索框内容
      ruleForm: {}, // 编辑信息
      editRight: SAVE_MEDIA_PRICES, // 编辑和添加权限
      romoveRight: REMOVEL_MEDIA_PRICES, // 删除权限
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      ruleValidation: {
        energyMedia: [
          { required: true, message: '请选择介质类型', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入介质价格', trigger: 'blur' },
          {
            validator(rule, value, callback) {
              if (Number(value) > 0) {
                callback()
              } else {
                callback(new Error('请输入正数'))
              }
            },
            trigger: 'blur'
          },
          { type: 'number', message: '价格必须为数字值' }
        ],
        unit: [
          { required: true, message: '请选择介质单位', trigger: 'blur' }
          // {
          //   min: 1,
          //   max: 20,
          //   message: '请输入正确的介质单位',
          //   trigger: 'blur'
          // }
        ]
      },
      tableData: [], // 表格信息
      dialogVisibleMessage: false, // 介质信息弹窗编辑
      total: 0, // 总条目数
      pageSize: 8, // 每页显示的条目数
      currentPage: 1, // 当前页面码
      pageSizeList: [10, 20, 30], // 每页显示的条数
      mediaTypeprovider: [],
      unitDataprovider: []
    }
  },
  async created() {
    if (process.server) return
    this.pageSize = this.pageSizeList[0]
    this.findAllInformation()
    this.mediaTypeprovider = await findBasicDataConfigByType('media_type')
    this.unitDataprovider = await findBasicDataConfigByType('media_unit')
  },
  methods: {
    energyMediaformatter(row, column) {
      let energyMedia = row.energyMedia
      if (this.mediaTypeprovider == 0) {
        return 0
      } else {
        return this.mediaTypeprovider[energyMedia].label
      }
    }, //将后台发来的介质类型数字转换为中文名称
    /**
     * @author: wangHongFei
     * @description: 整理index
     */
    formatterTableDataIndex(index) {
      var pageIndex = (this.currentPage - 1) * this.pageSize + index + 1
      return pageIndex
    },
    /**
     * @author: wangHongFei
     * @description: 删除信息
     */
    async deleteInformation(data) {
      var ids = [data.id]
      // {ids} ==  {ids: []}
      var info = await post(REMOVEL_MEDIA_PRICES, { ids })
      if (info) {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.findAllInformation()
      } else {
        this.$message({
          message: '删除失败',
          type: 'error'
        })
      }
    },
    /**
     * @author: wangHongFei
     * @description: 查询介质价格信息
     */
    async findAllInformation() {
      var interfaceParameters = {
        size: this.pageSize,
        page: this.currentPage - 1,
        text: this.searchInput
      }
      var allPrice = FIND_ALL_MEDIA_PRICES // 查询介质价格信息
      var info = await post(allPrice, interfaceParameters)
      // var result = JSON.parse(info)
      this.tableData = info.content
      this.total = info.totalElements
    },
    /**
     * @author: wangHongFei
     * @description: 页面编辑
     */
    editInformation(data) {
      if (data) {
        // // 根据id查询信息
        this.getMPById(data.id)
        this.dialogVisibleMessage = true
      } else {
        this.ruleForm = {
          energyMedia: '',
          price: null,
          unit: '',
          createDate: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        var myDate = new Date()
        this.dialogVisibleMessage = true
      }
    },
    /**
     * @author: wangHongFei
     * @description: 通过id查询介质价格信息
     */
    async getMPById(id) {
      var info = await post(FIND_MEDIA_PRICES_ID, { id })
      this.ruleForm = info
    },
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.save()
        } else {
          this.$message({
            message: '请检查信息',
            type: 'error'
          })
          return false
        }
      })
    },
    /**
     * @author: wangHongFei
     * @description: 添加介质信息
     */
    async save() {
      var info = await post(SAVE_MEDIA_PRICES, this.ruleForm)
      this.dialogVisibleMessage = false
      if (!this.ruleForm.uuid) {
        this.findAllInformation()
        return
      }
      var result = window.JSON.parse(info)
      var mapIndex = -1
      this.tableData.map(function(item, index) {
        if (parseInt(item.id) === parseInt(result.id)) {
          mapIndex = index
        }
      })
      if (mapIndex >= 0) {
        this.tableData.splice(mapIndex, 1, result)
      }
    },

    /**
     * @author: wangHongFei
     * @description: 切换每页显示的数量
     */
    handleSizeChange(val) {
      this.pageSize = val
      this.findAllInformation()
    },
    /**
     * @author: wangHongFei
     * @description: 切换页码
     */
    handleCurrentChange(val) {
      this.currentPage = val
      this.findAllInformation()
      console.log(`当前页: ${val}`)
    },
    /**
     * @author: wangHongFei
     * @description: 搜索
     */
    async searchStart() {
      this.currentPage = 1
      this.findAllInformation()
    }
  }
}
</script>
<style scoped>
.input-with-select .el-select {
  width: 130px;
}
.input-with-select .el-input {
  width: 100px;
}
.el-row {
  height: 30px;
}
/* 修改element表头错位的问题 */

body .el-table th.gutter {
  display: table-cell !important;
}

body .el-table colgroup.gutter {
  display: table-cell !important;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
