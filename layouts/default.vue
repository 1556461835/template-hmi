<!--
 * @Author: your name
 * @Date: 2021-04-07 13:58:25
 * @LastEditTime: 2021-07-21 13:48:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\layouts\default.vue
-->
<template>
  <div :class="themeClass">
    <Header :navigation-menu="navigationMenu" @clickMenus="handleMenusClick" @changeThem="changeThem"></Header>
    <el-container class="app-container">
      <Aside v-show="isShowAside(menus)" :style="'height:' + (parseInt(windowHeight) - 88) + 'px;'" :nav-menus='menus' :editable-tabs-value='checkPath' ></Aside>
      <el-container :style="'height:' + (parseInt(windowHeight) - 88) + 'px;'">
        <div class="layout-webkitScrollbar main">
          <nuxt />
        </div>
        <right-aside></right-aside>
      </el-container>
    </el-container>
    <el-dialog
      :visible.sync="isShow"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      title="提示"
      width="30%"
    >
      <span>{{ message }}</span>
      <span slot="footer">
      <el-button @click = "closeModal()">退 出</el-button>
      <el-button
        type="primary"
        @click = "reLogin()">重新登陆</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Header from './components/Header'
import Aside from './components/Aside'
import RightAside from './components/RightAside'
import moment from 'moment'
import { GET_USER_MENUS } from '@/lib/ApiURL'
import WebSocketService from '@/lib/WebSocketService'
import { fixMenus, $post, loginByToken, getConfig } from '@/lib/Util'
import { stopGetData } from '@/lib/GetData'
export default {
  components: { Header, Aside, RightAside },
  data() {
    return {
      msg: 'Dynamic Themes',
      theme: 'them-light',
      windowHeight: '', // 页面高度
      navigationMenu: [], // 页面信息
      message: '', // 账户重复登陆提示信息
      isShow: false, // 重新登陆提示窗
      alreadyLogin: true,
      websocket: {},
      menus: [],
      checkPath: '', // 选中的路径
      title: '首页' // 浏览器的标题
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'keywords',
          content: '首页'
        }
      ]
    }
  },
  computed: {
    themeClass() {
      return `theme-${this.theme}`
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        if (val.path !== '/') {
          this.showTitle(val, this.navigationMenu)
          this.checkPath = val.path
        } else {
          if (this.navigationMenu.length !== 0) {
            this.menus = this.navigationMenu[0].children
            this.$router.push({ path: this.menus[0].router })
            this.checkPath = this.menus[0].router
          }
        }
        stopGetData()
      },
      // 深度观察监听
      deep: true,
      immediate: true
    }
  },
  created() {
    if (process.server) return
    this.websocket = WebSocketService.getInstance(
      this.onMessageHandler,
      this.onOpen
    )
    this.getUserMenus()
  },
  mounted() {
    window.addEventListener('resize', () => this.handleWindowHeight())
    this.handleWindowHeight()
  },
  methods: {
    showTitle(val, menus) {
      for (const item of menus) {
        if (val.path == item.router) {
          this.title = item.name + '-' + getConfig('config.title')
        }
        if (item.children && item.children.length > 0) {
          this.showTitle(val, item.children)
        }
      }
    },
    // 用于控制显示左边菜单
    isShowAside(arr) {
      if (arr.length != 0) {
        return true
      }
      return false
    },
    changeThem(e) {
      this.theme = e
    },
    handleMenusClick(menus) {
      this.menus = menus.children
    },
    filterMenus(menus) {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].type == 'button') {
          menus.splice(i, 1)
        } else {
          if (menus[i].children && menus[i].children.length > 0) {
            this.filterMenus(menus[i].children)
          }
        }
      }
      return menus
    },
    handleWindowHeight() {
      this.windowHeight = document.documentElement.clientHeight
    },
    /**
     * @author: wangHongFei
     * @description: 查询列表信息
     */
    async getUserMenus() {
      var userId = this.$store.state.user.userId
      var info = await $post(GET_USER_MENUS, { id: userId })
      this.$nuxt.$store.commit('allMenus', JSON.parse(info))
      this.navigationMenu = fixMenus(JSON.parse(info))
      this.filterMenus(this.navigationMenu)

      if (this.$route.path !== '/') {
        let pathList = this.$route.path.split('/')
        for (const item of this.navigationMenu) {
          if (item.router.indexOf(pathList[1]) !== -1) {
            this.menus = item.children
            break
          }
        }
        this.checkPath = this.$route.path
      } else {
        if (this.navigationMenu.length !== 0) {
          this.menus = this.navigationMenu[0].children
          this.$router.push({ path: this.menus[0].router })
          this.checkPath = this.menus[0].router
        }
      }
      for (const item of this.menus) {
        if (this.checkPath == item.router) {
          this.title = item.name + '-' + getConfig('config.title')
        }
      }
    },
    /**
     * @author: wangHongFei
     * @description: 退出登陆
     */
    closeModal(ReLogin) {
      this.isShow = false
      localStorage.clear()
      this.$router.push('/login')
    },
    /**
     * @author: wangHongFei
     * @description: 重新登陆
     */
    reLogin() {
      this.websocket = WebSocketService.getInstance(
        this.onMessageHandler,
        this.onOpen
      )
      this.isShow = false
    },
    onMessageHandler(event) {
      if (
        event.data &&
        event.data.lastIndexOf('forceQuit') > -1 &&
        event.data.lastIndexOf('web') > -1
      ) {
        this.alreadyLogin = false
        if (this.websocket) {
          WebSocketService.closeWebSocket()
        }
        // 显示重新登录提示框
        this.message =
          '你的账号于' +
          moment().format('YYYY/MM/DD HH:mm') +
          '在另一台电脑登陆, 如非本人操作，则密码以泄露，建议前往登陆页面修改密码'
        this.isShow = true
      }
    },
    async onOpen(event) {
      if (this.alreadyLogin) {
        // 注册 websocket
        this.websocket.send(
          '{"command": "register", "terminal": "web", "uuid": "' +
            this.$store.state.user.uuid +
            '"}'
        )
      } else {
        // 自动登录
        var token = localStorage.getItem('token')
        if (!token) {
          // 显示自动登录失败，跳回 login 界面
          return
        }
        let result = await loginByToken(JSON.parse(token))
        // this.addUser({ user })
        this.$nuxt.$store.commit('setUser', result)
        this.alreadyLogin = true
        // close model
        this.websocket.send(
          '{"command": "register", "terminal": "web", "uuid": "' +
            this.$store.state.user.uuid +
            '"}'
        )
        this.isShow = false
        return
      }
    }
  }
}
</script>

<style scoped>
.main {
  margin: 8px 0 8px 8px;
  padding: 0;
  flex: 1;
  display: block;
  height: auto;
  box-sizing: border-box;
}
</style>
