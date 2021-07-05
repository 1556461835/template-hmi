/*
 * @Description: 系统管理-角色管理
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-01 11:15:26
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:10:38
 */
<template>
  <div>
    <div
      style="border: 1px solid #ebeef5; padding: 5px; background-color: #fff"
    >
      <el-row>
        <el-col :span="12">
          <!-- style="text-align:right;" -->
          <el-input
            v-model="searchInput"
            placeholder="请输入内容"
            style="width: 300px"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchStart"
            />
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-button
            style="float: right"
            type="primary"
            round
            @click="editInformation()"
            >添加角色</el-button
          >
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="角色名称" />
      <el-table-column prop="description" label="角色描述" />
      <el-table-column
        :formatter="formatterType"
        prop="type"
        label="角色类型"
      />
      <el-table-column label="操作" width="120">
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
    <el-dialog
      :visible.sync="dialogVisibleMessage"
      width="50%"
      title="编辑角色信息"
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
            <el-form-item label="角色名称" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="角色类型" prop="type">
              <el-select v-model="ruleForm.type" placeholder="请选择角色类型">
                <el-option label="通用" value="0" />
                <el-option label="生产厂商" value="1" />
                <el-option label="设备厂商" value="2" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="角色描述" prop="description">
              <el-input v-model="ruleForm.description" type="textarea" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm()">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  ADD_ROLE, // 添加用户
  GET_ROLES_BY_ID, // 查询用户信息
  DELETE_ROLES, // 删除用户
  UNIQUENESS_CHECK, // 唯一性判断接口
  GET_ALL_ROLES // 获取所有用户
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
            trigger: 'blur'
          }
        ],
        type: [
          {
            required: true,
            message: '请选择角色类型',
            trigger: 'blur'
          }
        ]
      },
      dialogVisibleMessage: false, // 用户信息弹窗编辑
      tableData: [] // 表格信息
    }
  },
  created() {
    if (process.server) return
    this.findAllInformation()
  },
  methods: {
    /**
     * @author: wangHongFei
     * @description: 格式化角色类型
     */
    formatterType(row, column) {
      var itemList = ['通用', '生产厂商', '设备厂商']
      var item = itemList[row.type]
      return item
    },
    /**
     * @author: wangHongFei
     * @description: 删除用户
     */
    async deleteInformation(data) {
      var ids = [data.id]
      var info = await $post(DELETE_ROLES, { ids })
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
      console.debug('删除用户返回信息：', info)
    },
    /**
     * @author: wangHongFei
     * @description: 查询所有角色
     */
    async findAllInformation() {
      let text = this.searchInput
      var info = await $post(GET_ALL_ROLES, { text: text })
      this.tableData = JSON.parse(info)
    },
    /**
     * @author: wangHongFei
     * @description: 页面编辑
     */
    editInformation(data) {
      if (data) {
        this.ruleValidation.name[0] = {
          required: true,
          message: '询单编号不能为空',
          trigger: 'blur'
        }
        // 根据uuid查询用户信息
        this.findRoleById(data.id)
      } else {
        this.ruleValidation.name[0].validator = this.checkCustomerName
        this.ruleForm = {}
        this.dialogVisibleMessage = true
      }
    },
    /**
     * @author: wangHongFei
     * @description: 客户名称验证
     */
    async checkCustomerName(rule, value, callback) {
      console.debug('唯一性表单验证：', rule, value, callback)
      if (!value) {
        return callback(new Error('角色名称不能为空'))
      }
      var info = await $post(
        UNIQUENESS_CHECK,
        {
          entityName: 'Role', // 类名，参见主数据结构和实体类数据结构中的类名，如 CustomerOrderInfo
          property: rule.field, // 待验证的字段，比如 contractNo
          value: value, // 待验证的内容， 比如： ht000001
          type: ''
        },
        'no'
      )
      var data = JSON.parse(info)
      if (data.status === 'yes') {
        return callback(new Error('重复角色名称'))
      } else {
        return callback()
      }
    },
    /**
     * @author: wangHongFei
     * @description: 根据ID查询信息详情
     */
    async findRoleById(id) {
      var info = await $post(GET_ROLES_BY_ID, { id: id })
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
          this.saveUser()
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
     * @description: 添加编辑角色
     */
    async saveUser() {
      this.ruleForm.password = this.ruleForm.newPassword
      var info = await $post(ADD_ROLE, this.ruleForm)
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
