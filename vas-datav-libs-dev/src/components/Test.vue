<template>
<!--    <imooc-container :options="{-->
<!--      width: 3840,-->
<!--      height: 2160-->
<!--    }">-->
<!--  &lt;!&ndash;<Calendar></Calendar>&ndash;&gt;-->

<!--  &lt;!&ndash;    <base-scroll-list :config="{}" ></base-scroll-list>&ndash;&gt;-->
<!--  &lt;!&ndash;<Gauge color="#4595eb" size="150" :percentSize="43" :unitSize="26" :padding="[10, 0, 0, 0]"></Gauge>&ndash;&gt;-->
<!--    </imooc-container>-->
<!--  <Map style="width: 100%;height: 200%"></Map>-->
<!--<Radar></Radar>-->
<!--  <FlyBox>11111</FlyBox>-->
<LineBar></LineBar>
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
<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}

.test {
  color: red;
}

.common-icon {
  color: red;
}
</style>