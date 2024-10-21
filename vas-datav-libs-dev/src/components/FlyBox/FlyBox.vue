<template>
  <div class="imooc-fly-box">
    <svg width="400" height="400">
      <defs>
        <path
            id="fly-box-path"
            d="M5 5 L395 5 L395 395 L5 395 Z"
            fill="none"></path>
        <radialGradient id="radialGradient"
                        r="50%"
                        cx="50%"
                        cy="50%"
                        fx="100%"
                        fy="50%"
        >
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>


        <mask id="fly-box-mask" >
          <circle cx="0" cy="0" r="150" fill="url(#radialGradient)">
            <animateMotion dur="3s"
                           path="M5 5 L395 5 L395 395 L5 395 Z"
                           rotate="auto"
                           repeatCount="indefinite"></animateMotion>
          </circle>/
        </mask>/
      </defs>
      <use href="#fly-box-path"
           stroke="red"
           stroke-width="1"></use>
      <use href="#fly-box-path"
           stroke="blue"
           stroke-width="3"
           mask="url(#fly-box-mask)"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'FlyBox',
  props: {},
  setup(ctx) {

  }
}
</script>

<style scoped lang="scss">

</style>