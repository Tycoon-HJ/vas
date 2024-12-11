<template>


  <div style="display: flex;width: 100%;height: 100%;">
    <div v-if="!flag">
      <table>
        <!-- 设置列宽 -->
        <thead>
        <th>代码</th>
        <th>名称</th>
        <th>收盘价(元)</th>
        <th>应计利息额(元)</th>
        <th>全价(元)</th>
        </thead>
      </table>
      <vue3-seamless-scroll :step="0.3" :list="list" class="seamless-warps">
        <ul>
          <li v-for="item in list" class="liStyles">
            <span class="title1s text_aligns">{{ item.item1 }}</span>
            <span class="title2s text_aligns">{{ item.item2 }}</span>
            <span class="title3s text_aligns">{{ item.item3 }}</span>
            <span class="title4s text_aligns">{{ item.item4 }}</span>
            <span class="title5s text_aligns">{{ item.item5 }}</span>
          </li>
        </ul>
      </vue3-seamless-scroll>
    </div>
    <div v-if="flag">
      <table>
        <!-- 设置列宽 -->
        <thead>
        <th>代码</th>
        <th>简称</th>
        <th>付息方式</th>
        <th>票面利率</th>
        <th>当前日期</th>
        <th>当前价格</th>
        <th>到期日</th>
        <th>年收益率</th>
        </thead>
      </table>
      <vue3-seamless-scroll :step="0.3" :list="list1" class="seamless-warpss">
        <ul>
          <li v-for="item in list1" class="liStyless">
            <span class="title1ss text_alignss">{{ item.item1 }}</span>
            <span class="title2ss text_alignss">{{ item.item2 }}</span>
            <span class="title3ss text_alignss">{{ item.item3 }}</span>
            <span class="title4ss text_alignss">{{ item.item4 }}</span>
            <span class="title5ss text_alignss">{{ item.item5 }}</span>
            <span class="title6ss text_alignss">{{ item.item6 }}</span>
            <span class="title7ss text_alignss">{{ item.item7 }}</span>
            <span class="title8ss text_alignss">{{ item.item8 }}</span>
          </li>
        </ul>
      </vue3-seamless-scroll>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted,  onUnmounted} from "vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

export default defineComponent({
  name: "CarouseLTable",
  components: {
    Vue3SeamlessScroll
  },
  setup() {
    let flag = ref(true);
    // 创建定时器
    let intervalId;
    // 在组件挂载时启动定时器
    onMounted(() => {
      intervalId = setInterval(() => {
        flag.value = !flag.value;
      }, 5000); // 1000毫秒，即1秒
    });
    // 在组件卸载时清除定时器，防止内存泄漏
    onUnmounted(() => {
      clearInterval(intervalId);
    });
    const list = ref([
      {
        item1: "10504",
        item2: "05国债⑷",
        item3: "101.78",
        item4: "0.293",
        item5: "102.073",
      },
      {
        item1: "10609",
        item2: "06国债⑼",
        item3: "100",
        item4: "1.703",
        item5: "101.703",
      },
      {
        item1: "10706",
        item2: "07国债06",
        item3: "100",
        item4: "0.281",
        item5: "100.281",
      },
      {
        item1: "10713",
        item2: "07国债13",
        item3: "100",
        item4: "1.449",
        item5: "101.449",
      },
      {
        item1: "18003",
        item2: "国开1401",
        item3: "117.305",
        item4: "3.847",
        item5: "121.152",
      },
      {
        item1: "18009",
        item2: "国开1803",
        item3: "129.343",
        item4: "1.66",
        item5: "131.003",
      },
    ]);
    const list1 = ref([
      {
        item1: "10504",
        item2: "05国债⑷",
        item3: "按半年",
        item4: "4.11",
        item5: "2024/12/10",
        item6: "101.78",
        item7: "2025/5/15",
        item8: "-",
      },
      {
        item1: "10609",
        item2: "06国债⑼",
        item3: "按半年",
        item4: "3.7",
        item5: "2024/12/10",
        item6: "100",
        item7: "2026/6/26",
        item8: "3.69",
      },
      {
        item1: "10706",
        item2: "07国债06",
        item3: "按半年",
        item4: "4.27",
        item5: "2024/12/10",
        item6: "100",
        item7: "2037/5/17",
        item8: "4.27",
      },
      {
        item1: "10713",
        item2: "07国债13",
        item3: "按半年",
        item4: "4.52",
        item5: "2024/12/10",
        item6: "100",
        item7: "2027/8/16",
        item8: "4.5",
      },
      {
        item1: "18009",
        item2: "国开1803",
        item3: "按年",
        item4: "4.59",
        item5: "2024/12/10",
        item6: "129.343",
        item7: "2038/8/1",
        item8: "2.09",
      },
      {
        item1: "18012",
        item2: "国开2003",
        item3: "按年",
        item4: "3.39",
        item5: "2024/12/10",
        item6: "103.401",
        item7: "2027/2/3",
        item8: "1.76",
      },
      {
        item1: "10713",
        item2: "07国债13",
        item3: "按半年",
        item4: "4.52",
        item5: "2024/12/10",
        item6: "100",
        item7: "2027/8/16",
        item8: "4.5",
      },
      {
        item1: "18009",
        item2: "国开1803",
        item3: "按年",
        item4: "4.59",
        item5: "2024/12/10",
        item6: "129.343",
        item7: "2038/8/1",
        item8: "2.09",
      },
    ]);
    return { list,flag, list1 };
  },
});
</script>

<style>

.seamless-warps {
  height: 150px;
  overflow: hidden;

  .liStyles{
    height: 30px;
    line-height: 30px;
    width: 100%;
    display: flex;
    .title1s {
      width: 20%;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .title2s {
      width: 20%;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .title3s {
      width: 20%;
    }
    .title4s {
      width: 20%;
    }
    .title5s {
      width: 20%;
    }
    .text_aligns {
      text-align: center;
    }
  }
}

.seamless-warpss {
  height: 150px;
  overflow: hidden;

  .liStyless{
    height: 30px;
    line-height: 30px;
    width: 100%;
    display: flex;
    .title1ss {
      width: 15%;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .title2ss {
      width: 15%;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .title3ss {
      width: 15%;
    }
    .title4ss {
      width: 15%;
    }
    .title5ss {
      width: 15%;
    }
    .title6ss {
      width: 15%;
    }
    .title7ss {
      width: 15%;
    }
    .title8ss {
      width: 15%;
    }
    .text_alignss {
      text-align: center;
    }
  }
}
</style>
