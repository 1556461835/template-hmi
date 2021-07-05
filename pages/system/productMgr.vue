/*
 * @Description: 系统管理-生产厂商管理
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-01 15:15:32
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:10:20
 */
<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
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
              <span slot-scope="{ node, data }" class="custom-tree-node">
                <span>{{ node.label }}</span>
                <span>
                  <el-button
                    type="text"
                    size="mini"
                    @click="() => append(data)"
                  >
                    添加
                  </el-button>
                  <el-button
                    type="text"
                    size="mini"
                    @click="() => deleteResource(node, data)"
                  >
                    删除
                  </el-button>
                  <el-button
                    type="text"
                    size="mini"
                    @click="() => treeParticulars(node, data)"
                  >
                    详情
                  </el-button>
                </span>
              </span>
            </el-tree>
            <el-button type="text" @click="append()">添加</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card class="box-card">
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane label="部门信息" name="first">
            <el-form ref="form" :model="currentMenu" label-width="80px">
              <el-form-item label="部门名称" prop="name">
                <el-input
                  v-model="currentMenu.name"
                  placeholder="请添加部门名称"
                />
              </el-form-item>
              <el-form-item label="地址" prop="addrezz">
                <el-input
                  v-model="currentMenu.addrezz"
                  placeholder="请输入地址"
                />
              </el-form-item>
              <el-form-item label="联系人" prop="contactUser">
                <el-input
                  v-model="currentMenu.contactUser"
                  placeholder="请输入联系人"
                />
              </el-form-item>
              <el-form-item label="联系电话" prop="contactPhone">
                <el-input
                  v-model="currentMenu.contactPhone"
                  placeholder="请输入联系电话"
                />
              </el-form-item>
              <el-form-item label="传真" prop="fax">
                <el-input
                  v-model="currentMenu.fax"
                  placeholder="请输入传真"
                />
              </el-form-item>
              <el-form-item label="部门信息" prop="description">
                <el-input
                  v-model="currentMenu.description"
                  :autosize="{ minRows: 5, maxRows: 6 }"
                  type="textarea"
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!-- <el-tab-pane
            label="URL资源"
            name="second">URL资源</el-tab-pane> -->
          <el-tab-pane label="用户信息" name="third">
            <user-management :department-uuid="currentMenu.uuid" />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {
  GET_DEPARTMENT_BY_ID, // 根据部门的ID查找部门的详细信息
  GET_ALL_DEPARTMENT, // 获取所有的厂商
  DELETE_DEPARTEMNET, // 删除厂商
  ADD_DEPARTMENT // 添加厂商
} from '@/lib/ApiURL'
import { fixMenus, $post } from '@/lib/Util'
// import userManagement from '@/pages/system/userMgr'
import userManagement from '@/pages/vender/clientMgr/userManagement'
export default {
  components: {
    userManagement
  },
  data() {
    return {
      activeName: 'first', // 标签切换
      roleList: [], // 角色权限集合
      currentMenu: {
        uuid: '==='
      }, // 厂商配置详细信息
      parent: {}, // 父组件信息
      defaultProps: {
        children: 'children',
        label: 'name'
      }, // 树配置
      urlMgrList: [] // 树信息
    }
  },
  created() {
    if (process.server) return
    console.debug('查询部门')
    this.getAllMenus()
  },
  methods: {
    /**
     * @author: wangHongFei
     * @description: 获取厂商
     */
    async getAllMenus() {
      var info = await $post(GET_ALL_DEPARTMENT, { url: '/system/urlMgr' })
      this.urlMgrList = fixMenus(JSON.parse(info))
      this.currentMenu = this.urlMgrList[0]
      console.debug('厂商权限信息:', fixMenus(JSON.parse(info)))
    },
    /**
     * @author: wangHongFei
     * @description: 厂商详情
     */
    async treeParticulars(node, data) {
      var info = await $post(GET_DEPARTMENT_BY_ID, { id: data.id })
      this.currentMenu = window.JSON.parse(info)
      console.debug('参数============', this.currentMenu)
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
      console.debug('resource：', resource)
      var info = await $post(ADD_DEPARTMENT, resource)
      this.getAllMenus()
      console.debug('角色:', JSON.parse(info))
    },
    /**
     * @author: wangHongFei
     * @description: 添加厂商
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
      console.debug('删除厂商：', info)
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
