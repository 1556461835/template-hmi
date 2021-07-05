/*
 * @Description: 组件-流程图基础图形
 * @version: 1.0
 * @Company: tasily
 * @Author: wangHongFei
 * @Date: 2018-11-02 11:45:16
 * @LastEditors: OBKorol
 * @LastEditTime: 2018-11-09 11:15:30
 */
<template>
  <el-row style="line-height:10px">
    <!-- <div id="graphicIcon" style="width: 100%;height: 100%"></div> -->
    <el-col
      v-for = "(graphic, index) in grapics"
      :key = "index + 'graphicIcon'"
      :span="12"
      style = "display: table;margin-left: auto;margin-right: auto;text-align: center;border-style: groove;padding:10px"
    >
      <i
        :class = "graphic.icon"
        draggable = "true"
        style = "font-size: 30px;color:#C0C0C0"
        @dragstart = "drag($event, graphic)"
      />
      <div :id="graphic.type + 'graphicIcon'"/>
      <br>
      <span style = "font-size: 1px">{{ graphic.type }}</span>
    </el-col>
  </el-row>
</template>
<script>
import baseGraphicService from '@/lib/BaseGraphicData'
export default {
  name: 'BaseGraphic',
  data() {
    return {
      grapics: baseGraphicService.getBaseGraphicDataInfo()
    }
  },
  mounted() {
    // this.grapics = zrenderData.graphicTypeArray()
    // var containerId = document.getElementById('graphicIcon')
    // var zr = zrender.init(containerId)
    // var x = 50
    // var y = 10
    // var indexType = 1
    // this.grapics.map(function (item, index) {
    //   var basicShapes = zrenderData.getBbaseFigure(item.type)
    //   if (indexType > 2) {
    //     y = y + 80
    //     x = 50
    //     indexType = 1
    //   }
    //   indexType = indexType + 1
    //   basicShapes.position = [x, y]
    //   x = x + 80
    //   basicShapes.scale = [1, 1]
    //   basicShapes.style = {
    //     fill: '#708090',
    //     textPosition: 'bottom',
    //     text: item.name
    //   }
    //   var basicShapesZrender = new zrender[item.type](basicShapes)
    //   zr.add(basicShapesZrender)
    //   console.debug(indexType, '图形：', item.name, '====', basicShapes.position)
    // })
  },
  methods: {
    drag(event, graphic) {
      event.dataTransfer.setData('graphic', window.JSON.stringify(graphic))
    }
  }
}
</script>
