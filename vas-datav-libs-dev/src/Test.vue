<template>
  <div class="test">





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
</style>