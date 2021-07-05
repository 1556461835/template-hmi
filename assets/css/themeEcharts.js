const themeEcharts = {
  color: [
    '#3088F4',
    '#FFC720',
    '#e7bcf3',
    '#32c5e9',
    '#ffdb5c',
    '#9fe6b8',
    '#e690d1',
    '#9d96f5',
    '#67e0e3',
    '#96bfff',
    '#37a2da',
    '#e062ae',
    '#8378ea',
    '#ff9f7f',
    '#fb7293'
  ],
  backgroundColor: 'rgba(252,252,252,0)',
  textStyle: {},
  title: {
    color: '#666666',
    subtextStyle: {
      color: '#999999'
    }
  },
  line: {
    itemStyle: {
      borderWidth: '2'
    },
    lineStyle: {
      width: '3'
    },
    emphasis: {
      lineStyle: {
        width: '3' // hover时的折线宽度
      }
    },
    symbolSize: '8',
    symbol: 'emptyCircle',
    smooth: false
  },
  radar: {
    itemStyle: {
      borderWidth: '2'
    },
    lineStyle: {
      width: '3'
    },
    emphasis: {
      lineStyle: {
        width: '3' // hover时的折线宽度
      }
    },
    symbolSize: '8',
    symbol: 'emptyCircle',
    smooth: false
  },
  bar: {
    emphasis: {
      barBorderWidth: 0,
      barBorderColor: '#ccc',
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: '#ccc'
      }
    }
  },
  pie: {
    emphasis: {
      borderWidth: 0,
      borderColor: '#ccc',
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    }
  },
  scatter: {
    emphasis: {
      borderWidth: 0,
      borderColor: '#ccc',
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    }
  },
  boxplot: {
    emphasis: {
      borderWidth: 0,
      borderColor: '#ccc',
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    }
  },
  parallel: {
    emphasis: {
      borderWidth: 0,
      borderColor: '#ccc',
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    }
  },
  sankey: {
    emphasis: {
      borderWidth: 0,
      borderColor: '#ccc',
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    }
  },
  funnel: {
    emphasis: {
      borderWidth: 0,
      borderColor: '#ccc',
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    }
  },
  gauge: {
    emphasis: {
      borderWidth: 0,
      borderColor: '#ccc',
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc'
      }
    }
  },
  candlestick: {
    itemStyle: {
      color: '#e6a0d2',
      color0: 'transparent',
      borderColor: '#e6a0d2',
      borderColor0: '#3fb1e3',
      borderWidth: '2'
    }
  },
  graph: {
    itemStyle: {
      borderWidth: 0,
      borderColor: '#ccc'
    },
    lineStyle: {
      width: '1',
      color: '#cccccc'
    },
    symbolSize: '8',
    symbol: 'emptyCircle',
    smooth: false,
    color: ['#3fb1e3', '#6be6c1', '#626c91', '#a0a7e6', '#c4ebad', '#96dee8'],
    label: {
      color: '#ffffff'
    }
  },
  map: {
    emphasis: {
      color: '#3fb1e3',
      label: {
        color: '#ffffff'
      },
      areaColor: 'rgba(63,177,227,0.25)',
      borderColor: '#3fb1e3',
      borderWidth: 1,
      itemStyle: {
        areaColor: '#eeeeee',
        borderColor: '#aaaaaa',
        borderWidth: 0.5
      }
    }
  },
  geo: {
    emphasis: {
      color: '#3fb1e3',
      label: {
        color: '#ffffff'
      },
      itemStyle: {
        areaColor: '#eeeeee',
        borderColor: '#aaaaaa',
        borderWidth: 0.5,
        emphasis: {
          areaColor: 'rgba(63,177,227,0.25)',
          borderColor: '#3fb1e3',
          borderWidth: 1
        }
      }
    }
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#cccccc'
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#333'
      }
    },
    axisLabel: {
      show: true,
      color: '#999999'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#eeeeee']
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)']
      }
    }
  },
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#cccccc'
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#333'
      }
    },
    axisLabel: {
      show: true,
      color: '#999999'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#eeeeee']
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)']
      }
    }
  },
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#cccccc'
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#333'
      }
    },
    axisLabel: {
      show: true,
      color: '#999999'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#eeeeee']
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)']
      }
    }
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#cccccc'
      }
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: '#333'
      }
    },
    axisLabel: {
      show: true,
      color: '#999999'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#eeeeee']
      }
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)']
      }
    }
  },
  toolbox: {
    emphasis: {
      borderColor: '#666666',
      iconStyle: {
        borderColor: '#999999'
      }
    }
  },
  legend: {
    color: '#999999'
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: '#cccccc',
        width: 1
      },
      crossStyle: {
        color: '#cccccc',
        width: 1
      }
    }
  },
  timeline: {
    lineStyle: {
      color: '#626c91',
      width: 1
    },
    emphasis: {
      color: '#626c91',
      borderColor: '#626c91',
      borderWidth: 0.5,
      controlStyle: {
        color: '#626c91',
        borderColor: '#626c91',
        borderWidth: 0.5
      },
      itemStyle: {
        color: '#626c91',
        borderWidth: 1
      },
      label: {
        color: '#626c91'
      }
    },
    checkpointStyle: {
      color: '#3fb1e3',
      borderColor: '#3fb1e3'
    }
  },
  visualMap: {
    color: ['#2a99c9', '#afe8ff']
  },
  dataZoom: {
    backgroundColor: 'rgba(255,255,255,0)',
    dataBackgroundColor: 'rgba(222,222,222,1)',
    fillerColor: 'rgba(114,230,212,0.25)',
    handleColor: '#cccccc',
    handleSize: '100%',
    color: '#999999'
  },
  markPoint: {
    emphasis: {
      color: '#ffffff',
      label: {
        color: '#ffffff'
      }
    }
  }
}

export default themeEcharts
