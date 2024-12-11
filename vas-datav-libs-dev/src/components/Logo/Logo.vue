<script>
import * as echarts from 'echarts';

export default {
  name: "Logo",
  setup() {

  },
  mounted() {
    var chartDom = document.getElementById('logo');
    var myChart = echarts.init(chartDom,'dark');
    var option;

    option = {
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: '增值服务',
              fontSize: 80,
              fontWeight: 'bold',
              lineDash: [0, 200],
              lineDashOffset: 0,
              fill: 'transparent',
              stroke: '#fff',
              lineWidth: 1
            },
            keyframeAnimation: {
              duration: 3000,
              loop: true,
              keyframes: [
                {
                  percent: 0.7,
                  style: {
                    fill: 'transparent',
                    lineDashOffset: 200,
                    lineDash: [200, 0]
                  }
                },
                {
                  // Stop for a while.
                  percent: 0.8,
                  style: {
                    fill: 'transparent'
                  }
                },
                {
                  percent: 1,
                  style: {
                    fill: 'white'
                  }
                }
              ]
            }
          }
        ]
      }
    };

    option && myChart.setOption(option);

  }
}
</script>

<template>
  <div id="logo" style="width: 400px;height: 400px"></div>
</template>

<style lang="scss" scoped>
</style>