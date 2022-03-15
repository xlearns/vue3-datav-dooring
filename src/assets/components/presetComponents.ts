export const presetComponents = {
  echarts:{
    name:"Echarts图表",
    icon:"icon-menu-media",
    children:{
      lineCharts: {
        name: "折线图11",
        code: "lineChart",
        componentName: "折线图",
        config: ["titleConfig", "background", "xAxis", "yAxis", "legend", "lineConfig"],
        dataConfig: []
      }
    }
  },
  test:{
    name:"Echarts图表",
    icon:"icon-text",
    children:{
      lineCharts: {
        name: "折线图1",
        code: "lineChart",
        componentName: "折线图",
        config: ["titleConfig", "background", "xAxis", "yAxis", "legend", "lineConfig"],
        dataConfig: []
      }
    }
  },
  test1:{
    name:"Echarts图表",
    icon:"icon-text",
    children:{
      lineCharts: {
        name: "折线图2",
        code: "lineChart",
        componentName: "折线图",
        config: ["titleConfig", "background", "xAxis", "yAxis", "legend", "lineConfig"],
        dataConfig: []
      }
    }
  }
}