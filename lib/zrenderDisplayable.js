// 公共属性
var opts = {
  // culling: false, // boolean	false	是否进行裁剪。
  // cursor: 'pointer', // string	'pointer'	鼠标移到元素上时的鼠标样式。
  draggable: false, // boolean	false	图形是否可拖曳。
  invisible: false, // boolean	false	图形是否不可见，为 true 时不绘制图形，但是仍能触发鼠标事件。
  // progressive: -1, // number - 1	是否渐进式渲染。当图形元素过多时才使用，用大于 0 的数字表示渲染顺序。
  // rectHover: false, // boolean	false	是否使用包围盒检验鼠标是否移动到物体。false 则检测元素实际的内容。
  silent: false, // boolean	false	是否响应鼠标事件。
  // zlevel: 0, // number	0	决定绘画在哪层 Canvas 中。Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的 zlevel。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面。
  z: 1, // number	0	控制图形的前后顺序。z 值小的图形会被 z 值大的图形覆盖。z 相比 zlevel 优先级更低，而且不会创建新的 Canvas。
  // z2: 0, // number	0	与 z 类似，优先级比 z 更低。
  style: {
    fill: '#000', // string	'#000'	填充样式。
    stroke: '#000', // string	null	描边样式。
    opacity: 1, // number	1	不透明度。
    lineDash: null, // number[]	null	描边虚线样式，参考 SVG stroke - dasharray。
    lineDashOffset: null, // number	null	描边虚线偏移，参考 SVG stroke - dashoffset。

    // 图形阴影属性
    shadowBlur: 0, // number	0	阴影模糊大小。
    shadowColor: 'transparent', // string	'transparent'	阴影颜色。
    shadowOffsetX: 0, // number	0	阴影横向偏移。
    shadowOffsetY: 0, // number	0	阴影纵向偏移。

    lineWidth: 0, // number	0	线宽。
    strokeNoScale: false, // boolean	false	描边粗细不随缩放而改变，false 则会根据缩放同比例缩放描边粗细。

    // 图形填充文字样式
    text: null, // string	null	在图形中显示的文字。
    font: null, // string	null	文字样式，由 fontSize、 fontFamily、 fontStyle、 fontWeight 组成，建议分别设置这几项而非直接设置 font。
    fontStyle: null, // string	null	同 CSS font - style。
    fontWeight: null, // string	null	同 CSS font - weight。
    fontSize: null, // string	null	同 CSS font - size。
    fontFamily: null, // string	null	同 CSS font - family。
    textFill: null, // string	null	文字填充样式。
    textStroke: null, // string	null	文字描边样式。
    textWidth: null, // number	null	文字宽度。
    textHeight: null, // number	null	文字高度，仅用于设置背景色时需要设置。
    textLineWidth: 0, // number	0	文字描边宽度。
    textLineHeight: 0, // number	0	文字行高。
    textPosition: 0, // string | number[]	'inside'	文字位置，可以为 'inside'、 'left'、 'right'、 'top'、 'bottom'，或一个二维数组[x:, y] 表示相对形状的位置。
    textOffset: null, // number[]	null	文字位置偏移，包括 x、 y。
    textAlign: null, // string	null	文字水平对齐方式，可取值：'left'、 'center'、 'right'，默认根据 textPosition 计算。
    textVerticalAlign: null, // string	null	文字垂直对齐方式，可取值：'top'、 'middle'、 'bottom'，默认根据 textPosition 计算。
    textDistance: 5, // number	5	文字与其对齐的边缘的距离，如 textPosition 为 top 时，textDistance 表示与形状上方的距离。

    // 文字阴影属性
    textShadowColor: 'transparent', // string	'transparent'	文字阴影颜色。
    textShadowBlur: 0, // number	0	文字阴影模糊大小。
    textShadowOffsetX: 0, // number	0	文字阴影水平偏移。
    textShadowOffsetY: 0, // number	0	文字阴影垂直偏移。
    textBoxShadowColor: 'transparent', // string	'transparent'	文字包围盒阴影颜色。

    // 文字包围盒属性
    textRect: null, // Object	null	文字包围盒，包括 x、 y、 width、 height 属性，如果没有设置，将使用形状的包围盒。
    textBoxShadowBlur: 0, // number	0	文字包围盒阴影模糊大小。
    textBoxShadowOffsetX: 0, // number	0	文字包围盒阴影水平偏移。
    textBoxShadowOffsetY: 0, // number	0	文字包围盒阴影垂直偏移。
    textBackgroundColor: null, // string	null	文字包围盒颜色。
    textBorderColor: null, // string	null	文字包围盒描边颜色。
    textBorderWidth: 0, // number	0	文字包围盒描边宽度。

    transformText: false, // boolean	false	文字是否跟随变换效果，仅对 Path 或 Image 元素有效
    textRotation: 0, // number	0	文字旋转角度，仅对 Path 或 Image 元素有效，并且 transformText 应设置为 false。
    textOrigin: null, // string | number[]	null	文字变换中心，可以是 'center' 或一个二维数组[x:, y] 表示相对形状的位置，默认值是 textPosition。
    textBorderRadius: 0, // number	0	文字圆角大小。
    textPadding: null, // number | number[]	null	文字内边距，可以是 2 或[2:, 4] 或[2:, 3:, 4:, 5] 的形式，同 CSS Padding，单位是像素。

    rich: null, // Object	null	富文本样式，参考 ECharts rich 配置项。
    blend: null, // string	null	混合模式，同 Canvas globalCompositeOperation。

    // truncate: null, //	Object	null	当文字过长显示不下时，显示省略号表示。
    truncate: {
      outerWidth: null, // number	null	包含了 textPadding 的宽度，超出这个范围就裁剪。
      outerHeight: null, // number	null	包含了 textPadding 的高度，超出这个范围就裁剪。
      ellipsis: '...', // string	'...'	默认用省略号表示超出部分，也可以对其进行自定义。
      placeholder: null // string	null	如果空间过小，导致省略号也显示不下，但是又不想空着，可能得有个什么标记表示这里是有字符的，就用个 “点”，就是在这个 placeholder 里设置。
    }
  }
}
/**
 * @author: wangHongFei
 * @description: 获取图形属性
 */
