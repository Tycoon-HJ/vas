<template>
  <div class="box">
    <div class="title"> 热门手机销量占比</div>
    <div class="content">
      <div class="list">
        <div class="item" :class="{active:activeIndex===index}" @click="activeIndex=index" v-for="(item,index) in list"
             :key="index">
          {{ item.name }}
        </div>
      </div>
      <dv-active-ring-chart :config="config" style="width:300px;height:300px"/>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      list: [
        {
          id: 1,
          name: 'iphone',
          data: [
            {
              name: "一季度",
              value: 255
            },
            {
              name: "二季度",
              value: 566
            },
            {
              name: "三季度",
              value: 222
            },
            {
              name: "四季度",
              value: 743
            }
          ]
        },
        {
          id: 2,
          name: '华为',
          data: [
            {
              name: "一季度",
              value: 25
            },
            {
              name: "二季度",
              value: 56
            },
            {
              name: "三季度",
              value: 222
            },
            {
              name: "四季度",
              value: 743
            }
          ]
        },
        {
          id: 3,
          name: '小米',
          data: [
            {
              name: "一季度",
              value: 255
            },
            {
              name: "二季度",
              value: 66
            },
            {
              name: "三季度",
              value: 222
            },
            {
              name: "四季度",
              value: 74
            }
          ]
        },
        {
          id: 4,
          name: '三星',
          data: [
            {
              name: "一季度",
              value: 25
            },
            {
              name: "二季度",
              value: 566
            },
            {
              name: "三季度",
              value: 222
            },
            {
              name: "四季度",
              value: 73
            }
          ]
        },
      ]
      ,
      config: {
        data: []
      }
    }
  },
  created() {
    this.config.data = this.list[this.activeIndex].data
  },
  watch: {
    activeIndex() {
      this.config = {
        data: this.list[this.activeIndex].data
      }
    }
  },
  methods: {}
}

</script>
<style>
.box {
  padding: 10px;

  .title {
    font-size: 20px;
    text-align: center;
  }

  .content {
    display: flex;
    align-items: center;

    .list {
      padding-left: 20px;

      .item {
        margin: 10px 0;
        cursor: pointer;
        background-color: rgba(225, 225, 225, 0.2);
        padding: 4px 10px;
        // 高亮

        &.active {
          background-color: rgba(225, 225, 225, 0.9);
        }
      }

    }
  }
}
</style>