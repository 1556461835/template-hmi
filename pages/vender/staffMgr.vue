/*
 * @Description: 设备厂商平台-员工管理
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
            round
            @click="editInformation()"
          >添加员工</el-button>
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
        label="员工名"
        width="100"
      />
      <el-table-column
        prop="cname"
        label="中文名"
        width="100"
      />
      <el-table-column
        prop="phone"
        label="电话号码"
        width="120"
      />
      <el-table-column
        prop="department.name"
        label="部门"
        width="200"
      />
      <el-table-column
        prop="description"
        label="描述"
        width="200"
      />
      <el-table-column
        prop="address"
        label="地址"
        width="200"
      />
      <el-table-column
        prop="gender"
        label="性别"
        width="80"
      />
      <el-table-column
        :formatter="formatterSafeLogin"
        prop="safeLogin"
        label="安全登陆"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="editInformation(scope.row)"
          />
          <el-button
            type="warning"
            size="small"
            @click="editjurisdiction(scope.row)"
          >权限</el-button>
          <el-button
            type="danger"
            size="small"
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
    <!-- 员工信息编辑 -->
    <!-- <information-edit-dialog
      :dialog-visible-message="dialogVisibleMessage"
      :edit-information="ruleForm"
      :edit-information-list="ruleFormList"
      @saveInformation="submitForm"
    /> -->
    <el-dialog
      :visible.sync="dialogVisibleMessage"
      width="50%"
      title="编辑员工信息"
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
            <el-form-item
              label="员工名"
              prop="name"
            >
              <el-input
                v-model="ruleForm.name"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="中文名"
              prop="cname"
            >
              <el-input
                v-model="ruleForm.cname"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="地址"
              prop="address"
            >
              <el-input
                v-model="ruleForm.address"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="电话"
              prop="phone"
            >
              <el-input
                v-model="ruleForm.phone"
                type="number"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="性别"
              prop="gender"
            >
              <el-select
                v-model="ruleForm.gender"
                placeholder="请选择性别"
              >
                <el-option
                  label="男"
                  value="男"
                />
                <el-option
                  label="女"
                  value="女"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="安全登陆"
              prop="safeLogin"
            >
              <el-switch
                v-model="ruleForm.safeLogin"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item
              label="部门"
              prop="department">
              <el-cascader
                v-model="departmentIdArray"
                :options="depatmentList"
                :props="defaultProps"
                :show-all-levels="showAllLevels"
                change-on-select
                @change="handleChange"/>
            </el-form-item>
          </el-col>
          <el-col
            v-if = "!ruleForm.uuid"
            :span="12"
          >
            <el-form-item
              label="新密码"
              prop="newPassword"
            >
              <el-input
                v-model="ruleForm.newPassword"
                type="password"
              />
            </el-form-item>
          </el-col>
          <el-col
            v-if = "!ruleForm.uuid"
            :span="12"
          >
            <el-form-item
              label="确认密码"
              prop="affirmPassword"
            >
              <el-input
                v-model="ruleForm.affirmPassword"
                type="password"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item
              label="描述"
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
          type="warning"
          @click="resetForm('ruleForm')"
        >重 置</el-button> -->
        <el-button
          type="primary"
          @click="submitForm()"
        >保 存</el-button>
      </span>
    </el-dialog>
    <!-- 员工权限编辑 -->
    <el-dialog
      :visible.sync="dialogVisibleJurisdiction"
      width="50%"
      title="编辑员工权限"
    >
      <el-checkbox-group
        v-model="rolesTypeList"
      >
        <el-checkbox
          v-for = "all in rolesIdList.all"
          :key = "all.id"
          :label = "all.id"
          name = "type"
          border
          style = "margin:5px"
        >{{ all.name }}</el-checkbox>
      </el-checkbox-group>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="updateUserOperRight()"
        >保存权限</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  GET_BY_NAME, // 根据员工名称查询员工
  GET_USER_BY_DEPARTMENT_UUID, // 查询部门下的员工
  ADD_USER, // 添加编辑员工
  GET_USER_DEPARTMENTS, // 获取部门信息
  GET_USER_BY_UUID, // 查询员工信息
  UPDATE_USER_OPER_RIGHT, // 更改员工权限
  GET_CURRENT_AND_ALL_ROLE, // 获取所有的权限
  DELETE_USER, // 删除员工
  GET_VENDER_USERS // 获取所有员工
} from '@/lib/ApiURL'
import { $post, fixMenus } from '@/lib/Util'
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (!/^[a-zA-z]\w{4,15}$/.test(this.ruleForm.name)) {
        callback(new Error('员工名应以字母、数字、下划线组成，字母开头!'))
      } else {
        callback()
      }
    }
    return {
      searchSelect: '', // 搜索框选择
      searchInput: '', // 搜索框内容
      ruleForm: {}, // 编辑信息
      ruleValidation: {
        name: [
          { required: true, message: '请输入账户名称', trigger: 'blur' },
          {
            min: 5,
            max: 16,
            message: '长度在 5 到 16 个字符',
            trigger: 'blur'
          },
          { validator: validateName, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            min: 11,
            max: 11,
            message: '请输入正确手机号',
            trigger: 'blur'
          }
        ],
        department: [
          {
            required: true,
            message: '请选择部门',
            trigger: 'blur'
          }
        ]
      },
      departmentIdArray: [], // 部门名称
      depatmentList: [], // 部门集合
      depatmentArray: [], // 未整理的部门数据
      rolesTypeList: [], // 选择的员工权限
      showAllLevels: false,
      // 部门级联选择配置
      defaultProps: {
        children: 'children',
        label: 'name',
        value: 'id'
      }, // 级联配置
      rolesIdList: [], // 员工权限
      dialogVisibleJurisdiction: false, // 员工权限编辑弹窗
      dialogVisibleMessage: false, // 员工信息弹窗编辑
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
     * @description: 格式化安全登陆
     */
    formatterSafeLogin(row, column) {
      var item = '否'
      if (row.safeLogin) {
        item = '是'
      }
      return item
    },
    /**
     * @author: wangHongFei
     * @description: 删除员工
     */
    async deleteInformation(data) {
      var ids = [data.id]
      var info = await $post(DELETE_USER, { ids })
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
      console.debug('删除员工返回信息：', info)
    },
    /**
     * @author: wangHongFei
     * @description: 查询员工
     */
    async findAllInformation() {
      var interfaceParameters = {
        size: this.pageSize,
        start: this.currentPage - 1,
        text: this.searchInput,
        uuid: this.$store.state.user.venderUUID
      }
      var interfaceId = GET_VENDER_USERS // 查询所有员工
      console.log(interfaceId + '..............')

      var info = await $post(interfaceId, interfaceParameters)
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
        // 编辑员工不需验证密码
        this.ruleValidation.newPassword = []
        this.ruleValidation.affirmPassword = []
        // 根据uuid查询员工信息
        this.getUserById(data.uuid)
      } else {
        // 添加员工密码验证
        this.ruleValidation.newPassword = [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 5,
            max: 16,
            message: '密码长度在 5 到 16 个字符',
            trigger: 'blur'
          }
        ]
        this.ruleValidation.affirmPassword = [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            min: 5,
            max: 16,
            message: '密码长度在 5 到 16 个字符',
            trigger: 'blur'
          },
          {
            validator: this.validateAffirmPassword,
            trigger: 'blur'
          }
        ]
        this.ruleForm.safeLogin = true
        this.ruleForm.gender = '男'
        this.findAllDepatment()
      }
      console.debug('页面编辑：', data)
    },
    /**
     * @author: wangHongFei
     * @description: 确认输入密码验证
     */
    validateAffirmPassword(rule, value, callback) {
      if (value !== this.ruleForm.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    },
    /**
     * @author: wangHongFei
     * @description: 编辑权限
     */
    editjurisdiction(data) {
      this.ruleForm = data
      this.findCurrentAndAllRole(data.uuid)
      console.debug('编辑权限：', data)
    },
    /**
     * @author: wangHongFei
     * @description: 级联选择
     */
    handleChange(item) {
      var itemId = item[item.length - 1]
      var department = {}
      this.depatmentArray.map(function(item, index) {
        if (item.id === itemId) {
          department = item
        }
      })
      this.ruleForm.department = department
    },
    /**
     * @author: wangHongFei
     * @description: 查询员工详情
     */
    async getUserById(uuid) {
      var info = await $post(GET_USER_BY_UUID, { uuid: uuid })
      this.ruleForm = window.JSON.parse(info)
      this.departmentIdArray = [this.ruleForm.department.id]
      this.findAllDepatment()
      console.debug('查询员工详情：', this.ruleForm)
    },
    /**
     * @author: wangHongFei
     * @description: 获取父类ID
     */
    getParentId(departmentArray) {
      // var departmentIdLength = this.departmentIdArray.length - 1
      var departmentId = this.departmentIdArray[0]
      var departmentPid = null
      departmentArray.map(function(item, index) {
        if (departmentId === item.id) {
          departmentPid = item.pId
        }
      })
      if (!departmentPid) {
        return
      }
      console.debug('子类ID：', departmentId)
      var itemId = ''
      departmentArray.map(function(item, index) {
        if (departmentPid === item.id) {
          itemId = item.id
        }
      })
      if (itemId) {
        this.departmentIdArray.splice(0, 0, itemId)
        this.getParentId(departmentArray)
      }
    },
    /**
     * @author: wangHongFei
     * @description: 查询员工权限
     */
    async findCurrentAndAllRole(uuid) {
      var info = await $post(GET_CURRENT_AND_ALL_ROLE, { uuid: uuid, type: 2 })
      this.rolesIdList = window.JSON.parse(info)
      if (this.rolesIdList.user) {
        this.rolesIdList.user.map((data, i) => {
          this.rolesTypeList.push(data.id)
        })
      }
      this.dialogVisibleJurisdiction = true
      console.debug('员工权限：', this.rolesIdList)
    },
    /**
     * @author: wangHongFei
     * @description: 获取所有的部门
     */
    async findAllDepatment() {
      var userId = this.$store.state.user.userId
      var info = await $post(GET_USER_DEPARTMENTS, { id: userId })
      this.depatmentArray = JSON.parse(info) // 未整理的部门数据
      if (this.ruleForm.uuid) {
        this.getParentId(this.depatmentArray)
      } else {
        var departmentId = this.depatmentArray[0].id
        this.departmentIdArray = [departmentId]
        this.ruleForm.department = this.depatmentArray[0]
      }
      console.debug('部门选中ID：', this.departmentIdArray)
      this.depatmentList = fixMenus(JSON.parse(info))
      this.dialogVisibleMessage = true // 打开弹窗
      console.debug('当前员工信息：', this.ruleForm)
    },
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.saveUser()
        } else {
          this.$message({
            message: '请检查员工信息',
            type: 'error'
          })
          return false
        }
      })
    },
    /**
     * @author: wangHongFei
     * @description: 添加编辑员工
     */
    async saveUser() {
      console.debug('添加员工信息：', this.ruleForm)
      this.ruleForm.password = this.ruleForm.newPassword
      var info = await $post(ADD_USER, this.ruleForm)
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
      console.debug(mapIndex, '添加编辑员工：', this.tableData)
    },
    /**
     * @author: wangHongFei
     * @description: 更改员工权限
     */
    async updateUserOperRight() {
      let item = {
        userId: this.ruleForm.id + '',
        ids: this.rolesTypeList
      }
      var info = await $post(UPDATE_USER_OPER_RIGHT, item)
      this.dialogVisibleJurisdiction = false
      console.debug('更改员工权限：', info)
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
</style>
