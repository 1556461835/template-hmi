/*
 * @Description: 设备厂商平台-流程图管理
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-02 11:31:20
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:13:58
 */
<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-card
          :body-style="bodyStyle"
          class="box-card"
          shadow="never"
        >
          <div slot="header">
            基础图形<p class="arrow-alt-circle-down"/>
          </div>
          <base-graphic/>
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card
          :body-style="bodyStyle"
          class="box-card"
          shadow="never"
        >
          <div
            slot="header"
            class="clearfix"
          >
            流程图
          </div>
          <div
            @drop = "drop($event)"
            @dragover = "allowDrop($event)"
          >
            <tasily-echarts-zrender
              ref = "myEcharts"
              slot = "body"
              :edit = "true"
              :show-grid = "true"
              :title = "echartTitle"
              :graphic = "graphics"
              :_height = "height"
              :data-array = "dataArray"
              @completed = "echartCreateCompleted"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          :body-style="bodyStyle"
          class="box-card"
          shadow="never"
        >
          <div
            slot="header"
            class="clearfix"
          >
            基础信息编辑
          </div>
          <el-tabs
            type="card"
            tab-position="left"
          >
            <el-tab-pane>
              <span slot="label">
                <el-tooltip
                  class="item"
                  effect="light"
                  content="基础属性"
                  placement="left"
                >
                  <i class="el-icon-date"/>
                </el-tooltip>
              </span>
              <template v-for = "(v, i) in getGraphicPropertyArray(currentGraphicItem)">
                <div
                  v-if = "v.k !== 'style' && v.k !== 'shape' && v.k.indexOf('Grid') < 0"
                  :key="'vs' + i">
                  <!-- 数组数据 -->
                  <el-row
                    v-if = "v.type === 'array'"
                    :gutter="20"
                  >
                    <el-col :span="6">
                      <span style="line-height: 40px">{{ v.k }}：</span>
                    </el-col>
                    <el-col
                      :span="8"
                      style="float:right"
                    >
                      <el-input
                        v-model.number = "currentGraphicItem[v.k][1]"
                        :step = "v.step"
                        style="line-height: 40px"
                        type="number"
                        size="mini"
                      />
                    </el-col>
                    <el-col
                      :span="8"
                      style="float:right"
                    >
                      <el-input
                        v-model.number = "currentGraphicItem[v.k][0]"
                        :step = "v.step"
                        style="line-height: 40px"
                        type="number"
                        size="mini"/>
                    </el-col>
                  </el-row>
                  <!-- 下拉选择 -->
                  <el-row
                    v-else-if = "v.type === 'select'"
                    :gutter="20"
                  >
                    <el-col :span="6">
                      <span style="line-height: 40px">{{ v.k }}：</span>
                    </el-col>
                    <el-col
                      :span="16"
                      style="float:right"
                    >
                      <el-select
                        v-model="currentGraphicItem[v.k]"
                        style="line-height: 40px"
                        placeholder="请选择"
                        size="mini"
                      >
                        <el-option
                          v-for = "(select, d) in v.selectArray"
                          :key="'select' + d"
                          :value = "select"
                        >
                          {{ select }}
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                  <!-- 数字输入框数据 -->
                  <el-row
                    v-else-if = "v.type === 'number'"
                    :gutter="20"
                  >
                    <el-col :span="8">
                      <span style="line-height: 40px">{{ v.k }}：</span>
                    </el-col>
                    <el-col
                      :span="8"
                      style="float:right"
                    >
                      <el-input
                        v-model.number = "currentGraphicItem[v.k]"
                        :step = "v.step"
                        :max = "v.max"
                        :min = "v.min"
                        style="line-height: 40px"
                        type="number"
                        size="mini"
                      />
                    </el-col>
                  </el-row>
                  <!-- 颜色选择器 -->
                  <el-row
                    v-else-if = "v.type === 'color'"
                    :gutter="20"
                  >
                    <el-col :span="6">
                      <span style="line-height: 40px">{ {v.k }}：</span>
                    </el-col>
                    <el-col
                      :span="6"
                      style="float:right"
                    >
                      <el-color-picker
                        v-model="currentGraphicItem[v.k]"
                        size="small"
                        show-alpha
                      />
                    </el-col>
                  </el-row>
                  <!-- 百分百数据 -->
                  <!-- <el-row :gutter="20">
                    <el-col :span="6">
                      <span style="line-height: 40px">{{v.k}}：</span>
                    </el-col>
                    <el-col :span="18">
                      <el-slider
                        v-model="sliderText"
                        input-size="mini"
                        show-input>
                      </el-slider>
                    </el-col>
                  </el-row> -->
                  <!-- 自定义事件 -->
                  <el-row
                    v-else-if = "v.type === 'textarea'"
                    :gutter="20"
                  >
                    <el-col :span="24">
                      <span style="line-height: 40px">{{ v.k }}：</span>
                      <el-input
                        v-model.number = "currentGraphicItem[v.k]"
                        type="textarea"
                      />
                    </el-col>
                  </el-row>
                  <!-- 其他输入框 -->
                  <el-row
                    v-else
                    :gutter="20"
                  >
                    <el-col :span="8">
                      <span style="line-height: 40px">{{ v.k }}：</span>
                    </el-col>
                    <el-col
                      :span="16"
                      style="float:right"
                    >
                      <el-input
                        v-model = "currentGraphicItem[v.k]"
                        size="mini"
                      />
                    </el-col>
                  </el-row>
                </div>
              </template>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label">
                <el-tooltip
                  class="item"
                  effect="light"
                  content="文字信息编辑"
                  placement="left"
                >
                  <i class="el-icon-date"/>
                </el-tooltip>
              </span>
              <div
                v-for = "(v, i) in getGraphicPropertyArray(currentGraphicItem.style)"
                :key="'v0' + i"
              >
                <!-- 数组数据 -->
                <el-row
                  v-if = "v.type === 'array'"
                  :gutter="20"
                >
                  <el-col :span="6">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                  </el-col>
                  <el-col
                    :span="8"
                    style="float:right"
                  >
                    <el-input
                      v-model.number = "currentGraphicItem['style'][v.k][1]"
                      :step = "v.step"
                      style="line-height: 40px"
                      type="number"
                      size="mini"
                    />
                  </el-col>
                  <el-col
                    :span="8"
                    style="float:right"
                  >
                    <el-input
                      v-model.number = "currentGraphicItem['style'][v.k][0]"
                      :step = "v.step"
                      style="line-height: 40px"
                      type="number"
                      size="mini"/>
                  </el-col>
                </el-row>
                <!-- 下拉选择 -->
                <el-row
                  v-else-if = "v.type === 'select'"
                  :gutter="20"
                >
                  <el-col :span="6">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                  </el-col>
                  <el-col
                    :span="16"
                    style="float:right"
                  >
                    <el-select
                      v-model="currentGraphicItem['style'][v.k]"
                      style="line-height: 40px"
                      size="mini"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for = "(select, d) in v.selectArray"
                        :key="'select' + d"
                        :value = "select"
                      >
                        {{ select }}
                      </el-option>
                    </el-select>
                  </el-col>
                </el-row>
                <!-- 数字输入框数据 -->
                <el-row
                  v-else-if = "v.type === 'number'"
                  :gutter="20"
                >
                  <el-col :span="8">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                  </el-col>
                  <el-col
                    :span="8"
                    style="float:right"
                  >
                    <el-input
                      v-model.number = "currentGraphicItem['style'][v.k]"
                      :step = "v.step"
                      :max = "v.max"
                      :min = "v.min"
                      style="line-height: 40px"
                      type="number"
                      size="mini"
                    />
                  </el-col>
                </el-row>
                <!-- 颜色选择器 -->
                <el-row
                  v-else-if = "v.type === 'color'"
                  :gutter="20"
                >
                  <el-col :span="6">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                  </el-col>
                  <el-col
                    :span="6"
                    style="float:right"
                  >
                    <el-color-picker
                      v-model="currentGraphicItem['style'][v.k]"
                      size="small"
                      show-alpha
                    />
                  </el-col>
                </el-row>
                <!-- 百分百数据 -->
                <!-- <el-row :gutter="20">
                  <el-col :span="6">
                    <span style="line-height: 40px">{{v.k}}：</span>
                  </el-col>
                  <el-col :span="18">
                    <el-slider
                      v-model="sliderText"
                      input-size="mini"
                      show-input>
                    </el-slider>
                  </el-col>
                </el-row> -->
                <!-- 自定义事件 -->
                <el-row
                  v-else-if = "v.type === 'textarea'"
                  :gutter="20"
                >
                  <el-col :span="24">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                    <el-input
                      v-model.number = "currentGraphicItem['style'][v.k]"
                      type="textarea"
                    />
                  </el-col>
                </el-row>
                <!-- 其他输入框 -->
                <el-row
                  v-else
                  :gutter="20">
                  <el-col :span="8">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                  </el-col>
                  <el-col
                    :span="16"
                    style="float:right"
                  >
                    <el-input
                      v-model = "currentGraphicItem['style'][v.k]"
                      size="mini"
                    />
                  </el-col>
                </el-row>
                <!-- <el-row :gutter="20">
                  <el-col :span="8">
                    <span style="line-height: 40px">{{v.k}}：</span>
                  </el-col>
                  <el-col :span="16" style="float:right">
                    <el-input
                      v-model = "currentGraphicItem['style'][v.k]"
                      size="mini"
                    ></el-input>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="8">
                    <span style="line-height: 40px">{{v.k}}：</span>
                  </el-col>
                  <el-col :span="16" style="float:right">
                    <el-input
                      v-model = "currentGraphicItem['style'][v.k]"
                      size="mini"
                    ></el-input>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="8">
                    <span style="line-height: 40px">{{v.k}}：</span>
                  </el-col>
                  <el-col :span="16" style="float:right">
                    <el-input
                      v-model = "currentGraphicItem['style'][v.k]"
                      size="mini"
                    ></el-input>
                  </el-col>
                </el-row> -->
              </div>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label">
                <el-tooltip
                  class="item"
                  effect="light"
                  content="扩展信息"
                  placement="left"
                >
                  <i class="el-icon-date"/>
                </el-tooltip>
              </span>
              <div
                v-for = "(v, i) in getGraphicPropertyArray(currentGraphicItem.shape)"
                :key="'v+' + i"
              >
                <!-- 数组数据 -->
                <el-row
                  v-if = "v.type === 'array'"
                  :gutter="20"
                >
                  <el-col :span="6">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                  </el-col>
                  <el-col
                    :span="8"
                    style="float:right"
                  >
                    <el-input
                      v-model.number = "currentGraphicItem['shape'][v.k][1]"
                      :step = "v.step"
                      style="line-height: 40px"
                      type="number"
                      size="mini"
                    />
                  </el-col>
                  <el-col
                    :span="8"
                    style="float:right"
                  >
                    <el-input
                      v-model.number = "currentGraphicItem['shape'][v.k][0]"
                      :step = "v.step"
                      style="line-height: 40px"
                      type="number"
                      size="mini"/>
                  </el-col>
                </el-row>
                <!-- 下拉选择 -->
                <el-row
                  v-else-if = "v.type === 'select'"
                  :gutter="20"
                >
                  <el-col :span="6">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                  </el-col>
                  <el-col
                    :span="16"
                    style="float:right">
                    <el-select
                      v-model="currentGraphicItem['shape'][v.k]"
                      style="line-height: 40px"
                      size="mini"
                      placeholder="请选择">
                      <el-option
                        v-for = "(select, d) in v.selectArray"
                        :key="'select' + d"
                        :value = "select"
                      >
                        {{ select }}
                      </el-option>
                    </el-select>
                  </el-col>
                </el-row>
                <!-- 数字输入框数据 -->
                <el-row
                  v-else-if = "v.type === 'number'"
                  :gutter="20">
                  <el-col :span="8">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                  </el-col>
                  <el-col
                    :span="8"
                    style="float:right">
                    <el-input
                      v-model.number = "currentGraphicItem['shape'][v.k]"
                      :step = "v.step"
                      :max = "v.max"
                      :min = "v.min"
                      style="line-height: 40px"
                      type="number"
                      size="mini"
                    />
                  </el-col>
                </el-row>
                <!-- 颜色选择器 -->
                <el-row
                  v-else-if = "v.type === 'color'"
                  :gutter="20"
                >
                  <el-col :span="6">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                  </el-col>
                  <el-col
                    :span="6"
                    style="float:right"
                  >
                    <el-color-picker
                      v-model="currentGraphicItem['shape'][v.k]"
                      size="small"
                      show-alpha
                    />
                  </el-col>
                </el-row>
                <!-- 百分百数据 -->
                <!-- <el-row :gutter="20">
                  <el-col :span="6">
                    <span style="line-height: 40px">{{v.k}}：</span>
                  </el-col>
                  <el-col :span="18">
                    <el-slider
                      v-model="sliderText"
                      input-size="mini"
                      show-input>
                    </el-slider>
                  </el-col>
                </el-row> -->
                <!-- 自定义事件 -->
                <el-row
                  v-else-if = "v.type === 'textarea'"
                  :gutter="20"
                >
                  <el-col :span="24">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                    <el-input
                      v-model.number = "currentGraphicItem['shape'][v.k]"
                      type="textarea"
                    />
                  </el-col>
                </el-row>
                <!-- 其他输入框 -->
                <el-row
                  v-else
                  :gutter="20"
                >
                  <el-col :span="8">
                    <span style="line-height: 40px">{{ v.k }}：</span>
                  </el-col>
                  <el-col
                    :span="16"
                    style="float:right">
                    <el-input
                      v-model = "currentGraphicItem['shape'][v.k]"
                      size="mini"
                    />
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import baseGraphic from '@/components/BaseGraphics'
import TasilyEchartsZrender from '@/components/TasilyEchartsZrender'
import _ from 'lodash'
// import uuid from 'uuid'
const uuid = require('uuid')
import graphicService from '@/lib/BaseGraphicData'
export default {
  components: {
    TasilyEchartsZrender,
    baseGraphic
  },
  data() {
    return {
      sliderText: 0,
      bodyStyle: {
        padding: '0px',
        height: '550px',
        overflowX: 'auto'
      },
      height: '600px', // 默认高度
      echartTitle: { text: 'echart' }, // echat标题
      currentGraphicItem: {}, // 单个元素数据
      dataArray: [], // 画布上图形所有的数据
      graphics: [] // zrender图形数据
    }
  },
  methods: {
    /**
     * [getGraphicPropertyArray 把JSON的属性转换成数组]
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    getGraphicPropertyArray(item) {
      var props = graphicService.getGraphicPropertyArray(item)
      return props
    },
    /**
     * [echartCreateCompleted echart创建时转换坐标]
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    echartCreateCompleted(index, item) {
      console.debug(index, item)
      // var echart = this.$refs.myEcharts[index].echart
      // this.graphics[index].graphics.map((tg, idx) => {
      //   graphicService.convertToPixel(tg, echart)
      // })
    },
    allowDrop(ev) {
      ev.preventDefault()
    },
    /**
     * [onGraphicMouseMove 移动事件]
     * @param  {[type]} vm [description]
     * @param  {[type]} ev [description]
     * @return {[type]}    [description]
     */
    onGraphicMouseMove(ev) {
      var vm = this
      var position
      vm.$refs.myEcharts.$el.onmousemove = function(event) {
        if (event.buttons === 1 && vm.mouseClick) {
          position = [
            parseInt(vm.currentGraphicItem.position[0]) + event.movementX,
            parseInt(vm.currentGraphicItem.position[1]) + event.movementY
          ]
          vm.currentGraphicItem.position = position
        }
      }
    },
    /**
     * [onGraphicMouseup 鼠标弹起事件]
     * @param  {[type]} vm [description]
     * @return {[type]}    [description]
     */
    onGraphicMouseup() {
      var vm = this
      vm.$refs.myEcharts.$el.onmouseup = function(event) {
        vm.mouseClick = false
      }
    },
    /**
     * [cleanFocusGraphic 清理阴影]
     * @param  {[type]} g [description]
     * @return {[type]}   [description]
     */
    cleanFocusGraphic(g) {
      if (!g.select) return
      g.select = false
      if (!g.style) return
      g.style.shadowBlur = g.style.shadowBlur === 33 ? 0 : g.style.shadowBlur
    },
    /**
     * [onGraphicMouseWheel 鼠标滚轴事件]
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    onGraphicMouseWheel(event) {
      event.event.preventDefault()
      var topParent = event.target
      while (topParent.parent.parent) {
        topParent = topParent.parent
      }
      var wheelvalue = event.event.wheelDelta
      if (vent.event.detail) {
        wheelvalue = -event.event.detail
      }
      this.currentGraphicItem = this.graphics[topParent.positionIndex]
      this.setFocusGraphic(this.currentGraphicItem)
      if (event.event.ctrlKey) {
        // var rotation = wheelvalue > 0 ? (topParent.rotation + Math.PI / 360) % (Math.PI * 2) : (topParent.rotation - Math.PI / 360) % (Math.PI * 2)
        // this.currentGraphicItem.rotation = rotation
        if (wheelvalue > 0) {
          // 滚轴向上
          this.angle += 1
        } else {
          // 滚轴向下
          if (this.angle > 0) {
            this.angle -= 1
          }
        }
      } else {
        if (this.currentGraphicItem.scale[1] <= 0.205 && wheelvalue < 0) {
          return
        }
        if (this.currentGraphicItem.scale[0] <= 0.205 && wheelvalue < 0) {
          return
        }
        this.currentGraphicItem.scale = [
          this.currentGraphicItem.scale[0] + currentGraphicItemScaleOne,
          this.currentGraphicItem.scale[1] + (wheelvalue > 0 ? 0.1 : -0.1)
        ]
      }
    },
    /**
     * [onGraphicMouseDown 鼠标按下事件]
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    onGraphicMouseDown(event) {
      this.mouseClick = true
      if (this.currentGraphicItem) {
        var positionIndex = event.target.positionIndex
        if (positionIndex === this.currentGraphicItem.positionIndex) {
          return
        }
      }
      if (!event.event.ctrlKey) {
        this.graphics.map((val, idx) => {
          if (val.select) {
            this.cleanFocusGraphic(val)
          }
        })
      }
      var targetItem = event.target
      while (targetItem.parent.parent) {
        targetItem = targetItem.parent
      }
      this.angle = targetItem.rotation / (Math.PI / 180)
      this.currentGraphicItem = this.graphics[targetItem.positionIndex]
      this.setFocusGraphic(this.currentGraphicItem)
    },
    /**
     * [setFocusGraphic 选中时设置阴影]
     * @param {[type]} g [description]
     */
    setFocusGraphic(g) {
      g.select = true
      if (!g.style) g.style = {}
      g.style.shadowBlur = 33
      g.style.shadowColor = '#0f0'
    },
    /**
     * [onGraphicContextmenu 右键菜单事件]
     * @param  {[type]} vm    [description]
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    onGraphicContextmenu(event) {
      var vm = this
      // 自定义的菜单显示
      vm.menu.style.display = 'block'
      vm.evTarget = event.target.parent
      vm.cloneCurrentGraphicItem = vm.currentGraphicItem
      // 让自定义菜单随鼠标的箭头位置移动
      vm.menu.style.left = event.event.zrX + 15 + 'px'
      vm.menu.style.top = event.event.zrY + 45 + 'px'
      window.event.returnValue = false
      return false
    },
    /**
     * [drop 拖动放开事件]
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    drop(event) {
      var vm = this
      vm.angle = 0
      var graphic = JSON.parse(event.dataTransfer.getData('graphic'))
      graphic.x = event.offsetX - 20
      graphic.y = event.offsetY - 20
      graphic.width = 40
      graphic.height = 40
      graphic.positionIndex = vm.graphics.length
      var newSvg = graphicService.getGraphicData(graphic)
      newSvg.onmousemove = function(event) {
        vm.onGraphicMouseMove(event)
      }
      newSvg.onmousedown = function(event) {
        vm.onGraphicMouseDown(event)
      }
      newSvg.onmousewheel = function(event) {
        vm.onGraphicMouseWheel(event)
        window.event.returnValue = false
        return false
      }
      newSvg.onmouseup = function(event) {
        vm.onGraphicMouseup()
      }
      newSvg.oncontextmenu = function(event) {
        vm.onGraphicMouseDown(event)
        vm.onGraphicContextmenu(event)
      }
      document.onkeydown = function(event) {
        var locationPathname = event.view.location.pathname
        if (!event.srcElement.type) {
          if (locationPathname === '/vender/flowDiagram') {
            var positionIndex = event.target.positionIndex
            if (vm.currentGraphicItem) {
              if (positionIndex === vm.currentGraphicItem.positionIndex) {
                return
              }
            }
            if (event.ctrlKey === true) {
              if (event.keyCode === 67) {
                console.debug('ctrl + c')
                var cloneCurrentGraphicItem = _.cloneDeep(vm.currentGraphicItem)
                cloneCurrentGraphicItem['id'] = uuid()
                vm.cloneCurrentGraphicItem = cloneCurrentGraphicItem
              }
              if (event.keyCode === 86) {
                console.debug('ctrl + v')
                if (vm.cloneCurrentGraphicItem) {
                  vm.pasteSvg()
                }
              }
            }
          }
        }
      }
      vm.graphics.map((val, idx) => {
        if (val.select) {
          vm.cleanFocusGraphic(val)
        }
      })
      vm.graphics.push(newSvg)
      vm.currentGraphicItem = newSvg
      vm.setFocusGraphic(vm.currentGraphicItem)
    }
  }
}
</script>
<style scoped>
.el-col span {
  float: left;
  font-size: 12px;
}
/* ul{
  padding: 0px;
  margin: 0px;
 }
 ul li{
     list-style: none;
     margin-bottom: 5px;
     background-color: #efefef;
     border: 2px solid #999;
     text-align: left;
 }
 ul li:hover{
     border: 2px solid red;
     z-index: 1;
 }
 ul li input{
   float:right;
   width: 50px
 }
 li a span {
   white-space:nowrap;
 } */
</style>
