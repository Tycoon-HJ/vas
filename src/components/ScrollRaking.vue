
<template>
  <div class="box">
    <dv-scroll-ranking-board :config="config" style="width:100%;height:100%" />
  </div>
</template>
<script>
export default {
  data(){
    return{
      config: {
        data: [
          {
            name: '周口',
            value: 55123
          },
          {
            name: '南阳',
            value: 12022
          },
          {
            name: '西峡',
            value: 78932
          },
          {
            name: '驻马店',
            value: 63411
          },
          {
            name: '新乡',
            value: 44231
          }
        ],
        unit: '单位',
        valueFormatter ({ value }) {
          console.warn(arguments)
          const reverseNumber = (value + '').split('').reverse()
          let valueStr = ''

          while (reverseNumber.length) {
            const seg = reverseNumber.splice(0, 3).join('')
            valueStr += seg
            if (seg.length === 3) valueStr += ','
          }

          return valueStr.split('').reverse().join('')
        }
      }
    }
  }
}
</script>

<style>

</style>