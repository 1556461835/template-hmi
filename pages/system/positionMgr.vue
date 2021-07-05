/*
 * @Description: 系统管理-岗位管理
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-01 13:12:11
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:10:00
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
            placeholder="请输入内容"
            style="width:300px;"
            class="input-with-select"
          >
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
            size="mini"
            round
            @click="editInformation()"
          >添加岗位</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData"
      border
      max-height="490"
      style="width: 100%">
      <el-table-column
        :index="formatterTableDataIndex"
        type="index"
        width="50"/>
      <el-table-column
        prop="name"
        label="岗位名称"
      />
      <el-table-column
        prop="description"
        label="岗位描述"
      />
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button-group>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-edit"
              @click="editInformation(scope.row)"
            />
            <el-button
              type="danger"
              size="small"
              icon="el-icon-delete"
              @click="deleteInformation(scope.row)"
            />
          </el-button-group>
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
      title="编辑岗位信息"
    >
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="ruleValidation"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item
              label="岗位名称"
              prop="name"
            >
              <el-input
                v-model="ruleForm.name"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item
              label="岗位描述"
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
        <el-button
          type="primary"
          @click="submitForm()"
        >保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  ADD_POSITION, // 添加岗位
  GET_POSITION_BY_ID, // 查询岗位信息
  DELETE_POSITIONS, // 删除岗位
  GET_ALL_POSITION // 获取所有岗位
} from '@/lib/ApiURL'
import { $post } from '@/lib/Util'
export default {
  data() {
    return {
      searchSelect: '', // 搜索框选择
      searchInput: '', // 搜索框内容
      ruleForm: {}, // 编辑信息
      ruleValidation: {
        name: [
          {
            required: true,
            message: '请输入岗位名称',
            trigger: 'blur'
          }
        ],
        type: [
          {
            required: true,
            message: '请选择岗位类型',
            trigger: 'blur'
          }
        ]
      },
      dialogVisibleMessage: false, // 岗位信息弹窗编辑
      tableData: [], // 表格信息
      total: 0, // 总条目数
      pageSize: 8, // 每页显示的条目数
      currentPage: 1, // 当前页面码
      pageSizeList: [10, 20, 30] // 每页显示的条数
    }
  },
  created() {
    if (process.server) return
    this.findAllInformation()
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
     * @author: wangHongFei
     * @description: 删除岗位
     */
    async deleteInformation(data) {
      var keys = [data.id]
      var info = await $post(DELETE_POSITIONS, { keys })
      let status = window.JSON.parse(info).status
      if (status === 'success') {
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
      console.debug('删除岗位返回信息：', info)
    },
    /**
     * @author: wangHongFei
     * @description: 查询所有岗位
     */
    async findAllInformation() {
      let pSize = this.pageSize
      let page = this.currentPage - 1
      let text = this.searchInput
      var info = await $post(GET_ALL_POSITION, {
        start: page,
        size: pSize,
        text: text
      })
      var result = JSON.parse(info)
      this.tableData = result.content
      this.total = result.totalElements
    },
    /**
     * @author: wangHongFei
     * @description: 页面编辑
     */
    editInformation(data) {
      if (data) {
        // 根据uuid查询岗位信息
        this.getPositionById(data.id)
      } else {
        this.ruleForm = {}
        this.dialogVisibleMessage = true
      }
    },
    /**
     * @author: wangHongFei
     * @description: 根据ID查询信息详情
     */
    async getPositionById(id) {
      var info = await $post(GET_POSITION_BY_ID, { id: id })
      this.ruleForm = window.JSON.parse(info)
      this.ruleForm.type = this.ruleForm.type + ''
      this.dialogVisibleMessage = true
      console.debug('查询信息详情：', this.ruleForm)
    },
    /**
     * @author: wangHongFei
     * @description: 确认输入信息
     */
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.saveInformation()
        } else {
          this.$message({
            message: '请检查输入信息',
            type: 'error'
          })
          return false
        }
      })
    },
    /**
     * @author: wangHongFei
     * @description: 添加编辑岗位
     */
    async saveInformation() {
      this.ruleForm.password = this.ruleForm.newPassword
      var info = await $post(ADD_POSITION, this.ruleForm)
      this.dialogVisibleMessage = false
      if (!this.ruleForm.id) {
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
    searchStart() {
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
</style>
