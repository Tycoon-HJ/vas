<template>
  <div>
    <div class="waterball-chart">
      <!-- 用于渲染ECharts图表的DOM元素 -->
      <div ref="chartContainer" :style="{ width: size + 'px', height: size + 'px' }"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
import 'echarts-liquidfill';

export default {
  name: 'Gauge',
  props: {
    percentage: {
      type: Number,
      required: true,
      default: 50,
    },
    size: {
      type: Number,
      required: true,
      default: 214,
    },
    color: {
      type: String,
      default: '#37cc5b',
    },
    labelNumber: {
      type: String,
      default: '',
    },
    percentSize: {
      type: Number,
      default: 60,
    },
    unitSize: {
      type: Number,
      default: 36,
    },
    padding: {
      type: Array,
      default: () => [0, 0, 0, 0],
    },
  },
  setup(props) {
    const chartContainer = ref(null);

    onMounted(() => {
      drawWaterball(props.percentage);
    });

    watch(
        () => props.percentage,
        (newValue) => {
          drawWaterball(newValue);
        }
    );

    const drawWaterball = (percentage) => {
      const chart = echarts.init(chartContainer.value);

      const option = {
        series: [
          {
            type: 'liquidFill',
            data: [percentage / 100], // 百分比的值，取值范围为0到1
            color: [props.color],
            radius: '85%', // 水球图的半径，可以根据需要调整
            label: {
              formatter(param) {
                return [`{a|${props.labelNumber || (param.value * 100).toFixed(0)}}`, '{b|%}'].join('');
              },
              rich: {
                a: {
                  fontSize: props.percentSize,
                  color: '#FFFFFF',
                  fontFamily: 'DINPro',
                  fontWeight: 400,
                },
                b: {
                  fontSize: props.unitSize,
                  color: '#FFFFFF',
                  fontFamily: 'DINPro-Regular',
                  fontWeight: 400,
                  padding: props.padding,
                },
              },
            },
            title: {
              text: `${(0.2 * 100).toFixed(0)}{a|%}`,
              textStyle: {
                fontSize: 12,
                fontFamily: 'Microsoft Yahei',
                fontWeight: 'normal',
                color: '#bcb8fb',
                rich: {
                  a: {
                    fontSize: 10,
                  },
                },
              },
              x: 'center',
              y: '35%',
            },

            backgroundStyle: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(255, 255, 255, 0)', // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(255, 255, 255, 0)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(255, 255, 255, 1)', // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },

            outline: {
              borderDistance: 5,
              itemStyle: {
                borderWidth: 2,
                borderColor: props.color,
                shadowBlur: 30,
                shadowColor: 'red',
              },
            },
          },
        ],
      };

      chart.setOption(option);
    };

    return {
      chartContainer,
    };
  },
};
</script>

<style lang="scss" scoped>
.waterball-chart {
  display: inline-block;
  position: relative;
  width: 214px;
  height: 214px;
}
</style>

