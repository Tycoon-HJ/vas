<template>
  <div class="imoocLoading">
    <svg :height="height" :width="width" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50">
      <!--      stroke-dasharray = 2pir/4 = 2*3.1415926*22/4=34-->
      <circle :stroke="outSideColor" cx="25" cy="25" fill="none" r="22" stroke-dasharray="34" stroke-linecap="round"
              stroke-width="3">
        <animateTransform :dur="`${duration}s`" attributeName="transform" from="0 25 25" repeatCount="indefinite" to="360 25 25"
                          type="rotate"></animateTransform>
        <animate :dur="`${+duration *2}s`" :values=inSideColorAnimation attributeName="stroke"
                 repeatCount="indefinite"></animate>
      </circle>
      <circle :stroke="inSideColor" cx="25" cy="25" fill="none" r="12" stroke-dasharray="19" stroke-linecap="round"
              stroke-width="3">
        <!--        values="0 25 25;360 25 25"========= to="0 25 25" from="360 25 25"-->
        <animateTransform :dur="`${duration}s`" attributeName="transform" repeatCount="indefinite" type="rotate"
                          values="360 25 25;0 25 25"></animateTransform>
        <animate :dur="`${+duration *2}s`" :values="outSideColorAnimation" attributeName="stroke"
                 repeatCount="indefinite"></animate>

      </circle>
    </svg>
    <div class="imooc">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {computed} from "vue";

export default {
  name: 'ImoocLoading',
  props: {
    width: {
      type: [Number, String],
      default: 50,
    },
    height: {
      type: [Number, String],
      default: 50,
    },
    outSideColor: {
      type: String,
      default: '#3be6cb'
    },
    inSideColor: {
      type: String,
      default: '#02bcfe'
    },
    duration: {
      type: [Number, String],
      default: 5
    }
  },
  setup(ctx) {
    const outSideColorAnimation = computed(() => {
      `${ctx.outSideColor};${ctx.inSideColor};${ctx.outSideColor}`
    })
    const inSideColorAnimation = computed(() => {
      `${ctx.inSideColor};${ctx.outSideColor};${ctx.inSideColor}`
    })
    return {
      outSideColorAnimation,
      inSideColorAnimation
    }
  }
}
</script>

<style lang="scss" scoped>

</style>