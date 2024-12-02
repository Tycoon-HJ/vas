<script>
import {onMounted} from 'vue'
import * as echarts from 'echarts';

export default {
  name: 'Line',
  setup() {
    onMounted(() => {
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };

      option && myChart.setOption(option);

    });
  }
}
</script>

<template>
  <div id="main" style="width: 100%;height: 100%"></div>
</template>

<style scoped lang="scss">

</style>