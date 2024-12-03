<template>
  <imooc-container :options="{
    width: 3840,
    height: 2160
  }">
<!--<Calendar></Calendar>-->

<!--    <base-scroll-list :config="{}" ></base-scroll-list>-->
<
    <Map style="width: 100px;height: 200px"></Map>
  </imooc-container>
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