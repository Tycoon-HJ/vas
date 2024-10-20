<template>
  <div class="imooc-fly-box">
    <svg width="400" height="400">
      <defs>
        <path
            id="fly-box-path"
            d="M5 5 L395 5 L395 395 L5 395 Z"
            fill="none"></path>
        <mask id="fly-box-mask" >
          <circle cx="0" cy="0" r="150" fill="white">
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