export function getGraphicProperties(graphicType) {
  var graphicProperties = opts
  graphicProperties.type = graphicType
  var config = null
  switch (graphicType) {
    // 文字。
    case 'Text':
      config = {
        graphicsName: '文字',
        style: {
          text: '文本默认值',
          font: '16px "Microsoft YaHei", sans-serif'
        }
      }
      break
    // 矩形。
    case 'Rect':
      config = {
        graphicsName: '矩形',
        shape: {
          r: 0, // 用于创建圆角矩形。
          // 左上、右上、右下、左下角的半径依次为 r1、 r2、 r3、 r4。r 缩写为 1 相当于 [1, 1, 1, 1]；
          // r 缩写为 [1] 相当于 [1, 1, 1, 1]；r 缩写为 [1, 2] 相当于 [1, 2, 1, 2]；
          // r 缩写为 [1, 2, 3] 相当于 [1, 2, 3, 2]。
          x: 0, //	number	0	左上角的横坐标。
          y: 0, // number	0		左上角的纵坐标。
          width: 20, //	number	0	宽度。
          height: 20 //	number	0	高度。
        }
      }
      break
    // 圆。
    case 'Circle':
      config = {
        graphicsName: '圆',
        shape: {
          // Object	 	形状属性。
          cx: 0, //	number	0	圆心横坐标。
          cy: 0, // number	0	圆心纵坐标。
          r: 10 // number	0	半径。
        }
      }
      break
    // 扇形。
    case 'Sector':
      config = {
        graphicsName: '扇形',
        shape: {
          // Object	 	形状属性。
          cx: 0, //	number	0	圆心横坐标。
          cy: 0, // number	0	圆心纵坐标。
          r: 40, // number	0	半径。
          r0: 30, // number	0	内半径。
          startAngle: 0, //	number	0	起始弧度。
          endAngle: Math.PI, //	number	Math.PI * 2	终止弧度。
          clockwise: true //	boolean	true	顺时针方向。
        }
      }
      break
      // // 圆环
      // case 'ring':
      //   config = {
      //     graphicsName: '圆环',
      //     shape: {
      //       cx: 0, //	number	0	圆心横坐标。
      //       cy: 0, // number	0	圆心纵坐标。
      //       r: 40, // number	0	半径。
      //       r0: 0 // number	0	内半径。
      //     }
      //   }
      break
    // 圆弧。
    case 'Arc':
      config = {
        graphicsName: '圆弧',
        shape: {
          // Object	 	形状属性。
          cx: 0, //	number	0	圆心横坐标。
          cy: 0, // number	0	圆心纵坐标。
          r: 40, // number	0	半径。
          startAngle: 0, //	number	0	起始弧度。
          endAngle: Math.PI, //	number	Math.PI * 2	终止弧度。
          clockwise: true //	boolean	true	顺时针方向。
        }
      }
      break
    // 线段。
    case 'Line':
      config = {
        graphicsName: '线段',
        shape: {
          //	Object	 	形状属性。
          x1: 0, //	number	0	起始点横坐标。
          y1: 0, //	number	0	起始点纵坐标。
          x2: 50, //	number	0	终止点横坐标。
          y2: 0, //	number	0	终止点纵坐标。
          percent: 1 //	number	1	已显示的百分比，用于绘制动画。
        }
      }
      break
    // 贝塞尔曲线。
    case 'BezierCurve':
      config = {
        graphicsName: '贝塞尔曲线',
        shape: {
          //	Object	 	形状属性。
          x1: 0, //	number	0	起始点横坐标。
          y1: 0, //	number	0	起始点纵坐标。
          x2: 20, //	number	0	终止点横坐标。
          y2: 20, //	number	0	终止点纵坐标。
          cpx1: 50, // number	0	控制点横坐标。
          cpy1: 0, // number	0	控制点纵坐标。
          percent: 1 //	number	1	已显示的百分比，用于绘制动画。
        }
      }
      break
    // // 复合路径。相当于多个路径的并集。
    // case 'CompoundPath':
    //   config = {
    //     graphicsName: '复合路径',
    //     shape: {
    //       paths: null // Path[]	null	路径数组。
    //     }
    //   }
    //   break
    // // 水滴
    // case 'Droplet':
    //   config = {
    //     graphicsName: '水滴',
    //     shape: {
    //       cx: 0, //	number	0	圆心横坐标。
    //       cy: 0, // number	0	圆心纵坐标。
    //       width: 10, //	number	0	宽度。
    //       height: 20 //	number	0	高度。
    //     }
    //   }
    //   break
    // // 椭圆。
    // case 'Ellipse':
    //   config = {
    //     graphicsName: '椭圆',
    //     shape: {
    //       // Object	 	形状属性。
    //       cx: 0, //	number	0	圆心横坐标。
    //       cy: 0, // number	0	圆心纵坐标。
    //       rx: 10, // number	0	横向半径。
    //       ry: 20 // number	0	纵向半径。
    //     }
    //   }
    //   break
    // // 心形。
    // case 'Heart':
    //   config = {
    //     graphicsName: '心形',
    //     shape: {
    //       cx: 0, //	number	0	圆心横坐标。
    //       cy: 0, // number	0	圆心纵坐标。
    //       width: 20, //	number	0	宽度。
    //       height: 20 //	number	0	高度。
    //     }
    //   }
    //   break
    // 图像。
    case 'Image':
      config = {
        graphicsName: '图像',
        shape: {
          image: '', //	string| HTMLImageElement | HTMLCanvasElement	 	图片的内容，可以是图片的 URL，也可以是 dataURI。
          x: 0, //	number	0	图片左上角相对于父节点的横坐标。
          y: 0, // number	0	图片左上角相对于父节点的纵坐标。
          width: 20, //	number	0	图片宽度。
          height: 20 //	number	0	图片高度。
        }
      }
      break
    // // 正多边形。
    // case 'Isogon':
    //   config = {
    //     graphicsName: '正多边形',
    //     shape: {
    //       // Object	 	形状属性。
    //       x: 0, //	number	0	圆心横坐标。
    //       y: 0, // number	0	圆心纵坐标。
    //       r: 10, // number	0 半径。
    //       n: 3 // number	0	边数
    //     }
    //   }
    //   break
    // 多边形。
    case 'Polygon':
      config = {
        graphicsName: '多边形',
        shape: {
          points: [[0, 100], [100, 100], [50, 0], [0, 0]], //	number[][]	0	每个元素是一个横纵坐标的数组。
          smooth: 0, //	number| string	0	圆滑程度，取值范围为 0 到 1 之间的数字，0 表示不圆滑
          // 也可以是特殊字符串 'spline' 表示用 Catmull- Rom spline 插值算法，否则默认用贝塞尔曲线插值算法。
          smoothvarraint: 0 //	number[][]	0	将计算出来的控制点约束在一个包围盒内。比如[[0, 0], [100, 100]]，这个包围盒会与整个折线的包围盒做一个并集用来约束控制点。
        }
      }
      break
    // 多边形折线段。默认是不闭合的，如果需要闭合，请将最后一个点设为和第一个点同样的位置。
    case 'Polyline':
      config = {
        graphicsName: '多边形折线段',
        shape: {
          points: 0, //	number[][]	0	每个元素是一个横纵坐标的数组。
          smooth: 0, //	number| string	0	圆滑程度，取值范围为 0 到 1 之间的数字，0 表示不圆滑；也可以是特殊字符串 'spline' 表示用 Catmull- Rom spline 插值算法，否则默认用贝塞尔曲线插值算法。
          smoothvarraint: 0 //	number[][]	0	将计算出来的控制点约束在一个包围盒内。比如[[0, 0], [100, 100]]，这个包围盒会与整个折线的包围盒做一个并集用来约束控制点。
        }
      }
      break
    // // 玫瑰线
    // case 'Rose':
    //   config = {
    //     graphicsName: '玫瑰线',
    //     shape: {
    //       // Object	 	形状属性。
    //       cx: 0, //	number	0	圆心横坐标。
    //       cy: 0, // number	0	圆心纵坐标。
    //       r: [], // number	0	半径。
    //       k: 0, // 	number	0	玫瑰线参数，参见 wiki。
    //       n: 3 // 	number	1	花瓣数。
    //     }
    //   }
    //   break
    // // 星形。
    // case 'Star':
    //   config = {
    //     graphicsName: '星形',
    //     shape: {
    //       cx: 0, // number	0	圆心横坐标。
    //       cy: 0, //	number	0	圆心纵坐标。
    //       n: 3, //	number	3	瓣数，如 n 等于 5 时，是我们熟悉的五角星。
    //       r: 0, //	number	0	半径。
    //       r0: 0 //	number	0	内半径。
    //     }
    //   }
    //   break
    // // 内外旋轮曲线
    // case 'Trochoid':
    //   config = {
    //     graphicsName: '内外旋轮曲线',
    //     shape: {
    //       cx: 0, //	number	0	圆心横坐标。
    //       cy: 0, //	number	0	圆心纵坐标。
    //       r: 0, //	number	0	半径。
    //       r0: 0, //	number	0	内半径。
    //       d: 0, //	number	0	内外旋轮曲线参数，参见 wiki。
    //       n: 'out' // location	'out'	out 或 in，表示曲线在内部还是外部。
    //     }
    //   }
    //   break
  }
  for (var prop in config) {
    graphicProperties[prop] = config[prop]
  }
  return graphicProperties
}

