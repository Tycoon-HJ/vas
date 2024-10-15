<template>
  <div class="box">
    <dv-capsule-chart :config="config" style="width:100%;height:100%"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>