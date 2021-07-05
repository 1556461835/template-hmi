<!--
 * @Author: your name
 * @Date: 2021-06-21 15:06:17
 * @LastEditTime: 2021-06-23 14:55:00
 * @LastEditors: Please set LastEditors
 * @Description: 装炉管理
 * @FilePath: \hmid:\work_project\HTLCode\pages\demo\testHot.vue
-->
<template>
  <div>
    <div class="flex">
      <!-- 加热炉内容 -->
      <div style="padding-right: 10px">
        <!-- b2-b6 -->
        <div class="top-b2 flexStart" style="margin-left:100px">
          <div class="top-b2-part">B2</div>
          <div class="top-b2-part top-b2-width200">B3</div>
          <div class="top-b2-part">B4</div>
          <div class="top-b2-part top-b2-width200">B5</div>
          <div class="top-b2-part">B6</div>

          <!-- 板坯动画轨迹 -->
          <div v-show="coilAnimationInfo.flag" class="coilAnimation" :style="{left: coilAnimationInfo.left + 'px'}">
            H9160021
          </div>

        </div>

        <!-- 中间的加热炉 -->
        <div class="hot-part">
          <!-- 2#加热炉 -->
          <div class="hot-part-lu hot1-position">
            <!-- 加热炉标识 -->
            <div class="hot-part-left">
              <div class="hot-part-left-title">2#</div>
            </div>
            <div class="hot1-slabs" @mouseover="handleMouseOver" @mouseleave ="handleMouseUp">
              <div v-for="(v, index) in coils" :key="index" class="coils" :style="{backgroundColor: v.color}" :data-var="JSON.stringify(v)">{{v.name}}</div>
            </div>
            <div class="hot1-title">
              <div>均热段</div>
              <div>加热三段</div>
              <div>加热二段</div>
              <div>加热一段</div>
            </div>
          </div>
          <!-- 1#加热炉 -->
          <div class="hot-part-lu hot2-position">
            <!-- 加热炉标识 -->
            <div class="hot-part-left">
              <div class="hot-part-left-title">1#</div>
            </div>
            <div class="hot1-slabs" @mouseover="handleMouseOver" @mouseleave ="handleMouseUp">
              <div v-for="(v, index) in coils" :key="index" class="coils" :style="{backgroundColor: v.color}" :data-var="JSON.stringify(v)">{{v.name}}</div>
            </div>
            <div class="hot1-title">
              <div>均热段</div>
              <div>加热三段</div>
              <div>加热二段</div>
              <div>加热一段</div>
            </div>
          </div>

        </div>

        <!-- a2-a8 -->
        <div class="top-b2 flexStart">
          <div class="top-b2-part">A2</div>
          <div class="top-b2-part">A3</div>
          <div class="top-b2-part">A4</div>
          <div class="top-b2-part">A5</div>
          <div class="top-b2-part">A6</div>
          <div class="top-b2-part">A7</div>
          <div class="top-b2-part">A8</div>
        </div>
      </div>
    </div>

    <!-- 板坯提示信息 -->
    <div v-show="disableInfo.disableVisableCoilInfo" class="coilInfo" :style="{left: disableInfo.left + 'px', top: disableInfo.top + 'px'}">
      <div>
        <span>板坯号</span>：
        <span>{{disableInfo.color}}</span>
      </div>
      <div>
        <span>钢卷号</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>计划号</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>钢种</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>规格</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>板坯重</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>成品</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>装炉</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>段时长</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>总时长</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>加热段</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>GE码</span>：
        <span>{{disableInfo.color}}</span>
      </div>
      <div>
        <span>测温值</span>：
        <span>{{disableInfo.name}}</span>
      </div>
      <div>
        <span>识别号</span>：
        <span>{{disableInfo.color}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steels: [
        'H9160021',
        'H9160022',
        'H9160023',
        'H9160024',
        'H9160025',
        'H9160026',
        'H9160027',
        'H9160028',
        'H9160029',
        'H9160030',
        'H9160031',
        'H9160032',
        'H9160033',
        'H9160034'
      ],
      colors: [
        'rgb(255, 0, 0)',
        'rgb(153, 0, 0)',
        'rgb(102, 0, 0)',
        'rgb(51, 0, 0)',
        'rgb(0, 0, 0)'
      ],
      coils: [],
      // 提示框的位置信息
      disableInfo: {
        left: 0,
        top: 0,
        flag: true, // 判断鼠标是否移动到板坯上方
        disableVisableCoilInfo: false // 控制提示框显示
      },
      // 板坯动画
      coilAnimationInfo: {
        left: 0,
        flag: true
      }
    }
  },
  mounted() {
    console.log(this)
    // 规则：按照颜色数量将钢卷号分段显示；使用视实际情况而定；
    let positions = Math.ceil(this.steels.length / this.colors.length)
    for (let i = 0; i < this.steels.length; i++) {
      for (let j = 0; j < this.colors.length; j++) {
        if (j * positions <= i && i < (j + 1) * positions) {
          this.coils.push({
            name: this.steels[i],
            color: this.colors[j]
          })
        }
      }
    }

    // 板坯运动的速度
    let speed = 50
    // 板坯移动的定时器
    const timer = setInterval(() => {
      if (this.coilAnimationInfo.left + 80 < 700) {
        this.coilAnimationInfo.flag = true
        this.coilAnimationInfo.left += speed
      } else {
        this.coilAnimationInfo.flag = false
        this.coilAnimationInfo.left = 0
      }
    }, 1000)
    // 离开页面前销毁定时器，否则耗费性能
    this.$once('hook:beforeDestroy', () => {
      clearInterval(timer)
    })
  },
  methods: {
    // 鼠标移入事件
    handleMouseOver(e) {
      this.disableInfo.flag = true
      if (this.disableInfo.flag && e.srcElement.className == 'coils') {
        this.disableInfo = Object.assign({}, JSON.parse(e.target.dataset.var))
        this.disableInfo.disableVisableCoilInfo = true
        this.disableInfo.left = e.clientX + 176 - e.offsetX
        if (e.screenY + 200 > document.body.clientHeight) {
          this.disableInfo.top = e.clientY - e.offsetY - 200
        } else {
          this.disableInfo.top = e.clientY - e.offsetY
        }
      }
    },
    // 鼠标移除事件
    handleMouseUp(e) {
      this.disableInfo.flag = false
      this.disableInfo.disableVisableCoilInfo = false
    }
  }
}
</script>

