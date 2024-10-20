<template>
  <div class="imoocLoading">
    <svg :width="width" :height="height" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
      <!--      stroke-dasharray = 2pir/4 = 2*3.1415926*22/4=34-->
      <circle cx="25" cy="25" r="22" fill="none" :stroke="outSideColor" stroke-width="3" stroke-dasharray="34"
              stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" :dur="`${duration}s`"
                          repeatCount="indefinite"></animateTransform>
        <animate attributeName="stroke" :values=inSideColorAnimation :dur="`${+duration *2}s`"
                 repeatCount="indefinite"></animate>
      </circle>
      <circle cx="25" cy="25" r="12" fill="none" :stroke="inSideColor" stroke-width="3" stroke-dasharray="19"
              stroke-linecap="round">
        <!--        values="0 25 25;360 25 25"========= to="0 25 25" from="360 25 25"-->
        <animateTransform attributeName="transform" type="rotate" values="360 25 25;0 25 25" :dur="`${duration}s`"
                          repeatCount="indefinite"></animateTransform>
        <animate attributeName="stroke" :values="outSideColorAnimation" :dur="`${+duration *2}s`"
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

<style scoped lang="scss">

</style>