<template>
  <table border="0" cellspacing="0" cellpadding="0">
    <thead>
    <tr class="head">
      <th width="15%">债券代码</th>
      <th width="20%">债券金额</th>
    </tr>
    </thead>
  </table>


  <vue3-seamless-scroll :list="list" class="scroll">

    <div class="item" v-for="(item, index) in list" :key="index">
      <span style="margin-left: 30px">{{item.title}}</span>
      <span style="margin-right: 80px">{{item.date}}</span>
    </div>
  </vue3-seamless-scroll>
</template>
<script>
import { defineComponent, ref } from "vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

export default defineComponent({
  name: "CarouseLTable",
  components: {
    Vue3SeamlessScroll
  },
  setup() {
    const list = ref([
      {
        title: "31726434424",
        date: 2312.00,
      },
      {
        title: "31726434424",
        date: 3453.00,
      },
      {
        title: "31726434",
        date: 32423,
      },
      {
        title: "31726434",
        date: 5345,
      },
      {
        title: "31726434",
        date: 3424,
      },
      {
        title: "31726434",
        date: 5324534,
      },
      {
        title: "31726434",
        date: 2352352,
      },
      {
        title: "31726434",
        date: 674567,
      },
      {
        title: "31726434",
        date: 657474,
      },
    ]);
    return { list };
  },
});
</script>

<style>
.scroll {
  height: 90%;
  width: 100%;
  overflow: hidden;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
}
</style>
