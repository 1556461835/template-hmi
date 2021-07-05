/*
 * @Description: 系统管理-设备厂商管理
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-06 09:34:11
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:11:30
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
            v-show="false"
            style="float: right"
            type="primary"
            size="mini"
            round
            @click="editInformation()"
            >添加设备厂商</el-button
          >
        </el-col>
      </el-row>
    </div>
    <!-- 表格信息 -->
    <el-table :data="tableData" border max-height="490" style="width: 100%">
      <el-table-column
        :index="formatterTableDataIndex"
        type="index"
        width="50"
      />
      <el-table-column prop="name" label="用户信息" />
      <el-table-column prop="address" label="地址" />
      <el-table-column label="描述" />
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button-group style="margin-bottom: 10px">
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
            <el-button
              type="warning"
              size="small"
              @click="urlResource(scope.row)"
              >URL资源</el-button
            >
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <div
      style="
        text-align: center;
        border: 1px solid #ebeef5;
        background-color: #fff;
      "
    >
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
    <!-- 添加编辑信息 -->
    <el-dialog
      :visible.sync="dialogVisibleMessage"
      width="50%"
      title="编辑设备厂商信息"
    >
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="ruleValidation"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="设备厂商名" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地址" prop="address">
              <el-input v-model="ruleForm.address" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="描述" prop="description">
              <el-input v-model="ruleForm.description" type="textarea" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm()">保 存</el-button>
      </span>
    </el-dialog>
    <!-- 联系人信息 -->
    <el-dialog
      :visible.sync="dialogContactPerson"
      width="50%"
      title="联系人信息"
    >
      <el-row>
        <el-col :span="12" style="text-align: center">
          <img src="@/assets/img/user7-128x128.jpg" />
          <h1>admin/管理员</h1>
          <h4>admin/管理员</h4>
        </el-col>
        <el-col :span="12" style="text-align: center">
          <img src="@/assets/img/user7-128x128.jpg" />
          <h1>管理员</h1>
          <h4>代理人</h4>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 客户信息弹窗 -->
    <el-dialog
      :visible.sync="dialogClientInformation"
      width="50%"
      title="客户信息弹窗"
    >
      <div align="center">
        <el-tree :data="departmentList" :props="defaultProps" />
      </div>
    </el-dialog>
    <!-- URL资源弹窗 -->
    <el-dialog
      :visible.sync="dialogUrlResource"
      width="50%"
      title="URL资源弹窗"
    >
      <div align="center">
        <el-tree
          ref="urlResources"
          :data="resourcesList"
          :props="defaultProps"
          :default-checked-keys="resourcesKeyList"
          node-key="id"
          show-checkbox
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addResourcesToVender()"
          >保 存</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  ADD_RESOURCES_TO_VENDER, // 保存URL信息
  ADD_VENDER, // 添加编辑设备厂商
  GET_VENDER_BY_UUID, // 查询设备厂商信息详情
  DELETE_VENDERS, // 删除设备厂商
  GET_ALL_VENDERS, // 获取所有设备厂商
  GET_ALL_MENUS, // 获取所有的URL
  GET_VENDER_ADDITIONAL_INFO_BY_UUID // 查询客户信息
} from '@/lib/ApiURL'
import { $post, fixMenus } from '@/lib/Util'
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
            message: '请输入账户名称',
            trigger: 'blur'
          }
        ]
      }, // 表单验证
      dialogVisibleMessage: false, // 设备厂商信息弹窗编辑
      dialogContactPerson: false, // 联系人弹窗
      dialogClientInformation: false, // 客户信息弹窗
      dialogUrlResource: false, // url资源弹窗
      departmentList: [], // 客户信息
      resourcesKeyList: [], // 选中的url
      resourcesList: [], // 所有的url信息
      defaultProps: {
        children: 'children',
        label: 'name'
      }, // 树组件配置
      tableData: [], // 表格信息
      total: 0, // 总条目数
      pageSize: 8, // 每页显示的条目数
      currentPage: 1, // 当前页面码
      pageSizeList: [10, 20, 30] // 每页显示的条数
    }
  },
  created() {
    if (process.server) return
    this.pageSize = this.pageSizeList[0]
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
     * @description: 联系人弹窗
     */
    contactPerson(data) {
      this.dialogContactPerson = true
    },
    /**
     * @author: wangHongFei
     * @description: 客户信息
     */
    async clientInformation(data) {
      this.departmentList = []
      await this.findResourcesByVenderId(data, 'client')
      this.dialogClientInformation = true
    },
    /**
     * @author: wangHongFei
     * @description: URL资源弹窗
     */
    async urlResource(data) {
      console.debug('编辑信息:', data)
      this.resourcesKeyList = []
      this.ruleForm = data
      var info = await $post(GET_ALL_MENUS, { url: '/system/urlMgr' })
      this.resourcesList = fixMenus(window.JSON.parse(info))
      this.findResourcesByVenderId(data, 'URL')
      this.dialogUrlResource = true
      // this.$refs.urlResources.setCheckedNodes(this.resourcesKeyList)
    },
    /**
     * @author: wangHongFei
     * @description: 保存URL
     */
    async addResourcesToVender() {
      var checkedKeys = this.$refs.urlResources.getCheckedKeys()
      var checkedNodes = this.$refs.urlResources.getCheckedNodes()
      this.resourcesList.map(function(item) {
        var isAdd = true
        checkedNodes.map(function(keyItem) {
          if (keyItem.pId === item.id) {
            isAdd = false
          }
        })
        if (!isAdd) {
          checkedKeys.push(item.id)
        }
      })
      var info = await $post(ADD_RESOURCES_TO_VENDER, {
        ids: checkedKeys,
        uuid: this.ruleForm.uuid
      })
      this.dialogUrlResource = false
      console.debug('保存Url')
    },
    /**
     * @author: wangHongFei
     * @description: 查询客户,URL信息
     */
    async findResourcesByVenderId(data, param) {
      var info = await $post(GET_VENDER_ADDITIONAL_INFO_BY_UUID, {
        uuid: data.uuid
      })
      let resourcesByVenderId = window.JSON.parse(info)
      if (resourcesByVenderId.resources && param == 'URL') {
        resourcesByVenderId.resources.map((data, i) => {
          this.resourcesKeyList.push(data.id)
        })
        var childrenList = []
        var resourcesByVender = fixMenus(resourcesByVenderId.resources)
        resourcesByVender.map(function(item) {
          if (item.children[0]) {
            item.children.map(function(childrenItem) {
              childrenList.push(childrenItem)
            })
          }
        })
        this.$refs.urlResources.setCheckedNodes(childrenList)
        // this.resourcesKeyList = fixMenus(resourcesByVenderId.resources)
      }
      if (resourcesByVenderId.departments && param == 'client') {
        this.departmentList = fixMenus(resourcesByVenderId.departments)
      } else {
        this.departmentList = []
      }
      console.debug('客户信息弹窗:', childrenList)
    },
    /**
     * @author: wangHongFei
     * @description: 删除设备厂商
     */
    async deleteInformation(data) {
      var ids = [data.id]
      var info = await $post(DELETE_VENDERS, { ids })
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
      console.debug('删除设备厂商返回信息：', info)
    },
    /**
     * @author: wangHongFei
     * @description: 查询设备厂商
     */
    async findAllInformation() {
      var interfaceParameters = {
        size: this.pageSize,
        start: this.currentPage - 1,
        text: this.searchInput
      }
      var info = await $post(GET_ALL_VENDERS, interfaceParameters)
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
        // 根据uuid查询设备厂商信息
        this.getInformationById(data.uuid)
      } else {
        this.ruleForm = {}
        this.dialogVisibleMessage = true
      }
      console.debug('页面编辑：', data)
    },
    /**
     * @author: wangHongFei
     * @description: 查询设备厂商详情
     */
    async getInformationById(uuid) {
      var info = await $post(GET_VENDER_BY_UUID, { uuid: uuid })
      this.ruleForm = window.JSON.parse(info)
      console.debug('查询设备厂商详情：', this.ruleForm)
    },
    /**
     * @author: wangHongFei
     * @description: 表单验证
     */
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.saveInformation()
        } else {
          this.$message({
            message: '请检查录入信息',
            type: 'error'
          })
          return false
        }
      })
    },
    /**
     * @author: wangHongFei
     * @description: 添加编辑设备厂商
     */
    async saveInformation() {
      console.debug('添加设备厂商信息：', this.ruleForm)
      var info = await $post(ADD_VENDER, this.ruleForm)
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
      console.debug(mapIndex, '添加编辑设备厂商：', this.tableData)
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
      console.debug(`当前页: ${val}`)
    },
    /**
     * @author: wangHongFei
     * @description: 搜索
     */
    async searchStart() {
      // 搜索设备厂商
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
