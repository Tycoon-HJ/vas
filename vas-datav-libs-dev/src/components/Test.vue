<template>
  <div class="test">
    <!--    <svg width="500" height="200" viewBox="0 0 50 20" style="border: 1px solid #000000">-->
    <!--      <rect x="20" y="10" width="10" height="5" style="stroke: #000000; fill:none;"/>-->
    <!--    </svg>-->
    <!--    <svg width="500" height="200" viewBox="0 0 200 200" style="border: 1px solid #000000" preserveAspectRatio="xMidYMid meet">-->
    <!--      <rect x="100" y="100" width="100" height="50" stroke-width="10" style="stroke: #000000; fill:none;"/>-->
    <!--    </svg>-->
    <!--    <svg width="10%" height="10%" viewBox="0 0 100 100">-->
    <!--      <line x1="0" y1="50" x2="100" y2="50" stroke-width="8" stroke="currentColor" />-->
    <!--      <line x1="50" y1="0" x2="50" y2="100" stroke-width="8" stroke="currentColor" />-->
    <!--    </svg>-->
    <!--    <svg width="500" height="200" viewBox="0 0 200 200" style="border: 1px solid #000000" preserveAspectRatio="xMaxYMin meet">-->
    <!--      <rect x="100" y="100" width="100" height="50" stroke-width="10" style="stroke: #000000; fill:none;"/>-->
    <!--    </svg>-->
    <!--    <svg width="500" height="200" viewBox="0 0 200 200" style="border: 1px solid #000000" preserveAspectRatio="xMidYMax slice">-->
    <!--      <rect x="100" y="100" width="100" height="50" stroke-width="10" style="stroke: #000000; fill:none;"/>-->
    <!--    </svg>-->

    <!--    <svg width="500" height="200" viewBox="0 0 200 200" style="border: 1px solid #000000" preserveAspectRatio="xMaxYMin slice">-->
    <!--      <rect x="100" y="100" width="100" height="50" stroke-width="10" style="stroke: #000000; fill:none;"/>-->
    <!--    </svg>-->
    <!--    <svg width="500" height="200" viewBox="0 0 200 200" style="border: 1px solid #000000" preserveAspectRatio="none">-->
    <!--      <rect x="100" y="100" width="100" height="50" stroke-width="10" style="stroke: #000000; fill:none;"/>-->
    <!--    </svg>-->
    <!--    currentColor会取上一个组件的颜色-->
    <svg width="0" height="0" viewBox="0 0 100 100">
      <defs>
<!--        <g id="more">-->
<!--          <circle r="5" cx="10" cy="25" fill="currentColor"></circle>-->
<!--          <circle r="5" cx="10" cy="50" fill="currentColor"></circle>-->
<!--          <circle r="5" cx="10" cy="75" fill="currentColor"></circle>-->
<!--          <line x1="40" y1="25" x2="100" y2="25" stroke-width="8" stroke="currentColor"></line>-->
<!--          <line x1="40" y1="50" x2="100" y2="50" stroke-width="8" stroke="currentColor"></line>-->
<!--          <line x1="40" y1="75" x2="100" y2="75" stroke-width="8" stroke="currentColor"></line>-->
<!--        </g>-->
        <symbol id="arrowRight" viewBox="0 0 100 100">
          <polyline points="20 10, 80 50, 20 90 " fill="transparent" stroke="currentColor" stroke-width="3"></polyline>/
        </symbol>
      </defs>
    </svg>

    <Icon name="arrowRight" :style="{width:50,height:50,color:'green'}"></Icon>
    <Icon name="arrowRight" class="common-icon"></Icon>
    <div>
      message: {{ message }}
    </div>
    <div>
      doubleCount: {{ doubleCount }}
    </div>
    <button @click="add"> add count</button>

  </div>
</template>
<script>
import {computed, ref} from 'vue'

export default {
  name: 'TestComponent',
  setup() {
    const message = 'hello'
    const count = ref(1)
    const doubleCount = computed(() => count.value * 2)
    const add = () => {
      count.value++
    }
    return {
      message,
      doubleCount,
      add
    }
  }
}
</script>
<style scoped lang="scss">
.test {
  color: red;
}
.common-icon{
  color: cyan;
}
</style>