<script>
import {ref} from "vue"
import CarouseLTable from "@/components/CarouseLTable/CarouseLTable.vue";
import Kpi from "@/components/Kpi/Kpi.vue";
import CarouseLTables from "@/components/CarouseLTables/CarouseLTables.vue";
import Block from "@/components/Block/Block.vue";

export default {
  name: 'Screen',
  components: {Block, CarouseLTables, Kpi, CarouseLTable},
  setup() {
    let totalData = ref({
      "total": "6794739",
      "hb": "87788",
      "db": "65446",
      "hd": "76456",
      "zn": "42135",
      "xn": "74564",
      "xb": "75753"
    })
    return {
      totalData
    }
  }
}
</script>

<template>
  <imooc-container>
    <div class="parent">
      <div class="div1">
        <Logo style="width: 100%;height: 100%"></Logo>
      </div>
      <div class=" div2">
        <FlyBox>
          <Kpi class="opacity-50 bg-slate-800 " :data="totalData"/>
        </FlyBox>
      </div>
      <div class="div3">
        <Map style="width: 100%;height: 100%"></Map>
      </div>
      <div class="div4">
        <Gauge color="#4595eb" size="190" percentage="99" style="width: 99%;height: 80%"></Gauge>
      </div>
      <div class="div5">
        <FlyBox>
          <CarouseLTable style="width: 100%;height: 100%"></CarouseLTable>
        </FlyBox>
      </div>
      <div class="div6">
        <FlyBox>

          <CarouseLTables style="width: 100%;height: 100%"></CarouseLTables>
        </FlyBox>
      </div>
      <div class="div7">
        <Line style="width: 100%;height: 100%"></Line>
      </div>
      <div class="div8">
        <LineBar style="width: 100%;height: 100%"></LineBar>
      </div>
      <div class="div9">
        <Calendar style="width: 100%;height: 100%"></Calendar>
      </div>
      <div class="div10">
        <Lines style="width: 100%;height: 100%"></Lines>
      </div>
      <div class="div11">
        <DatasetLink style="width: 100%;height: 100%"></DatasetLink>
      </div>
      <div class="div12">
        <div style="display: flex">
          <FlyBox>
            <Block style="width: 100%;height: 40%" title="债券简称" value="24国开15"></Block>
          </FlyBox>
        </div>
        <div style="display: flex">
          <FlyBox>
            <Block style="width: 100%;height: 40%" title="待偿期" value="9.60Y"></Block>
          </FlyBox>
        </div>
        <div style="display: flex">
          <FlyBox>
            <Block style="width: 100%;height: 30%" title="成交" value="103.10"></Block>
          </FlyBox>
        </div>
        <div style="display: flex">
          <FlyBox>
            <Block style="width: 100%;height: 40%" title="最新收益率" value="1.9025"></Block>
          </FlyBox>
        </div>
        <div style="display: flex">
          <FlyBox>
            <Block style="width: 100%;height: 40%" title="涨跌(BP)" value="1.91"></Block>
          </FlyBox>
        </div>
        <div style="display: flex">
          <FlyBox>
            <Block style="width: 100%;height: 40%" title="加权收益率" value="1.9205"></Block>
          </FlyBox>
        </div>
        <div style="display: flex">
          <FlyBox>
            <Block style="width: 100%;height: 40%" title="交易量" value="2443.03"></Block>
          </FlyBox>
        </div>
        <div style="display: flex">
          <FlyBox>
            <Block style="width: 100%;height: 40%" title="买入" value="106.68"></Block>
          </FlyBox>
        </div>
        <div style="display: flex">
          <FlyBox>
            <Block style="width: 100%;height: 40%" title="卖出" value="107.96"></Block>
          </FlyBox>
        </div>

      </div>
      <div class="div13">
        <Radar style="width: 100%;height: 100%"></Radar>
      </div>
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
  color: white;
  background-color: rgb(15, 12, 40);
}

.div1 {
  grid-area: 1 / 1 / 2 / 3;
  border: black solid 1px;
}

.div2 {
  grid-area: 1 / 3 / 2 / 11;
  border: black solid 1px;
}

.div3 {
  grid-area: 2 / 4 / 8 / 9;
  border: black solid 1px;
}

.div4 {
  grid-area: 2 / 1 / 4 / 2;
  border: black solid 1px;
}

.div5 {
  grid-area: 2 / 2 / 4 / 4;
  border: black solid 1px;
}

.div6 {
  grid-area: 4 / 1 / 6 / 4;
  border: black solid 1px;
}

.div7 {
  grid-area: 6 / 1 / 8 / 4;
  border: black solid 1px;
}

.div8 {
  grid-area: 8 / 1 / 11 / 5;
  border: black solid 1px;
}

.div9 {
  grid-area: 8 / 5 / 11 / 8;
  border: black solid 1px;
}

.div10 {
  grid-area: 8 / 8 / 11 / 11;
  border: black solid 1px;
}

.div11 {
  grid-area: 5 / 9 / 8 / 10;
  border: black solid 1px;
}

.div12 {
  grid-area: 5 / 10 / 8 / 11;
  border: black solid 1px;
}

.div13 {
  grid-area: 2 / 9 / 5 / 11;
  border: black solid 1px;
}
</style>
