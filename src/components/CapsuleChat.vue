<template>
  <div class="box">
    <dv-capsule-chart :config="config" style="width:100%;height:100%"/>
    <dv-decoration-6 style="width:300px;height:30px;" />
    <dv-decoration-9 style="width:150px;height:150px;">99%</dv-decoration-9>
    <dv-decoration-10 style="width:90%;height:5px;" />

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