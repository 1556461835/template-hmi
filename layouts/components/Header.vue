<!--
 * @Author: lcx
 * @Date: 2021-04-07 14:24:18
 * @LastEditTime: 2021-05-27 14:18:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hmi\layouts\components\Header.vue
-->
<template>
  <div class="layout-header flex align-center justify-between">
    <!-- logo -->
    <img src="../../assets/img/leftLogo.png"
         alt="logo"
         width="126px"
         height="44px">
    <div class="flex justify-between align-center " style="flex: 1">
      <!-- warn -->
      <div class="layout-warn">
        <el-row class="layout-warn-info margin-bottom-8">
          <el-col :span="8"
                  class="color-light-block text-weight4">报警信息 <span class="color-block text-weight7">未找到即将上线的板坯</span></el-col>
          <el-col :span="4"
                  class="color-light-block text-weight4">来源 <span class="color-block text-weight7">HTK</span></el-col>
          <el-col :span="4"
                  class="color-light-block text-weight4">报警号 <span class="color-block text-weight7">2003</span></el-col>
          <el-col :span="8"
                  class="color-light-block text-weight4">报警时间: <span class="color-block text-weight7">2021-03-04 10:10:10</span></el-col>
        </el-row>
        <div>
          <el-button v-for="(v,index) in navigationMenu" :key="index" size="mini"
              :style="{background: v.id == checkMenu.id ? '#3F66E4': '#409EFF'}"
              type="primary" @click="handleMenuClick(v)">{{v.name}}</el-button>
        </div>
      </div>
      <!-- user -->
      <div class="flex align-center">
        <div style="min-width:110px" class="margin-right-24">
          <dropdown-head-portrait />
        </div>
        <div class="margin-right-24">
          <el-popover
            placement="bottom"
            width="400"
            trigger="click">
            <ul class="error-info layout-webkitScrollbar">
              <li v-for="(item, index) in $store.state.errorInfo" :key="index">
                <p>{{item.errInfo}}</p>
                <!-- <p>2012年10月21日 00:00:00</p> -->
              </li>
            </ul>
            <el-badge  slot="reference" :value="$store.state.errorInfo.length" style="font-size: 28px;color: #606060;font-weight: 600">
              <i class="el-icon-bell" ></i>
            </el-badge>
          </el-popover>
        </div>
        <!-- fullScreen -->
        <div class="margin-right-24" style="font-size: 28px">
          <hmi-full-screen />
        </div>
        <div class="layout-head-them">
          <el-dropdown trigger="click" @command="changeThem">
            <span class="el-dropdown-link">
              <i class="iconfont icon-huanfu" style="font-size: 28px;color: #606060"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="them-deep">深色</el-dropdown-item>
              <el-dropdown-item command="them-light">浅色</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- time -->
        <div class="layout-head-user-time">
          <p>{{time.date}}</p>
          <p>{{time.hour}} {{week[time.week]}}</p>
        </div>
        <div>
          <img src="../../assets/img/rightLogo.png"
              alt="logo"
              width="135px"
              height="32px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DropdownHeadPortrait from '@/components/DropdownHeadPortrait'
import moment from 'moment'
export default {
  components: { DropdownHeadPortrait },
  props: {
    navigationMenu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      time: {
        date: '1970年1月1日',
        hour: '00:00:00',
        week: '星期一'
      },
      week: {
        1: '星期一',
        2: '星期二',
        3: '星期三',
        4: '星期四',
        5: '星期五',
        6: '星期六',
        7: '星期七'
      },
      checkMenu: {},
      tip: null // 弹窗
    }
  },
  computed: {
    ...mapState({
      fullScreen: (state) => state.fullScreen
    })
  },
  watch: {
    navigationMenu: {
      handler(newVal, oldVal) {
        if (this.$route.path !== '/') {
          let pathList = this.$route.path.split('/')
          for (const item of newVal) {
            if (item.router.indexOf(pathList[1]) !== -1) {
              this.checkMenu = item
            }
          }
        } else {
          this.checkMenu = newVal[0]
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.getTime()
    this.$store.state.errorInfo = []
  },
  methods: {
    //修改主题
    changeThem(command) {
      this.$emit('changeThem', command)
    },
    getTime() {
      this.time.date = moment().format('YYYY年MM月DD日')
      this.time.hour = moment().format('HH:mm:ss')
      this.time.week = moment().day()
    },
    handleMenuClick(menus) {
      this.checkMenu = menus
      this.$emit('clickMenus', menus)
    }
  }
}
</script>

<style scoped lang="scss">
.error-info {
  max-height: 200px;
  list-style: none;
  padding: 0;
  li {
    border-bottom: 1px dashed #cccdd4;
    p {
      text-align: right;
      font-size: 12px;
      margin-right: 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:first-child {
        text-align: left;
        font-size: 14px;
        margin-right: 0;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
