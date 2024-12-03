<script>
import {onMounted} from 'vue'
import * as echarts from 'echarts';

export default {
  name: 'Gauge',
  setup() {
    onMounted(() => {
      var chartDom = document.getElementById('Gauge');
      var myChart = echarts.init(chartDom);
      var option;

      const gaugeData = [
        {
          value: 20,
          name: 'Perfect',
          title: {
            offsetCenter: ['0%', '-30%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-20%']
          }
        },
        {
          value: 40,
          name: 'Good',
          title: {
            offsetCenter: ['0%', '0%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '10%']
          }
        },
        {
          value: 60,
          name: 'Commonly',
          title: {
            offsetCenter: ['0%', '30%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '40%']
          }
        }
      ];
      option = {
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: '#464646'
              }
            },
            axisLine: {
              lineStyle: {
                width: 20
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: gaugeData,
            title: {
              fontSize: 14
            },
            detail: {
              width: 25,
              height: 12,
              fontSize: 7,
              color: 'inherit',
              borderColor: 'inherit',
              borderRadius: 20,
              borderWidth: 1,
              formatter: '{value}%'
            }
          }
        ]
      };
      setInterval(function () {
        gaugeData[0].value = +(Math.random() * 100).toFixed(2);
        gaugeData[1].value = +(Math.random() * 100).toFixed(2);
        gaugeData[2].value = +(Math.random() * 100).toFixed(2);
        myChart.setOption({
          series: [
            {
              data: gaugeData,
              pointer: {
                show: false
              }
            }
          ]
        });
      }, 2000);

      option && myChart.setOption(option);


    });
  }
}
</script>

<template>
  <div id="Gauge" style="width: 50%;height: 50%"></div>
</template>

<style scoped lang="scss">

</style>