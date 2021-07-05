/*
 * @Description: 设备厂商平台-客户信息管理
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-02 10:10:56
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:13:41
 */
<template>
  <el-row :gutter="24">
    <el-col :span="8">
      <el-card class="box-card">
        <div
          slot="header"
          class="clearfix"
        >
          <span>组织机构</span>
        </div>
        <div class="custom-tree-container">
          <div class="block">
            <el-tree
              :data="urlMgrList"
              :props="defaultProps"
              :expand-on-click-node="false"
              node-key="id"
            >
              <span
                slot-scope="{ node, data }"
                class="custom-tree-node"
              >
                <span>{{ node.label }}</span>
                <span>
                  <el-button
                    type="text"
                    size="mini"
                    @click="() => append(data)">
                    添加
                  </el-button>
                  <el-button
                    type="text"
                    size="mini"
                    @click="() => deleteResource(node, data)">
                    删除
                  </el-button>
                  <el-button
                    type="text"
                    size="mini"
                    @click="() => treeParticulars(node, data)">
                    详情
                  </el-button>
                </span>
              </span>
            </el-tree>
            <el-button
              type="text"
              @click="append()"
            >添加</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card class="box-card">
        <el-tabs
          v-model="activeName"
          stretch
        >
          <el-tab-pane
            label="组织机构信息"
            name="first"
          >
            <el-form
              ref="form"
              :model="currentMenu"
              style="padding-top: 10px"
              label-width="80px"
            >
              <el-form-item
                label="名称"
                prop="name">
                <el-input
                  v-model="currentMenu.name"
                  placeholder="请添加客户名称"
                />
              </el-form-item>
              <el-form-item
                label="地址"
                prop="addrezz">
                <el-input
                  v-model="currentMenu.addrezz"
                  placeholder="请输入客户地址"
                />
              </el-form-item>
              <el-form-item
                label="联系人"
                prop="contactUser">
                <el-input
                  v-model="currentMenu.contactUser"
                  placeholder="请输入客户联系人"
                />
              </el-form-item>
              <el-form-item
                label="联系电话"
                prop="contactPhone">
                <el-input
                  v-model="currentMenu.contactPhone"
                  placeholder="请输入客户联系电话"
                />
              </el-form-item>
              <el-form-item
                label="传真"
                prop="fax">
                <el-input
                  v-model="currentMenu.fax"
                  placeholder="请输入传真"
                />
              </el-form-item>
              <el-form-item
                label="部门描述"
                prop="description">
                <el-input
                  v-model="currentMenu.description"
                  :autosize="{ minRows: 5, maxRows: 6}"
                  type="textarea"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="onSubmit"
                >保存</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!-- <el-tab-pane
            label="URL资源"
            name="second">URL资源</el-tab-pane> -->
          <el-tab-pane
            label="用户信息"
            name="third">
            <user-management
              :department="currentMenu"
              :department-uuid="currentMenu.uuid"/>
          </el-tab-pane>
          <el-tab-pane
            label="页面配置"
            name="configuration">
            <el-tree
              ref="treeResources"
              :data="treeResources"
              :props="defaultProps"
              show-checkbox
              node-key="id"
              highlight-current
            />
            <el-button
              type="primary"
              @click="addResourcesToDepartment"
            >保存权限</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {
  ADD_RESOURCES_TO_DEPARTMENT, // 保存树形选中的资源
  GET_USER_VENDERS_DEPARTMENTS, // 根据uuid获取设备客户平台的
  GET_RESOURCES_BY_VENDER_UUID, // 查询可配置的页面路由
  GET_RESOURCES_BY_DEPT_UUID, // 查询页面展示树
  GET_DEPARTMENT_BY_ID, // 根据部门的ID查找部门的详细信息
  GET_ALL_DEPARTMENT, // 获取所有的客户
  DELETE_DEPARTEMNET, // 删除客户
  ADD_TO_VENDER // 添加客户
} from '@/lib/ApiURL'
import { fixMenus, $post } from '@/lib/Util'
import userManagement from './userManagement'
export default {
  components: {
    userManagement
  },
  data() {
    return {
      activeName: 'first', // 标签切换
      currentMenu: {
        uuid: '==='
      }, // 客户配置详细信息
      parent: {}, // 父组件信息
      defaultProps: {
        children: 'children',
        label: 'name'
      }, // 树配置
      treeResources: [], // 部门页面信息
      urlMgrList: [] // 树信息
    }
  },
  created() {
    if (process.server) return
    console.debug('查询部门')
    this.getAllMenus()
    this.findResourcesByVenderUUID()
  },
  methods: {
    /**
     * @author: wangHongFei
     * @description: 获取客户
     */
    async getAllMenus() {
      var uuid = this.$store.state.user.uuid
      var info = await $post(GET_USER_VENDERS_DEPARTMENTS, { uuid: uuid })
      this.urlMgrList = fixMenus(JSON.parse(info))
      this.currentMenu = this.urlMgrList[0]
      console.log('this.currentMenu====', JSON.parse(info))
      this.findResourcesByDeptUUID()
      console.debug('客户权限信息:', fixMenus(JSON.parse(info)))
    },
    /**
     * @author: wangHongFei
     * @description: 客户详情
     */
    async treeParticulars(node, data) {
      var info = await $post(GET_DEPARTMENT_BY_ID, { id: data.id })
      this.currentMenu = window.JSON.parse(info)
      this.findResourcesByDeptUUID()
    },
    /**
     * @author: wangHongFei
     * @description: 根据venderUUID 获取url弹出的树形资源
     */
    async findResourcesByVenderUUID() {
      var uuid = this.$store.state.user.venderUUID
      // var uuid = this.$store.state.user.deptUUID
      var info = await $post(GET_RESOURCES_BY_VENDER_UUID, { uuid: uuid })
      this.treeResources = fixMenus(JSON.parse(info))
      console.log('====================', this.treeResources)
    },
    /**
     * @author: wangHongFei
     * @description: 查询页面树
     */
    async findResourcesByDeptUUID() {
      console.log('===')
      var uuid = this.currentMenu.uuid

      var info = await $post(GET_RESOURCES_BY_DEPT_UUID, { uuid: uuid })
      console.log(uuid, '查询页面树：', fixMenus(JSON.parse(info)))
      var childrenList = []
      var resourcesByVender = fixMenus(JSON.parse(info))
      resourcesByVender.map(function(item) {
        if (item.children[0]) {
          item.children.map(function(childrenItem) {
            childrenList.push(childrenItem)
          })
        }
      })
      this.$refs.treeResources.setCheckedNodes(childrenList)
    },
    /**
     * @author: wangHongFei
     * @description: 更改分配的权限
     */
    async addResourcesToDepartment() {
      var checkedKeys = this.$refs.treeResources.getCheckedKeys()
      var checkedNodes = fixMenus(this.$refs.treeResources.getCheckedNodes())
      this.treeResources.map(function(item) {
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
      var updateUser = {
        uuid: this.currentMenu.uuid,
        ids: checkedKeys
      }
      var info = await $post(ADD_RESOURCES_TO_DEPARTMENT, updateUser)
      console.debug('查询页面树：', checkedKeys)
    },
    /**
     * @name: wangHongFei
     * @description: 表单提交
     */
    async onSubmit() {
      var resource = this.currentMenu
      let nodePath
      if (!resource.id) {
        if (this.parent && this.parent.id) {
          if (this.parent.nodePath) {
            nodePath = this.parent.nodePath + '/' + this.parent.id + '/'
          } else {
            nodePath = '/' + this.parent.id + '/'
          }
          resource['parent'] = {
            id: this.parent.id,
            name: this.parent.name
          }
          resource['nodePath'] = nodePath
        }
      }
      console.debug('保存信息：', resource)
      var info = await $post(ADD_TO_VENDER, {
        uuid: this.$store.state.user.venderUUID,
        department: resource
      })
      this.getAllMenus()
      console.debug('角色:', JSON.parse(info))
    },
    /**
     * @author: wangHongFei
     * @description: 添加客户
     */
    append(data, item) {
      this.parent = data
      this.currentMenu = {}
      console.debug('树组件添加：', data, '====树组件编辑：', item)
    },
    /**
     * @author: wangHongFei
     * @description: 树组件删除
     */
    async deleteResource(node, data) {
      var info = await $post(DELETE_DEPARTEMNET, { id: data.id })
      console.debug('删除客户：', info)
      let status = window.JSON.parse(info).status
      if (status === 'success') {
        this.$message({
          showClose: true,
          message: '删除成功',
          type: 'success'
        })
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex((d) => d.id === data.id)
        children.splice(index, 1)
      } else {
        this.$message({
          showClose: true,
          message: '删除失败',
          type: 'error'
        })
      }
    }
  }
}
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
