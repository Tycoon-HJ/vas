<template>
  <table>
    <!-- 设置列宽 -->
    <thead>
    <th>债券代码</th>
    <th>债券简称</th>
    <th>债券面额</th>
    </thead>
  </table>
  <vue3-seamless-scroll :step="0.3" :list="list" class="seamless-warp">
    <ul>
      <li v-for="item in list" class="liStyle">
        <span class="title1 text_align">{{ item.bondCode }}</span>
        <span class="title2 text_align">{{ item.bondSname }}</span>
        <span class="title3 text_align">{{ item.bondValue }}</span>
      </li>
    </ul>
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
        bondCode: "233565",
        bondSname: "24重庆46",
        bondValue: "2312.00元",
      },
      {
        bondCode: "233571",
        bondSname: "24山西51",
        bondValue: "13534.00元",
      },
      {
        bondCode: "241996",
        bondSname: "24国金05",
        bondValue: "8745.00元",
      },
      {
        bondCode: "242028",
        bondSname: "24信投10",
        bondValue: "6643.00元",
      },
      {
        bondCode: "242029",
        bondSname: "24信投11",
        bondValue: "897.00元",
      },
      {
        bondCode: "242076",
        bondSname: "24晋中03",
        bondValue: "5512.00元",
      },
      {
        bondCode: "242095",
        bondSname: "24穗投11",
        bondValue: "262.00元",
      },
      {
        bondCode: "256507",
        bondSname: "24抚旅01",
        bondValue: "3635.00元",
      },
    ]);
    return { list };
  },
});
</script>

<style>


ul {
  list-style: none;
}

table {
  width: 100%;
  text-align: center;
  table-layout: fixed;
}

th {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: rgba(180, 181, 198, 0.1);
}

.seamless-warp {
  height: 150px;
  overflow: hidden;

  .liStyle {
    height: 30px;
    line-height: 30px;
    width: 100%;
    display: flex;
    .title1 {
      width: 33%;
    }
    .title2 {
      width: 33%;
    }
    .title3 {
      width: 33%;
    }
    .text_align {
      text-align: center;
    }
  }
}
</style>
