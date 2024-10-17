<template>
  <div class="test">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'TestComponent',
  setup() {
    const message = 'hello'
    return {
      message
    }
  }
}
</script>
<style scoped lang="scss">
.test {
  color: red;
}
</style>