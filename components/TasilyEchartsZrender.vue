<template>
  <div
    :id = "containerId"
    :style = "{'width': '100%', 'min-width': _width ? _width : '400px', 'height': _height ? _height : '220px'}"
    class = "chartContainer"
  />
</template>
<script>
// import Echarts from 'echarts'
const Echarts = require('echarts')
// import UUID from 'uuid'
const UUID = require('uuid')
export default {
  props: {
    title: {
      type: Object,
      default: function() {
        return {}
      }
    },
    legend: {
      type: Object,
      default: function() {
        return {}
      }
    },
    grid: {
      type: Object,
      default: function() {
        return {}
      }
    },
    xAxis: {
      type: Object,
      default: function() {
        return {}
      }
    },
    yAxis: {
      type: Object,
      default: function() {
        return {}
      }
    },
    polar: {
      type: Object,
      default: function() {
        return {}
      }
    },
    radiusAxis: {
      type: Object,
      default: function() {
        return {}
      }
    },
    angleAxis: {
      type: Object,
      default: function() {
        return {}
      }
    },
    radar: {
      type: Object,
      default: function() {
        return {}
      }
    },
    dataZoom: {
      type: Array,
      default: function() {
        return []
      }
    },
    visualMap: {
      type: Array,
      default: function() {
        return []
      }
    },
    tooltip: {
      type: Object,
      default: function() {
        return {}
      }
    },
    toolbox: {
      type: Object,
      default: function() {
        return {}
      }
    },
    brush: {
      type: Object,
      default: function() {
        return {}
      }
    },
    geo: {
      type: Object,
      default: function() {
        return {}
      }
    },
    parallel: {
      type: Object,
      default: function() {
        return {}
      }
    },
    parallelAxis: {
      type: Object,
      default: function() {
        return {}
      }
    },
    singleAxis: {
      type: Object,
      default: function() {
        return {}
      }
    },
    timeline: {
      type: Object,
      default: function() {
        return {}
      }
    },
    series: {
      type: Array,
      default: function() {
        return []
      }
    },
    color: {
      type: Array,
      default: function() {
        return []
      }
    },
    backgroundColor: {
      type: String,
      default: null
    },
    group: {
      type: String,
      default: null
    },
    data: {
      type: [Array, Object],
      default: null
    },
    graphic: {
      type: Array,
      default: function() {
        return []
      }
    },
    _width: {
      type: String,
      default: null
    },
    _height: {
      type: String,
      default: null
    },
    dataArray: {
      type: Array,
      default: function() {
        return []
      }
    }, // 变量数组
    _index: {
      type: Number,
      default: null
    },
    edit: {
      type: Boolean,
      default: false
    },
    showGrid: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      echart: {},
      containerId: UUID.v4()
    }
  },
  watch: {
    graphic: {
      handler(graphic) {
        this.echart.setOption({ graphic })
      },
      deep: true
    },
    dataArray: {
      handler(dataArray) {
        let vm = this
        this.graphic.map((v, k) => {
          if (v.children) {
            v.children.map((c) => {
              vm.graphicValueChange(c, dataArray)
            })
          } else vm.graphicValueChange(v, dataArray)
        })
      },
      deep: true
    },
    _height: {
      handler(_height) {
        this.$nextTick(function() {
          this.echart.resize()
        })
      }
    },
    _width: {
      handler(_width) {
        this.$nextTick(function() {
          this.echart.resize()
        })
      }
    }
  },
  created() {
    let vm = this
    this.$nextTick(function() {
      this.echart = Echarts.init(document.getElementById(this.containerId))
      this.echart.setOption(this.getDefaultOption())
      this.echart.on('click', function(params) {
        vm.$emit('chart-click-data', {
          data: params,
          id: vm.$el.id,
          echart: vm.echart
        })
      })
      this.$emit('completed', this._index)
    })
  },
  methods: {
    graphicValueChange(v, dataArray) {
      if (v.style.tagVariable) {
        // var $value = window.Function('dataValue', v['style']['tagVariable'])(dataArray)
        var $value = window.Function('dataValue', v['style']['tagVariable'])
        if (v['style']['showTag'] && v['style']['showTag'] === 'hiddenValue') {
          $value = ''
        }
        let tag = v['style']['tag'] + ':'
        if (v['style']['showTag'] && v['style']['showTag'] === 'hiddenTag') {
          tag = ''
        }
        v['style']['text'] = tag + $value
        if (v['style']['showTag'] && v['style']['showTag'] === 'hiddenAll') {
          v['style']['text'] = v['style']['text']
        }
        v['tmp'] = $value
        if (v.events) {
          // v.events.map(e => {
          window.Function('g', v.events)(v)
          // })
        }
      }
    },
    getDefaultOption() {
      var data = []
      var i = 0
      for (; i < 100; i++) {
        data[i] = [i, i]
      }

      var option = {
        legend: this.legend,
        tooltip: {
          trigger: 'axis',
          show: this.edit,
          position: [-100, -100],
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          show: false,
          orient: 'vertical',
          right: '0px',
          feature: {
            restore: { show: true },
            dataView: { show: true },
            dataZoom: { show: true },
            magicType: { type: ['line', 'bar', 'stack', 'tiled'] },
            saveAsImage: { show: true }
          }
        },
        grid: {
          show: true,
          top: '1%',
          left: '0%',
          right: '0%',
          bottom: '1%',
          containLabel: false
        },
        xAxis: {
          show: this.showGrid,
          type: 'value',
          splitNumber: 25,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dotted'
            }
          }
        },
        yAxis: [
          {
            show: this.showGrid,
            splitNumber: 25,
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            splitLine: {
              // interval: 1,
              lineStyle: {
                type: 'dotted'
              }
            }
          }
        ],
        useUTC: false,
        dataZoom: [{ show: false }],
        series: [
          {
            z: 0,
            name: 'scatter',
            type: 'scatter',
            showSymbol: false,
            itemStyle: {
              normal: {
                opacity: 0
              }
            },
            data: data
          }
        ],
        graphic: this.graphic
      }
      return option
    },
    sizeChange() {
      this.$nextTick(function() {
        this.echart.resize()
      })
    }
  }
}
</script>
