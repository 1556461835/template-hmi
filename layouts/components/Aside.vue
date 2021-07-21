<!--
 * @Author: lcx
 * @Date: 2021-04-08 09:23:38
 * @LastEditTime: 2021-07-21 10:45:14
 * @LastEditors: Please set LastEditors
 * @Description: 侧导航栏
 * @FilePath: \hmi\layouts\components\Aside.vue
-->

<template>
  <div style="width: 160px"
      class="el-menu-parentDiv">
      <div class="aaasss layout-webkitScrollbar" style="width: 100%;height:100%">
        <el-menu
        :default-active="editableTabsValue"
        :collapse-transition="collapseTransition"
        class="el-menu-vertical-demo"
        router
        unique-opened>
         <menu-item
             v-for="menu in navMenus"
            :key="menu.router"
            :item="menu"
          />
      </el-menu>
      </div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'
export default {
  components: { MenuItem },
  props: {
    navMenus: {
      type: Array,
      default: function() {
        return []
      }
    },
    editableTabsValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      collapseTransition: false, // 禁用折叠动画
      navigationMenu: [
        {
          id: 0,
          router: '/demo',
          name: '示例',
          icon: '',
          children: [
            {
              id: '0-1',
              router: '/demo/table',
              name: '表格',
              icon: ''
            },
            {
              id: '0-2',
              router: '/demo/echarts',
              name: '图表echarts',
              icon: ''
            },
            {
              id: '0-3',
              router: '/demo/form',
              name: '表单form',
              icon: ''
            }
          ]
        },
        {
          id: 1,
          router: '/system',
          name: '系统管理',
          icon: 'el-icon-setting',
          children: [
            {
              id: '1-2',
              router: '/system/urlMgr',
              name: '页面管理',
              icon: 'el-icon-setting'
            },
            {
              id: '1-3',
              router: '/system/roleMgr',
              name: '角色管理',
              icon: 'el-icon-setting'
            },
            {
              id: '1-4',
              router: '/system/venderMgr',
              name: '设备厂商管理',
              icon: 'el-icon-setting'
            },
            {
              id: '1-5',
              router: '/system/userMgr',
              name: '用户管理',
              icon: 'el-icon-setting'
            },
            {
              id: '1-6',
              router: '/system/basicDataConfig',
              name: '基础数据管理',
              icon: 'el-icon-setting'
            }
          ]
        },
        {
          id: 2,
          router: '/vender',
          name: '系统配置',
          icon: 'el-icon-setting',
          children: [
            {
              id: '2-2',
              router: '/vender/basicDataConfig',
              name: '基础数据管理',
              icon: 'el-icon-setting'
            },
            {
              id: '2-4',
              router: '/vender/staffMgr',
              name: '员工管理',
              icon: 'el-icon-setting'
            },
            {
              id: '2-5',
              router: '/vender/clientMgr',
              name: '客户信息管理'
            }
          ]
        },
        {
          id: 3,
          router: '/FM',
          name: '精轧管理',
          icon: '',
          children: [
            {
              id: '3-1',
              router: '/FM/FMPlan',
              name: '轧制计划',
              icon: ''
            },
            {
              id: '3-2',
              router: '/FM/FMQuMo',
              name: '质量监控',
              icon: ''
            },
            {
              id: '3-3',
              router: '/FM/FMMillMo',
              name: '轧制监控',
              icon: ''
            },
            {
              id: '3-4',
              router: '/FM/FMMillStiff',
              name: '轧机刚度',
              icon: ''
            },
            {
              id: '3-5',
              router: '/FM/FMRollCM',
              name: '换辊管理',
              icon: ''
            },
            {
              id: '3-6',
              router: '/FM/FMFur',
              name: '炉内数据',
              icon: ''
            }
          ]
        },
        {
          id: 4,
          router: '/CT',
          name: '层冷管理',
          icon: '',
          children: [
            {
              id: '4-1',
              router: '/CT/CTModelSp',
              name: '模型设定',
              icon: ''
            }
          ]
        }
      ] // 侧导航目录
    }
  }
}
</script>
