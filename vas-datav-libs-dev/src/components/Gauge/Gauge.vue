<script>
import {onMounted} from 'vue'
import * as echarts from 'echarts';

export default {
  name: 'Gauge',
  setup() {
    onMounted(() => {
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: 'Pressure',
            type: 'gauge',
            progress: {
              show: true
            },
            detail: {
              valueAnimation: true,
              formatter: '{value}'
            },
            data: [
              {
                value: 50,
                name: 'SCORE'
              }
            ]
          }
        ]
      };

      option && myChart.setOption(option);


    });
  }
}
</script>

<template>
  <div id="main" style="width: 600px;height: 200px"></div>
</template>

<style scoped lang="scss">

</style>