export function resizeGraphics(graphicsItem, oldEven, newEven) {
  var width = newEven.offsetX - oldEven.offsetX
  var height = newEven.offsetY - oldEven.offsetY
  console.debug(graphicsItem, width, height)
  switch (graphicsItem.type) {
    // 矩形
    case 'Rect':
      graphicsItem.shape.width =
        parseInt(graphicsItem.shape.width) + parseInt(width)
      graphicsItem.shape.height =
        parseInt(graphicsItem.shape.height) + parseInt(height)
      break
    // 圆形
    case 'Circle':
      var r = parseInt(graphicsItem.shape.r) + parseInt(width)
      if (r > 0) {
        graphicsItem.shape.r = r
      }
      break
    // 圆环
    case 'ring':
      var r = parseInt(graphicsItem.shape.r) + parseInt(width)
      var r0 = parseInt(graphicsItem.shape.r0) + parseInt(width)
      var radiusDifference = graphicsItem.shape.r - graphicsItem.shape.r0
      console.debug('ring圆环：', r - radiusDifference, r0)
      if (r - radiusDifference > 1 && r0 > 1) {
        graphicsItem.shape.r = r
        graphicsItem.shape.r0 = r0
      }
      break
    // 圆弧
    case 'Sector':
      var r = parseInt(graphicsItem.shape.r) + parseInt(width)
      var r0 = parseInt(graphicsItem.shape.r0) + parseInt(width)
      var radiusDifference = graphicsItem.shape.r - graphicsItem.shape.r0
      console.debug('Sector圆弧：', r - radiusDifference, r0)
      if (r - radiusDifference > 1 && r0 > 1) {
        graphicsItem.shape.r = r
        graphicsItem.shape.r0 = r0
      }
      break
    // 贝塞尔曲线
    case 'BezierCurve':
      graphicsItem.shape.x1 = parseInt(graphicsItem.shape.x1) + parseInt(width)
      graphicsItem.shape.y1 = parseInt(graphicsItem.shape.y1) + parseInt(height)
      break
  }
  return graphicsItem
}
