<!--
 * @Author: your name
 * @Date: 2019-12-05 11:49:15
 * @LastEditTime: 2021-05-10 16:47:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \iem-web-project\components\Fullscreen.vue
 -->
<template>
  <div>
    <i 
      :class="['iconfont', isFullscreen? 'icon-guanbiquanping' : 'icon-screenfull']" 
      @click="toggleFull"/>
  </div>
</template>
<script>
import screenfull from 'screenfull'
export default {
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    window.onresize = () => {
      // 全屏下监控是否按了esc
      if (!this.checkFull()) {
        this.isFullscreen = false
      }
    }
  },
  methods: {
    toggleFull() {
      if (!screenfull.isEnabled) {
        this.$message({
          type: 'warning',
          message: 'you browser can not work'
        })
        return false
      }
      screenfull.toggle()
      this.isFullscreen = true
    },
    /**
     * 是否全屏并按键ESC键的方法
     */
    checkFull() {
      var isFull =
        document.requestFullScreen ||
        window.mozRequestFullScreen ||
        document.webkitIsFullScreen ||
        document.msFullscreenEnabled
      // to fix : false || undefined == undefined
      if (isFull === undefined) {
        isFull = false
      }
      return isFull
    }
  }
}
</script>