<style lang="scss">
.top-b2 {
  display: flex;
  height: 20px;
  background-color: #f0f0f0;
  line-height: 20px;
  position: relative;
  .top-b2-part {
    width: 100px;
    border-left: 2px solid #dcdcdb;
    background-color: #a9a9a9;
    text-align: center;
    font-weight: bold;
  }
  .top-b2-width200 {
    width: 200px;
  }
  .coilAnimation {
    position: absolute;
    width: 80px;
    height: 20px;
    background-color: red;
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    text-align: center;
    transition: all 0.3s linear;
  }
}
.flexEnd {
  justify-content: flex-end;
}
.flexStart {
  justify-content: flex-start;
}
.hot1-position {
  left: 124px;
}
.hot2-position {
  left: 430px;
}
.hot-part {
  height: calc(100vh - 167px);
  background-color: #cccccc;
  position: relative;
  .hot-part-lu {
    position: absolute;
    height: 100%;
    display: flex;
    .hot-part-left {
      width: 80px;
      overflow: hidden;
      .hot-part-left-title {
        color: red;
        margin-top: 30px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
      }
    }
    .hot1-slabs {
      width: 200px;
      border-left: 2px solid red;
      border-right: 2px solid red;
      padding: 0 20px 0 20px;
      box-sizing: border-box;
      background-color: #a5a9ac;
      .coils {
        height: 20px;
        font-size: 12px;
        border-radius: 4px;
        font-weight: bold;
        color: #ffffff;
        line-height: 20px;
        text-align: center;
        margin-top: 5px;
        cursor: pointer;
      }
    }
    .hot1-title {
      width: 20px;
      font-size: 12px;
      text-align: center;
      font-weight: bold;
      div {
        height: 25%;
        line-height: 20px;
        border-bottom: 2px solid #dcdcdb;
        box-sizing: border-box;
      }
    }
  }
}
.coilInfo {
  position: fixed;
  width: 200px;
  height: 280px;
  background-color: #fdfccc;
  border-radius: 6px;
  padding: 10px 0;
  div {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    padding: 0 10px;
    box-sizing: border-box;
    clear: both;
    overflow: hidden;
    span {
      &:first-child {
        width: 36px;
        text-align: justify;
        float: left;
        &:after {
          content: '.';
          width: 100%;
          display: inline-block;
          overflow: hidden;
          height: 0;
        }
      }
    }
  }
}
</style>
