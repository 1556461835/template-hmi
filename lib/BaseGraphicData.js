// import uuid from 'uuid'
const uuid = require('uuid')

export default {
  convertFromPixel(graphic, echart) {
    if (graphic.position) {
      graphic.positionGrid = echart.convertFromPixel(
        'grid',
        graphic['position']
      )
    }
    if (graphic.origin) {
      graphic.originGrid = echart.convertFromPixel('grid', graphic['origin'])
    }
    if (graphic.scale) {
      graphic.scaleGrid = echart.convertFromPixel('grid', graphic['scale'])
    }
    if (graphic.style && graphic.style.textDistance) {
      graphic['style']['textDistanceGrid'] = echart.convertFromPixel(
        'grid',
        graphic['style']['textDistance']
      )
    }
    if (graphic.style && graphic.style.textOffset) {
      graphic['style']['textOffsetGrid'] = echart.convertFromPixel(
        'grid',
        graphic['style']['textOffset']
      )
    }
  },

  convertToPixel(graphic, echart) {
    // let newPosition = echart.conve
    if (graphic.positionGrid)
      graphic.position = echart.convertToPixel('grid', graphic.positionGrid)
    if (graphic.originGrid)
      graphic.origin = echart.convertToPixel('grid', graphic.originGrid)
    if (graphic.scaleGrid)
      graphic.scale = echart.convertToPixel('grid', graphic.scaleGrid)
  },

  // data 必须包含 positionIndex
  getImageGraphicData(data) {
    return {
      type: 'image',
      id: uuid(),
      $action: 'merge',
      bounding: 'all',
      z: 1,
      silent: false,
      invisible: false,
      draggable: false,
      position: [data.x, data.y],
      positionIndex: data.positionIndex,
      rotation: 0,
      scale: [1, 1],
      events: '',
      origin: [0, 0],
      // origin: [data.width / 2, data.height / 2],
      style: {
        image: data.url,
        // x: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。
        // y: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
        width: data.width ? data.width : 40,
        height: data.height ? data.height : 40,
        text: '',
        tag: '',
        showTag: 'show',
        lineDash: [0, 0], // 虚线
        // tagVariable: '',
        fill: '#000',
        stroke: ' #FFFFFF',
        lineWidth: 0,
        textColor: '#000000', // 文本颜色
        textFont: '', // 附加文本样式
        textPosition: 'bottom', // 附加文本位置
        textAlign: 'center', // 附加文本水平对齐
        textBaseline: 'middle', // 附加文本垂直对齐
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: '#ffffff',
        opacity: 1
      }
    }
  },
  getGroupData(data) {
    return {
      type: 'group',
      id: uuid(),
      $action: 'merge',
      bounding: 'all',
      positionIndex: data.positionIndex,
      z: 1,
      silent: false,
      position: [data.x, data.y],
      scale: [1, 1],
      events: '',
      invisible: false,
      draggable: false,
      origin: data.origin,
      width: data && data.width ? data.width : 100,
      height: data && data.height ? data.height : 100,
      rotation: 0,
      children: [],
      style: {
        tag: '',
        showTag: 'show',
        commandName: '',
        command: '',
        fill: '#000',
        stroke: ' #FFFFFF'
      }
    }
  },

  getGraphicData(graphic) {
    if (graphic.type === 'image') return this.getImageGraphicData(graphic)
    else if (graphic.type === 'group') return this.getGroupData(graphic)
    else return this.getGraphicDataByType(graphic.type, graphic)
  },

  /**
   * [getGraphicDataByType 获取基础图形数据结构]
   * @param  {[string]} type [类型]
   * @param  {[object]} data [必须含有 positionIndex]
   * @return {[type]}      [description]
   */
  getGraphicDataByType(type, data) {
    var graphic = this.getBasicGraphicData(data)
    graphic.positionIndex = data.positionIndex
    graphic.id = uuid()
    return graphic
  },
  getBaseGraphicDataInfo() {
    return [
      {
        type: 'text',
        icon: 'fa fa-amazon'
      },
      {
        type: 'rect',
        icon: 'fa fa-square-o'
      },
      {
        type: 'circle',
        icon: 'fa fa-circle-o'
      },
      {
        type: 'ring',
        icon: 'fa fa-dot-circle-o'
      },
      {
        type: 'sector',
        icon: 'fa fa-pie-chart'
      },
      {
        type: 'arc',
        icon: 'fa fa-circle-o-notch'
      },
      {
        type: 'polygon',
        icon: 'fa fa-connectdevelop'
      },
      {
        type: 'polyline',
        icon: 'fa fa-pencil'
      },
      {
        type: 'line',
        icon: 'fa fa-minus'
      },
      {
        type: 'bezierCurve', // 二次或三次贝塞尔曲线。
        icon: 'fa fa-stumbleupon'
      }
    ]
  },
  getGraphicPropertyArray(item) {
    var graphicDataShowProperty = [
      { property: 'fontSize', type: 'number' },
      { property: 'textDistance', type: 'number' },
      { property: 'textWidth', type: 'number' },
      { property: 'textHeight', type: 'number' },
      { property: 'position', type: 'array' }, // 图形所处位置
      { property: 'scale', type: 'array', step: 0.1 }, // 缩放比例 鼠标滚轮每次调节0.1
      // {property: 'rotation', type: 'number', step: 0.1}, // 旋转弧度 鼠标滚轮每次调节0.1
      { property: 'origin', type: 'array' }, // 圆心
      { property: 'z', type: 'number', min: 0 }, // 方向的高度，决定层叠关系
      // style下的公共属性
      { property: 'textOffset', type: 'array' }, // 虚线
      { property: 'lineDash', type: 'array' }, // 虚线
      { property: 'fill', type: 'color' }, // 填充色
      { property: 'stroke', type: 'color' }, // 线条颜色
      { property: 'lineWidth', type: 'number' }, // 线条宽度 每次加0.1
      { property: 'opacity', type: 'number', step: 0.01, max: 1, min: 0.2 }, // 透明度 值的范围：[0, 1]。 鼠标滚轮每次调节0.01
      { property: 'shadowBlur', type: 'number' }, // 阴影宽度
      { property: 'shadowColor', type: 'color' }, // 阴影颜色
      { property: 'shadowOffsetX', type: 'number' }, // 阴影 X 方向偏移。
      { property: 'shadowOffsetY', type: 'number' }, // 阴影 Y 方向偏移。
      { property: 'text', type: 'text' }, // 图形中的附加文本
      { property: 'textFont', type: 'text' }, // 图形中的附加文本样式
      {
        property: 'textPosition',
        type: 'select',
        selectArray: ['inside', 'left', 'right', 'top', 'bottom']
      }, // 附加文本位置, 可以是 inside, left, right, top, bottom
      {
        property: 'textAlign',
        type: 'select',
        selectArray: ['start', 'end', 'left', 'right', 'center']
      }, // 默认根据textPosition自动设置，附加文本水平对齐。 可以是start, end, left, right, center
      {
        property: 'textBaseline',
        type: 'select',
        selectArray: [
          'top',
          'bottom',
          'middle',
          'alphabetic',
          'hanging',
          'ideographic'
        ]
      }, // 默认根据textPosition自动设置，附加文本垂直对齐。 可以是top, bottom, middle, alphabetic, hanging, ideographic
      {
        property: 'textVeticalAlign',
        type: 'select',
        selectArray: ['top', 'bottom', 'middle']
      }, // text 文字垂直对齐方式，取值：'top', 'middle', 'bottom'。
      // 与圆相关的属性
      { property: 'cx', type: 'number' }, // 图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。
      { property: 'cy', type: 'number' }, // 图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
      { property: 'r', type: 'number' }, // 外半径。
      { property: 'r0', type: 'number' }, // 内半径。
      { property: 'startAngle', step: 0.01, type: 'number' }, // 扇形开始弧度。 鼠标滚轮每次调节0.001
      { property: 'endAngle', step: 0.01, type: 'number' }, // 扇形结束弧度。 鼠标滚轮每次调节0.001
      { property: 'events', type: 'textarea' }, // 扇形结束弧度。 鼠标滚轮每次调节0.001
      // {property: 'clockwise', type: 'select', selectArray: [false, true]}, // 是否顺时针。
      // 直线相关属性
      { property: 'x1', type: 'number' }, // 开始点的 x 值。
      { property: 'y1', type: 'number' }, // 开始点的 y 值
      { property: 'x2', type: 'number' }, // 结束点的 x 值。
      { property: 'y2', type: 'number' }, // 结束点的 y 值。
      { property: 'percent', type: 'number', step: 0.01, max: 1, min: 0.2 }, // 线画到百分之多少就不画了。值的范围：[0, 1]。 鼠标滚轮每次调节0.01
      // 矩形相关属性
      { property: 'x', type: 'number' }, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。
      { property: 'y', type: 'number' }, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
      { property: 'width', type: 'number' }, // 图形元素的宽度。
      { property: 'height', type: 'number' }, // 图形元素的高度。
      { property: 'points', type: 'twoDimensionalArray' }, // 图形元素的高度。
      // 贝塞尔曲线相关属性
      { property: 'cpx1', type: 'number' }, // 控制点 x 值。
      { property: 'cpy1', type: 'number' }, // 控制点 y 值
      { property: 'cpx2', type: 'number' }, // 第二个控制点 x 值。如果设置则开启三阶贝塞尔曲线
      { property: 'cpy2', type: 'number' }, // 第二个控制点 y 值。如果设置则开启三阶贝塞尔曲线。
      // 添加的变量名是否显示
      {
        property: 'showTag',
        type: 'select',
        selectArray: ['hiddenTag', 'hiddenValue', 'hiddenAll', 'show']
      } // 添加的变量名是否显示
    ]
    var k
    var props = []
    var type // 属性类型
    var step // 数字输入框滚轮调节的步数
    var max // 数字输入框的最大值
    var min // 数字输入框的最小值
    for (k in item) {
      var v = item[k]
      if (typeof v === 'function') continue
      for (var i in graphicDataShowProperty) {
        // console.dir(k)
        if (k === graphicDataShowProperty[i].property) {
          var property = graphicDataShowProperty[i]
          type = property.type
          switch (property.type) {
            case 'text':
              props.push({ k, v })
              break
            case 'number':
              step = property.step
              max = property.max
              min = property.min
              props.push({ k, v, type, step, max, min })
              break
            case 'array':
              step = property.step
              max = property.max
              min = property.min
              props.push({ k, v, type, step, max, min })
              break
            case 'select':
              var selectArray = property.selectArray
              props.push({ k, v, type, selectArray })
              break
            case 'textarea':
              props.push({ k, v, type })
              break
            case 'twoDimensionalArray':
              props.push({ k, v, type })
              break
            case 'color':
              props.push({ k, v, type })
              break
          }
        }
      }
    }
    return props
  },
  getBasicGraphicData(value) {
    var data = {
      x: value && value.x ? value.x : 0,
      y: value && value.y ? value.y : 0,
      width: value && value.width ? value.width : 40,
      height: value && value.height ? value.height : 40
    }
    var config
    switch (value.type) {
      case 'text':
        config = {
          type: 'text', // 文本
          // icon: 'fa fa-amazon',
          $action: 'merge',
          bounding: 'all',
          z: 1,
          silent: false,
          invisible: false,
          draggable: false,
          rotation: 0,
          origin: [data.width / 2, 0],
          position: [data.x, data.y],
          scale: [1, 1],
          events: '',
          style: {
            tag: '',
            showTag: 'show',
            lineDash: [0, 0], // 虚线
            commandName: '',
            command: '',
            opacity: 1,
            text: '文本默认值',
            x: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。
            y: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。,
            textAlign: 'left',
            font: '16px "Microsoft YaHei", sans-serif',
            fontValue: 16,
            textVeticalAlign: 'middle',
            fill: '#000',
            stroke: ' #FFFFFF',
            lineWidth: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#000'
          }
        }
        break
      case 'rect':
        config = {
          type: 'rect', // 矩形
          $action: 'merge',
          bounding: 'all',
          rotation: 0,
          origin: [0, 0],
          z: 1,
          silent: false,
          invisible: false,
          draggable: false,
          // progressive: false,
          position: [data.x, data.y],
          scale: [1, 1],
          events: '',
          shape: {
            x: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。
            y: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
            width: data.width,
            height: data.height
          },
          style: {
            tag: '',
            showTag: 'show',
            lineDash: [0, 0], // 虚线
            commandName: '',
            command: '',
            opacity: 1,
            text: '',
            fill: '#000',
            stroke: ' #FFFFFF',
            lineWidth: 0,
            textFont: '', // 附加文本样式
            textPosition: 'bottom', // 附加文本位置
            textAlign: 'center', // 附加文本水平对齐
            textBaseline: 'middle', // 附加文本垂直对齐
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#000'
          }
        }
        break
      case 'circle':
        config = {
          type: 'circle', // 圆形
          // icon: 'fa fa-circle-o',
          $action: 'merge',
          bounding: 'all',
          rotation: 0,
          position: [data.x, data.y],
          origin: [0, 0],
          z: 1,
          silent: false,
          invisible: false,
          draggable: false,
          scale: [1, 1],
          events: '',
          shape: {
            cx: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。
            cy: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
            r: 40
          },
          style: {
            tag: '',
            showTag: 'show',
            lineDash: [0, 0], // 虚线
            text: '',
            commandName: '',
            command: '',
            opacity: 1,
            fill: '#000',
            stroke: ' #FFFFFF',
            lineWidth: 0,
            textFont: '', // 附加文本样式
            textPosition: 'bottom', // 附加文本位置
            textAlign: 'center', // 附加文本水平对齐
            textBaseline: 'middle', // 附加文本垂直对齐
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#000'
          }
        }
        break
      case 'ring':
        config = {
          type: 'ring', // 圆环
          // icon: 'fa fa-dot-circle-o',
          $action: 'merge',
          bounding: 'all',
          rotation: 0,
          position: [data.x, data.y],
          origin: [0, 0],
          z: 1,
          silent: false,
          invisible: false,
          cursor: 'pointer',
          draggable: false,
          scale: [1, 1],
          events: '',
          shape: {
            cx: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。
            cy: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
            r: data.r ? data.r : 40,
            r0: data.r0 ? data.r0 : 30
          },
          style: {
            tag: '',
            showTag: 'show',
            lineDash: [0, 0], // 虚线
            text: '',
            commandName: '',
            command: '',
            opacity: 1,
            fill: '#000',
            stroke: ' #FFFFFF',
            lineWidth: 0,
            textFont: '', // 附加文本样式
            textPosition: 'bottom', // 附加文本位置
            textAlign: 'center', // 附加文本水平对齐
            textBaseline: 'middle', // 附加文本垂直对齐
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#000'
          }
        }
        break
      case 'sector':
        config = {
          type: 'sector', // 扇形
          // icon: 'fa fa-pie-chart',
          $action: 'merge',
          bounding: 'all',
          rotation: 0,
          origin: [0, 0],
          z: 1,
          zlevel: 0,
          silent: false,
          invisible: false,
          draggable: false,
          position: [data.x, data.y],
          scale: [1, 1],
          events: '',
          shape: {
            cx: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。
            cy: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
            r: data.r ? data.r : 0,
            r0: data.r0 ? data.r0 : 40,
            startAngle: 0,
            endAngle: Math.PI,
            clockwise: true
          },
          style: {
            tag: '',
            showTag: 'show',
            lineDash: [0, 0], // 虚线
            commandName: '',
            command: '',
            opacity: 1,
            text: '',
            fill: '#000',
            stroke: ' #FFFFFF',
            lineWidth: 0,
            textFont: '', // 附加文本样式
            textPosition: 'bottom', // 附加文本位置
            textAlign: 'center', // 附加文本水平对齐
            textBaseline: 'middle', // 附加文本垂直对齐
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#000'
          }
        }
        break
      case 'arc':
        config = {
          type: 'arc', // 圆弧
          // icon: 'fa fa-circle-o-notch',
          $action: 'merge',
          bounding: 'all',
          z: 1,
          zlevel: 0,
          silent: false,
          invisible: false,
          cursor: 'pointer',
          rotation: 0,
          position: [data.x, data.y],
          origin: [0, 0],
          draggable: false,
          // progressive: false,
          scale: [1, 1],
          events: '',
          shape: {
            cx: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。
            cy: 0, // 图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
            r: data && data.r ? data.r : 40,
            r0: data && data.r0 ? data.r0 : 0,
            startAngle: 0,
            endAngle: Math.PI,
            clockwise: true
          },
          style: {
            tag: '',
            showTag: 'show',
            lineDash: [0, 0], // 虚线
            commandName: '',
            command: '',
            opacity: 1,
            text: '',
            fill: null,
            stroke: '#000',
            lineWidth: 5,
            textFont: '', // 附加文本样式
            textPosition: 'bottom', // 附加文本位置
            textAlign: 'center', // 附加文本水平对齐
            textBaseline: 'middle', // 附加文本垂直对齐
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#000'
          }
        }
        break
      case 'polygon':
        config = {
          type: 'polygon', // 多边形
          // icon: 'fa fa-connectdevelop',
          $action: 'merge',
          bounding: 'all',
          z: 1,
          zlevel: 0,
          silent: false,
          invisible: false,
          draggable: false,
          rotation: 0,
          position: [data.x, data.y],
          origin: [0, 0],
          scale: [1, 1],
          events: '',
          shape: {
            points: [[0, 100], [100, 100], [50, 0], [0, 0]],
            smooth: undefined,
            smoothConstraint: false
          },
          style: {
            tag: '',
            showTag: 'show',
            lineDash: [0, 0], // 虚线
            commandName: '',
            command: '',
            opacity: 1,
            text: '',
            fill: '#000',
            stroke: ' #FFFFFF',
            lineWidth: 0,
            textFont: '', // 附加文本样式
            textPosition: 'bottom', // 附加文本位置
            textAlign: 'center', // 附加文本水平对齐
            textBaseline: 'middle', // 附加文本垂直对齐
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#000'
          }
        }
        break
      case 'polyline':
        config = {
          type: 'polyline', // 折线
          icon: 'fa fa-pencil',
          $action: 'merge',
          bounding: 'all',
          z: 1,
          silent: false,
          invisible: false,
          draggable: false,
          rotation: 0,
          position: [data.x, data.y],
          origin: [0, 0],
          scale: [1, 1],
          events: '',
          shape: {
            points: [],
            smooth: undefined,
            smoothConstraint: false
          },
          style: {
            tag: '',
            showTag: 'show',
            lineDash: [0, 0], // 虚线
            commandName: '',
            command: '',
            opacity: 1,
            text: '',
            fill: null,
            stroke: '#000',
            lineWidth: 5,
            textFont: '', // 附加文本样式
            textPosition: 'bottom', // 附加文本位置
            textAlign: 'center', // 附加文本水平对齐
            textBaseline: 'middle', // 附加文本垂直对齐
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#000'
          }
        }
        break
      case 'line':
        config = {
          type: 'line', // 直线
          // icon: 'fa fa-minus',
          $action: 'merge',
          bounding: 'all',
          z: 1,
          zlevel: 0,
          silent: false,
          invisible: false,
          cursor: 'pointer',
          draggable: false,
          // progressive: false,
          rotation: 0,
          position: [data.x, data.y],
          origin: [0, 0],
          scale: [1, 1],
          events: '',
          shape: {
            x1: 0,
            y1: 0,
            x2: data.width,
            y2: 0,
            percent: 1
          },
          style: {
            tag: '',
            showTag: 'show',
            lineDash: [0, 0], // 虚线
            commandName: '',
            command: '',
            opacity: 1,
            text: '',
            fill: null,
            stroke: '#000',
            lineWidth: 5,
            textFont: '', // 附加文本样式
            textPosition: 'bottom', // 附加文本位置
            textAlign: 'center', // 附加文本水平对齐
            textBaseline: 'middle', // 附加文本垂直对齐
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#000'
          }
        }
        break
      case 'bezierCurve':
        config = {
          type: 'bezierCurve', // 二次或三次贝塞尔曲线。
          // icon: 'fa fa-stumbleupon',
          // id: undefined,
          $action: 'merge',
          bounding: 'all',
          z: 1,
          zlevel: 0,
          silent: false,
          invisible: false,
          draggable: false,
          rotation: 0,
          position: [data.x, data.y],
          origin: [0, 0],
          scale: [1, 1],
          events: '',
          shape: {
            x1: 0,
            y1: 0,
            x2: data.width,
            y2: data.height,
            cpx1: data.cpx1 ? data.cpx1 : 50,
            cpy1: data.cpy1 ? data.cpy1 : 0,
            cpx2: data.cpx2 ? data.cpx2 : 50,
            cpy2: data.cpy2 ? data.cpy2 : 100,
            percent: 1
          },
          style: {
            tag: '',
            showTag: 'show',
            lineDash: [0, 0], // 虚线
            commandName: '',
            command: '',
            opacity: 1,
            text: '',
            fill: '#000',
            stroke: ' #FFFFFF',
            lineWidth: 0,
            textFont: '', // 附加文本样式
            textPosition: 'bottom', // 附加文本位置
            textAlign: 'center', // 附加文本水平对齐
            textBaseline: 'middle', // 附加文本垂直对齐
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#000'
          }
        }
        break
    }
    return config
  }
}
