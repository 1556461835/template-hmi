/*
 * @Description: 系统管理-页面路由权限管理
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-10-27 17:15:28
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-19 09:46:59
 */
<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>页面路由权限管理</span>
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
                  <el-button
                    v-if="data.type !== 'button'"
                    type="text"
                    size="mini"
                    icon="el-icon-sort-up"
                    @click="moveUp(node, data)"
                  />
                  <el-button
                    v-if="data.type !== 'button'"
                    type="text"
                    size="mini"
                    icon="el-icon-sort-down"
                    @click="moveDown(node, data)"
                  />
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
        <div slot="header" class="clearfix">
          <span>详细信息</span>
        </div>
        <el-form ref="form" :model="currentMenu" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="currentMenu.name" placeholder="请添加页面名称" />
          </el-form-item>
          <el-form-item label="图标">
            <el-input v-model="currentMenu.icon" placeholder="请输入页面图标" />
          </el-form-item>
          <el-form-item label="接口权限">
            <el-input
              v-model="currentMenu.url"
              placeholder="请输入页面接口权限"
            />
          </el-form-item>
          <el-form-item label="路由">
            <el-input
              v-model="currentMenu.router"
              placeholder="请输入页面路由"
            />
          </el-form-item>
          <el-form-item label="角色">
            <el-select v-model="currentMenu.role" placeholder="请选择角色权限" clearable>
              <el-option
                v-for="r in roleList"
                :key="r.id"
                :value="r.id"
                :label="r.name"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="currentMenu.type" placeholder="请选择路由类型">
              <el-option label="目录" value="menu" />
              <el-option label="按钮" value="button" />
            </el-select>
          </el-form-item>
          <el-form-item label="显示类型">
            <el-select
              v-model="currentMenu.device"
              placeholder="请选择路由类型"
            >
              <el-option :value="0" label="通用" />
              <el-option :value="1" label="web" />
              <el-option :value="2" label="手机" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {
  GET_ALL_MENUS, // 获取所有的路由
  GET_ALL_ROLES, // 获取所有的角色权限
  DEL_RESOURCE, // 删除路由
  ADD_RESOURCE // 添加路由//order路径排序
} from '@/lib/ApiURL'
import _ from 'lodash'
// var _ = require('lodash')
import { fixMenus, $post } from '@/lib/Util'
export default {
  data() {
    return {
      menuList: [], // 未整理的路由数据
      roleList: [], // 角色权限集合
      currentMenu: {}, // 路由配置详细信息
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
    this.getAllRoles()
  },
  methods: {
    /**
     * @author: wangHongFei
     * @description: 内容上移
     */
    moveUp(node, data) {
      console.debug('上移：', node, data)
      this.changePosition(node, data, -1)
    },
    /**
     * @author: wangHongFei
     * @description: 内容下移
     */
    moveDown(node, data) {
      console.debug('下移：', node, data)
      this.changePosition(node, data, 1)
    },
    /**
     * @author: wangHongFei
     * @description: 交换数据位置
     */
    changePosition(node, data, moveLocation) {
      console.debug(
        node.parent,
        '交换数据位置：',
        Array.isArray(node.parent.data)
      )
      var urlMgrList = Array.isArray(node.parent.data)
        ? node.parent.data
        : node.parent.data.children
      console.debug('查询位置数据：', urlMgrList)
      var dataIndex = null
      urlMgrList.map((parentItem, parentIndex) => {
        if (data.id === parentItem.id) {
          dataIndex = parentIndex
        }
      })
      var lordData = urlMgrList[dataIndex] // 主数据
      var replaceData = urlMgrList[dataIndex + moveLocation] // 代替换的数据
      var lordIndex = dataIndex + moveLocation // 主数据位置
      var replaceIndex = dataIndex + moveLocation - moveLocation // 替换数据的位置
      if (lordData && replaceData) {
        lordData.rOrder = lordIndex + 1
        replaceData.rOrder = replaceIndex + 1
        this.parent = null // 清空默认父类
        // 更换数组中的位置
        this.menuList.map(function(item, index) {
          if (item.id === lordData.id) {
            lordIndex = index
          } else if (replaceData.id === item.id) {
            replaceIndex = index
          }
        })
        this.menuList.splice(replaceIndex, 1, lordData)
        this.menuList.splice(lordIndex, 1, replaceData)

        this.saveResource(lordData) // 保存主数据
        this.saveResource(replaceData) // 保存替换数据
      }
    },
    /**
     * @author: wangHongFei
     * @description: 保存url数据
     */
    async saveResource(currentMenu) {
      console.log('保存数据da==================ta', currentMenu)
      var resource = _.clone(currentMenu)
      console.debug('页面编辑信息：', currentMenu)
      resource['role'] = {}
      resource['role'].id = currentMenu.role
      // 获取更改数据的父类
      var parent = this.parent
      this.menuList.map(function(item) {
        if (item.id === currentMenu.pId) {
          parent = item
        }
      })

      let newResource = resource
      if (parent && parent.id) newResource.parent = parent
      if (newResource.role && newResource.role.id === 0) delete newResource.role
      var info = await $post(ADD_RESOURCE, newResource)
      console.debug('保存返回值:', info)
      info = JSON.parse(info)
      // 设置角色ID
      if (info.role) {
        info.roleId = info.role.id
      }
      // 设置父类ID
      if (info.parent) {
        info.pId = info.parent.id
      }
      if (currentMenu.id) {
        var newMenuList = []
        this.menuList.map(function(item) {
          if (item.id === info.id) {
            newMenuList.push(info)
          } else {
            newMenuList.push(item)
          }
        })
        this.menuList = newMenuList
      } else {
        this.menuList.push(info)
      }
      this.urlMgrList = fixMenus(this.menuList)
      this.$message({
        showClose: true,
        message: '保存成功',
        type: 'success'
      })
    },
    /**
     * @author: wangHongFei
     * @description: 获取路由
     */
    async getAllMenus() {
      var info = await $post(GET_ALL_MENUS, { url: '/system/urlMgr' })
      this.menuList = JSON.parse(info)
      this.urlMgrList = fixMenus(JSON.parse(info))
      this.currentMenu = this.urlMgrList[0]
      if (this.urlMgrList[0].role) {
        this.currentMenu.role = this.urlMgrList[0].role.id
      }
      // var info = $post(GET_ALL_MENUS, { url: '/system/urlMgr' })
      console.debug('路由权限信息:', fixMenus(JSON.parse(info)))
    },
    /**
     * @author: wangHongFei
     * @description: 获取所有的角色
     */
    async getAllRoles() {
      var info = await $post(GET_ALL_ROLES, { text: null })
      this.roleList = JSON.parse(info)
    },
    /**
     * @author: wangHongFei
     * @description: 树组件点击
     */
    treeParticulars(node, data) {
      console.debug('树组件点击：', node, data)
      if (data.roleId) {
        data['role'] = data.roleId
      }
      this.currentMenu = _.clone(data)
    },
    /**
     * @name: wangHongFei
     * @description: 表单提交
     */
    async onSubmit() {
      this.saveResource(this.currentMenu)
    },
    /**
     * @author: wangHongFei
     * @description: 添加路由
     */
    append(data, item) {
      if (data) {
        this.parent = data
      } else {
        this.parent = null
      }
      this.currentMenu = { type: 'menu' }
      console.debug('树组件添加：', data, '====树组件编辑：', item)
    },
    /**
     * @author: wangHongFei
     * @description: 树组件删除
     */
    async deleteResource(node, data) {
      console.log('删除路由data：', data)
      var info = await $post(DEL_RESOURCE, { ids: [data.id] })
      console.log('删除路由：', info)
      let status = window.JSON.parse(info).status
      if (status === 'success') {
        this.$message({
          showClose: true,
          message: '删除成功',
          type: 'success'
        })
        this.getAllMenus()
        // const parent = node.parent
        // const children = parent.data.children || parent.data
        // const index = children.findIndex(d => d.id === data.id)
        // children.splice(index, 1)
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
.box-card {
  font-size: 16px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
