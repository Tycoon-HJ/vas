# 数据大屏

数据大屏用于展示行情信息、债券信息、和相关数据统计展示

## 效果图

![image-20250102202132419](https://github.com/Tycoon-HJ/vas/blob/vas/imgs/image-20250102202132419.png)

## 项目工程

```
项目的地址：https://github.com/Tycoon-HJ/vas
项目分支：vas
做插件的项目：vas-datav-libs-dev
做大屏的项目：vas-datav-screen
```

## 安装

使用 npm 安装 【vas-datav-libs-dev】和【vas-datav-screen】

```bash
  npm install
```

## 开发

运行插件工程【vas-datav-libs-dev】和大屏数据工程【vas-datav-screen】项目，请运行

```bash
  npm run dev
```


## 数据大屏组件

### 平均年龄组件

```javascript
useScreenData.js
const ageMockData = [{"startValue":0,"value":131107,"axis":"0-20","color":"rgb(116,166,49)"},{"startValue":0,"value":330831,"axis":"20-30","color":"rgb(190,245,99)"},{"startValue":0,"value":551238,"axis":"30-50","color":"rgb(202,252,137)"},{"startValue":0,"value":31088,"axis":">50","color":"rgb(251,253,142)"}]

```

###### AverageAge/index.vue

```vue
<template>
  <div class="average-age">
    <div class="title-wrapper">
      <div class="average-age-left">
        <div class="title">慕课外卖用户年龄分布&平均年龄</div>
        <div class="sub-title">Distribution of Age</div>
      </div>
      <div class="average-age-right">
        <div class="age">
          <count-to
            :start-val="startAge"
            :end-val="avgAge"
            :duration="1000"
            :decimals="2"
          />
          <span class="age-unit">岁</span>
        </div>
      </div>
    </div>
    <div id="average-age-chart" />
    <div class="average-data-wrapper">
      <div class="average-data" v-for="(item, index) in data" :key="index">
        <div class="average-data-value">
          <count-to
            :start-val="item.startValue"
            :end-val="item.value"
            :duration="1000"
          />
        </div>
        <div class="average-data-axis">
          <div class="point" :style="{background: item.color}" />
          <div class="text">{{item.axis}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  // const color = ['rgb(116,166,49)', 'rgb(190,245,99)', 'rgb(202,252,137)', 'rgb(251,253,142)']

  export default {
    name: 'averageAge',
    props: {
      data: Array,
      avgAge: Number
    },
    setup() {
      const startAge = ref(0)
      const update = () => {
      }

      return {
        startAge,
        update
      }
    }
  }
</script>
```

### 设备统计组件

```javascript
useScreenData.js
const deviceMockData = {"totalDevices":1070909,"devices":[{"key":"Android","value":423676},{"key":"iOS","value":373581},{"key":"PC","value":273652}]}
```

###### TotalDevice/index.vue

```vue
<template>
  <div class="total-device">
    <div class="total-device-left">
      <div id="total-device-chart" />
    </div>
    <div class="total-device-right">
      <div class="title-wrapper">
        <div class="total-device-right-left">
          <div class="title">慕课外卖登录设备</div>
          <div class="sub-title">Distribution of Internet devices</div>
        </div>
        <div class="total-device-right-right">
          <div class="age">
            <count-to
              :startVal="startNum"
              :endVal="num"
              :duration="1000"
            />
            <span class="age-unit">台</span>
          </div>
        </div>
      </div>
      <div class="average-data-wrapper">
        <div class="average-data" v-for="(item, index) in refData" :key="index">
          <div class="average-data-value">
            <count-to
              :startVal="item.startValue"
              :endVal="item.value"
              :duration="1000"
            />
          </div>
          <div class="average-data-axis">
            <div class="point" :style="{background: item.color}" />
            <div class="text">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Echarts from 'echarts'
  import { ref, watch, onMounted } from 'vue'

  const color = ['rgb(176,207,120)', 'rgb(157,195,91)', 'rgb(131,167,72)']

  export default {
    name: 'totalDevice',
    props: {
      data: Object
    },
    setup(props) {
      let chart
      const refData = ref([])
      const num = ref(0)
      const startNum = ref(0)
      const updateChart = () => {
        function createOption() {
          return {
            series: [{
              name: '访问来源',
              type: 'pie',
              radius: '70%',
              selectedMode: 'multiple',
              selectedOffset: 10,
              clockwise: true,
              center: ['50%', '50%'],
              color,
              emphasis: {
                itemStyle: {
                  color: 'rgb(140,251,182)'
                }
              },
              data: refData.value,
              roseType: 'radius',
              label: { show: false }
            }]
          }
        }

        if (!chart) {
          chart = Echarts.init(document.getElementById('total-device-chart'))
        }
        chart.setOption(createOption())
      }
      const update = (newData) => {
        if (refData.value.length > 0) {
          refData.value = newData.devices.map((item, index) => ({
            startValue: refData.value[index].value,
            value: item.value,
            name: item.key,
            color: color[index]
          }))
        } else {
          refData.value = newData.devices.map((item, index) => ({
            startValue: 0,
            value: item.value,
            name: item.key,
            color: color[index]
          }))
        }
        startNum.value = num.value
        num.value = +newData.totalDevices
        updateChart()
      }
      watch(() => props.data, (newData) => {
        update(newData)
      })
      onMounted(() => {
        update(props.data)
      })
      return {
        refData,
        num,
        startNum
      }
    }
  }
</script>
```

### 性别统计组件

```js
const genderMockData = [{"key":"male","value":1442542},{"key":"female","value":1442548}]
```

###### TotalGender/index.vue

```vue
<template>
  <div class="total-gender">
    <div class="total-gender-wrapper">
      <div class="total-gender-left">
        <img src="https://www.youbaobao.xyz/datav-res/datav/datav_circle.png">
      </div>
      <div class="total-gender-right">
        <div class="title">男性用户人数</div>
        <div class="sub-title">Number of male users</div>
        <div class="age">
          <count-to
            :startVal="startMale"
            :endVal="endMale"
            :duration="1000"
          />
          <span class="age-unit">万人</span>
        </div>
      </div>
    </div>
    <div class="total-gender-wrapper">
      <div class="total-gender-left">
        <img src="https://www.youbaobao.xyz/datav-res/datav/datav_circle.png">
      </div>
      <div class="total-gender-right">
        <div class="title">女性用户人数</div>
        <div class="sub-title">Number of female users</div>
        <div class="age">
          <count-to
            :startVal="startFemale"
            :endVal="endFemale"
            :duration="1000"
          />
          <span class="age-unit">万人</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, watch } from 'vue'

  export default {
    name: 'totalGender',
    props: {
      data: Array
    },
    setup(props) {
      const startMale = ref(0)
      const endMale = ref(0)
      const startFemale = ref(0)
      const endFemale = ref(0)
      watch(() => props.data, (newData) => {
        startMale.value = endMale.value
        endMale.value = newData[0].value
        startFemale.value = endFemale.value
        endFemale.value = newData[1].value
      })
      return {
        startFemale,
        startMale,
        endFemale,
        endMale
      }
    }
  }
</script>
```

### 骑手统计组件

```js
useScreenData.js
const riderMockData = {"axisX":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"orderData":{"legend1":"去年骑手月人均接单","legend2":"今年骑手月人均接单","data1":["330","420","560","450","610","890","720","610","580","750","770","600"],"data2":["430","510","660","550","710","990","620","550","760","810","930","720"]},"rateData":{"legend1":"去年月新增骑手","legend2":"今年月新增骑手","data1":["129","223","202","197","300","112","333","249","178","322","401","167"],"data2":["179","263","282","297","330","344","222","299","190","455","566","233"]}}
```

###### TotalRider/index.vue

```vue
<template>
  <div class="line-chart">
    <div class="title-wrapper">
      <div class="title">慕课外卖骑手概况</div>
      <div class="sub-title">Rider Growth rate</div>
    </div>
    <div id="average-age-chart2" />
  </div>
</template>

<script>
  import Echarts from 'echarts'
  import { watch, onMounted, onUnmounted } from 'vue'

  const colors = ['rgb(209,248,139)', 'rgb(115,201,245)', 'rgb(124,136,146)']

  export default {
    name: 'TotalRider',
    props: {
      data: Object
    },
    setup(props) {
      let chart
      let task
      let currentChart = 0

      const update = () => {
        function createOption() {
          const { axisX, orderData, rateData } = props.data
          const axisData = axisX
          let legendData = []
          let data1 = []
          let data2 = []
          if (currentChart === 0) {
            legendData = [orderData.legend1, orderData.legend2]
            data1 = orderData.data1
            data2 = orderData.data2
          } else {
            legendData = [rateData.legend1, rateData.legend2]
            data1 = rateData.data1
            data2 = rateData.data2
          }
          return {
            color: colors,
            tooltip: {
              trigger: 'none',
              axisPointer: {
                type: 'cross'
              }
            },
            legend: {
              top: 20,
              right: 40,
              icon: 'rect',
              textStyle: {
                fontSize: 16,
                color: colors[2]
              },
              data: legendData
            },
            grid: {
              top: 60,
              bottom: 30,
              left: 80,
              right: 40
            },
            xAxis: [{
              type: 'category',
              axisTick: { show: false },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[2]
                }
              },
              axisLabel: {
                fontSize: 16
              },
              data: axisData
            }, {
              type: 'category',
              axisTick: { show: false },
              axisLine: { show: false }
            }],
            yAxis: [{
              type: 'value',
              axisTick: { show: false },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[2]
                }
              },
              axisLabel: {
                fontSize: 16
              },
              splitLine: {
                lineStyle: {
                  type: 'dotted'
                }
              }
            }],
            series: [{
              name: legendData[0],
              type: 'line',
              xAxisIndex: 1,
              smooth: true,
              lineStyle: {
                width: 2
              },
              symbol: 'none',
              // data: [5, 100, 70, 120, 80, 15, 200, 300, 195, 150, 80, 103]
              data: data1
            }, {
              name: legendData[1],
              type: 'line',
              smooth: true,
              lineStyle: {
                width: 2
              },
              symbol: 'none',
              // data: [10, 50, 80, 4, 90, 50, 105, 160, 111, 54, 108, 50]
              data: data2
            }]
          }
        }

        if (!chart) {
          chart = Echarts.init(document.getElementById('average-age-chart2'))
        }
        chart.setOption(createOption())
        if (currentChart === 0) {
          currentChart = 1
        } else {
          currentChart = 0
        }
      }
      const stop = watch(() => props.data, () => {
        update()
        task = setInterval(() => {
          update()
        }, 5000)
        stop()
      })
      onMounted(() => {
        update()
      })
      onUnmounted(() => task && clearInterval(task))
    }
  }
</script>
```

### 热门分类组件

```js
useScreenData.js
const hotCategoryMockData = {"data1":{"axisX":["粉面粥店","简餐便当","汉堡披萨","香锅冒菜","小吃炸串","地方菜系","轻食简餐"],"data1":[50,29,46,88,99,69,97],"data2":[50,71,54,12,1,31,3]},"data2":{"axisX":["草莓","甘蔗","榴莲","菠萝","香蕉","梨","苹果"],"data1":[85,4,3,26,63,31,19],"data2":[15,96,97,74,37,69,81]}}
```

###### HotCategory/index.vue

```vue
<template>
  <div class="bar-chart">
    <div class="title-wrapper">
      <div class="left">
        <div class="title">当前热卖品类</div>
        <div class="sub-title">Hot Categories</div>
      </div>
      <div class="right">
        <div class="sub-title">最后更新时间：{{date}} {{time}}</div>
      </div>
    </div>
    <div id="average-age-chart3" />
  </div>
</template>

<script>
  import Echarts from 'echarts'
  import { watch, onMounted } from 'vue'
  import { clock as useClock } from '../../utils/clock'

  export default {
    name: 'HotCategory',
    props: {
      data: Object
    },
    setup(props) {
      const { time, date } = useClock()
      let chart
      let currentChart = 0
      const update = () => {
        function createOption() {
          const sourceData = []
          const { data1, data2 } = props.data
          if (currentChart === 0) {
            data1.axisX.forEach((axis, index) => {
              sourceData.push([axis, data1.data1[index], data1.data2[index]])
            })
          } else {
            data2.axisX.forEach((axis, index) => {
              sourceData.push([axis, data2.data1[index], data2.data2[index]])
            })
          }
          const source = [
            ['指标', '国内', '海外'],
            ...sourceData
          ]
          return {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            color: ['rgb(209,248,138)', 'rgba(65,65,65,.5)'],
            grid: {
              left: 20,
              right: 0,
              bottom: 30,
              top: 20
            },
            dataset: {
              source
            },
            yAxis: {
              type: 'value',
              splitLine: {
                lineStyle: {
                  type: 'dotted'
                }
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: 'rgb(124,136,146)'
                }
              },
              axisLabel: {
                color: 'rgb(98,105,113)',
                fontSize: 16
              },
              axisTick: { show: false }
            },
            xAxis: {
              type: 'category',
              splitLine: { show: false },
              axisTick: { show: false },
              axisLabel: {
                color: 'rgb(98,105,113)',
                fontSize: 16
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: 'rgb(124,136,146)'
                }
              }
            },
            series: [
              {
                type: 'bar',
                stack: 'total',
                barWidth: 40
              },
              {
                type: 'bar',
                stack: 'total'
              }
            ]
          }
        }
        if (!chart) {
          chart = Echarts.init(document.getElementById('average-age-chart3'))
        }
        chart.setOption(createOption())
        currentChart === 0 ? currentChart = 1 : currentChart = 0
      }
      watch(() => props.data, () => {
        update()
      })
      onMounted(() => {
        update()
      })
      return {
        time,
        date
      }
    }
  }
</script>
```

### 顶部组件

```js
useScreenData.js
const headerMockData = {"headerData":{"value":[{"title":"今日销售额","subTitle":"Today's Sales Amount","startVal":40041113,"endVal":40105335,"img":"https://www.youbaobao.xyz/datav-res/money.png"},{"title":"今日订单量","subTitle":"Today's Total Orders","startVal":2566778,"endVal":2570025,"img":"https://www.youbaobao.xyz/datav-res/order.png"},{"title":"今日交易用户数","subTitle":"Today's Payed Users","startVal":271744,"endVal":272200,"img":"https://www.youbaobao.xyz/datav-res/member.png"},{"title":"今日新增用户数","subTitle":"Today's New Users","startVal":1286552,"endVal":1289057,"img":"https://www.youbaobao.xyz/datav-res/follow.png"}]},"project":{"value":[{"title":"转化率","value":"13.16%","img":"https://www.youbaobao.xyz/datav-res/success.png"},{"title":"退单率","value":"5.73%","img":"https://www.youbaobao.xyz/datav-res/failed.png"}]}}
```

###### CenterHeader/index.vue

```vue
<template>
  <div class="center-header">
    <div class="center-header-wrapper">
      <div
        class="center-header-item"
        v-for="(item, index) in headerData"
        :key="index"
      >
        <div class="center-header-left">
          <div class="bg">
            <div
              class="img"
              :style="{backgroundImage: `url('${item.img}')`}"
            />
          </div>
        </div>
        <div class="center-header-right">
          <div class="title">{{item.title}}</div>
          <div class="sub-title">{{item.subTitle}}</div>
          <div class="total">
            <count-to
              :start-val="item.startVal"
              :end-val="item.endVal"
              :duration="1000"
              separator=","
              autoplay
            />
          </div>
        </div>
      </div>
    </div>
    <div class="project-wrapper">
      <div class="project" v-for="(item, index) in project" :key="index">
        <div class="project-img">
          <img :src="item.img">
        </div>
        <div class="project-text">{{item.title}}</div>
        <div class="project-value">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, watch, onMounted } from 'vue'

  export default {
    name: 'centerHeader',
    props: {
      data: Object
    },
    setup(props) {
      const project = ref([])
      const headerData = ref([])
      const update = () => {
        project.value = [...props.data.project.value]
        headerData.value = [...props.data.headerData.value]
      }
      onMounted(() => {
        update()
      })
      watch(() => props.data, () => {
        update()
      })
      return {
        project,
        headerData
      }
    }
  }
</script>
```

### 变换的分类组件

###### TransformCategory/index.vue

```vue
<template>
  <div class="country-category">
    <div
      class="category"
      v-for="(item) in data" :key="item"
    >
      <div>{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TransformCategory',
    props: {
      data: Array,
      color: {
        type: Array,
        default() {
          return ['rgb(140, 160, 173)', 'rgb(80, 80, 80)']
        }
      }
    },
    setup(props) {
    }
  }
</script>
```

### 实时订单组件

数据

```js
const realTimeOrderMockData = {"date":["12:25:13","12:25:17","12:25:22","12:25:27","12:25:32","12:25:37","12:25:42","12:25:47","12:25:52","12:25:57"],"data":[1143,769,251,733,335,969,869,1390,168,1391]}
```

组件

```vue
<template>
  <div class="real-time-order">
    <div class="real-time-order-left">
      <div class="title">实时订单趋势图</div>
      <div class="sub-title">Number Of Real-time Orders</div>
      <div class="total">
        <count-to
          :start-val="startVal"
          :end-val="endVal"
          :duration="1000"
          separator=","
          autoplay
        />
      </div>
      <div class="tiny-title">周同比增长率</div>
      <div class="percent-text">
        <span class="percent-text-1">
          <count-to
            :start-val="startPercent"
            :end-val="percent"
            :duration="1000"
            :decimals="2"
            suffix="%"
          />
        </span>
      </div>
    </div>
    <div class="real-time-order-right">
      <div id="real-time-order-chart" />
    </div>
  </div>
</template>

<script>
  import Echarts from 'echarts'
  import { watch, onMounted } from 'vue'

  const kpi = 999999

  export default {
    name: 'RealTimeOrder',
    props: {
      data: Object
    },
    setup(props) {
      const update = () => {
        function createOption() {
          const option = {
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: props.data.date,
              axisLine: {
                lineStyle: {
                  color: 'rgba(200, 200, 200)'
                }
              },
              axisLabel: {
                fontSize: 16
              }
            },
            yAxis: {
              type: 'value',
              splitLine: {
                lineStyle: {
                  color: 'rgb(50, 50, 50)'
                }
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(200, 200, 200)'
                }
              },
              axisLabel: {
                fontSize: 16
              }
            },
            dataZoom: [{
              type: 'inside',
              start: 0,
              end: 100
            }, {
              start: 0,
              end: 100,
              handleIcon: 'M 0.0525 0.5656 L 0.0525 0 L -0.0583 0 L -0.0583 0.5656 L -0.2449 0.5656 L -0.2449 1.4344 L -0.0525 1.4344 L -0.0525 2 L 0.0525 2 L 0.0525 1.4344 L 0.2449 1.4344 L 0.2449 0.5656 L 0.0525 0.5656 Z M 0.1399 1.1953 L -0.1458 1.1953 L -0.1458 1.1137 L 0.1399 1.1137 L 0.1399 1.1953 Z M 0.1399 0.8863 L -0.1458 0.8863 L -0.1458 0.8047 L 0.1399 0.8047 L 0.1399 0.8863 Z',
              handleSize: '100%',
              handleStyle: {
                color: '#a7b7cc'
              },
              textStyle: {
                color: 'rgb(200, 200, 200)'
              },
              fillerColor: 'rgba(120,126,134,.3)',
              dataBackground: {
                lineStyle: {
                  color: 'grey'
                },
                areaStyle: {
                  color: 'gray'
                }
              },
              borderColor: 'rgb(200, 200, 200)'
            }],
            series: [
              {
                name: '模拟数据',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                  color: new Echarts.graphic.LinearGradient(0, 0, 0, 1,
                    [
                      {
                        offset: 0,
                        color: '#C2C90B'
                      },
                      {
                        offset: 0.5,
                        color: '#A1DC14'
                      },
                      {
                        offset: 1,
                        color: 'rgb(188, 222, 129)'
                      }
                    ])
                },
                data: props.data.data
              }
            ],
            grid: {
              top: 40,
              bottom: 80,
              right: 40,
              left: 80
            }
          }
          return option
        }

        const chart = Echarts.init(document.getElementById('real-time-order-chart'))
        chart.setOption(createOption())
      }
      onMounted(update)
      watch(() => props.data, () => {
        update()
      })
    },
    data() {
      return {
        startVal: 0,
        endVal: 23242,
        startPercent: 0,
        percent: 23242 / kpi * 100
      }
    }
  }
</script>
```

### 销售日历组件

数据

```js
const scheduleViewMockData = [["2020-06-01",4675],["2020-06-02",5995],["2020-06-03",4512],["2020-06-04",6330],["2020-06-05",7413],["2020-06-06",6479],["2020-06-07",9587]]
```

组件

```vue
<template>
  <div class="schedule-view">
    <div id="schedule-view-chart" />
    <div class="bg1 bg" />
    <div class="bg2 bg" />
  </div>
</template>

<script>
  import Echarts from 'echarts'

  export default {
    name: 'ScheduleView',
    mounted() {
      function getVirtualData(year) {
        year = year || '2020'
        const date = +Echarts.number.parseDate(year + '-06-01')
        const end = +Echarts.number.parseDate((+year + 1) + '-12-31')
        const dayTime = 3600 * 24 * 1000
        const data = []
        for (let time = date; time < end; time += dayTime) {
          data.push([
            Echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
          ])
        }
        return data
      }
      const data = getVirtualData(2020)
      console.log(JSON.stringify(data))
      const option = {
        calendar: [{
          top: 30,
          left: 80,
          right: 40,
          bottom: 10,
          range: ['2020-06-01', '2020-12-31'],
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgb(127, 127, 127)'
            }
          },
          yearLabel: { show: false },
          dayLabel: {
            color: 'rgb(127, 127, 127)',
            fontSize: 18
          },
          monthLabel: {
            color: 'rgb(127, 127, 127)',
            fontSize: 18
          },
          itemStyle: {
            color: 'rgb(48, 48, 48)',
            borderWidth: 1,
            borderColor: 'rgb(48, 48, 48)'
          }
        }],
        series: [
          {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: data,
            symbolSize: function(val) {
              return val[1] / 600
            },
            itemStyle: {
              color: 'rgb(208,248,138)'
            }
          },
          {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: data.sort(function(a, b) {
              return b[1] - a[1]
            }).slice(0, 12),
            symbolSize: function(val) {
              return val[1] / 500
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
              color: 'rgb(208,248,138)',
              shadowBlur: 10,
              shadowColor: '#333'
            },
            zlevel: 1
          }
        ]
      }
      this.chart = Echarts.init(document.getElementById('schedule-view-chart'))
      this.chart.setOption(option)
    }
  }
</script>
```

### 区域销售排行组件

数据

```js
const salesRankMockData = [{"city":"北京","rate":"-12%","shop":[{"shop":"必胜客","order":484,"sales":9447},{"shop":"肯德基","order":718,"sales":9068},{"shop":"麦当劳","order":332,"sales":5756},{"shop":"海底捞","order":532,"sales":5692}]},{"city":"南宁","rate":"+8%","shop":[{"shop":"必胜客","order":133,"sales":1927},{"shop":"肯德基","order":503,"sales":7077},{"shop":"麦当劳","order":700,"sales":10318},{"shop":"海底捞","order":349,"sales":4882}]}]
```

组件

```vue
<template>
  <div class="activate-user">
    <div class="title">地区商家销售排行</div>
    <div class="list-wrapper">
      <div class="list-inner" v-for="(item, index) in headerData" :key="index">
        <div class="list">
          <div class="list-title">{{item.title}}</div>
          <div class="list-separator-wrapper">
            <div class="list-separator" />
          </div>
          <div class="chart-wrapper">
            <div class="img-wrapper">
              <img :src="item.img">
            </div>
            <div class="chart" :id="`activate-user-chart${index + 1}`" />
          </div>
          <div class="category-wrapper">
            <transform-category
              :data="['商家', '订单数', '销售额']"
              :color="['rgb(178, 209, 126)', 'rgb(116, 166, 49)']"
            />
          </div>
          <div class="list-content-wrapper">
            <div class="list-item-wrapper" v-for="(listItem, index) in listData[index].shop" :key="index">
              <div class="list-item">{{listItem.shop}}</div>
              <div class="list-item">{{listItem.order}}</div>
              <div class="list-item list-item-sales">{{listItem.sales}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Echarts from 'echarts'
  import { ref, watch, nextTick, onMounted } from 'vue'
  import TransformCategory from '../TransformCategory/index'

  export default {
    name: 'SalesRank',
    components: { TransformCategory },
    props: {
      data: Array
    },
    setup(props) {
      const headerData = ref([])
      const listData = ref([])
      let currentIndex = 0
      const update = () => {
        const currentData = props.data.slice(currentIndex, currentIndex + 3)
        headerData.value = [{
          title: currentData[0].city,
          img: 'https://img.alicdn.com/tfs/TB1Z171qebviK0jSZFNXXaApXXa-30-29.png'
        }, {
          title: currentData[1].city,
          img: 'https://img.alicdn.com/tfs/TB1b8Tzq7T2gK0jSZFkXXcIQFXa-28-24.png'
        }, {
          title: currentData[2].city,
          img: 'https://img.alicdn.com/tfs/TB12MbzqYY1gK0jSZTEXXXDQVXa-28-30.png'
        }]
        listData.value = currentData
        console.log(currentData)
        function createOption() {
          const data = []
          data[0] = Math.ceil(Math.random() * 100)
          data[1] = 100 - data[0]
          return {
            color: ['rgb(210, 244, 148)', 'rgb(79, 79, 79)'],
            grid: {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            },
            title: {
              text: `${data[0]}%`,
              left: 'center',
              top: '60%',
              textStyle: {
                color: 'rgb(210, 244, 148)',
                fontSize: 18,
                align: 'center'
              }
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['70%', '90%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  {
                    value: data[0],
                    name: '活跃用户'
                  },
                  {
                    value: data[1],
                    name: '非活跃用户'
                  }
                ]
              }
            ]
          }
        }
        nextTick(() => {
          const chart = []
          headerData.value.forEach((item, index) => {
            const id = `activate-user-chart${index + 1}`
            chart[index] = Echarts.init(document.getElementById(id))
            chart[index].setOption(createOption())
          })

          if (currentIndex >= props.data.length - 3) {
            currentIndex = 0
          } else {
            currentIndex++
          }
        })
      }
      onMounted(update)
      watch(() => props.data, () => {
        update()
      })
      return {
        headerData,
        listData
      }
    }
  }
</script>

```

### 可滑动的列表

```vue
<template>
  <div class="base-scroll-list" :id="id">
    <div
      class="base-scroll-list-header"
      :style="{
        backgroundColor: actualConfig.headerBg,
        height: `${actualConfig.headerHeight}px`,
        fontSize: `${actualConfig.headerFontSize}px`,
        color: actualConfig.headerColor,
      }"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in headerData"
        :key="headerItem + i"
        :style="{
          width: `${columnWidths[i]}px`,
          ...headerStyle[i]
        }"
        v-html="headerItem"
        :align="aligns[i]"
      />
    </div>
    <div
      class="base-scroll-list-rows-wrapper"
      :style="{
        height: `${height - actualConfig.headerHeight}px`
      }"
    >
      <div
        class="base-scroll-list-rows"
        v-for="(rowData, index) in currentRowsData"
        :key="rowData.rowIndex"
        :style="{
        height: `${rowHeights[index]}px`,
        lineHeight: `${rowHeights[index]}px`,
        backgroundColor: rowData.rowIndex % 2 === 0 ? rowBg[1] : rowBg[0],
        fontSize: `${actualConfig.rowFontSize}px`,
        color: actualConfig.rowColor,
      }"
      >
        <div
          class="base-scroll-list-columns base-scroll-list-text"
          v-for="(colData, colIndex) in rowData.data"
          :key="colData + colIndex"
          :style="{
          width: `${columnWidths[colIndex]}px`,
          ...rowStyle[colIndex]
        }"
          v-html="colData"
          :align="aligns[colIndex]"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref, watch } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
  import useScreen from '../../hooks/useScreen'
  import cloneDeep from 'lodash/cloneDeep'
  import assign from 'lodash/assign'

  const defaultConfig = {
    // 标题数据，格式：['a','b','c']
    headerData: [],
    // 标题样式，格式：[{},{},{}]
    headerStyle: [],
    // 行样式
    rowStyle: [],
    // 行背景色
    rowBg: [],
    // 标题的背景色
    headerBg: 'rgb(90,90,90)',
    // 标题的高度
    headerHeight: 35,
    // 标题是否展示序号
    headerIndex: false,
    // 序号列标题的内容
    headerIndexContent: '#',
    // 序号列标题的样式
    headerIndexStyle: {
      width: '50px'
    },
    // 序号列的内容
    headerIndexData: [],
    // 序号列内容的样式
    rowIndexStyle: {
      width: '50px'
    },
    // 数据项，二维数组
    data: [],
    // 每页显示数据量
    rowNum: 10,
    // 居中方式
    aligns: [],
    headerFontSize: 28,
    rowFontSize: 28,
    headerColor: '#fff',
    rowColor: '#000',
    moveNum: 1, // 移动的位置
    duration: 2000 // 动画间隔
  }
  export default {
    name: 'BaseScrollList',
    props: {
      config: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props) {
      const id = `base-scroll-list-${uuidv4()}`
      const { width, height } = useScreen(id)
      const actualConfig = ref([])
      const headerData = ref([])
      const headerStyle = ref([])
      const rowStyle = ref([])
      const columnWidths = ref([])
      const rowBg = ref([])
      const rowHeights = ref([])
      const rowsData = ref([])
      const currentRowsData = ref([]) //
      const currentIndex = ref(0) // 动画指针
      const rowNum = ref(defaultConfig.rowNum)
      const aligns = ref([])
      const isAnimationStop = ref(false)

      let avgHeight // 行高

      const handleHeader = (config) => {
        const _headerData = cloneDeep(config.headerData)
        const _headerStyle = cloneDeep(config.headerStyle)
        const _rowStyle = cloneDeep(config.rowStyle)
        const _rowsData = cloneDeep(config.data)
        const _aligns = cloneDeep(config.aligns)
        if (_headerData.length === 0) {
          return
        }
        if (config.headerIndex) {
          _headerData.unshift(config.headerIndexContent)
          _headerStyle.unshift(config.headerIndexStyle)
          _rowStyle.unshift(config.rowIndexStyle)
          _rowsData.forEach((rows, index) => {
            if (config.headerIndexData[index]) {
              rows.unshift(config.headerIndexData[index])
            } else {
              rows.unshift(index + 1)
            }
          })
          _aligns.unshift('center')
        }
        // 动态计算header中每一列的宽度
        let usedWidth = 0
        let usedColumnNum = 0
        // 判断是否自定义width
        _headerStyle.forEach(style => {
          // 如果自定义width，则按照自定义width进行渲染
          if (style.width) {
            usedWidth += +style.width.replace('px', '')
            usedColumnNum++
          }
        })
        // 动态计算列宽时，使用剩余的宽度除以剩余的列数
        const avgWidth = (width.value - usedWidth) / (_headerData.length - usedColumnNum)
        const _columnWidth = new Array(_headerData.length).fill(avgWidth)
        _headerStyle.forEach((style, index) => {
          // 如果自定义width，则按照自定义width进行渲染
          if (style.width) {
            const headerWidth = +style.width.replace('px', '')
            _columnWidth[index] = headerWidth
          }
        })

        columnWidths.value = _columnWidth
        headerData.value = _headerData
        headerStyle.value = _headerStyle
        rowStyle.value = _rowStyle

        const { rowNum } = config
        if (_rowsData.length >= rowNum && _rowsData.length < rowNum * 2) {
          const newRowData = [..._rowsData, ..._rowsData]
          rowsData.value = newRowData.map((item, index) => ({
            data: item,
            rowIndex: index
          }))
        } else {
          rowsData.value = _rowsData.map((item, index) => ({
            data: item,
            rowIndex: index
          }))
        }
        aligns.value = _aligns

        console.log(_aligns, aligns.value)
      }

      const handleRows = (config) => {
        // 动态计算每行数据的高度
        const { headerHeight } = config
        rowNum.value = config.rowNum
        const unusedHeight = height.value - headerHeight
        // 如果rowNum大于实际数据长度，则以实际数据长度为准
        if (rowNum.value > rowsData.value.length) {
          rowNum.value = rowsData.value.length
        }
        avgHeight = unusedHeight / rowNum.value
        rowHeights.value = new Array(rowNum.value).fill(avgHeight)

        // 获取行背景色
        if (config.rowBg) {
          rowBg.value = config.rowBg
        }
      }

      const startAnimation = async () => {
        const config = actualConfig.value
        const { rowNum, moveNum, duration } = config
        const totalLength = rowsData.value.length
        if (totalLength < rowNum) return
        const index = currentIndex.value
        const _rowsData = cloneDeep(rowsData.value)
        // 将数据重新头尾相连
        const rows = _rowsData.slice(index)
        rows.push(..._rowsData.slice(0, index))
        currentRowsData.value = rows
        // 先将所有行的高度还原
        rowHeights.value = new Array(totalLength).fill(avgHeight)
        const waitTime = 300
        if (isAnimationStop.value) {
          return
        }
        await new Promise(resolve => setTimeout(resolve, waitTime))
        // 将moveNum的行高度设置0
        rowHeights.value.splice(0, moveNum, ...new Array(moveNum).fill(0))
        currentIndex.value += moveNum
        // 是否到达最后一组数据
        const isLast = currentIndex.value - totalLength
        if (isLast >= 0) {
          currentIndex.value = isLast
        }
        if (isAnimationStop.value) {
          return
        }
        await new Promise(resolve => setTimeout(resolve, duration - waitTime))
        if (isAnimationStop.value) {
          return
        }
        await startAnimation()
      }

      const stopAnimation = () => {
        isAnimationStop.value = true
      }

      const update = () => {
        stopAnimation()
        const _actualConfig = assign(defaultConfig, props.config)
        // 赋值rowsData
        rowsData.value = _actualConfig.data || []
        handleHeader(_actualConfig)
        handleRows(_actualConfig)
        actualConfig.value = _actualConfig

        // 展示动画
        isAnimationStop.value = false
        startAnimation()
      }

      watch(() => props.config, () => {
        console.log('watch!', props.config)
        update()
      })

      return {
        id,
        headerData,
        headerStyle,
        rowStyle,
        aligns,
        columnWidths,
        rowHeights,
        rowsData,
        currentRowsData,
        rowBg,
        actualConfig,
        height
      }
    }
  }
</script>
```

数据

```js
const salesListMockData = [{"order":"北京 -10%","shop":"北京 -19%","rider":"北京 -12%","newShop":"北京 -17%","avgOrder":"北京 -8%"},{"order":"南宁 -17%","shop":"南宁 -13%","rider":"南宁 -23%","newShop":"南宁 -13%","avgOrder":"南宁 -14%"}]
```

引用

```vue
<template>
  <div class="sales-list">
    <div class="title">区域销售大盘环比分析</div>
    <div class="list">
      <base-scroll-list :config="config" />
    </div>
  </div>
</template>

<script>
  import { ref, onMounted, watch } from 'vue'

  export default {
    name: 'SalesList',
    props: {
      data: Array
    },
    setup(props) {
      const config = ref({})

      const update = () => {
        const data = []
        const aligns = []
        const headerIndexData = []
        for (let i = 0; i < props.data.length; i++) {
          data[i] = []
          aligns[i] = 'center'
          if (i % 2 === 0) {
            headerIndexData[i] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
            <div style="width:15px;height:15px;background:rgb(72,122,72);border-radius:50%;border:1px solid #fff;"/>
          </div>`
          } else {
            headerIndexData[i] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
            <div style="width:15px;height:15px;background:rgb(38,88,104);border-radius:50%;border:1px solid #fff;"/>
          </div>`
          }
          for (let j = 0; j < 5; j++) {
            let text = ''
            switch (j) {
              case 0:
                text = props.data[i].order
                break
              case 1:
                text = props.data[i].shop
                break
              case 2:
                text = props.data[i].rider
                break
              case 3:
                text = props.data[i].newShop
                break
              case 4:
                text = props.data[i].avgOrder
                break
              default:
            }
            if (j === 1 || j === 3) {
              data[i].push(`<div style="color:rgb(178,209,126)">${text}</div>`)
            } else {
              data[i].push(`<div>${text}</div>`)
            }
          }
        }
        config.value = {
          headerData: ['城市订单量', '店铺数', '接单骑手人数', '新店铺数量', '人均订单量'], // 表头
          data, // 表格数据
          rowNum: 12, // 显示行数
          aligns, // 表格排序
          headerIndex: true, // 是否显示序号
          headerIndexContent: '', // 序号列表头文字
          headerIndexData, // 序号列内容
          headerBGC: 'rgb(80, 80, 80)', // 表头背景色
          headerHeight: 55, // 表头高度
          headerFontSize: 24, // 表头文字大小
          rowBg: ['rgb(40, 40, 40)', 'rgb(55, 55, 55)'], // 奇偶行背景色
          rowFontSize: 24, // 表格文字大小
          rowColor: '#fff'
        }
      }
      onMounted(() => {
        update()
      })
      const stop = watch(() => props.data, () => {
        update()
        stop()
      })
      return {
        config
      }
    }
  }
</script>
```

## 插件工程

1. Rollup简介：rollup是一个前端JavaScript打包工具，与其他工具相比的话，更加轻量级，生成的插件体积更小；且支持很多其他的插件来扩展功能，比如Babel、TS、ESLint，可以实现代码的转换，压缩，混淆；支持多种输出格式，比如CommonJs、AMD、UMD。

2. Babel是一个JavaScript编译器。它的主要功能是将使用ES6及以后版本的JavaScript语言特性编写的代码转换成向后兼容的JavaScript代码。

3. rollup-plugin-node-resolve是一个让Rollup能够遵循Node.js的模块解析算法找到模块的插件。它允许开发者从node_modules目录中导入模块，而不需要指定完整路径。

4. rollup-plugin-commonjs（现已迁移至@rollup/plugin-commonjs）是一个用于Rollup的插件，其主要功能是将CommonJS模块转换为ES6模块，以便它们可以被包含在Rollup构建的包中。

5. rollup-plugin-json（现已迁移至@rollup/plugin-json）是一个专门为Rollup构建的插件，它的主要功能是将JSON文件无缝转换成ES6模块。这样，开发者就可以在JavaScript代码中像导入其他模块一样导入JSON文件，从而简化代码引用过程，提升开发体验

6. rollup-plugin-vue是一个用于Rollup的插件，专门用于处理Vue.js的单文件组件（SFC，Single File Components）。这个插件允许开发者在使用Rollup构建Vue.js应用时，轻松地管理和打包Vue单文件组件。

7. rollup-plugin-postcss是一个用于Rollup的插件，旨在无缝集成Rollup和PostCSS，以在Rollup构建过程中处理和优化CSS文件

8. rollup-plugin-node-polyfills是一个专为Rollup设计的插件，其核心目的为了弥补在浏览器环境执行Node.js风格代码时的不足。当将Node.js应用程序或库打包到浏览器环境中时，许多全局对象和原生模块不在默认情况下可用。这个插件通过提供polyfills来解决这个问题，确保代码能在非Node.js环境（如浏览器）中顺利运行。

   ```
   运行vas-datav-libs-dev项目可生成js插件（位置：dist/*.js）,会生成俩个js插件，其中我们使用*.es.js结尾的文件在大屏项目中进行开发。
   Example/index.html 用于查看插件效果
   Src/components下是插件的各个组件
   ```



| 目录        | 功能         |
| ----------- | ------------ |
| Calendar    | 日历插件     |
| Container   | 容器插件     |
| DatasetLink | 圆饼图插件   |
| FlyBox      | 飞线图插件   |
| Gauge       | 水位图插件   |
| Line        | 折线图插件   |
| LineBar     | 柱状图插件   |
| Lines       | 多折线图插件 |
| Logo        | Logo插件     |
| Map         | 地图插件     |
| Radar       | 雷达图插件   |

##### 项目结构

```
vas-datav-libs-dev/
├── dist  ================>生成插件的目录
│   ├── imooc.datav.es.js  ================>主要使用这个插件
│   └── imooc.datav.js
├── example
│   └── index.html ================> 访问该html查看插件效果
├── flights.json
├── node_modules
│   ├── @babel
│   │   ├── code-frame -> ../.store/@babel+code-frame@7.26.2/node_modules/@babel/code-frame
│   │   ├── compat-data -> ../.store/@babel+compat-data@7.26.2/node_modules/@babel/compat-data
│   │   ├── core -> ../.store/@babel+core@7.26.0/node_modules/@babel/core
│   │   ├── generator -> ../.store/@babel+generator@7.26.2/node_modules/@babel/generator
│   │   ├── helper-annotate-as-pure -> ../.store/@babel+helper-annotate-as-pure@7.25.9/node_modules/@babel/helper-annotate-as-pure
│   │   ├── helper-builder-binary-assignment-operator-visitor -> ../.store/@babel+helper-builder-binary-assignment-operator-visitor@7.25.9/node_modules/@babel/helper-builder-binary-assignment-operator-visitor
│   │   ├── helper-compilation-targets -> ../.store/@babel+helper-compilation-targets@7.25.9/node_modules/@babel/helper-compilation-targets
│   │   ├── helper-create-class-features-plugin -> ../.store/@babel+helper-create-class-features-plugin@7.25.9/node_modules/@babel/helper-create-class-features-plugin
│   │   ├── helper-create-regexp-features-plugin -> ../.store/@babel+helper-create-regexp-features-plugin@7.25.9/node_modules/@babel/helper-create-regexp-features-plugin
│   │   ├── helper-define-polyfill-provider -> ../.store/@babel+helper-define-polyfill-provider@0.6.2/node_modules/@babel/helper-define-polyfill-provider
│   │   ├── helper-member-expression-to-functions -> ../.store/@babel+helper-member-expression-to-functions@7.25.9/node_modules/@babel/helper-member-expression-to-functions
│   │   ├── helper-module-imports -> ../.store/@babel+helper-module-imports@7.25.9/node_modules/@babel/helper-module-imports
│   │   ├── helper-module-transforms -> ../.store/@babel+helper-module-transforms@7.26.0/node_modules/@babel/helper-module-transforms
│   │   ├── helper-optimise-call-expression -> ../.store/@babel+helper-optimise-call-expression@7.25.9/node_modules/@babel/helper-optimise-call-expression
│   │   ├── helper-plugin-utils -> ../.store/@babel+helper-plugin-utils@7.25.9/node_modules/@babel/helper-plugin-utils
│   │   ├── helper-remap-async-to-generator -> ../.store/@babel+helper-remap-async-to-generator@7.25.9/node_modules/@babel/helper-remap-async-to-generator
│   │   ├── helper-replace-supers -> ../.store/@babel+helper-replace-supers@7.25.9/node_modules/@babel/helper-replace-supers
│   │   ├── helper-simple-access -> ../.store/@babel+helper-simple-access@7.25.9/node_modules/@babel/helper-simple-access
│   │   ├── helper-skip-transparent-expression-wrappers -> ../.store/@babel+helper-skip-transparent-expression-wrappers@7.25.9/node_modules/@babel/helper-skip-transparent-expression-wrappers
│   │   ├── helper-string-parser -> ../.store/@babel+helper-string-parser@7.25.9/node_modules/@babel/helper-string-parser
│   │   ├── helper-validator-identifier -> ../.store/@babel+helper-validator-identifier@7.25.9/node_modules/@babel/helper-validator-identifier
│   │   ├── helper-validator-option -> ../.store/@babel+helper-validator-option@7.25.9/node_modules/@babel/helper-validator-option
│   │   ├── helper-wrap-function -> ../.store/@babel+helper-wrap-function@7.25.9/node_modules/@babel/helper-wrap-function
│   │   ├── helpers -> ../.store/@babel+helpers@7.26.0/node_modules/@babel/helpers
│   │   ├── node -> ../.store/@babel+node@7.26.0/node_modules/@babel/node
│   │   ├── parser -> ../.store/@babel+parser@7.26.2/node_modules/@babel/parser
│   │   ├── plugin-bugfix-firefox-class-in-computed-class-key -> ../.store/@babel+plugin-bugfix-firefox-class-in-computed-class-key@7.25.9/node_modules/@babel/plugin-bugfix-firefox-class-in-computed-class-key
│   │   ├── plugin-bugfix-safari-class-field-initializer-scope -> ../.store/@babel+plugin-bugfix-safari-class-field-initializer-scope@7.25.9/node_modules/@babel/plugin-bugfix-safari-class-field-initializer-scope
│   │   ├── plugin-bugfix-safari-id-destructuring-collision-in-function-expression -> ../.store/@babel+plugin-bugfix-safari-id-destructuring-collision-in-function-expression@7.25.9/node_modules/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression
│   │   ├── plugin-bugfix-v8-spread-parameters-in-optional-chaining -> ../.store/@babel+plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.25.9/node_modules/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining
│   │   ├── plugin-bugfix-v8-static-class-fields-redefine-readonly -> ../.store/@babel+plugin-bugfix-v8-static-class-fields-redefine-readonly@7.25.9/node_modules/@babel/plugin-bugfix-v8-static-class-fields-redefine-readonly
│   │   ├── plugin-proposal-private-property-in-object -> ../.store/@babel+plugin-proposal-private-property-in-object@7.21.0-placeholder-for-preset-env.2/node_modules/@babel/plugin-proposal-private-property-in-object
│   │   ├── plugin-syntax-import-assertions -> ../.store/@babel+plugin-syntax-import-assertions@7.26.0/node_modules/@babel/plugin-syntax-import-assertions
│   │   ├── plugin-syntax-import-attributes -> ../.store/@babel+plugin-syntax-import-attributes@7.26.0/node_modules/@babel/plugin-syntax-import-attributes
│   │   ├── plugin-syntax-unicode-sets-regex -> ../.store/@babel+plugin-syntax-unicode-sets-regex@7.18.6/node_modules/@babel/plugin-syntax-unicode-sets-regex
│   │   ├── plugin-transform-arrow-functions -> ../.store/@babel+plugin-transform-arrow-functions@7.25.9/node_modules/@babel/plugin-transform-arrow-functions
│   │   ├── plugin-transform-async-generator-functions -> ../.store/@babel+plugin-transform-async-generator-functions@7.25.9/node_modules/@babel/plugin-transform-async-generator-functions
│   │   ├── plugin-transform-async-to-generator -> ../.store/@babel+plugin-transform-async-to-generator@7.25.9/node_modules/@babel/plugin-transform-async-to-generator
│   │   ├── plugin-transform-block-scoped-functions -> ../.store/@babel+plugin-transform-block-scoped-functions@7.25.9/node_modules/@babel/plugin-transform-block-scoped-functions
│   │   ├── plugin-transform-block-scoping -> ../.store/@babel+plugin-transform-block-scoping@7.25.9/node_modules/@babel/plugin-transform-block-scoping
│   │   ├── plugin-transform-class-properties -> ../.store/@babel+plugin-transform-class-properties@7.25.9/node_modules/@babel/plugin-transform-class-properties
│   │   ├── plugin-transform-class-static-block -> ../.store/@babel+plugin-transform-class-static-block@7.26.0/node_modules/@babel/plugin-transform-class-static-block
│   │   ├── plugin-transform-classes -> ../.store/@babel+plugin-transform-classes@7.25.9/node_modules/@babel/plugin-transform-classes
│   │   ├── plugin-transform-computed-properties -> ../.store/@babel+plugin-transform-computed-properties@7.25.9/node_modules/@babel/plugin-transform-computed-properties
│   │   ├── plugin-transform-destructuring -> ../.store/@babel+plugin-transform-destructuring@7.25.9/node_modules/@babel/plugin-transform-destructuring
│   │   ├── plugin-transform-dotall-regex -> ../.store/@babel+plugin-transform-dotall-regex@7.25.9/node_modules/@babel/plugin-transform-dotall-regex
│   │   ├── plugin-transform-duplicate-keys -> ../.store/@babel+plugin-transform-duplicate-keys@7.25.9/node_modules/@babel/plugin-transform-duplicate-keys
│   │   ├── plugin-transform-duplicate-named-capturing-groups-regex -> ../.store/@babel+plugin-transform-duplicate-named-capturing-groups-regex@7.25.9/node_modules/@babel/plugin-transform-duplicate-named-capturing-groups-regex
│   │   ├── plugin-transform-dynamic-import -> ../.store/@babel+plugin-transform-dynamic-import@7.25.9/node_modules/@babel/plugin-transform-dynamic-import
│   │   ├── plugin-transform-exponentiation-operator -> ../.store/@babel+plugin-transform-exponentiation-operator@7.25.9/node_modules/@babel/plugin-transform-exponentiation-operator
│   │   ├── plugin-transform-export-namespace-from -> ../.store/@babel+plugin-transform-export-namespace-from@7.25.9/node_modules/@babel/plugin-transform-export-namespace-from
│   │   ├── plugin-transform-for-of -> ../.store/@babel+plugin-transform-for-of@7.25.9/node_modules/@babel/plugin-transform-for-of
│   │   ├── plugin-transform-function-name -> ../.store/@babel+plugin-transform-function-name@7.25.9/node_modules/@babel/plugin-transform-function-name
│   │   ├── plugin-transform-json-strings -> ../.store/@babel+plugin-transform-json-strings@7.25.9/node_modules/@babel/plugin-transform-json-strings
│   │   ├── plugin-transform-literals -> ../.store/@babel+plugin-transform-literals@7.25.9/node_modules/@babel/plugin-transform-literals
│   │   ├── plugin-transform-logical-assignment-operators -> ../.store/@babel+plugin-transform-logical-assignment-operators@7.25.9/node_modules/@babel/plugin-transform-logical-assignment-operators
│   │   ├── plugin-transform-member-expression-literals -> ../.store/@babel+plugin-transform-member-expression-literals@7.25.9/node_modules/@babel/plugin-transform-member-expression-literals
│   │   ├── plugin-transform-modules-amd -> ../.store/@babel+plugin-transform-modules-amd@7.25.9/node_modules/@babel/plugin-transform-modules-amd
│   │   ├── plugin-transform-modules-commonjs -> ../.store/@babel+plugin-transform-modules-commonjs@7.25.9/node_modules/@babel/plugin-transform-modules-commonjs
│   │   ├── plugin-transform-modules-systemjs -> ../.store/@babel+plugin-transform-modules-systemjs@7.25.9/node_modules/@babel/plugin-transform-modules-systemjs
│   │   ├── plugin-transform-modules-umd -> ../.store/@babel+plugin-transform-modules-umd@7.25.9/node_modules/@babel/plugin-transform-modules-umd
│   │   ├── plugin-transform-named-capturing-groups-regex -> ../.store/@babel+plugin-transform-named-capturing-groups-regex@7.25.9/node_modules/@babel/plugin-transform-named-capturing-groups-regex
│   │   ├── plugin-transform-new-target -> ../.store/@babel+plugin-transform-new-target@7.25.9/node_modules/@babel/plugin-transform-new-target
│   │   ├── plugin-transform-nullish-coalescing-operator -> ../.store/@babel+plugin-transform-nullish-coalescing-operator@7.25.9/node_modules/@babel/plugin-transform-nullish-coalescing-operator
│   │   ├── plugin-transform-numeric-separator -> ../.store/@babel+plugin-transform-numeric-separator@7.25.9/node_modules/@babel/plugin-transform-numeric-separator
│   │   ├── plugin-transform-object-rest-spread -> ../.store/@babel+plugin-transform-object-rest-spread@7.25.9/node_modules/@babel/plugin-transform-object-rest-spread
│   │   ├── plugin-transform-object-super -> ../.store/@babel+plugin-transform-object-super@7.25.9/node_modules/@babel/plugin-transform-object-super
│   │   ├── plugin-transform-optional-catch-binding -> ../.store/@babel+plugin-transform-optional-catch-binding@7.25.9/node_modules/@babel/plugin-transform-optional-catch-binding
│   │   ├── plugin-transform-optional-chaining -> ../.store/@babel+plugin-transform-optional-chaining@7.25.9/node_modules/@babel/plugin-transform-optional-chaining
│   │   ├── plugin-transform-parameters -> ../.store/@babel+plugin-transform-parameters@7.25.9/node_modules/@babel/plugin-transform-parameters
│   │   ├── plugin-transform-private-methods -> ../.store/@babel+plugin-transform-private-methods@7.25.9/node_modules/@babel/plugin-transform-private-methods
│   │   ├── plugin-transform-private-property-in-object -> ../.store/@babel+plugin-transform-private-property-in-object@7.25.9/node_modules/@babel/plugin-transform-private-property-in-object
│   │   ├── plugin-transform-property-literals -> ../.store/@babel+plugin-transform-property-literals@7.25.9/node_modules/@babel/plugin-transform-property-literals
│   │   ├── plugin-transform-regenerator -> ../.store/@babel+plugin-transform-regenerator@7.25.9/node_modules/@babel/plugin-transform-regenerator
│   │   ├── plugin-transform-regexp-modifiers -> ../.store/@babel+plugin-transform-regexp-modifiers@7.26.0/node_modules/@babel/plugin-transform-regexp-modifiers
│   │   ├── plugin-transform-reserved-words -> ../.store/@babel+plugin-transform-reserved-words@7.25.9/node_modules/@babel/plugin-transform-reserved-words
│   │   ├── plugin-transform-runtime -> ../.store/@babel+plugin-transform-runtime@7.25.9/node_modules/@babel/plugin-transform-runtime
│   │   ├── plugin-transform-shorthand-properties -> ../.store/@babel+plugin-transform-shorthand-properties@7.25.9/node_modules/@babel/plugin-transform-shorthand-properties
│   │   ├── plugin-transform-spread -> ../.store/@babel+plugin-transform-spread@7.25.9/node_modules/@babel/plugin-transform-spread
│   │   ├── plugin-transform-sticky-regex -> ../.store/@babel+plugin-transform-sticky-regex@7.25.9/node_modules/@babel/plugin-transform-sticky-regex
│   │   ├── plugin-transform-template-literals -> ../.store/@babel+plugin-transform-template-literals@7.25.9/node_modules/@babel/plugin-transform-template-literals
│   │   ├── plugin-transform-typeof-symbol -> ../.store/@babel+plugin-transform-typeof-symbol@7.25.9/node_modules/@babel/plugin-transform-typeof-symbol
│   │   ├── plugin-transform-unicode-escapes -> ../.store/@babel+plugin-transform-unicode-escapes@7.25.9/node_modules/@babel/plugin-transform-unicode-escapes
│   │   ├── plugin-transform-unicode-property-regex -> ../.store/@babel+plugin-transform-unicode-property-regex@7.25.9/node_modules/@babel/plugin-transform-unicode-property-regex
│   │   ├── plugin-transform-unicode-regex -> ../.store/@babel+plugin-transform-unicode-regex@7.25.9/node_modules/@babel/plugin-transform-unicode-regex
│   │   ├── plugin-transform-unicode-sets-regex -> ../.store/@babel+plugin-transform-unicode-sets-regex@7.25.9/node_modules/@babel/plugin-transform-unicode-sets-regex
│   │   ├── preset-env -> ../.store/@babel+preset-env@7.26.0/node_modules/@babel/preset-env
│   │   ├── preset-modules -> ../.store/@babel+preset-modules@0.1.6-no-external-plugins/node_modules/@babel/preset-modules
│   │   ├── register -> ../.store/@babel+register@7.25.9/node_modules/@babel/register
│   │   ├── runtime -> ../.store/@babel+runtime@7.26.0/node_modules/@babel/runtime
│   │   ├── template -> ../.store/@babel+template@7.25.9/node_modules/@babel/template
│   │   ├── traverse -> ../.store/@babel+traverse@7.25.9/node_modules/@babel/traverse
│   │   └── types -> ../.store/@babel+types@7.26.0/node_modules/@babel/types
│   ├── @vue
│   │   └── compiler-sfc -> ../.store/@vue+compiler-sfc@3.5.12/node_modules/@vue/compiler-sfc
│   ├── babel-plugin-polyfill-corejs2 -> .store/babel-plugin-polyfill-corejs2@0.4.11/node_modules/babel-plugin-polyfill-corejs2
│   ├── babel-plugin-polyfill-corejs3 -> .store/babel-plugin-polyfill-corejs3@0.10.6/node_modules/babel-plugin-polyfill-corejs3
│   ├── babel-plugin-polyfill-regenerator -> .store/babel-plugin-polyfill-regenerator@0.6.2/node_modules/babel-plugin-polyfill-regenerator
│   ├── echarts -> .store/echarts@5.5.1/node_modules/echarts
│   ├── echarts-gl -> .store/echarts-gl@2.0.9/node_modules/echarts-gl
│   ├── echarts-liquidfill -> .store/echarts-liquidfill@3.1.0/node_modules/echarts-liquidfill
│   ├── jquery -> .store/jquery@3.7.1/node_modules/jquery
│   ├── lodash -> .store/lodash@4.17.21/node_modules/lodash
│   ├── rollup -> .store/rollup@4.25.0/node_modules/rollup
│   ├── rollup-plugin-babel -> .store/rollup-plugin-babel@4.4.0/node_modules/rollup-plugin-babel
│   ├── rollup-plugin-commonjs -> .store/rollup-plugin-commonjs@10.1.0/node_modules/rollup-plugin-commonjs
│   ├── rollup-plugin-express-proxy -> .store/rollup-plugin-express-proxy@1.0.4/node_modules/rollup-plugin-express-proxy
│   ├── rollup-plugin-json -> .store/rollup-plugin-json@4.0.0/node_modules/rollup-plugin-json
│   ├── rollup-plugin-node-polyfills -> .store/rollup-plugin-node-polyfills@0.2.1/node_modules/rollup-plugin-node-polyfills
│   ├── rollup-plugin-node-resolve -> .store/rollup-plugin-node-resolve@5.2.0/node_modules/rollup-plugin-node-resolve
│   ├── rollup-plugin-postcss -> .store/rollup-plugin-postcss@4.0.2/node_modules/rollup-plugin-postcss
│   ├── rollup-plugin-terser -> .store/rollup-plugin-terser@7.0.2/node_modules/rollup-plugin-terser
│   ├── rollup-plugin-vue -> .store/rollup-plugin-vue@6.0.0/node_modules/rollup-plugin-vue
│   ├── sass -> .store/sass@1.80.6/node_modules/sass
│   ├── uuid -> .store/uuid@10.0.0/node_modules/uuid
│   ├── vue -> .store/vue@3.5.12/node_modules/vue
│   └── vue-data-ui -> .store/vue-data-ui@2.3.77/node_modules/vue-data-ui
├── package-lock.json
├── package.json
├── rollup.config.dev.js      ================>插件配置
├── rollup.config.prod.js
└── src
    ├── App.vue
    ├── components
    │   ├── BarRace
    │   │   ├── BarRace.vue
    │   │   └── index.js
    │   ├── Block
    │   │   ├── Block.vue
    │   │   └── index.js
    │   ├── Calendar
    │   │   ├── Calendar.vue
    │   │   └── index.js
    │   ├── Container
    │   │   ├── Container.vue
    │   │   └── index.js
    │   ├── DatasetLink
    │   │   ├── DatasetLink.vue
    │   │   └── index.js
    │   ├── FlyBox
    │   │   ├── FlyBox.vue
    │   │   └── index.js
    │   ├── Gauge
    │   │   ├── Gauge.vue
    │   │   └── index.js
    │   ├── Icon
    │   │   ├── Icon.vue
    │   │   └── index.js
    │   ├── ImoocLoading
    │   │   ├── ImoocLoading.vue
    │   │   └── index.js
    │   ├── Line
    │   │   ├── Line.vue
    │   │   └── index.js
    │   ├── LineBar
    │   │   ├── LineBar.vue
    │   │   └── index.js
    │   ├── Lines
    │   │   ├── Lines.vue
    │   │   └── index.js
    │   ├── Logo
    │   │   ├── Logo.vue
    │   │   └── index.js
    │   ├── Map
    │   │   ├── Map.vue
    │   │   └── index.js
    │   ├── Radar
    │   │   ├── Radar.vue
    │   │   └── index.js
    │   ├── SvgAnimation
    │   │   ├── SvgAnimation.vue
    │   │   └── index.js
    │   └── Test.vue  ================>项目入口
    ├── index.js
    └── utils
        ├── index.js
        └── useScreen.js
```



## 大屏项目工程

```
Src/lib 下存放插件工程打包好的插件
Src/componets/Screen/Screen.vue是整个大屏项目的入口
动态表格使用vue3-seamless-scroll框架进行开发，使用示例可参考CarouseLTable.vue
```

##### 项目结构

```
vas-datav-screen/
├── README.md
├── index.html
├── jsconfig.json
├── node_modules
│   ├── @babel
│   │   ├── helper-string-parser -> ../.store/@babel+helper-string-parser@7.25.9/node_modules/@babel/helper-string-parser
│   │   ├── helper-validator-identifier -> ../.store/@babel+helper-validator-identifier@7.25.9/node_modules/@babel/helper-validator-identifier
│   │   ├── parser -> ../.store/@babel+parser@7.26.2/node_modules/@babel/parser
│   │   ├── runtime -> ../.store/@babel+runtime@7.26.0/node_modules/@babel/runtime
│   │   └── types -> ../.store/@babel+types@7.26.0/node_modules/@babel/types
│   ├── @jiaminghi
│   │   └── data-view -> ../.store/@jiaminghi+data-view@2.10.0/node_modules/@jiaminghi/data-view
│   ├── @vitejs
│   │   └── plugin-vue -> ../.store/@vitejs+plugin-vue@5.2.1/node_modules/@vitejs/plugin-vue
│   ├── autoprefixer -> .store/autoprefixer@10.4.20/node_modules/autoprefixer
│   ├── core-js -> .store/core-js@3.39.0/node_modules/core-js
│   ├── countup.js -> .store/countup.js@2.8.0/node_modules/countup.js
│   ├── element-plus -> .store/element-plus@2.9.0/node_modules/element-plus
│   ├── less -> .store/less@4.2.1/node_modules/less
│   ├── naive-ui -> .store/naive-ui@2.40.3/node_modules/naive-ui
│   ├── postcss -> .store/postcss@8.4.49/node_modules/postcss
│   ├── sass-embedded -> .store/sass-embedded@1.81.0/node_modules/sass-embedded
│   ├── tailwindcss -> .store/tailwindcss@3.4.16/node_modules/tailwindcss
│   ├── vite -> .store/vite@5.4.11/node_modules/vite
│   ├── vue -> .store/vue@3.5.13/node_modules/vue
│   ├── vue-data-ui -> .store/vue-data-ui@2.4.17/node_modules/vue-data-ui
│   └── vue3-seamless-scroll -> .store/vue3-seamless-scroll@2.0.1/node_modules/vue3-seamless-scroll
├── package.json
├── postcss.config.js
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── font
│   │   │   ├── DigifaceWide.TTF
│   │   │   └── FX-LED.TTF
│   │   ├── img.png
│   │   ├── imgs
│   │   │   ├── bg-1.jpg
│   │   │   ├── bg-2.jpg
│   │   │   ├── bg-3.jpg
│   │   │   ├── bg-4.jpg
│   │   │   ├── bg-5.jpg
│   │   │   └── bg-6.jpg
│   │   ├── mapData
│   │   │   └── china.json
│   │   └── vue.svg
│   ├── components
│   │   ├── Block
│   │   │   └── Block.vue
│   │   ├── CarouseLTable
│   │   │   ├── CarouseLTable.vue
│   │   │   └── index.js
│   │   ├── CarouseLTables
│   │   │   ├── CarouseLTables.vue
│   │   │   └── index.js
│   │   ├── Kpi
│   │   │   └── Kpi.vue
│   │   └── Screen
│   │       ├── Screen.vue ================>主屏幕入口
│   │       └── index.js
│   ├── lib
│   │   └── imooc.datav.es.js ================> 存放插件工程打包好的插件
│   ├── main.js
│   └── style.css
├── tailwind.config.js
└── vite.config.js
```



## 技术栈

**客户端:** rollup, babel, vue3, echarts, vue3-seamless-scroll

**服务端:** Node

## 附录

相关资料参考

[Vue3](https://cn.vuejs.org/guide/introduction.html)

[在线布局](https://cssgrid-generator.netlify.app/)

[rollup.js入门参考](https://www.imooc.com/article/262083) [rollup.js进阶参考](https://www.imooc.com/article/263597)  [rollup.js深度分析原理](https://www.imooc.com/article/264074)

[JS事件mouseover ,mouseout ,mouseenter,mouseleave的区别](https://www.jianshu.com/p/2f9c3c765459)

[svg教程](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial) [svg参考手册](https://www.w3school.com.cn/svg/svg_reference.asp)