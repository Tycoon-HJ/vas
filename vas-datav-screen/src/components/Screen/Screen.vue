<script>

export default {
  name: 'Screen',
}
</script>

<template>
  <imooc-container>
    <div class="parent">
      <div class="div1"> 最优价</div>
      <div class="div2"> 统计概览</div>
      <div class="div3">
        <Map style="width: 100%;height: 100%"></Map>
      </div>
      <div class="div4">
        <!--      <Gauge style="width: 100%;height: 100%"></Gauge>-->
      </div>
      <div class="div5"> 列表</div>
      <div class="div6"> 动态切换的列表</div>
      <div class="div7"> 柱状图</div>
      <div class="div8">
        <Line style="width: 100%;height: 100%"></Line>
      </div>
      <div class="div9">
        <!--      <Calendar style="width: 572px;height: 320px"></Calendar>-->
      </div>
      <div class="div10">
        <!--      <Lines style="width: 100%;height: 100%"></Lines>-->
      </div>
      <div class="div11"> 环状图</div>
      <div class="div12"> 方块</div>
      <div class="div13"> 多个方块</div>
    </div>

  </imooc-container>
</template>

<style scoped lang="scss">
.parent {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border: black solid 1px;
}

.div1 { grid-area: 1 / 1 / 2 / 3;   border: black solid 1px; }
.div2 { grid-area: 1 / 3 / 2 / 11; border: black solid 1px; }
.div3 { grid-area: 2 / 4 / 8 / 9; border: black solid 1px; }
.div4 { grid-area: 2 / 1 / 4 / 2; border: black solid 1px; }
.div5 { grid-area: 2 / 2 / 4 / 4; border: black solid 1px; }
.div6 { grid-area: 4 / 1 / 6 / 4; border: black solid 1px; }
.div7 { grid-area: 6 / 1 / 8 / 4; border: black solid 1px; }
.div8 { grid-area: 8 / 1 / 11 / 5; border: black solid 1px; }
.div9 { grid-area: 8 / 5 / 11 / 8; border: black solid 1px; }
.div10 { grid-area: 8 / 8 / 11 / 11; border: black solid 1px; }
.div11 { grid-area: 5 / 9 / 8 / 10; border: black solid 1px; }
.div12 { grid-area: 5 / 10 / 8 / 11; border: black solid 1px; }
.div13 { grid-area: 2 / 9 / 5 / 11; border: black solid 1px; }
</style>