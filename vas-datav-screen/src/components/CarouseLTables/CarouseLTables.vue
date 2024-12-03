<template>

  <div style="display: flex;width: 100%;height: 100%;">
    <div v-show="flag">
      <table border="0" cellspacing="0" cellpadding="0">
        <thead>
        <tr class="head">
          <th width="15%">持有人</th>
          <th width="20%">持有人简称</th>
          <th width="15%">债券代码</th>
          <th width="20%">债券金额</th>
        </tr>
        </thead>
      </table>

      <vue3-seamless-scroll :list="list" class="scroll">
        <div class="item" v-for="(item, index) in list" :key="index">
          <span style="margin-left: 30px">{{ item.title }}</span>
          <span style="margin-right: 80px">{{ item.date }}</span>
          <span style="margin-left: 60px">{{ item.title }}</span>
          <span style="margin-right: 100px">{{ item.date }}</span>
        </div>
      </vue3-seamless-scroll>
    </div>
    <div v-show="!flag">
      <table border="0" cellspacing="0" cellpadding="0">
        <thead>
        <tr class="head">
          <th width="15%">指令编号</th>
          <th width="20%">事件名称</th>
          <th width="15%">回售日期</th>
          <th width="20%">到期日</th>
        </tr>
        </thead>
      </table>

      <vue3-seamless-scroll :list="list" class="scroll">
        <div class="item" v-for="(item, index) in list" :key="index">
          <span style="margin-left: 30px">{{ item.title }}</span>
          <span style="margin-right: 80px">{{ item.date }}</span>
          <span style="margin-left: 30px">{{ item.title }}</span>
          <span style="margin-right: 80px">{{ item.date }}</span>
        </div>
      </vue3-seamless-scroll>
    </div>

  </div>

</template>
<script>
import {defineComponent, ref, onMounted, onUnmounted} from "vue";
import {Vue3SeamlessScroll} from "vue3-seamless-scroll";

export default defineComponent({
  name: "CarouseLTables",
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
      }, 3000); // 1000毫秒，即1秒
    });

    // 在组件卸载时清除定时器，防止内存泄漏
    onUnmounted(() => {
      clearInterval(intervalId);
    });

    const list = ref([
      {
        title: "xxxx",
        date: "xxxx",
      },
      {
        title: "xxxx",
        date: "xxxx",
      },
      {
        title: "xxxx",
        date: "xxxx",
      },
      {
        title: "xxxx",
        date: "xxxx",
      },
      {
        title: "xxxx",
        date: "xxxx",
      },
      {
        title: "xxxx",
        date: "xxxx",
      },
      {
        title: "xxxx",
        date: "xxxx",
      },
      {
        title: "xxxx",
        date: "xxxx",
      },
      {
        title: "xxxx",
        date: "xxxx",
      },
    ]);
    return {list, flag};

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
